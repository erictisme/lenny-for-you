import { Badge } from "@/components/ui/badge";

export function TypeBadge({ type }: { type: "podcast" | "newsletter" }) {
  return (
    <Badge
      className={
        type === "podcast"
          ? "bg-orange-50 text-orange-700 border-orange-200"
          : "bg-slate-50 text-slate-600 border-slate-200"
      }
    >
      {type === "podcast" ? "Podcast" : "Newsletter"}
    </Badge>
  );
}
