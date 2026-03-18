import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Personalized Lenny Feed",
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
