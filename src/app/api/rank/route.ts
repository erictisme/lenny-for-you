import { generateObject } from "ai";
import { z } from "zod";
import { getGoogleProvider, MODEL_IDS } from "@/lib/ai";
import { RANKING_SYSTEM_PROMPT } from "@/lib/prompts";
import { CATALOG_PROMPT } from "@/data/compact-index";
import { NextResponse } from "next/server";

const RankedItemSchema = z.object({
  filename: z.string(),
  title: z.string(),
  type: z.enum(["podcast", "newsletter"]),
  guest: z.string().nullable(),
  date: z.string(),
  tags: z.array(z.string()),
  why_this_matters: z.string(),
  relevance: z.enum(["essential", "valuable", "perspective"]),
});

const ResponseSchema = z.object({
  items: z.array(RankedItemSchema).length(20),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userInput, apiKey } = body;

    if (!userInput || typeof userInput !== "string") {
      return NextResponse.json(
        { error: "userInput is required and must be a string" },
        { status: 400 }
      );
    }

    if (userInput.length > 1000) {
      return NextResponse.json(
        { error: "userInput must be 1000 characters or fewer" },
        { status: 400 }
      );
    }

    const provider = getGoogleProvider(apiKey);

    const result = await generateObject({
      model: provider(MODEL_IDS.ranking),
      schema: ResponseSchema,
      system: RANKING_SYSTEM_PROMPT,
      prompt: `Here is the content catalog:\n\n${CATALOG_PROMPT}\n\nHere is the person's situation:\n\n${userInput}`,
    });

    return NextResponse.json(result.object);
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      error.message?.includes("rate")
    ) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Try again in a few minutes." },
        { status: 429 }
      );
    }

    console.error("Rank API error:", error);
    return NextResponse.json(
      { error: "Failed to generate rankings. Please try again." },
      { status: 500 }
    );
  }
}
