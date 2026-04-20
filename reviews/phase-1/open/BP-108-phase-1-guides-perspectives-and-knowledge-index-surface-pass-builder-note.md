# BP-108 Builder Note — Guides/Perspectives and Knowledge index surface pass

## Files modified
- `src/config/page-data.ts`
- `src/config/icon-map.ts`
- `src/app/(app)/guides/page.tsx`
- `src/app/(app)/knowledge/page.tsx`
- `src/app/globals.css`

## Files moved
- `tasks/phase-1/open/BP-108-phase-1-guides-perspectives-and-knowledge-index-surface-pass.md` → `tasks/phase-1/review/BP-108-phase-1-guides-perspectives-and-knowledge-index-surface-pass.md`

## Files created
- `reviews/phase-1/open/BP-108-phase-1-guides-perspectives-and-knowledge-index-surface-pass-builder-note.md`

## Changed-file list with one-line reason
- `src/config/page-data.ts` — upgraded canonical `/guides` and `/knowledge` hero/section payloads so each route now has distinct top-level intent, grouped pathways, and navigable action targets.
- `src/config/icon-map.ts` — added semantic icon roles needed for consistent Perspectives/Knowledge visual affordances.
- `src/app/(app)/guides/page.tsx` — replaced scaffold preview with a real Perspectives index surface using canonical section groups and clickable path/bridge/action blocks.
- `src/app/(app)/knowledge/page.tsx` — replaced scaffold preview with a real Knowledge index surface using canonical topic/moment/article grouping and practical next-step routing.
- `src/app/globals.css` — added minimal reusable index-surface styles (grid cards + link-list treatments) for readable, clickable top-level groupings.

## Validation results
- `pnpm lint` — pass
- `pnpm build` — blocked in this environment due outbound Google Fonts fetch failures from `next/font` during build

## `/guides` surface intent note
- `/guides` now behaves as practical framing/directional help: users choose one perspective path, scan common misread loops, then route into action.

## `/knowledge` surface intent note
- `/knowledge` now behaves as explanatory context: users browse mechanism-level topics and moment-based reading paths, then route into practical repair action.

## Distinction note
- Distinction is made explicit by route framing + section architecture: `/guides` is path/lens oriented (how to frame and proceed), while `/knowledge` is mechanism/moment oriented (how to understand and sense-make before acting).

## Source-object-map note
- Groupings follow object-map discipline by keeping top-level surfaces as bounded object families (`perspective` path/bridge objects vs `knowledge` topic/article objects) and avoiding raw source-reservoir exposure or arbitrary mixed taxonomy.

## Forbidden-scope confirmation
- No dynamic detail routes were implemented (`/guides/[slug]` and `/knowledge/[slug]` untouched).
- No backend/auth/billing/AI/search/persistence systems were introduced.
- Patch stayed top-level and bounded to route surfaces, canonical page-data, and minimal supporting UI/style helpers.
