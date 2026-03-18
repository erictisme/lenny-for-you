"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { TypeBadge } from "@/components/type-badge";
import { Skeleton } from "@/components/ui/skeleton";

export function DeepDiveModal({
  open,
  onClose,
  filename,
  title,
  type,
  date,
  userInput,
}: {
  open: boolean;
  onClose: () => void;
  filename: string | null;
  title: string;
  type: "podcast" | "newsletter";
  date: string;
  userInput: string;
}) {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
          body: JSON.stringify({ filename, userInput }),
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
  }, [open, filename, userInput]);

  const slug = filename
    ?.replace(/^newsletters\//, "")
    .replace(/^podcasts\//, "")
    .replace(/\.md$/, "");

  return (
    <Sheet open={open} onOpenChange={(val) => !val && onClose()}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto sm:max-w-lg"
      >
        <SheetHeader>
          <div className="flex items-center gap-2">
            <TypeBadge type={type} />
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <SheetTitle className="text-lg leading-snug">{title}</SheetTitle>
          <SheetDescription className="sr-only">
            Personalized deep-dive summary
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4">
          {loading && (
            <div className="space-y-3">
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
            <div className="prose prose-invert prose-sm max-w-none whitespace-pre-wrap leading-relaxed">
              {content}
            </div>
          )}
        </div>

        {slug && (
          <SheetFooter>
            <a
              href={`https://www.lennysnewsletter.com/p/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline underline-offset-4"
            >
              Read full article on Lenny&apos;s Newsletter
            </a>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
