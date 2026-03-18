import { Badge } from "@/components/ui/badge";

export function TypeBadge({ type }: { type: "podcast" | "newsletter" }) {
  return (
    <Badge
      className={
        type === "podcast"
          ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
          : "bg-teal-500/20 text-teal-300 border-teal-500/30"
      }
    >
      {type === "podcast" ? "Podcast" : "Newsletter"}
    </Badge>
  );
}
