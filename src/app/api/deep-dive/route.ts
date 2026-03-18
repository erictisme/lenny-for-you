import { streamText } from "ai";
import { getGoogleProvider, MODEL_ID } from "@/lib/ai";
import { DEEP_DIVE_SYSTEM_PROMPT } from "@/lib/prompts";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

function normalizeFilename(raw: string): string {
  let name = raw.trim();
  // Replace curly/smart quotes with straight quotes
  name = name.replace(/[\u2018\u2019\u201A\u201B]/g, "'");
  name = name.replace(/[\u201C\u201D\u201E\u201F]/g, '"');
  // Lowercase everything
  name = name.toLowerCase();
  // Collapse multiple hyphens into single hyphen
  name = name.replace(/-{2,}/g, "-");
  // Trim trailing hyphens before .md
  name = name.replace(/-+(\.md)$/, "$1");
  // Append .md if missing
  if (!name.endsWith(".md")) {
    name += ".md";
  }
  // Fix singular prefixes
  if (name.startsWith("newsletter/")) {
    name = "newsletters/" + name.slice("newsletter/".length);
  } else if (name.startsWith("podcast/")) {
    name = "podcasts/" + name.slice("podcast/".length);
  }
  return name;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { filename, userInput, apiKey } = body;

    if (!filename || typeof filename !== "string") {
      return NextResponse.json(
        { error: "filename is required and must be a string" },
        { status: 400 }
      );
    }

    if (!userInput || typeof userInput !== "string") {
      return NextResponse.json(
        { error: "userInput is required and must be a string" },
        { status: 400 }
      );
    }

    // Normalize the filename
    let normalizedFilename = normalizeFilename(filename);

    // Security: only allow content subdirectories
    if (
      !(normalizedFilename.startsWith("podcasts/") || normalizedFilename.startsWith("newsletters/")) ||
      normalizedFilename.includes("..")
    ) {
      return NextResponse.json(
        { error: `Invalid filename: ${normalizedFilename}` },
        { status: 400 }
      );
    }

    let filePath = path.join(process.cwd(), "content", normalizedFilename);

    // If exact path not found, try fuzzy match by slug
    if (!fs.existsSync(filePath)) {
      const slug = path.basename(normalizedFilename, ".md");
      const dirs = ["newsletters", "podcasts"];
      let found = false;

      for (const dir of dirs) {
        const dirPath = path.join(process.cwd(), "content", dir);
        if (!fs.existsSync(dirPath)) continue;

        const files = fs.readdirSync(dirPath);
        const match = files.find((f) => f.toLowerCase().includes(slug.toLowerCase()));
        if (match) {
          filePath = path.join(dirPath, match);
          normalizedFilename = `${dir}/${match}`;
          found = true;
          break;
        }
      }

      if (!found) {
        return NextResponse.json(
          { error: `Article not found: ${normalizedFilename}` },
          { status: 404 }
        );
      }
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const provider = getGoogleProvider(apiKey);

    const result = streamText({
      model: provider(MODEL_ID),
      system: DEEP_DIVE_SYSTEM_PROMPT,
      prompt: `Reader's situation: ${userInput}\n\n---\n\nFull article content:\n\n${content}`,
    });

    return result.toTextStreamResponse();
  } catch (error: unknown) {
    if (error instanceof Error && error.message?.includes("rate")) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Try again in a few minutes." },
        { status: 429 }
      );
    }

    console.error("Deep-dive API error:", error);
    return NextResponse.json(
      { error: "Failed to generate deep-dive. Please try again." },
      { status: 500 }
    );
  }
}
