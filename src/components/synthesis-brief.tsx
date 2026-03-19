"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Skeleton } from "@/components/ui/skeleton";

export function SynthesisBrief({
  content,
  loading,
  error,
  userInput,
}: {
  content: string;
  loading: boolean;
  error: string | null;
  userInput: string;
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
        <>
          <div className="prose prose-base max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-blockquote:border-primary/50">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>

          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-medium mb-2">
              Want to go deeper in your CLI? Paste your original prompt:
            </p>
            <div className="flex items-center gap-2">
              <pre className="flex-1 rounded bg-foreground/5 px-3 py-2 text-xs font-mono text-foreground/80 whitespace-pre-wrap break-words">
                {userInput}
              </pre>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(userInput);
                }}
                className="shrink-0 rounded-md border border-primary/30 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                Copy
              </button>
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground">
              Works with Claude Code, Codex CLI, Cursor, Windsurf, Antigravity,
              and other MCP-capable tools.
            </p>
            <p className="mt-1 text-[10px] text-muted-foreground">
              Requires <a href="https://lennysdata.com" target="_blank" rel="noopener noreferrer" className="underline">Lenny MCP</a> and installed Lenny skills in your tool.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
