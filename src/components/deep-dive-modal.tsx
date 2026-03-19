"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { TypeBadge } from "@/components/type-badge";
import { Loader2 } from "lucide-react";

export function DeepDiveModal({
  open,
  onClose,
  filename,
  title,
  type,
  date,
  userInput,
  apiKey,
  youtubeUrl,
}: {
  open: boolean;
  onClose: () => void;
  filename: string | null;
  title: string;
  type: "podcast" | "newsletter";
  date: string;
  userInput: string;
  apiKey?: string | null;
  youtubeUrl?: string | null;
}) {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cliBtnText, setCliBtnText] = useState("Learn this in your CLI");

  useEffect(() => {
    if (!open || !filename) return;

    setContent(null);
    setError(null);
    setLoading(true);

    async function fetchDeepDive() {
      try {
        const res = await fetch("/api/deep-dive", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename, userInput, ...(apiKey ? { apiKey } : {}) }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(data?.error || `Request failed (${res.status})`);
        }

        const text = await res.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchDeepDive();
  }, [open, filename, userInput, apiKey]);

  return (
    <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
      <DialogContent className="max-w-6xl w-full max-h-[80vh] flex flex-col max-sm:max-w-[calc(100%-1rem)] max-sm:max-h-[95vh]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <TypeBadge type={type} />
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <DialogTitle className="text-lg leading-snug">{title}</DialogTitle>
          <DialogDescription className="sr-only">
            Personalized deep-dive summary
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-1">
          {loading && (
            <div className="flex flex-col items-center justify-center py-12 gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Generating a personalized summary...</p>
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          {content && (
            <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-blockquote:border-primary/50">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {filename && (
          <DialogFooter>
            <button
              onClick={() => {
                const sanitized = userInput
                  ? userInput.replace(/"/g, "'").replace(/\s+/g, " ").trim()
                  : "";
                const copyStr = `/lenny-learn "${filename}${sanitized ? ` | ${sanitized}` : ""}"`;
                navigator.clipboard.writeText(copyStr);
                setCliBtnText("Copied!");
                setTimeout(() => setCliBtnText("Learn this in your CLI"), 2000);
              }}
              className="text-sm text-primary underline underline-offset-4"
            >
              {cliBtnText}
            </button>
            <span className="text-xs text-muted-foreground">
              Requires Lenny MCP + installed skills
            </span>
            {youtubeUrl && (
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary underline underline-offset-4"
              >
                Watch on YouTube
              </a>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
