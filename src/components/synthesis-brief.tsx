"use client";

import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Skeleton } from "@/components/ui/skeleton";

const MCP_SETUP_URL = "https://www.lennysdata.com/access/mcp";
const INSTALL_COMMAND =
  "git clone https://github.com/erictisme/lenny-skills.git && cd lenny-skills && ./install.sh";

const MCP_READY_KEY = "lenny-mcp-ready";
const SKILLS_READY_KEY = "lenny-skills-install-copied";

function markLocalFlag(key: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, "1");
}

export function SynthesisBrief({
  content,
  loading,
  error,
  userInput,
  primaryFilename,
}: {
  content: string;
  loading: boolean;
  error: string | null;
  userInput: string;
  primaryFilename: string | null;
}) {
  const [commandCopied, setCommandCopied] = useState(false);
  const [mcpCopied, setMcpCopied] = useState(false);
  const [installCopied, setInstallCopied] = useState(false);

  const command = useMemo(() => {
    const sanitized = userInput.replace(/"/g, "'").replace(/\s+/g, " ").trim();
    const fallbackFile = "newsletters/pricing-your-saas-product.md";
    const filename = primaryFilename || fallbackFile;
    return `/lenny-learn "${filename}${sanitized ? ` | ${sanitized}` : ""}"`;
  }, [userInput, primaryFilename]);

  const buttonStateClass = (active: boolean) =>
    active
      ? "border-primary bg-primary text-primary-foreground"
      : "border-primary/30 text-primary hover:bg-primary/10";

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-1">
        What Lenny&apos;s archive says about your situation
      </h2>
      <div className="h-px bg-primary/30 mb-5" />

      {loading && !content && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground animate-pulse">
            Cross-referencing 20 articles for your situation…
          </p>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      {content && (
        <>
          <div className="prose prose-base max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-blockquote:border-primary/50">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>

          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-medium mb-2">
              Continue in your CLI (ready-to-run command):
            </p>

            <div className="flex items-center gap-2">
              <pre className="flex-1 rounded bg-foreground/5 px-3 py-2 text-xs font-mono text-foreground/80 whitespace-pre-wrap break-words">
                {command}
              </pre>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(command);
                  setCommandCopied(true);
                  setTimeout(() => setCommandCopied(false), 2000);
                }}
                className={`shrink-0 rounded-md border px-3 py-2 text-xs font-medium transition-colors ${buttonStateClass(commandCopied)}`}
              >
                {commandCopied ? "Copied!" : "Copy command"}
              </button>
            </div>

            <div className="mt-3 rounded-md border border-border/60 bg-muted/20 p-3 space-y-2">
              <p className="text-xs font-medium text-foreground">Before you run it:</p>

              <div className="flex items-center gap-2">
                <a
                  href={MCP_SETUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-primary underline underline-offset-4"
                  onClick={() => markLocalFlag(MCP_READY_KEY)}
                >
                  0) Connect Lenny MCP
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(MCP_SETUP_URL);
                    markLocalFlag(MCP_READY_KEY);
                    setMcpCopied(true);
                    setTimeout(() => setMcpCopied(false), 2000);
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
                >
                  1) Install Lenny skills
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(INSTALL_COMMAND);
                    markLocalFlag(SKILLS_READY_KEY);
                    setInstallCopied(true);
                    setTimeout(() => setInstallCopied(false), 2000);
                  }}
                  className={`rounded-md border px-2 py-1 text-xs font-medium transition-colors ${buttonStateClass(installCopied)}`}
                >
                  {installCopied ? "Copied!" : "Copy install"}
                </button>
              </div>

              <p className="text-[10px] text-muted-foreground">
                2) Paste the copied command into Claude Code, Codex CLI, Cursor,
                Windsurf, Antigravity, or another MCP-capable tool.
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
