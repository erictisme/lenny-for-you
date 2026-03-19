"use client";

import { useState, type MouseEvent } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypeBadge } from "@/components/type-badge";
import { RelevanceBadge } from "@/components/relevance-badge";
import type { RankedItem } from "@/types";

const INSTALL_COMMAND =
  "git clone https://github.com/erictisme/lenny-skills.git && cd lenny-skills && ./install.sh";

function markInstallCommandCopied() {
  if (typeof window === "undefined") return;
  localStorage.setItem("lenny-skills-install-copied", "1");
}

function hasSeenInstallCommand() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("lenny-skills-install-copied") === "1";
}

export function FeedCard({
  item,
  onClick,
  index = 0,
  defaultExpanded = false,
  userInput,
}: {
  item: RankedItem;
  onClick: () => void;
  index?: number;
  defaultExpanded?: boolean;
  userInput?: string;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [cliCopied, setCliCopied] = useState(false);
  const [installCopied, setInstallCopied] = useState(false);

  const handleInstallCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    markInstallCommandCopied();
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
  };

  const handleCliCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const hasInstalled = hasSeenInstallCommand();
    if (!hasInstalled) {
      const proceed = window.confirm(
        "Before this works, install Lenny skills first. Click OK if you already installed them. Click Cancel to copy the install command now."
      );

      if (!proceed) {
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

        <div className="mt-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {expanded
              ? "Hide personalized summary ▲"
              : "View personalized summary ▼"}
          </button>

          {expanded && (
            <div className="mt-2 rounded-md bg-muted/40 p-3 text-sm text-foreground/90">
              <p>{item.why_this_matters}</p>
              {item.tags.length > 0 && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Focus areas: {item.tags.slice(0, 4).join(", ")}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <a
            href="https://github.com/erictisme/lenny-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-primary underline underline-offset-4"
            onClick={(e) => e.stopPropagation()}
          >
            1) Install skills first (GitHub)
          </a>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleInstallCopy();
            }}
            className={`rounded-md border px-2 py-1 text-xs font-medium transition-colors ${
              installCopied
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary/30 text-primary hover:bg-primary/10"
            }`}
          >
            {installCopied ? "Copied!" : "Copy install"}
          </button>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={handleCliCopy}
            className={`text-xs font-medium transition-colors border rounded-md px-2.5 py-1 ${
              cliCopied
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary/30 text-primary hover:bg-primary/10"
            }`}
          >
            {cliCopied ? "Copied!" : "2) Learn this in your CLI"}
          </button>
          <span className="text-[10px] text-muted-foreground">
            Requires Lenny MCP
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
