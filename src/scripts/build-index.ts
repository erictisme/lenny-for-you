import * as fs from "fs";
import * as path from "path";

interface PodcastEntry {
  title: string;
  filename: string;
  tags: string[];
  word_count: number;
  date: string;
  description: string;
  guest: string;
}

interface NewsletterEntry {
  title: string;
  filename: string;
  tags: string[];
  word_count: number;
  date: string;
  subtitle: string;
}

interface IndexJson {
  schema_version: string;
  podcasts: PodcastEntry[];
  newsletters: NewsletterEntry[];
}

const indexPath = path.join(process.cwd(), "content", "index.json");
const raw = fs.readFileSync(indexPath, "utf-8");
const data: IndexJson = JSON.parse(raw);

interface CatalogItem {
  id: number;
  type: "podcast" | "newsletter";
  filename: string;
  title: string;
  tags: string[];
  date: string;
  description: string;
  guest: string | null;
}

const items: CatalogItem[] = [];
let id = 0;

for (const p of data.podcasts) {
  items.push({
    id: id++,
    type: "podcast",
    filename: p.filename,
    title: p.title,
    tags: p.tags,
    date: p.date,
    description: p.description,
    guest: p.guest,
  });
}

for (const n of data.newsletters) {
  items.push({
    id: id++,
    type: "newsletter",
    filename: n.filename,
    title: n.title,
    tags: n.tags,
    date: n.date,
    description: n.subtitle,
    guest: null,
  });
}

// Write compact-index.ts
const tsContent = `export type CatalogItem = {
  id: number;
  type: "podcast" | "newsletter";
  filename: string;
  title: string;
  tags: string[];
  date: string;
  description: string;
  guest: string | null;
};

export const CATALOG: CatalogItem[] = ${JSON.stringify(items, null, 2)};

export const CATALOG_PROMPT = CATALOG.map(
  (i) =>
    \`\${i.id}|\${i.type}|\${i.title}|\${i.tags.join(",")}|\${i.date}|\${i.description}|\${i.guest || ""}\`
).join("\\n");
`;

const dataDir = path.join(process.cwd(), "src", "data");
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(path.join(dataDir, "compact-index.ts"), tsContent);

// Write catalog-prompt.txt
const promptLines = items.map(
  (i) =>
    `${i.id}|${i.type}|${i.title}|${i.tags.join(",")}|${i.date}|${i.description}|${i.guest || ""}`
);
fs.writeFileSync(path.join(dataDir, "catalog-prompt.txt"), promptLines.join("\n") + "\n");

console.log(`Generated ${items.length} items`);
console.log(`  compact-index.ts written`);
console.log(`  catalog-prompt.txt written (${promptLines.length} lines)`);
