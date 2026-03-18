"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypeBadge } from "@/components/type-badge";
import { RelevanceBadge } from "@/components/relevance-badge";
import type { RankedItem } from "@/types";

export function FeedCard({
  item,
  onClick,
}: {
  item: RankedItem;
  onClick: () => void;
}) {
  return (
    <Card
      className="cursor-pointer transition-colors hover:ring-primary/40"
      onClick={onClick}
    >
      <CardHeader>
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
