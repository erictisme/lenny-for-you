"use client";

import { useEffect, useState, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FeedCard } from "@/components/feed-card";
import { FeedSkeleton } from "@/components/feed-skeleton";
import { SynthesisBrief } from "@/components/synthesis-brief";
import { DeepDiveModal } from "@/components/deep-dive-modal";
import { ShareButton } from "@/components/share-button";
import { CATALOG } from "@/data/compact-index";
import type { RankedItem } from "@/types";

const LOADING_MESSAGES = [
  "Reading your situation…",
  "Scanning 650 articles…",
  "Finding your matches…",
  "Ranking by relevance…",
];

const MCP_SETUP_URL = "https://www.lennysdata.com/access/mcp";
const INSTALL_COMMAND =
  "git clone https://github.com/erictisme/lenny-skills.git && cd lenny-skills && ./install.sh";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get("q");

  const [items, setItems] = useState<RankedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<RankedItem | null>(null);
  const [loadingMsgIndex, setLoadingMsgIndex] = useState(0);

  // Synthesis state
  const [synthesisContent, setSynthesisContent] = useState("");
  const [synthesisLoading, setSynthesisLoading] = useState(false);
  const [synthesisError, setSynthesisError] = useState<string | null>(null);

  // Batch summary state
  const [summaries, setSummaries] = useState<Record<string, string | null>>({});
  const [summariesLoading, setSummariesLoading] = useState(false);

  // Load more state
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadedFilenamesRef = useRef<string[]>([]);

  // Edit mode
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState("");

  // CLI setup copy state
  const [skillsInstallCopied, setSkillsInstallCopied] = useState(false);

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
          body: JSON.stringify({ userInput: input, filenames }),
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
    []
  );

  const fetchBatchSummaries = useCallback(
    async (input: string, filenames: string[]) => {
      setSummariesLoading(true);
      const batches: string[][] = [];
      for (let i = 0; i < filenames.length; i += 10) {
        batches.push(filenames.slice(i, i + 10));
      }

      for (const batch of batches) {
        try {
          const res = await fetch("/api/batch-summarize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userInput: input, filenames: batch }),
          });
          if (res.ok) {
            const data = await res.json();
            setSummaries((prev) => ({ ...prev, ...data.summaries }));
          }
        } catch {
          // Continue with other batches even if one fails
        }
      }
      setSummariesLoading(false);
    },
    []
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
          body: JSON.stringify({ userInput }),
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

        // Start synthesis and batch summaries in parallel
        fetchSynthesis(userInput!, filenames);
        fetchBatchSummaries(userInput!, filenames);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchRankings();
  }, [userInput, router, fetchSynthesis, fetchBatchSummaries]);

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
        fetchBatchSummaries(userInput, newFilenames);
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
          <ShareButton />
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
          {/* CLI setup bar */}
          <div id="cli-setup" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>CLI setup:</span>
            <span className="text-foreground">Step 1.</span>
            <a
              href={MCP_SETUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary"
            >
              Connect MCP
            </a>
            <span className="text-muted-foreground">&middot;</span>
            <span className="text-foreground">Step 2.</span>
            <a
              href="https://github.com/erictisme/lenny-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary"
            >
              Install skills
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(INSTALL_COMMAND);
                setSkillsInstallCopied(true);
                setTimeout(() => setSkillsInstallCopied(false), 2000);
              }}
              className={`rounded-md border px-2 py-1 text-xs font-medium transition-colors ${
                skillsInstallCopied
                  ? "border-foreground/20 bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:bg-muted"
              }`}
            >
              {skillsInstallCopied ? "Copied!" : "Copy install"}
            </button>
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
                summary={summaries[item.filename] ?? null}
                summaryLoading={summariesLoading && !(item.filename in summaries)}
                defaultExpanded={i === 0}
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
