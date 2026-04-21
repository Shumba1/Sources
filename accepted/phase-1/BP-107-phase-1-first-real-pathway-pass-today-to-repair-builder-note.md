# BP-107 Builder Note — First real pathway pass: `/today` → `/repair`

## Files modified
- `src/config/page-data.ts`
- `src/app/(app)/today/page.tsx`
- `src/app/(app)/repair/page.tsx`
- `src/app/globals.css`

## Files moved
- `tasks/phase-1/open/BP-107-phase-1-first-real-pathway-pass-today-to-repair.md` → `tasks/phase-1/review/BP-107-phase-1-first-real-pathway-pass-today-to-repair.md`

## Files created
- `reviews/phase-1/open/BP-107-phase-1-first-real-pathway-pass-today-to-repair-builder-note.md`

## Changed-file list with one-line reason
- `src/config/page-data.ts` — upgraded canonical `/today` and `/repair` hero + section payloads to support a realistic solo-first pathway with one primary move and bounded secondary move.
- `src/app/(app)/today/page.tsx` — replaced scaffold preview with a practical orientation/action surface that maps to canonical page-data sections and routes users directly into `/repair`.
- `src/app/(app)/repair/page.tsx` — replaced scaffold preview with continuation-focused repair entry showing bounded first options and clear continuity from `/today`.
- `src/app/globals.css` — added minimal reusable pathway surface styles for cards, module list, and chips to support readable mobile-first top-level action framing.

## Validation results
- `pnpm lint` — pass
- `pnpm build` — blocked in this environment due outbound Google Fonts fetch failures from `next/font` during build

## Rework pass (interaction + hierarchy refinement)
- Added semantic icon mapping (`src/config/icon-map.ts`) and a central icon wrapper (`src/components/ui/icon.tsx`) so pathway cues are deliberate and consistent.
- Elevated one dominant CTA on both `/today` and `/repair`; secondary action now remains visually subordinate.
- Converted next-step cards and repair options to full-card links with directional affordances.
- Made repair category chips explicitly clickable with route-safe query/anchor targets.
- Strengthened hierarchy with clearer state/action/helper/action-label layers and reduced equal-weight card treatment.

## Pathway continuity approach
- `/today` now frames immediate orientation + one primary next move (open repair and run one short reset).
- `/repair` opens with “continue from today” framing and bounded “best first options” that are practical and solo-first.
- Both pages share direct, calm, non-judgmental action language and route-level CTA handoff.

## `/today` intent note
- `/today` now answers “what should I do next?” quickly with a concrete step, a time-bound expectation, and anti-escalation guardrails.
- Surface complexity is kept low: one primary move, one secondary move, and small support blocks.

## `/repair` intent note
- `/repair` now acts as the immediate action continuation, not a disconnected catalog.
- It starts with first-fit options for common activated states and keeps category browse secondary.

## Realism contract + fixture note
- Honours “after a fight” and “tonight, not someday” through the first suggested option and strict short-duration framing.
- Honours “distance without explosion” and “overwhelmed but still hoping” through additional bounded options.
- Maintains solo-first actionability without implying partner cooperation, personalization memory, or backend intelligence.

## Forbidden-scope confirmation
- No dynamic detail-route implementation was added (`/repair/[slug]` untouched).
- No backend/auth/billing/AI/persistence systems were introduced.
- Patch remained top-level and bounded to `/today` and `/repair` pathway surfaces + supporting page-data/styles.
