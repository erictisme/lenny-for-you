"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ProfileInput() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSubmit() {
    if (!input.trim()) return;
    const encoded = btoa(unescape(encodeURIComponent(input.trim())));
    router.push(`/results?q=${encoded}`);
  }

  return (
    <div className="mx-auto w-full max-w-lg space-y-4">
      <Textarea
        rows={4}
        placeholder="I'm a PM at a Series A B2B SaaS. We have 50 customers but struggling with churn. I need to figure out pricing and build a growth engine..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="resize-none text-base"
      />
      <Button
        onClick={handleSubmit}
        disabled={!input.trim()}
        size="lg"
        className="w-full text-base transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Find My Feed
      </Button>
    </div>
  );
}
