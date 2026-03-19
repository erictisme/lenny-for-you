"use client";

import { useState } from "react";
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
  summary = null,
  summaryLoading = false,
  defaultExpanded = false,
  userInput,
}: {
  item: RankedItem;
  onClick: () => void;
  index?: number;
  summary?: string | null;
  summaryLoading?: boolean;
  defaultExpanded?: boolean;
  userInput?: string;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [cliCopied, setCliCopied] = useState(false);

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
        <h3 className="mt-1 text-lg font-semibold leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {item.date}
          {item.guest && ` · ${item.guest}`}
        </p>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border-l-2 border-primary/50 bg-primary/5 px-4 py-3 text-sm leading-relaxed">
          {item.why_this_matters}
        </div>

        {/* Summary section */}
        {(summary || summaryLoading) && (
          <div className="mt-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {expanded ? "Hide summary ▲" : "View summary ▼"}
            </button>

            {expanded && (
              <div className="mt-2">
                {summaryLoading && !summary ? (
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                    <Skeleton className="h-3 w-4/6" />
                  </div>
                ) : summary ? (
                  <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground text-sm leading-relaxed">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {summary}
                    </ReactMarkdown>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        )}

        {/* CLI button */}
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              const sanitized = userInput
                ? userInput.replace(/"/g, "'").replace(/\s+/g, " ").trim()
                : "";
              const copyStr = `/lenny-learn "${item.filename}${sanitized ? ` | ${sanitized}` : ""}"`;
              navigator.clipboard.writeText(copyStr);
              setCliCopied(true);
              setTimeout(() => setCliCopied(false), 2000);
            }}
            className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${
              cliCopied
                ? "border-foreground/20 bg-foreground text-background"
                : "border-border bg-background text-foreground hover:bg-muted"
            }`}
          >
            {cliCopied ? "Copied!" : "Run in CLI"}
          </button>
          <a
            href="#cli-setup"
            className="text-[11px] text-muted-foreground underline underline-offset-4 hover:text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            setup once
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
