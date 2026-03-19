import { streamText } from "ai";
import { getGoogleProvider, MODEL_IDS } from "@/lib/ai";
import { SYNTHESIS_SYSTEM_PROMPT } from "@/lib/prompts";
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

    // Read all files and extract first 1200 chars of content
    const excerpts: string[] = [];
    for (const fname of filenames) {
      const filePath = resolveFilePath(fname);
      if (!filePath) continue;

      const raw = fs.readFileSync(filePath, "utf-8");
      const content = stripFrontmatter(raw);
      const excerpt = content.slice(0, 1200);
      excerpts.push(`--- ${fname} ---\n${excerpt}`);
    }

    if (excerpts.length === 0) {
      return NextResponse.json(
        { error: "No articles could be loaded" },
        { status: 404 }
      );
    }

    const provider = getGoogleProvider(apiKey);

    const result = streamText({
      model: provider(MODEL_IDS.synthesis),
      system: SYNTHESIS_SYSTEM_PROMPT,
      prompt: `Reader's situation: ${userInput}\n\n---\n\nExcerpts from ${excerpts.length} relevant articles:\n\n${excerpts.join("\n\n")}`,
    });

    return result.toTextStreamResponse();
  } catch (error: unknown) {
    if (error instanceof Error && error.message?.includes("rate")) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Try again in a few minutes." },
        { status: 429 }
      );
    }

    console.error("Synthesize API error:", error);
    return NextResponse.json(
      { error: "Failed to generate synthesis. Please try again." },
      { status: 500 }
    );
  }
}
