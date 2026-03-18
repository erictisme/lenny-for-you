"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FeedCard } from "@/components/feed-card";
import { FeedSkeleton } from "@/components/feed-skeleton";
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

  const userInput = q
    ? decodeURIComponent(escape(atob(q)))
    : null;

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
        setItems(data.items);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchRankings();
  }, [userInput, router, apiKey]);

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setLoadingMsgIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [loading]);

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
        <p className="mt-3 text-sm text-muted-foreground italic">
          &ldquo;{userInput}&rdquo;
        </p>
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
        <div className="space-y-4">
          {items.map((item, i) => (
            <FeedCard
              key={item.filename}
              item={item}
              index={i}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
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
