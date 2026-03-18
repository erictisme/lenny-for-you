import { Badge } from "@/components/ui/badge";

const styles = {
  essential: "bg-amber-50 text-amber-700 border-amber-200",
  valuable: "bg-green-50 text-green-700 border-green-200",
  perspective: "bg-blue-50 text-blue-700 border-blue-200",
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
