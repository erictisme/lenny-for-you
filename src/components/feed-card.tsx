"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypeBadge } from "@/components/type-badge";
import { RelevanceBadge } from "@/components/relevance-badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { RankedItem } from "@/types";

export function FeedCard({
  item,
  onClick,
  index = 0,
  defaultExpanded = false,
  userInput,
  apiKey,
}: {
  item: RankedItem;
  onClick: () => void;
  index?: number;
  defaultExpanded?: boolean;
  userInput?: string;
  apiKey?: string | null;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [summary, setSummary] = useState<string | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [summaryError, setSummaryError] = useState<string | null>(null);
  const [summaryFetched, setSummaryFetched] = useState(false);

  useEffect(() => {
    if (!expanded || summaryFetched || !userInput) return;

    let cancelled = false;
    setSummaryFetched(true);
    setSummaryLoading(true);
    setSummaryError(null);

    async function fetchSummary() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);
      try {
        const res = await fetch("/api/batch-summarize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            userInput,
            filenames: [item.filename],
            ...(apiKey ? { apiKey } : {}),
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to summarize");
        }

        const data = await res.json();
        const nextSummary = data?.summaries?.[item.filename];

        if (!cancelled) {
          setSummary(typeof nextSummary === "string" ? nextSummary : null);
        }
      } catch (error) {
        if (!cancelled) {
          const isAbort =
            error instanceof Error && error.name === "AbortError";
          setSummaryError(
            isAbort
              ? "Summary took too long. Please try again."
              : error instanceof Error
                ? error.message
                : "Could not load summary"
          );
        }
      } finally {
        clearTimeout(timeoutId);
        if (!cancelled) {
          setSummaryLoading(false);
        }
      }
    }

    fetchSummary();

    return () => {
      cancelled = true;
    };
  }, [expanded, summaryFetched, userInput, item.filename, apiKey]);

  return (
    <Card
      className="animate-fade-in-up shadow-sm transition-shadow hover:shadow-md"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <CardHeader className="cursor-pointer" onClick={onClick}>
        <div className="flex items-center gap-2">
          <TypeBadge type={item.type} />
          <RelevanceBadge relevance={item.relevance} />
        </div>
        <h3 className="mt-1 text-lg font-semibold leading-snug">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.date}
          {item.guest && ` · ${item.guest}`}
        </p>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border-l-2 border-primary/50 bg-primary/5 px-4 py-3 text-sm leading-relaxed">
          {item.why_this_matters}
        </div>

        <div className="mt-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {expanded
              ? "Hide personalized summary ▲"
              : "View personalized summary ▼"}
          </button>

          {expanded && (
            <div className="mt-2">
              {summaryLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                  <Skeleton className="h-3 w-4/6" />
                </div>
              ) : summary ? (
                <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground text-sm leading-relaxed">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{summary}</ReactMarkdown>
                </div>
              ) : (
                <div className="text-xs text-muted-foreground">
                  {summaryError ? (
                    <>
                      Couldn&apos;t load summary. {" "}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSummaryFetched(false);
                          setSummaryError(null);
                        }}
                        className="underline underline-offset-4"
                      >
                        Try again
                      </button>
                    </>
                  ) : (
                    "No summary available."
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              const sanitized = userInput
                ? userInput.replace(/"/g, "'").replace(/\s+/g, " ").trim()
                : "";
              const copyStr = `/lenny-learn "${item.filename}${sanitized ? ` | ${sanitized}` : ""}"`;
              navigator.clipboard.writeText(copyStr);
              const btn = e.currentTarget;
              btn.textContent = "Copied!";
              setTimeout(() => {
                btn.textContent = "Learn this in your CLI";
              }, 2000);
            }}
            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors border border-primary/30 rounded-md px-2.5 py-1"
          >
            Learn this in your CLI
          </button>
          <span className="text-[10px] text-muted-foreground">
            Requires Lenny MCP + installed skills
          </span>
        </div>

        <div className="mt-1.5">
          <a
            href="https://github.com/erictisme/lenny-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-primary/70 hover:text-primary transition-colors"
          >
            Install skills from GitHub → Interactive coaching sessions with any article
          </a>
        </div>

        {item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
