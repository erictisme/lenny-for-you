import { generateText } from "ai";
import { getGoogleProvider, MODEL_ID } from "@/lib/ai";
import { CARD_SUMMARY_SYSTEM_PROMPT } from "@/lib/prompts";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

function stripFrontmatter(content: string): string {
  if (content.startsWith("---")) {
    const endIndex = content.indexOf("---", 3);
    if (endIndex !== -1) {
      return content.slice(endIndex + 3).trim();
    }
  }
  return content;
}

function resolveFilePath(filename: string): string | null {
  let normalized = filename.trim();
  if (!normalized.endsWith(".md")) normalized += ".md";
  if (normalized.startsWith("newsletter/"))
    normalized = "newsletters/" + normalized.slice("newsletter/".length);
  else if (normalized.startsWith("podcast/"))
    normalized = "podcasts/" + normalized.slice("podcast/".length);

  if (
    !(normalized.startsWith("podcasts/") || normalized.startsWith("newsletters/")) ||
    normalized.includes("..")
  ) {
    return null;
  }

  const filePath = path.join(process.cwd(), "content", normalized);
  if (fs.existsSync(filePath)) return filePath;

  // Fuzzy match by slug
  const slug = path.basename(normalized, ".md");
  for (const dir of ["newsletters", "podcasts"]) {
    const dirPath = path.join(process.cwd(), "content", dir);
    if (!fs.existsSync(dirPath)) continue;
    const match = fs.readdirSync(dirPath).find((f) => f.includes(slug));
    if (match) return path.join(dirPath, match);
  }

  return null;
}

const MAX_FILES = 10;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userInput, filenames, apiKey } = body;

    if (!userInput || typeof userInput !== "string") {
      return NextResponse.json(
        { error: "userInput is required" },
        { status: 400 }
      );
    }

    if (!filenames || !Array.isArray(filenames) || filenames.length === 0) {
      return NextResponse.json(
        { error: "filenames array is required" },
        { status: 400 }
      );
    }

    const limitedFilenames = filenames.slice(0, MAX_FILES);
    const provider = getGoogleProvider(apiKey);

    const results = await Promise.all(
      limitedFilenames.map(async (fname: string) => {
        try {
          const filePath = resolveFilePath(fname);
          if (!filePath) return { filename: fname, summary: null, error: "File not found" };

          const raw = fs.readFileSync(filePath, "utf-8");
          const content = stripFrontmatter(raw);

          const { text } = await generateText({
            model: provider(MODEL_ID),
            system: CARD_SUMMARY_SYSTEM_PROMPT,
            prompt: `Reader's situation: ${userInput}\n\n---\n\nArticle content:\n\n${content}`,
          });

          return { filename: fname, summary: text, error: null };
        } catch (err) {
          return {
            filename: fname,
            summary: null,
            error: err instanceof Error ? err.message : "Unknown error",
          };
        }
      })
    );

    const summaries: Record<string, string | null> = {};
    const errors: Record<string, string> = {};

    for (const result of results) {
      if (result.summary) {
        summaries[result.filename] = result.summary;
      } else {
        summaries[result.filename] = null;
        if (result.error) errors[result.filename] = result.error;
      }
    }

    return NextResponse.json({
      summaries,
      ...(Object.keys(errors).length > 0 ? { errors } : {}),
    });
  } catch (error: unknown) {
    if (error instanceof Error && error.message?.includes("rate")) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Try again in a few minutes." },
        { status: 429 }
      );
    }

    console.error("Batch-summarize API error:", error);
    return NextResponse.json(
      { error: "Failed to generate summaries. Please try again." },
      { status: 500 }
    );
  }
}
