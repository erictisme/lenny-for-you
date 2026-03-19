"use client";

import { useEffect, useState, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FeedCard } from "@/components/feed-card";
import { FeedSkeleton } from "@/components/feed-skeleton";
import { SynthesisBrief } from "@/components/synthesis-brief";
import { DeepDiveModal } from "@/components/deep-dive-modal";
import { ShareButton } from "@/components/share-button";
import { BYOKToggle, useApiKey } from "@/components/byok-toggle";
import { CATALOG } from "@/data/compact-index";
import type { RankedItem } from "@/types";

const LOADING_MESSAGES = [
  "Reading your situation…",
  "Scanning 650 articles…",
  "Finding your matches…",
  "Ranking by relevance…",
];

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get("q");

  const [items, setItems] = useState<RankedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<RankedItem | null>(null);
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);
  const apiKey = useApiKey();
  const [skillsInstallCopied, setSkillsInstallCopied] = useState(false);
  const [mcpLinkCopied, setMcpLinkCopied] = useState(false);

  // Synthesis state
  const [synthesisContent, setSynthesisContent] = useState("");
  const [synthesisLoading, setSynthesisLoading] = useState(false);
  const [synthesisError, setSynthesisError] = useState<string | null>(null);

  // Load more state
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadedFilenamesRef = useRef<string[]>([]);

  // Edit mode
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const userInput = q
    ? decodeURIComponent(escape(atob(q)))
    : null;

  const fetchSynthesis = useCallback(
    async (input: string, filenames: string[]) => {
      setSynthesisLoading(true);
      setSynthesisError(null);
      setSynthesisContent("");
      try {
        const res = await fetch("/api/synthesize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userInput: input,
            filenames,
            ...(apiKey ? { apiKey } : {}),
          }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(data?.error || "Failed to synthesize");
        }
        const reader = res.body?.getReader();
        if (!reader) throw new Error("No response stream");

        const decoder = new TextDecoder();
        let accumulated = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          accumulated += decoder.decode(value, { stream: true });
          setSynthesisContent(accumulated);
        }
      } catch (err) {
        setSynthesisError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        setSynthesisLoading(false);
      }
    },
    [apiKey]
  );

  useEffect(() => {
    if (!userInput) {
      router.replace("/");
      return;
    }

    async function fetchRankings() {
      try {
        const res = await fetch("/api/rank", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userInput, ...(apiKey ? { apiKey } : {}) }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(
            data?.error || `Request failed (${res.status})`
          );
        }

        const data = await res.json();
        const rankedItems: RankedItem[] = data.items;
        setItems(rankedItems);

        const filenames = rankedItems.map((it) => it.filename);
        loadedFilenamesRef.current = filenames;

        // Start synthesis
        fetchSynthesis(userInput!, filenames);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchRankings();
  }, [userInput, router, apiKey, fetchSynthesis]);

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setLoadingMsgIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [loading]);

  const handleLoadMore = async () => {
    if (!userInput || loadingMore) return;
    setLoadingMore(true);
    try {
      const excludeList = loadedFilenamesRef.current.join(", ");
      const res = await fetch("/api/rank", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userInput: `${userInput}\n\nIMPORTANT: Do NOT include these already-selected items: [${excludeList}]. Select the NEXT 20 most relevant items.`,
          ...(apiKey ? { apiKey } : {}),
        }),
      });

      if (!res.ok) throw new Error("Failed to load more");
      const data = await res.json();
      const newItems: RankedItem[] = data.items;

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems((prev) => [...prev, ...newItems]);
        const newFilenames = newItems.map((it) => it.filename);
        loadedFilenamesRef.current = [
          ...loadedFilenamesRef.current,
          ...newFilenames,
        ];
      }
    } catch {
      // Silently fail on load more
    } finally {
      setLoadingMore(false);
    }
  };

  const handleEditSubmit = () => {
    if (!editText.trim()) return;
    const encoded = btoa(unescape(encodeURIComponent(editText.trim())));
    router.push(`/results?q=${encoded}`);
    setEditing(false);
  };

  if (!userInput) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Your Personalized Lenny Feed
          </h1>
          <div className="flex items-center gap-2">
            <ShareButton />
            <BYOKToggle />
          </div>
        </div>

        {/* User query with edit */}
        {editing ? (
          <div className="mt-3">
            <textarea
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              rows={3}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleEditSubmit();
                }
              }}
            />
            <div className="mt-2 flex gap-2">
              <button
                onClick={handleEditSubmit}
                className="rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
              >
                Search again
              </button>
              <button
                onClick={() => setEditing(false)}
                className="text-sm text-muted-foreground"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground italic">
            &ldquo;{userInput}&rdquo;
            <button
              onClick={() => {
                setEditText(userInput);
                setEditing(true);
              }}
              className="ml-2 text-primary underline underline-offset-4 not-italic"
            >
              Edit
            </button>
          </p>
        )}
      </header>

      {loading && (
        <div>
          <p className="mb-6 text-sm text-muted-foreground transition-opacity duration-300">
            {LOADING_MESSAGES[loadingMsgIndex]}
          </p>
          <FeedSkeleton />
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center">
          <p className="text-destructive">
            {error.includes("429")
              ? "Too many requests. Try again in a few minutes."
              : error.includes("fetch") || error.includes("network") || error.includes("Failed")
                ? "Couldn\u2019t reach the server. Check your connection and try again."
                : error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-sm text-primary underline underline-offset-4"
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          {/* Skills CTA */}
          <div id="cli-setup" className="mb-6 rounded-lg border border-border bg-background/70 px-4 py-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                CLI setup
              </p>
              <span className="text-[10px] text-muted-foreground">one-time</span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <a
                href="https://www.lennysdata.com/access/mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground underline underline-offset-4 hover:text-primary"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    localStorage.setItem("lenny-mcp-ready", "1");
                  }
                }}
              >
                0) Connect MCP
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://www.lennysdata.com/access/mcp"
                  );
                  if (typeof window !== "undefined") {
                    localStorage.setItem("lenny-mcp-ready", "1");
                  }
                  setMcpLinkCopied(true);
                  setTimeout(() => setMcpLinkCopied(false), 2000);
                }}
                className={`shrink-0 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                  mcpLinkCopied
                    ? "border-foreground/20 bg-foreground text-background"
                    : "border-border bg-background text-foreground hover:bg-muted"
                }`}
              >
                {mcpLinkCopied ? "Copied!" : "Copy link"}
              </button>
              <a
                href="https://github.com/erictisme/lenny-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground underline underline-offset-4 hover:text-primary"
              >
                1) Install skills
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "git clone https://github.com/erictisme/lenny-skills.git && cd lenny-skills && ./install.sh"
                  );
                  if (typeof window !== "undefined") {
                    localStorage.setItem("lenny-skills-install-copied", "1");
                  }
                  setSkillsInstallCopied(true);
                  setTimeout(() => setSkillsInstallCopied(false), 2000);
                }}
                className={`shrink-0 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                  skillsInstallCopied
                    ? "border-foreground/20 bg-foreground text-background"
                    : "border-border bg-background text-foreground hover:bg-muted"
                }`}
              >
                {skillsInstallCopied ? "Copied!" : "Copy install"}
              </button>
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground">
              Then click <span className="font-medium text-foreground">Run in CLI</span> on any card.
            </p>
          </div>

          {/* Synthesis Brief */}
          <SynthesisBrief
            content={synthesisContent}
            loading={synthesisLoading}
            error={synthesisError}
            userInput={userInput}
            primaryFilename={items[0]?.filename ?? null}
          />

          {/* Feed Cards */}
          <div className="space-y-4">
            {items.map((item, i) => (
              <FeedCard
                key={item.filename}
                item={item}
                index={i}
                onClick={() => setSelectedItem(item)}
                userInput={userInput}
              />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="mt-8 text-center">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                {loadingMore ? "Loading…" : "Load 20 more articles"}
              </button>
            </div>
          )}
        </>
      )}

      <DeepDiveModal
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        filename={selectedItem?.filename ?? null}
        title={selectedItem?.title ?? ""}
        type={selectedItem?.type ?? "newsletter"}
        date={selectedItem?.date ?? ""}
        userInput={userInput}
        apiKey={apiKey}
        youtubeUrl={selectedItem ? CATALOG.find(c => c.filename === selectedItem.filename)?.youtube_url ?? null : null}
      />

      <div className="mt-12 text-center">
        <button
          onClick={() => router.push("/")}
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Start over
        </button>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense>
      <ResultsContent />
    </Suspense>
  );
}
