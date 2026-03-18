# Lenny, For You — Round 2 PRD (Redesign + Synthesis)

Round 1 built the functional MVP. Round 2 transforms it: Lenny brand design, synthesized AI brief, parallel summaries, and UX fixes.

**The new experience:**
1. User describes their situation
2. AI ranks top 20 articles → generates a **synthesized brief** pulling insights from ALL 20 sources into one cohesive "What Lenny's archive says about YOUR situation" (2-3 paragraphs, cross-referencing multiple guests/articles)
3. Below the brief: ranked article cards, each with a pre-generated expandable summary (all generated in parallel)
4. "Load More" button fetches and summarizes the next batch

---

## Tasks

- [x] **Task 1: Install dependencies for round 2** (Priority: 0 — needed by multiple tasks)

  **What does "done" look like?**
  New packages installed: `react-markdown`, `remark-gfm`. Shadcn components added: `collapsible`, `popover`. Build passes.

  **Steps:**
  1. Run `pnpm add react-markdown remark-gfm`
  2. Run `pnpm dlx shadcn@latest add collapsible popover -y`
  3. Verify `pnpm build` passes

  **What should it NOT touch?** Nothing else.

  **How to verify?** `pnpm build` passes.

- [x] **Task 2: Redesign with Lenny's actual brand identity** (Priority: 0 — everything looks wrong without this)

  **What does "done" look like?**
  The app uses Lenny's real brand colors, font, and aesthetic. Light mode default. Looks like it belongs in Lenny's ecosystem.

  **Lenny's actual brand (from lennysnewsletter.com):**
  - **Primary accent:** `#f47c55` (warm coral/orange) — THE Lenny color
  - **Accent hover:** `#f26a3d` (darker coral)
  - **Text primary:** `#363737` (dark charcoal)
  - **Text secondary:** `#868787` (medium gray)
  - **Background:** `#ffffff` (white)
  - **Secondary backgrounds:** `#f0f0f0`, `#f7f7f7`
  - **Font:** Spectral (Google Font, serif, weights 400 and 600) — editorial feel
  - **Aesthetic:** Clean editorial, generous whitespace, warm coral accents against neutral tones

  **Steps:**
  1. Add Google Font "Spectral" (serif, weights 400 and 600) to `src/app/layout.tsx` using `next/font/google`. Keep Geist for small UI elements. Use Spectral for headlines and body prose.
  2. Completely rewrite `src/app/globals.css`:
     - Remove the current dark purple-blue OkLCH theme entirely
     - Set CSS variables for **light mode** (Lenny's brand is light):
       - `--background: 0 0% 100%` (white)
       - `--foreground: 210 2% 21%` (#363737)
       - `--primary: 16 88% 64%` (#f47c55 coral)
       - `--primary-foreground: 0 0% 100%` (white)
       - `--muted: 0 0% 97%` (#f7f7f7)
       - `--muted-foreground: 0 0% 53%` (#868787)
       - `--card: 0 0% 100%`
       - `--card-foreground: 210 2% 21%`
       - `--border: 0 0% 90%` (#e5e5e5)
       - `--accent: 16 88% 64%` (coral)
       - `--ring: 16 88% 64%`
     - NOTE: shadcn uses HSL format for CSS variables. Convert the hex colors to HSL.
     - Keep `@keyframes fadeInUp` animation
  3. Update `src/app/layout.tsx`:
     - **Remove** `className="dark"` from `<html>` tag
     - Apply Spectral font class to `<body>` for editorial feel
     - Keep existing metadata
  4. Update all badge components to work on white background:
     - `src/components/type-badge.tsx`: Podcast badge uses coral tones. Newsletter badge uses a warm gray/blue tone.
     - `src/components/relevance-badge.tsx`: Essential=amber, Valuable=green, Perspective=blue — all readable on white.
  5. Update `src/components/hero.tsx`: the "you" accent text uses coral `#f47c55`
  6. Update `src/components/feed-card.tsx`: left-border accent uses coral. Card has subtle shadow on white background instead of ring.
  7. Update `src/components/footer.tsx`: ensure readable on white

  **What should it NOT touch?** No functionality changes. Only visual styling.

  **How to verify?** `pnpm dev` → white background, coral accents, Spectral serif font, looks like Lenny's site. `pnpm build` passes.

- [x] **Task 3: Fix "Invalid filename" bug in deep-dive API** (Priority: 0 — core feature is broken)

  **What does "done" look like?**
  Clicking any feed card successfully loads content without "Invalid filename" errors.

  **Steps:**
  1. Fix `src/app/api/deep-dive/route.ts` filename handling:
     - Trim whitespace: `let normalizedFilename = filename.trim()`
     - If doesn't end with ".md", append ".md"
     - Normalize prefixes: "newsletter/" → "newsletters/", "podcast/" → "podcasts/"
     - If file not found at exact path, try fuzzy match: extract the slug (last segment without .md), search `content/newsletters/` and `content/podcasts/` for any file containing that slug
  2. Keep all existing security checks (no ".." traversal)
  3. Return clear error message if truly not found: `"Article not found: ${normalizedFilename}"`

  **What should it NOT touch?** Do not modify the ranking API or prompts.

  **How to verify?** Submit a query, click 5+ different cards (mix of newsletters and podcasts). All should load. `pnpm build` passes.

- [x] **Task 4: Fix deep-dive modal — centered dialog with blur + rendered markdown** (Priority: 0)

  **What does "done" look like?**
  Deep-dive opens as a centered modal with blurred backdrop. Content renders as proper formatted text (no raw markdown hashes/asterisks).

  **Steps:**
  1. Rewrite `src/components/deep-dive-modal.tsx`:
     - Replace `Sheet` (side drawer) with shadcn `Dialog`
     - Dialog overlay: add `backdrop-blur-sm` class
     - Dialog content: `max-w-2xl w-full max-h-[80vh]` with scrollable body
     - On mobile: nearly full-screen
  2. Use `ReactMarkdown` from `react-markdown` with `remarkGfm` plugin for content rendering:
     ```jsx
     <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-blockquote:border-primary/50">
       {content}
     </ReactMarkdown>
     ```
  3. Keep: loading skeleton, error state, header with badges/title/date, footer with article link
  4. Ensure prose styles work with the new Lenny light theme (dark text on white)

  **What should it NOT touch?** Do not modify the API route logic (only the frontend component).

  **How to verify?** Click card → centered modal with blur. Markdown renders as formatted text (## = heading, ** = bold, - = list). No raw syntax visible. `pnpm build` passes.

- [x] **Task 5: Add youtube_url to catalog and fix article links** (Priority: 1)

  **What does "done" look like?**
  Newsletter cards link to correct Substack article. Podcast cards link to YouTube video.

  **Steps:**
  1. Update `src/scripts/build-index.ts`:
     - For podcast entries: read the actual markdown file's YAML frontmatter to extract `youtube_url`
     - Use a simple regex or string parsing to extract the `youtube_url:` field from frontmatter (no need for a YAML parser — just match `youtube_url: "..."` or `youtube_url: ...`)
     - Add `youtube_url` field to each podcast CatalogItem (null for newsletters)
  2. Update `CatalogItem` type in the build script to include `youtube_url: string | null`
  3. Re-run the build-index script: `npx tsx src/scripts/build-index.ts`
  4. Update `src/components/deep-dive-modal.tsx`:
     - Accept optional `youtubeUrl` prop
     - For newsletters: "Read full article on Lenny's Newsletter" → `https://www.lennysnewsletter.com/p/{slug}`
     - For podcasts with youtubeUrl: "Watch on YouTube" → youtube URL
     - For podcasts without: "Visit Lenny's Podcast" → `https://www.lennyspodcast.com/`
  5. Update results page to pass youtubeUrl from CATALOG when opening modal

  **What should it NOT touch?** Do not modify ranking API or prompts. Do not modify content files.

  **How to verify?** Click newsletter card → link opens Substack. Click podcast card → link opens YouTube. `pnpm build` passes.

- [x] **Task 6: New synthesis API route — /api/synthesize** (Priority: 0 — the key differentiator)

  **What does "done" look like?**
  A new API endpoint that takes the user's situation + the top 20 ranked items, reads ALL 20 articles, and generates a synthesized 3-4 paragraph brief that pulls insights from multiple sources into one cohesive answer to the user's situation. This is NOT a summary of individual articles — it's a NEW piece of content that cross-references and connects ideas from different guests and posts.

  **Steps:**
  1. Create `src/app/api/synthesize/route.ts`
  2. POST handler accepts: `{ userInput: string, filenames: string[], apiKey?: string }`
     - `filenames` is an array of the top 20 ranked article filenames
  3. Read ALL 20 markdown files from the content directory
  4. For each file, extract just the first 2000 characters of content (to fit within token limits — 20 files × 2000 chars = ~40K chars = ~10K tokens). Strip YAML frontmatter before extracting.
  5. Create a synthesis prompt (add to `src/lib/prompts.ts`):
     ```
     SYNTHESIS_SYSTEM_PROMPT = `You are creating a personalized synthesis brief for a reader of Lenny's Newsletter.

     You will receive:
     1. The reader's situation
     2. Excerpts from the 20 most relevant articles and podcast transcripts from Lenny's archive

     Create a 400-600 word synthesis that:
     - Opens with a direct, empathetic acknowledgment of their situation in 1-2 sentences
     - Identifies 3-4 KEY THEMES across the sources that are most relevant to their challenges
     - For each theme, synthesize insights from 2-3 DIFFERENT sources, connecting ideas that the reader wouldn't get from reading any single article. Name the specific guests or articles.
     - Include 1-2 places where sources DISAGREE or offer different perspectives — this is gold
     - End with a prioritized "Start here" recommendation: which 1-2 articles to read FIRST and why
     - Use "you" language throughout
     - Format with markdown headers for each theme
     - This must feel like a wise mentor who has read everything and is giving YOU personalized counsel — not like a summary

     IMPORTANT: Do NOT just summarize each article separately. SYNTHESIZE — connect ideas across sources, find patterns, surface contradictions. The value is in the CONNECTIONS, not the individual summaries.`
     ```
  6. Call `streamText` with the synthesis prompt, all 20 excerpts, and the user input
  7. Return streaming response
  8. Use Node.js runtime (needs `fs` for file reading)

  **What should it NOT touch?** Do not modify existing API routes. Do not modify the ranking logic.

  **How to verify?** Test with curl:
  ```
  curl -X POST http://localhost:3000/api/synthesize \
    -H "Content-Type: application/json" \
    -d '{"userInput": "PM at pre-PMF B2B SaaS struggling with pricing", "filenames": ["newsletters/the-ultimate-guide-to-willingness-to-pay.md", "podcasts/madhavan-ramanujam.md"]}'
  ```
  Should stream a multi-paragraph synthesis that cross-references both sources. `pnpm build` passes.

- [x] **Task 7: New parallel batch summary API route — /api/batch-summarize** (Priority: 0 — enables fast parallel summaries)

  **What does "done" look like?**
  A new API endpoint that takes the user's situation + multiple filenames and generates individual summaries for ALL of them in parallel. Returns all summaries at once as a JSON object keyed by filename.

  **Steps:**
  1. Create `src/app/api/batch-summarize/route.ts`
  2. POST handler accepts: `{ userInput: string, filenames: string[], apiKey?: string }`
  3. For each filename in parallel (using `Promise.all`):
     - Read the markdown file from content directory
     - Call `generateText` (not streaming — we need all results at once) with the DEEP_DIVE_SYSTEM_PROMPT
     - Collect the result
  4. Return JSON: `{ summaries: { [filename]: string } }`
  5. Add a shorter summary prompt variant to `src/lib/prompts.ts`:
     ```
     CARD_SUMMARY_SYSTEM_PROMPT = `You are creating a brief personalized reading card for a specific reader.

     You will receive the reader's situation and article content.

     Create a 100-150 word summary that:
     - 1 sentence: why this matters for them RIGHT NOW
     - 2-3 bullet points: the key actionable takeaways for their situation
     - 1 sentence: what they'll learn if they read the full piece

     Use "you" language. Be specific to their situation. No fluff.
     Format: 1 paragraph opening + bullet list + 1 closing sentence.`
     ```
  6. Use this shorter prompt for batch summaries (faster, cheaper than full deep-dive)
  7. Use Node.js runtime (needs `fs`)
  8. Limit to max 10 files per request (to control costs and timeouts)
  9. Timeout handling: if any individual summary fails, return what succeeded + error flags

  **What should it NOT touch?** Do not modify existing API routes.

  **How to verify?** Test with curl sending 3 filenames. Should return JSON with 3 summaries. All summaries are personalized. `pnpm build` passes.

- [ ] **Task 8: Rebuild results page — synthesis brief + pre-generated card summaries + Load More** (Priority: 0 — the main UX overhaul)

  **What does "done" look like?**
  The results page shows:
  1. A "synthesis brief" section at the top — a 3-4 paragraph AI-generated cross-reference synthesis that streams in first
  2. Below: 20 feed cards, each with a pre-generated expandable summary already loaded
  3. A "Load More" button at the bottom to fetch the next batch of articles

  **Steps:**
  1. Rewrite `src/app/results/page.tsx` with this flow:
     **Phase 1 — Rank (existing):**
     - Decode userInput from URL params
     - Call `/api/rank` → get 20 ranked items
     - Show ranking skeleton while loading

     **Phase 2 — Synthesize (new, starts immediately after ranking):**
     - Call `/api/synthesize` with userInput + all 20 filenames
     - Stream the synthesis brief into a prominent section at the top of the page
     - This section has a header like "What Lenny's archive says about your situation" and renders markdown with ReactMarkdown
     - Show a pulsing skeleton while loading

     **Phase 3 — Batch summarize (new, starts in parallel with synthesis):**
     - Call `/api/batch-summarize` with userInput + first 10 filenames
     - Then call again with filenames 11-20
     - Store summaries in state keyed by filename
     - Each FeedCard receives its pre-generated summary

  2. Update `src/components/feed-card.tsx`:
     - Add collapsible section below "why this matters"
     - New props: `summary: string | null`, `summaryLoading: boolean`
     - If summary is loaded: show a toggle button "View summary ▼" / "Hide summary ▲"
     - When expanded: render summary with ReactMarkdown
     - If summary is loading: show small skeleton
     - The first card auto-expands its summary
     - Card title/header area still clickable to open full deep-dive modal

  3. Create `src/components/synthesis-brief.tsx`:
     - A prominent section with a heading "What Lenny's archive says about your situation"
     - Renders the streaming synthesis with ReactMarkdown
     - Styled differently from cards: slightly larger text, no card border, maybe a subtle top border or background tint
     - Loading state: animated skeleton with message "Cross-referencing 20 articles for your situation..."
     - Below the synthesis text, show small "Sources" list: the titles of articles referenced, clickable to scroll to that card

  4. Add "Load More" button at the bottom:
     - When clicked: call `/api/rank` again but with a prompt modification asking for items 21-40 (append to the prompt: "Do NOT include these already-selected items: [list of 20 filenames]. Select the NEXT 20 most relevant items.")
     - Then call `/api/batch-summarize` for the new items
     - Append new cards below existing ones
     - Button text: "Load 20 more articles"
     - Hide button if no more results returned

  5. The user's query shown at top in a styled quote with an "Edit" button that reveals a textarea for re-prompting (simple: click edit → textarea appears pre-filled → submit updates URL and re-fetches everything)

  **What should it NOT touch?** Do not modify the API route files created in Tasks 6 and 7. Just call them from the frontend.

  **How to verify?** Submit a query → synthesis brief streams in at top → 20 cards appear below with summaries pre-loaded → first card auto-expanded → click "Load More" → 20 more cards appear. Markdown renders everywhere. `pnpm build` passes.

- [ ] **Task 9: Improve BYOK toggle — discreet settings gear** (Priority: 2)

  **What does "done" look like?**
  Small gear icon in top-right corner. Clicking opens a clean popover for API key input. No raw "Paste your Gemini key" on the main page.

  **Steps:**
  1. Rewrite `src/components/byok-toggle.tsx`:
     - Small gear SVG icon, fixed in top-right or in a header bar
     - Popover (shadcn) with: title "Settings", label "API Key (optional)", description "Use your own Google AI key", password input, save button
     - Green dot indicator when key saved
  2. Remove old BYOK toggle from landing page body
  3. Place gear icon in layout or as fixed-position element on both pages
  4. Keep localStorage persistence and `useApiKey()` hook

  **What should it NOT touch?** Do not modify API routes.

  **How to verify?** No "API key" text in page body. Gear in corner. Popover works. Key persists. `pnpm build` passes.

- [ ] **Task 10: Final polish, responsive, and commit** (Priority: 3)

  **What does "done" look like?**
  Clean build. Polished UI on desktop and mobile. All features working.

  **Steps:**
  1. Mobile (375px): synthesis brief readable, cards stack properly, modal nearly full-screen, textarea usable
  2. Loading states: all have friendly messages and smooth skeletons
  3. Text contrast: all text readable on white background
  4. Error states: friendly messages with retry buttons
  5. Card animations: fade-in stagger works with light theme
  6. `pnpm build` — zero errors
  7. `pnpm lint` — fix any issues
  8. Remove console.logs, unused imports, dead code
  9. Git commit: "feat: round 2 — Lenny brand, synthesis brief, parallel summaries, Load More"

  **What should it NOT touch?** Do not add new features.

  **How to verify?** `pnpm build` && `pnpm lint` pass. Visual check desktop + mobile. All flows work. Git commit clean.
