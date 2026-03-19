import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const MODEL_IDS = {
  ranking: "gemini-2.5-flash",
  synthesis: "gemini-2.5-flash-lite",
  cardSummary: "gemini-2.5-flash-lite",
  deepDive: "gemini-2.5-flash",
} as const;

export function getGoogleProvider(apiKey?: string) {
  return createGoogleGenerativeAI({
    apiKey: apiKey || process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  });
}
