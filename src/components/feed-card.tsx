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
}: {
  item: RankedItem;
  onClick: () => void;
  index?: number;
  summary?: string | null;
  summaryLoading?: boolean;
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <Card
      className="animate-fade-in-up shadow-sm transition-shadow hover:shadow-md"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <CardHeader
        className="cursor-pointer"
        onClick={onClick}
      >
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

        {/* Try in Claude Code */}
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(`claude /lenny "${item.title}"`);
              const btn = e.currentTarget;
              btn.textContent = "Copied!";
              setTimeout(() => { btn.textContent = "Try in Claude Code"; }, 2000);
            }}
            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors border border-primary/30 rounded-md px-2.5 py-1"
          >
            Try in Claude Code
          </button>
          <span className="text-[10px] text-muted-foreground">
            Requires Claude Code + Lenny MCP
          </span>
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
