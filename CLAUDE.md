# Lenny, For You

A personalized feed that reranks Lenny Rachitsky's entire 650-piece archive (350 newsletters + 289 podcast transcripts) based on who YOU are.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Vercel AI SDK (`ai` package) + `@ai-sdk/google` for Gemini
- Zod for schema validation
- pnpm, deploy to Vercel

## Architecture

### Data Flow
1. **Build time:** `content/index.json` → build script → `src/data/compact-index.ts` (~18K tokens, all 638 items on one line each)
2. **Runtime ranking:** User text → `/api/rank` → sends compact index + user input to Gemini → returns top 20 items with personalized descriptions
3. **Runtime deep-dive:** User clicks card → `/api/deep-dive` → reads bundled `.md` file from `content/` → sends to Gemini with user context → streams personalized summary

### Key Files
- `content/` — 638 markdown files (newsletters + podcasts) + index.json. DO NOT MODIFY these files.
- `src/data/compact-index.ts` — Generated static array of all items. Regenerate with build-index script.
- `src/data/catalog-prompt.txt` — Pre-formatted text for the ranking AI prompt.
- `src/lib/prompts.ts` — All AI prompt templates. The ranking prompt is the core IP.
- `src/app/api/rank/route.ts` — Main API: takes user profile, returns 20 ranked items.
- `src/app/api/deep-dive/route.ts` — Secondary API: takes filename + profile, returns personalized summary.

### AI Provider
- Primary: Google Gemini via `@ai-sdk/google`
- BYOK: Users can optionally provide their own API key (stored in localStorage, sent in request header)
- Env var: `GOOGLE_GENERATIVE_AI_API_KEY` (set in .env.local, NOT committed)

### Design Theme
- Inspired by Lenny's Newsletter branding (identify colors from lennysdata.com / Substack)
- Dark mode as primary
- Clean, editorial feel — NOT generic chatbot aesthetic
- Must screenshot well for LinkedIn sharing

## Conventions
- Use `@/` import alias for all internal imports
- shadcn/ui components in `src/components/ui/`
- Custom components in `src/components/`
- API routes use edge runtime for longer timeouts: `export const runtime = 'edge'`
- All AI calls go through Vercel AI SDK (`generateObject` for structured output, `streamText` for prose)

## Content Files
- `content/newsletters/` — 349 .md files with YAML frontmatter (title, subtitle, date, type, tags, word_count)
- `content/podcasts/` — 289 .md files with YAML frontmatter (title, date, type, guest, youtube_url, description, tags, word_count)
- `content/index.json` — Master index with metadata for all 638 items

## Do NOT
- Modify any files in `content/` — these are Lenny's source data
- Add unnecessary dependencies — keep it lean
- Use `pages/` router — App Router only
- Skip the build check (`pnpm build`)
- Hardcode API keys anywhere
- Over-engineer — this is a contest entry, ship it

## Theme Coaching Journey Skills (Ralph Task Instructions)

When generating a theme-based coaching journey skill, follow this template EXACTLY.

**Format reference:** Tal Raviv & Aman Khan's "How to build AI product sense" — interactive 1-on-1 tutoring: motivating overview, sequential concepts, check understanding, hold high bar, signpost progress. Also reference Eric's `/study` skill (`~/.claude/commands/study.md`) for Socratic tutoring patterns.

### How to Build a Skill

1. **Search `content/index.json`** for ALL articles matching the theme's keywords
2. **Read ALL matching articles** from `content/newsletters/` and `content/podcasts/` — not just 6-8, read everything
3. **Extract key frameworks** across all articles — find the THREAD that connects them
4. **Design a sequential learning journey** — ordered concepts, one at a time, building on each other
5. **Write the skill file** to `skills/lenny-[theme].md`

### Skill Template

```markdown
# /lenny-[theme] - [Theme Name]

[One-line pitch: what this journey covers and why it matters]

## Prerequisites
- Lenny's Data MCP connected (`mcp.lennysdata.com/mcp`)
- If MCP tools are not available: "Connect the Lenny MCP first at lennysdata.com"

## About This Journey
[2-3 sentences: what you'll learn, who it's for, what outcome to expect]
Best for: [SPECIFIC audience, e.g. "Early-stage founders pricing their product for the first time" — NOT "anyone interested in pricing"]

## The Curriculum
[Ordered list of 5-8 concepts that build on each other — each maps to 1-3 source articles]
1. **[Concept Name]** — [What you'll understand after this] *(Sources: [Article Title], [Podcast Guest Name])*
2. **[Concept Name]** — [What you'll understand] *(Sources: ...)*
3. ...

## Source Articles
[Full list of ALL article/podcast titles + filenames in this theme]
- "[Article Title]" — `[filename]`
- "[Podcast: Guest Name] on [topic]" — `[filename]`

## Coaching Session Instructions

When this skill is invoked, follow this exact flow:

### Opening
1. Give a brief, motivating overview: what we're learning and why it matters. 3-4 sentences. Make the user feel excited, not overwhelmed.
2. Show the roadmap: "We'll cover [X] concepts. Here's the journey: [list concept names]. By the end, you'll be able to [concrete outcome]."
3. Ask: "[SPECIFIC question about the user's context, tailored to this theme]"
   [Include the actual question — NOT generic "tell me your situation"]
   Example for pricing: "What are you selling, who's buying it, and what are they paying today (if anything)?"
4. Wait for their answer. Use it to personalize the entire session.

### For Each Concept (walk through in order, one at a time)
1. **Load the source:** Use `mcp__lennysdata__read_content` with filename `[article filename]` to get the full article
2. **Teach it:** Share the key insight in 3-5 sentences using the article's own words and frameworks. Cite the author/guest naturally: "As [Guest Name] puts it..." or "[Author] argues that..."
3. **Apply it:** Connect to the user's context: "For your situation, this means..."
4. **Check understanding:** Ask the user to explain it back in their own words. ONE question only. Wait for their answer.
5. **Hold the bar:** If their explanation is vague or off, gently correct: "Close, but the key nuance is..." Ask again if needed.
6. **Signpost:** "That's concept [X] of [Y]. Next up: [preview of next concept]."

### Closing
1. Ask the user for a 30-second summary of everything they learned, as if explaining to a friend.
2. Give 3 concrete next steps — specific, time-bound, doable this week.
3. For each step, cite which article/podcast backs it up with the source filename so they can read/listen in full.
4. Offer to save session notes. Ask the user where they'd like to save. Suggest `./lenny-sessions/[YYYY-MM-DD]-[theme].md` as default.

### Rules
- ONE question at a time. Wait for the answer.
- Be direct and practical. No filler, no "great question!" padding.
- Use the original words and frameworks from the articles — cite naturally.
- If the user goes on a tangent, follow briefly then redirect: "Good question — [answer]. Now back to concept [X]..."
- Keep energy up. Signpost progress regularly.
- Cover every concept in the curriculum, in order. Don't skip.
- If the user is losing energy, acknowledge it: "We're past the halfway mark. Want a quick recap before we continue?"

## Key Frameworks Cheat Sheet
[Quick-reference list of all frameworks in this journey]
- **[Framework Name]** ([Source]): [One-line description]
- **[Framework Name]** ([Source]): [One-line description]
```

### Quality Rules
1. **Concepts must be REAL** — extracted from actual article content, with proper citations
2. **The journey must have a logical sequence** — concepts build on each other
3. **The opening question must be SPECIFIC** to the theme (not "tell me your situation")
4. **Best For must be specific** — "B2B PMs at Series A setting first pricing tiers" not "anyone"
5. **Source Articles must list real filenames** from content/ directory
6. **Cite guests by name** for podcast episodes
7. **Cross-reference articles** — find the THREAD, don't summarize each separately
8. **Read ALL articles** in the theme, not just the top 6-8
9. **Use the articles' own language** — don't paraphrase into generic advice

### Security Constraints
Skills are distributed as markdown files that users install into `~/.claude/commands/`. They must be safe and transparent:

1. **No bash/shell commands.** Skills must NEVER instruct Claude to run bash commands, curl, wget, or any shell execution. Read-only MCP tool calls are the only external interaction allowed.
2. **No filesystem writes without consent.** Never write files silently. Always ask the user before saving anything, and let them choose the path.
3. **No network calls beyond MCP.** Skills must not instruct Claude to fetch URLs, call APIs, or send data anywhere. The only external tool is `mcp__lennysdata__read_content` (read-only).
4. **No references to other tools/skills.** Each skill is self-contained. Don't instruct Claude to invoke other slash commands, install packages, or modify config.
5. **No data exfiltration patterns.** Never ask Claude to read, summarize, or transmit user files, environment variables, credentials, or system information.
6. **Human-readable and auditable.** Skills should be short enough that a user can read the entire file in 2-3 minutes and understand exactly what it does before installing.
