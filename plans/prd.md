# Lenny, For You — PRD

A personalized feed that reranks Lenny's entire 650-piece archive based on WHO YOU ARE.

User flow: Landing page → single text box ("tell me about your situation") → personalized feed of top 20 articles with "why this matters for you" → click any card for personalized deep-dive summary.

---

## Tasks

- [x] **Task 1: Build the compact index from content/index.json** (Priority: 0 — architecture dependency, everything else needs this)

  **What does "done" look like?**
  Two generated files exist and are correct:
  1. `src/data/compact-index.ts` — exports a TypeScript array called `CATALOG` containing all 638 items. Each item has: `{ id: number, type: "podcast" | "newsletter", filename: string, title: string, tags: string[], date: string, description: string, guest: string | null }`. The data comes from `content/index.json`.
  2. `src/data/catalog-prompt.txt` — a plain text file with one line per item in this format: `{id}|{type}|{title}|{tags joined by comma}|{date}|{description}|{guest or ""}`. This file must contain exactly 638 lines (or however many items are in index.json).

  **Steps:**
  1. Create `src/scripts/build-index.ts` — a Node.js script (run with `npx tsx src/scripts/build-index.ts`)
  2. Read `content/index.json` which has `{ "schema_version": "2.0", "podcasts": [...], "newsletters": [...] }`. Each podcast has: title, filename, tags, word_count, date, description, guest. Each newsletter has: title, filename, tags, word_count, date, subtitle (use subtitle as description).
  3. Merge both arrays, assign sequential IDs starting from 0, normalize into the common format above.
  4. Write `src/data/compact-index.ts` with: `export const CATALOG = [...]` and `export type CatalogItem = { id: number; type: "podcast" | "newsletter"; filename: string; title: string; tags: string[]; date: string; description: string; guest: string | null; }`
  5. Write `src/data/catalog-prompt.txt` with one item per line in the pipe-delimited format.
  6. Add a `"build-index"` script to package.json: `"build-index": "npx tsx src/scripts/build-index.ts"`
  7. Run the script and verify output.

  **What should it NOT touch?** Do not modify content/index.json or any content files. Do not install tsx globally — use npx.

  **How to verify?** Run `npx tsx src/scripts/build-index.ts`. Check that `src/data/compact-index.ts` exports an array with 638 items. Check that `src/data/catalog-prompt.txt` has 638 lines. Then run `pnpm build` to confirm the TypeScript compiles.

- [x] **Task 2: Create TypeScript types and AI provider setup** (Priority: 0 — architecture dependency)

  **What does "done" look like?**
  Three files exist and compile:
  1. `src/types/index.ts` — all shared types
  2. `src/lib/ai.ts` — Gemini provider factory
  3. `src/lib/prompts.ts` — prompt templates

  **Steps:**
  1. Create `src/types/index.ts` with these interfaces:
     ```
     RankedItem { filename: string; title: string; type: "podcast" | "newsletter"; guest: string | null; date: string; tags: string[]; why_this_matters: string; relevance: "essential" | "valuable" | "perspective" }
     DeepDiveRequest { filename: string; userInput: string; apiKey?: string }
     RankRequest { userInput: string; apiKey?: string }
     ```
  2. Create `src/lib/ai.ts`:
     - Import `createGoogleGenerativeAI` from `@ai-sdk/google`
     - Export a function `getGoogleProvider(apiKey?: string)` that creates a Google AI provider. If `apiKey` is provided, use it. Otherwise use `process.env.GOOGLE_GENERATIVE_AI_API_KEY`.
     - Export the model name as a constant: `export const MODEL_ID = "gemini-2.0-flash"` (fast, cheap, good for structured output)
  3. Create `src/lib/prompts.ts`:
     - Export `RANKING_SYSTEM_PROMPT`: "You are a content curator for Lenny's Newsletter — the most popular product management newsletter in the world (350+ posts, 289 podcast transcripts). You will receive: 1. A person's situation (their role, stage, challenges) 2. A catalog of 638 content items (title, type, tags, date, description). Your job: Select the 20 most relevant items for THIS SPECIFIC PERSON. Rules: - Match their CURRENT challenges, not general interests. - Apply Dalton Caldwell's insight: most advice is stage-specific. Pre-PMF founders don't need scaling advice. Enterprise PMs don't need 'find your first user' content. - Prioritize: (1) direct relevance to stated challenges, (2) stage-appropriate advice, (3) foundational frameworks they'd benefit from, (4) diversity of content types (mix newsletters + podcasts). - For each item, write a 1-2 sentence 'why_this_matters' that directly references THEIR situation using 'you' language. - Include a 'relevance' field: 'essential' (directly addresses their problem), 'valuable' (strong adjacent knowledge), or 'perspective' (broadens their thinking). Order by relevance (most relevant first)."
     - Export `DEEP_DIVE_SYSTEM_PROMPT`: "You are creating a personalized reading brief for a specific reader of Lenny's Newsletter. You will receive the reader's situation and the full text of a newsletter post or podcast transcript. Create a 300-400 word personalized summary that: - Opens with a 1-sentence 'Why this matters for you right now'. - Highlights the 3-4 specific points most relevant to their situation. - Skips sections that aren't relevant to them. - Uses 'you' language throughout ('Given that you're struggling with churn...'). - Quotes 1-2 specific sentences from the original that are most applicable. - Ends with ONE concrete action they could take this week. - Format with markdown headers. If it's a podcast transcript, reference the guest by name and note any frameworks or models they introduced."

  **What should it NOT touch?** Do not modify shadcn components, do not modify content files, do not create API routes yet.

  **How to verify?** `pnpm build` passes. The types, AI provider, and prompts all export correctly.

- [x] **Task 3: Design theme — identify Lenny's brand and apply to Tailwind** (Priority: 1 — needed before any UI work)

  **What does "done" look like?**
  The app has a dark-mode design theme inspired by Lenny's Newsletter branding. The `src/app/globals.css` has CSS variables for the Lenny color palette. The root `src/app/layout.tsx` applies the dark theme by default.

  **Steps:**
  1. Inspect Lenny's branding. Lenny's Newsletter uses these colors (from his Substack and lennysdata.com):
     - Primary blue: approximately `#3B82F6` or similar (his link color / accent)
     - Background: use a rich dark navy/charcoal, something like `#0F172A` (slate-900) or `#1E293B` (slate-800) — editorial, not pure black
     - Text: off-white `#F8FAFC` (slate-50)
     - Muted text: `#94A3B8` (slate-400)
     - Cards: slightly lighter than background, like `#1E293B` with subtle border
     - Accent for "essential" relevance: warm amber/gold
     - Accent for "podcast" badge: purple/indigo
     - Accent for "newsletter" badge: blue/teal
  2. Update `src/app/globals.css` — set CSS custom properties under `:root` and a dark class. Configure the shadcn theme variables for the dark palette. The dark theme should be the DEFAULT (add `dark` class to html element or use `@media (prefers-color-scheme: dark)`, but better to just make dark the only theme).
  3. Update `src/app/layout.tsx`:
     - Add `className="dark"` to the `<html>` tag
     - Set page metadata: title "Lenny, For You", description "650 posts. 300 guests. Which ones matter for YOU?"
     - Use a clean sans-serif font (Inter or Geist — Geist is already included by Next.js default)
     - Set `<body>` background to the dark background color
  4. Verify the default page renders with the dark theme applied (dark background, light text).

  **What should it NOT touch?** Do not build any custom components yet. Just set up the theme in globals.css and layout.tsx.

  **How to verify?** Run `pnpm dev`, open http://localhost:3000. The page should have a dark background with light text. `pnpm build` passes.

- [x] **Task 4: Ranking API route — /api/rank** (Priority: 0 — core functionality)

  **What does "done" look like?**
  A POST endpoint at `/api/rank` that accepts `{ userInput: string, apiKey?: string }`, sends the compact catalog + user input to Gemini, and returns a JSON array of 20 `RankedItem` objects with personalized descriptions.

  **Steps:**
  1. Create `src/app/api/rank/route.ts`
  2. Import: `generateObject` from `ai`, the Google provider from `src/lib/ai.ts`, the prompts from `src/lib/prompts.ts`, the catalog prompt text, and `z` from `zod`
  3. Read the catalog prompt text. Since this is edge runtime and can't use `fs`, import it as a string. Best approach: in `src/data/compact-index.ts` (already generated in Task 1), also export a `CATALOG_PROMPT` string constant containing the pre-formatted catalog text. If this wasn't done in Task 1, update the build-index script to also export this string.
  4. Define a Zod schema for the response:
     ```
     const RankedItemSchema = z.object({
       filename: z.string(),
       title: z.string(),
       type: z.enum(["podcast", "newsletter"]),
       guest: z.string().nullable(),
       date: z.string(),
       tags: z.array(z.string()),
       why_this_matters: z.string(),
       relevance: z.enum(["essential", "valuable", "perspective"]),
     })
     const ResponseSchema = z.object({ items: z.array(RankedItemSchema).length(20) })
     ```
  5. POST handler:
     - Parse request body for `userInput` and optional `apiKey`
     - Validate `userInput` is non-empty string, max 1000 chars
     - Create Gemini provider using `getGoogleProvider(apiKey)`
     - Call `generateObject` with:
       - model: `provider(MODEL_ID)`
       - schema: ResponseSchema
       - system: RANKING_SYSTEM_PROMPT
       - prompt: `"Here is the content catalog:\n\n${CATALOG_PROMPT}\n\nHere is the person's situation:\n\n${userInput}"`
     - Return `NextResponse.json(result.object)`
  6. Add error handling: catch API errors, return appropriate status codes (400 for bad input, 500 for AI errors, 429 for rate limit)
  7. Do NOT use edge runtime yet if it causes issues with imports. Use standard Node.js runtime first, optimize later.

  **What should it NOT touch?** Do not build any UI. Do not modify content files. Do not create the deep-dive route yet.

  **How to verify?** `pnpm build` passes. Test with curl:
  ```
  curl -X POST http://localhost:3000/api/rank \
    -H "Content-Type: application/json" \
    -d '{"userInput": "I am a PM at a Series A B2B SaaS struggling with churn and pricing"}'
  ```
  Should return JSON with 20 items, each having filename, title, type, why_this_matters, and relevance fields. NOTE: This test requires GOOGLE_GENERATIVE_AI_API_KEY in .env.local — if not set, the test will fail with an auth error, which is expected. The build must still pass.

- [ ] **Task 5: Deep-dive API route — /api/deep-dive** (Priority: 1)

  **What does "done" look like?**
  A POST endpoint at `/api/deep-dive` that accepts `{ filename: string, userInput: string, apiKey?: string }`, reads the full markdown content of the specified file, sends it to Gemini with the user's context, and streams back a personalized summary.

  **Steps:**
  1. Create `src/app/api/deep-dive/route.ts`
  2. Import: `streamText` from `ai`, the Google provider, the deep-dive prompt
  3. POST handler:
     - Parse request body for `filename`, `userInput`, optional `apiKey`
     - Validate `filename` starts with "podcasts/" or "newsletters/" and ends with ".md" (security: prevent path traversal)
     - Read the markdown file. Since we need `fs` access and edge runtime doesn't support it, use Node.js runtime (`export const runtime = 'nodejs'`). Read from `path.join(process.cwd(), 'content', filename)` using `fs.readFileSync`.
     - If file not found, return 404
     - Call `streamText` with:
       - model: `provider(MODEL_ID)`
       - system: DEEP_DIVE_SYSTEM_PROMPT
       - prompt: `"Reader's situation: ${userInput}\n\n---\n\nFull article content:\n\n${content}"`
     - Return the streaming response using `result.toDataStreamResponse()`
  4. Add error handling for missing files, AI errors

  **What should it NOT touch?** Do not build UI. Do not modify the ranking route.

  **How to verify?** `pnpm build` passes. Test with curl (requires API key in .env.local):
  ```
  curl -X POST http://localhost:3000/api/deep-dive \
    -H "Content-Type: application/json" \
    -d '{"filename": "newsletters/14-habits-of-highly-effective-product-managers.md", "userInput": "I am a new PM trying to level up"}'
  ```
  Should stream back a personalized markdown summary.

- [ ] **Task 6: Landing page — hero section + text input** (Priority: 2)

  **What does "done" look like?**
  The home page (`src/app/page.tsx`) shows a beautiful dark-themed landing page with:
  - A compelling headline and subheadline
  - A single large textarea for the user to describe their situation
  - A submit button that navigates to `/results?q=<base64-encoded-input>`
  - A footer with credits

  **Steps:**
  1. Create `src/components/hero.tsx`:
     - Large headline: "650 posts. 300 guests." on first line, "Which ones matter for **you**?" on second line (bold "you")
     - Subheadline below (muted text): "Tell me about your situation and I'll find the pieces of Lenny's archive that matter most for you right now."
     - Center-aligned, generous padding (py-20 or more)
     - The word "you" in the headline should be styled with the accent/primary color
  2. Create `src/components/profile-input.tsx`:
     - A `<textarea>` (shadcn Textarea component) with 4 rows
     - Placeholder: "I'm a PM at a Series A B2B SaaS. We have 50 customers but struggling with churn. I need to figure out pricing and build a growth engine..."
     - A submit button below: "Find My Feed" (shadcn Button, primary/accent color, full width or auto width centered)
     - On submit: base64-encode the textarea value, navigate to `/results?q={encoded}`
     - Disable button if textarea is empty
     - Use `useRouter` from `next/navigation` for programmatic navigation
     - This is a client component (`"use client"`)
  3. Create `src/components/footer.tsx`:
     - Small text: "Built by a non-coder with Claude Code"
     - Link to Eric's LinkedIn (use a placeholder URL like `https://linkedin.com/in/erictansongyi` — Eric will update)
     - "Powered by Lenny's Newsletter data" with link to lennysdata.com
     - Muted text color, centered, bottom padding
  4. Update `src/app/page.tsx`:
     - Import and render Hero, ProfileInput, Footer
     - Clean layout: max-w-2xl mx-auto, centered content
     - Remove all default Next.js boilerplate content

  **What should it NOT touch?** Do not build the results page. Do not modify API routes. Do not modify globals.css or layout.tsx (theme was set in Task 3).

  **How to verify?** Run `pnpm dev`, open http://localhost:3000. See a dark-themed landing page with headline, textarea, and submit button. Type text and click submit — should navigate to `/results?q=...` (the results page won't exist yet, that's OK — just verify the URL changes). `pnpm build` passes.

- [ ] **Task 7: Results feed page — display ranked articles** (Priority: 2)

  **What does "done" look like?**
  The results page (`src/app/results/page.tsx`) reads the user's input from URL searchParams, calls `/api/rank`, and displays a feed of 20 personalized cards with loading states.

  **Steps:**
  1. Create `src/components/type-badge.tsx`:
     - Small badge component: "Newsletter" (blue/teal) or "Podcast" (purple/indigo)
     - Use shadcn Badge with custom variant colors
  2. Create `src/components/relevance-badge.tsx`:
     - "Essential" (amber/gold), "Valuable" (green), "Perspective" (blue)
     - Small, subtle badge
  3. Create `src/components/feed-card.tsx`:
     - shadcn Card component
     - Layout: TypeBadge + RelevanceBadge in top row, title (large text), date + guest name (if podcast) in muted text, "Why this matters for you" text in slightly highlighted/accent style, tags as small muted pills at bottom
     - The "why this matters" text is the key visual element — make it stand out (slightly different background, or left border accent, or italic)
     - Card should be clickable (onClick handler passed as prop)
     - Hover state: subtle border color change or shadow
  4. Create `src/components/feed-skeleton.tsx`:
     - 6 skeleton cards matching the feed-card layout using shadcn Skeleton
     - Animate with pulse
  5. Create `src/app/results/page.tsx`:
     - Client component (`"use client"`)
     - Read `q` from `useSearchParams()` — base64 decode to get userInput
     - If no `q` param, redirect to `/`
     - On mount, call `POST /api/rank` with `{ userInput }`
     - States: loading (show skeletons + "Analyzing 650 pieces of Lenny's archive for you..." message), loaded (show cards), error (show error message + "Try again" button)
     - Wrap in Suspense boundary for searchParams
     - Header section: "Your Personalized Lenny Feed" title, with the user's input shown as a muted quote below
     - Grid or list layout for cards (single column, max-w-3xl, centered — list is better for readability)
     - Each card's onClick should open the deep-dive modal (but modal is built in Task 8 — for now, just log the filename to console)
     - "Start over" link at bottom that navigates back to `/`

  **What should it NOT touch?** Do not build the deep-dive modal. Do not modify the landing page or API routes.

  **How to verify?** Run `pnpm dev`, navigate to `/results?q={base64 encoded test input}`. Should show skeleton loading, then 20 cards with personalized descriptions (requires API key). Without API key, should show error state gracefully. `pnpm build` passes.

- [ ] **Task 8: Deep-dive modal — personalized article summary** (Priority: 2)

  **What does "done" look like?**
  Clicking any feed card opens a modal/dialog that shows a streaming personalized summary of that article.

  **Steps:**
  1. Create `src/components/deep-dive-modal.tsx`:
     - Use shadcn Dialog (or Sheet for a side panel — Sheet might be better UX for reading)
     - Props: `open: boolean`, `onClose: () => void`, `filename: string | null`, `userInput: string`
     - When opened with a filename:
       - Show loading skeleton
       - Call `POST /api/deep-dive` with `{ filename, userInput }`
       - Use the Vercel AI SDK's `useChat` hook or manual fetch with streaming to display the response as it streams in
       - For streaming: use `fetch` and read the stream. The `ai` package exports `useCompletion` hook which handles this — use it.
       - Actually, simplest approach: just use regular fetch, await the full response, render the markdown. Streaming is a nice-to-have — skip it for reliability.
     - Header: article title (derive from filename or pass as prop from the card), type badge, date
     - Body: rendered markdown summary (use a simple markdown renderer — just split by `##` headers and render as HTML, or use `dangerouslySetInnerHTML` with basic markdown-to-HTML conversion. Or install `react-markdown` if needed. Simplest: just render the text with whitespace preserved and bold/headers handled via CSS/regex.)
     - Footer: "Read full article on Lenny's Newsletter" link (construct as `https://www.lennysnewsletter.com/p/{slug}` — derive slug from filename by removing `newsletters/` prefix and `.md` suffix)
     - Close button
  2. Update `src/app/results/page.tsx`:
     - Add state for selected card: `const [selectedFilename, setSelectedFilename] = useState<string | null>(null)`
     - Pass onClick to each FeedCard that sets selectedFilename
     - Render DeepDiveModal with open={!!selectedFilename}, filename={selectedFilename}, userInput, onClose={() => setSelectedFilename(null)}

  **What should it NOT touch?** Do not modify API routes. Do not modify the landing page. Do not change the feed card component beyond adding the onClick.

  **How to verify?** Run `pnpm dev`, go to results page with a valid query, wait for cards to load, click a card. Modal/sheet should open, show loading, then display a personalized summary. Close button works. `pnpm build` passes.

- [ ] **Task 9: Share button and BYOK toggle** (Priority: 3 — polish)

  **What does "done" look like?**
  1. A share button on the results page that copies the current URL to clipboard with a toast notification.
  2. A small settings/gear icon that reveals an input field for users to paste their own Gemini API key.

  **Steps:**
  1. Create `src/components/share-button.tsx`:
     - A button with a share/link icon (use a simple SVG or emoji)
     - onClick: `navigator.clipboard.writeText(window.location.href)` then show a brief "Copied!" toast (can use a simple state-based tooltip that fades after 2 seconds, no need for a toast library)
     - Style: subtle, secondary button style
  2. Create `src/components/byok-toggle.tsx`:
     - A small gear/key icon button
     - onClick: toggles visibility of an input field below it
     - Input field: type="password", placeholder "Paste your Gemini API key"
     - onChange: save to localStorage key `lenny-for-you-api-key`
     - On page load: check localStorage for existing key, show a green dot/checkmark if key exists
     - Export a hook: `useApiKey()` that returns the stored key (or null)
  3. Add ShareButton to the results page header area
  4. Add BYOKToggle to the landing page (near the footer or in a corner) and results page
  5. Update the results page fetch calls: if `useApiKey()` returns a key, include it as `apiKey` in the request body
  6. Update the deep-dive modal similarly

  **What should it NOT touch?** Do not modify API routes. Do not modify the theme or layout.

  **How to verify?** On results page, click share button — URL is copied, "Copied!" appears briefly. Toggle BYOK, enter a test key, refresh page — key persists. The key is included in API requests (check Network tab). `pnpm build` passes.

- [ ] **Task 10: OG image and social metadata** (Priority: 3 — polish)

  **What does "done" look like?**
  When sharing the app URL on LinkedIn or Twitter, a compelling preview image and description appear.

  **Steps:**
  1. Create `src/app/opengraph-image.tsx` using Next.js OG image generation (ImageResponse from `next/og`):
     - 1200x630px image
     - Dark background matching the app theme
     - Large text: "Lenny, For You"
     - Subtitle: "650 posts. 300 guests. Personalized for you."
     - Clean, minimal design
  2. Update metadata in `src/app/layout.tsx`:
     - title: "Lenny, For You — Your Personalized Lenny's Newsletter Feed"
     - description: "650 posts. 300 guests. Which ones matter for YOU? Tell me your situation and I'll curate the perfect reading list from Lenny's archive."
     - openGraph: type "website", title, description, images (the generated OG image)
     - twitter: card "summary_large_image", title, description
  3. Also add metadata for the results page in `src/app/results/page.tsx` or a `layout.tsx` in the results folder:
     - title: "My Personalized Lenny Feed"

  **What should it NOT touch?** Do not modify any components or API routes.

  **How to verify?** `pnpm build` passes. Run `pnpm dev` and check that `http://localhost:3000/opengraph-image` returns an image. Check page source for correct meta tags.

- [ ] **Task 11: Responsive design and polish** (Priority: 3 — polish)

  **What does "done" look like?**
  The app looks great and works well on mobile (375px viewport), tablet, and desktop. Smooth animations. Good error handling throughout.

  **Steps:**
  1. Test and fix mobile layout:
     - Landing page: textarea should be full width, button full width on mobile
     - Results page: cards should stack in single column (they probably already do)
     - Deep-dive modal/sheet: should be full-screen on mobile (Sheet with `side="bottom"` or Dialog with full-width on small screens)
     - Font sizes: ensure readability on mobile (min 16px for body text to prevent iOS zoom)
  2. Add subtle animations:
     - Feed cards: fade in with stagger effect when results load (use CSS `@keyframes fadeIn` with `animation-delay` based on index)
     - Modal: slide up animation (shadcn Dialog/Sheet already has this)
     - Button: subtle hover scale
  3. Error handling:
     - API errors: show a friendly message with "Try again" button, not raw error text
     - Empty input: disable submit button, show hint text
     - Network errors: catch fetch failures, show offline-friendly message
     - Rate limit: if API returns 429, show "Too many requests. Try again in a few minutes."
  4. Loading states:
     - Ensure skeleton loaders match the actual card dimensions
     - Add a progress message that changes: "Reading your situation...", "Scanning 650 articles...", "Finding your matches..." (rotate every 2-3 seconds during loading)

  **What should it NOT touch?** Do not modify API routes or AI prompts. Do not add new features — only polish existing ones.

  **How to verify?** Run `pnpm dev`, test on mobile viewport (Chrome DevTools → toggle device toolbar → iPhone SE 375px). All pages look good, text is readable, buttons are tappable, modal works. Test error states by temporarily breaking the API key. `pnpm build` passes.

- [ ] **Task 12: Final build verification and cleanup** (Priority: 3)

  **What does "done" look like?**
  The app builds successfully with zero errors and zero warnings. All unused imports and dead code are removed. The .gitignore properly excludes .env files and node_modules. A clean git commit exists with all changes.

  **Steps:**
  1. Run `pnpm build` — must pass with zero errors
  2. Run `pnpm lint` — fix any linting errors
  3. Check for unused imports in all files
  4. Ensure `.env.local` is in `.gitignore` (it should be by default)
  5. Ensure `content/` directory is NOT in `.gitignore` (it needs to be deployed)
  6. Verify `node_modules/` and `.next/` are in `.gitignore`
  7. Clean up any TODO comments or console.log statements
  8. Verify the landing page → results → deep-dive flow works end-to-end (may require API key)
  9. Git add all files and commit with message: "feat: lenny-for-you — personalized Lenny's Newsletter feed"

  **What should it NOT touch?** Do not add new features. Do not modify the design. Just clean up and verify.

  **How to verify?** `pnpm build` passes with zero errors. `pnpm lint` passes. `git status` shows a clean working tree after commit. The app runs locally with `pnpm dev` and all pages render correctly.
