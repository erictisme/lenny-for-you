# Lenny, For You — Round 3: Bug Fixes & UX Polish

Testing revealed critical bugs and UX gaps. Fix them before competition submission.

---

## Tasks

- [x] **Task 1: Fix article-not-found bug (CRITICAL)**

  **What does "done" look like?**
  Deep-dive modal loads actual article content when you click a card. No more "Article not found" errors. Synthesis brief loads successfully (no red error banner).

  **Root cause:** `src/data/compact-index.ts` builds CATALOG_PROMPT with `i.id` (a number) as the first pipe-delimited field, but `src/lib/prompts.ts` tells Gemini the first field is "filename". So Gemini invents filenames from titles instead of using real slugified filenames.

  **Steps:**
  1. Open `src/data/compact-index.ts` and find the line that builds each CATALOG_PROMPT entry (the template literal with pipe-delimited fields)
  2. Change the first field from `i.id` (or whatever numeric field is there) to `i.filename`
  3. Open `src/lib/prompts.ts` and verify the format description matches: first field should be described as "filename"
  4. Run `pnpm build` — must pass
  5. Verify by checking the generated CATALOG_PROMPT output: lines should start with paths like `newsletters/some-article-slug.md|...` NOT numbers like `0|...`

  **What should it NOT touch?** Don't change the ranking logic, the Zod schema, or the deep-dive/batch-summarize routes — they already expect filenames.

  **How to verify?** `pnpm build` passes. Inspect the CATALOG_PROMPT constant — first field of each line is a real filename from content/.

- [x] **Task 2: Make hero text more prominent**

  **What does "done" look like?**
  The "650 posts. 300 guests." heading is roughly 2x larger than current size. The numbers stand out visually. The page feels like it has a clear, bold headline.

  **Steps:**
  1. Open `src/components/hero.tsx`
  2. Increase the main heading size — currently `text-4xl sm:text-5xl`, change to approximately `text-5xl sm:text-7xl`
  3. Make the numbers "650" and "300" visually distinct — either wrap them in a span with primary color, extra bold weight, or both
  4. Keep the subheading ("Tell me about your situation...") smaller as contrast
  5. Run `pnpm build` — must pass

  **What should it NOT touch?** Don't change the input form, button, or page layout. Just the hero text sizing and emphasis.

  **How to verify?** `pnpm build` passes.

- [x] **Task 3: Add GitHub skills link + improve "Try in Claude Code" UX**

  **What does "done" look like?**
  Each article card has a visible link to `https://github.com/erictisme/lenny-skills` and the "Try in Claude Code" button has a brief explanation of what it does.

  **Steps:**
  1. Open `src/components/feed-card.tsx`
  2. Find the "Try in Claude Code" button section
  3. Below the button, add a brief explanation: "Opens a coaching session about this article in your terminal"
  4. Change the help text from "Requires Claude Code + Lenny MCP" to include a link to the GitHub skills repo
  5. Add a visible link: something like "Get 18 coaching journeys →" linking to `https://github.com/erictisme/lenny-skills`
  6. The link should open in a new tab (`target="_blank" rel="noopener noreferrer"`)
  7. Run `pnpm build` — must pass

  **What should it NOT touch?** Don't change the copy-to-clipboard functionality of the button itself. Don't remove the "Try in Claude Code" button. Just add context around it.

  **How to verify?** `pnpm build` passes. The GitHub link is visible on each card.

- [ ] **Task 4: Final build verification**

  **What does "done" look like?**
  `pnpm build` passes with zero errors. All previous tasks are committed.

  **Steps:**
  1. Run `pnpm build`
  2. If it fails, fix the errors
  3. Confirm all 3 previous tasks are committed

  **What should it NOT touch?** Nothing new — just verify.

  **How to verify?** `pnpm build` exits with code 0.
