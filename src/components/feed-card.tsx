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
  const [mcpCopied, setMcpCopied] = useState(false);

  const buttonStateClass = (active: boolean) =>
    active
      ? "border-primary bg-primary text-primary-foreground"
      : "border-primary/30 text-primary hover:bg-primary/10";

  const handleMcpCopy = () => {
    navigator.clipboard.writeText(MCP_SETUP_URL);
    markLocalFlag(MCP_READY_KEY);
    setMcpCopied(true);
    setTimeout(() => setMcpCopied(false), 2000);
  };

  const handleInstallCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    markLocalFlag(SKILLS_READY_KEY);
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
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

        <div className="mt-3 rounded-md border border-border/60 bg-muted/20 p-3 space-y-2">
          <p className="text-xs font-medium text-foreground">Before CLI:</p>

          <div className="flex items-center gap-2">
            <a
              href={MCP_SETUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-primary underline underline-offset-4"
              onClick={(e) => {
                e.stopPropagation();
                markLocalFlag(MCP_READY_KEY);
              }}
            >
              0) Connect Lenny MCP
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleMcpCopy();
              }}
              className={`rounded-md border px-2 py-1 text-xs font-medium transition-colors ${buttonStateClass(mcpCopied)}`}
            >
              {mcpCopied ? "Copied!" : "Copy link"}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/erictisme/lenny-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-primary underline underline-offset-4"
              onClick={(e) => e.stopPropagation()}
            >
              1) Install skills (GitHub)
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleInstallCopy();
              }}
              className={`rounded-md border px-2 py-1 text-xs font-medium transition-colors ${buttonStateClass(installCopied)}`}
            >
              {installCopied ? "Copied!" : "Copy install"}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCliCopy}
              className={`text-xs font-medium transition-colors border rounded-md px-2.5 py-1 ${buttonStateClass(cliCopied)}`}
            >
              {cliCopied ? "Copied!" : "2) Learn this in your CLI"}
            </button>
            <span className="text-[10px] text-muted-foreground">
              Runs `/lenny-learn` with your full context
            </span>
          </div>
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
