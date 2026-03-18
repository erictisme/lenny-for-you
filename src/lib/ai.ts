import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const MODEL_ID = "gemini-2.0-flash";

export function getGoogleProvider(apiKey?: string) {
  return createGoogleGenerativeAI({
    apiKey: apiKey || process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  });
}
