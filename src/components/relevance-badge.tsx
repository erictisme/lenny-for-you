import { Badge } from "@/components/ui/badge";

const styles = {
  essential: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  valuable: "bg-green-500/20 text-green-300 border-green-500/30",
  perspective: "bg-blue-500/20 text-blue-300 border-blue-500/30",
} as const;

export function RelevanceBadge({
  relevance,
}: {
  relevance: "essential" | "valuable" | "perspective";
}) {
  return (
    <Badge className={styles[relevance]}>
      {relevance.charAt(0).toUpperCase() + relevance.slice(1)}
    </Badge>
  );
}
