"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Skeleton } from "@/components/ui/skeleton";

export function SynthesisBrief({
  content,
  loading,
  error,
}: {
  content: string;
  loading: boolean;
  error: string | null;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-1">
        What Lenny&apos;s archive says about your situation
      </h2>
      <div className="h-px bg-primary/30 mb-5" />

      {loading && !content && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground animate-pulse">
            Cross-referencing 20 articles for your situation…
          </p>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      {content && (
        <div className="prose prose-base max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-blockquote:border-primary/50">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      )}
    </section>
  );
}
