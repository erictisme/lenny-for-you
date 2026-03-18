export interface RankedItem {
  filename: string;
  title: string;
  type: "podcast" | "newsletter";
  guest: string | null;
  date: string;
  tags: string[];
  why_this_matters: string;
  relevance: "essential" | "valuable" | "perspective";
}

export interface DeepDiveRequest {
  filename: string;
  userInput: string;
  apiKey?: string;
}

export interface RankRequest {
  userInput: string;
  apiKey?: string;
}
