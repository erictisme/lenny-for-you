"use client";

import { useState, type MouseEvent } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypeBadge } from "@/components/type-badge";
import { RelevanceBadge } from "@/components/relevance-badge";
import type { RankedItem } from "@/types";

const MCP_SETUP_URL = "https://www.lennysdata.com/access/mcp";
const INSTALL_COMMAND =
  "git clone https://github.com/erictisme/lenny-skills.git && cd lenny-skills && ./install.sh";

const MCP_READY_KEY = "lenny-mcp-ready";
const SKILLS_READY_KEY = "lenny-skills-install-copied";

function markLocalFlag(key: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, "1");
}

function hasLocalFlag(key: string) {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(key) === "1";
}

export function FeedCard({
  item,
  onClick,
  index = 0,
  userInput,
}: {
  item: RankedItem;
  onClick: () => void;
  index?: number;
  userInput?: string;
}) {
  const [cliCopied, setCliCopied] = useState(false);

  const handleMcpCopy = () => {
    navigator.clipboard.writeText(MCP_SETUP_URL);
    markLocalFlag(MCP_READY_KEY);
  };

  const handleInstallCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    markLocalFlag(SKILLS_READY_KEY);
  };

  const handleCliCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const mcpReady = hasLocalFlag(MCP_READY_KEY);
    if (!mcpReady) {
      const continueAnyway = window.confirm(
        "Step 0 first: connect Lenny MCP. Click Cancel to copy the MCP setup link now."
      );
      if (!continueAnyway) {
        handleMcpCopy();
        return;
      }
    }

    const skillsReady = hasLocalFlag(SKILLS_READY_KEY);
    if (!skillsReady) {
      const continueAnyway = window.confirm(
        "Step 1 first: install Lenny skills. Click Cancel to copy the install command now."
      );
      if (!continueAnyway) {
        handleInstallCopy();
        return;
      }
    }

    const sanitized = userInput
      ? userInput.replace(/"/g, "'").replace(/\s+/g, " ").trim()
      : "";

    const copyStr = `/lenny-learn "${item.filename}${sanitized ? ` | ${sanitized}` : ""}"`;
    navigator.clipboard.writeText(copyStr);
    setCliCopied(true);
    setTimeout(() => setCliCopied(false), 2000);
  };

  return (
    <Card
      className="animate-fade-in-up shadow-sm transition-shadow hover:shadow-md"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <CardHeader className="cursor-pointer" onClick={onClick}>
        <div className="flex items-center gap-2">
          <TypeBadge type={item.type} />
          <RelevanceBadge relevance={item.relevance} />
        </div>
        <h3 className="mt-1 text-lg font-semibold leading-snug">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.date}
          {item.guest && ` · ${item.guest}`}
        </p>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border-l-2 border-primary/50 bg-primary/5 px-4 py-3 text-sm leading-relaxed">
          {item.why_this_matters}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={handleCliCopy}
            className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${
              cliCopied
                ? "border-foreground/20 bg-foreground text-background"
                : "border-border bg-background text-foreground hover:bg-muted"
            }`}
          >
            {cliCopied ? "Copied!" : "Run in CLI"}
          </button>
          <a
            href="#cli-setup"
            className="text-[11px] text-muted-foreground underline underline-offset-4 hover:text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            setup once
          </a>
          <span className="text-[10px] text-muted-foreground">
            `/lenny-learn` with your context
          </span>
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
