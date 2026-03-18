import { streamText } from "ai";
import { getGoogleProvider, MODEL_ID } from "@/lib/ai";
import { DEEP_DIVE_SYSTEM_PROMPT } from "@/lib/prompts";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

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

    // Security: only allow content subdirectories
    if (
      !(filename.startsWith("podcasts/") || filename.startsWith("newsletters/")) ||
      !filename.endsWith(".md") ||
      filename.includes("..")
    ) {
      return NextResponse.json(
        { error: "Invalid filename" },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "content", filename);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Content not found" },
        { status: 404 }
      );
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
