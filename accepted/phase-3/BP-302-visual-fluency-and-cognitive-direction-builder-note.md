# BP-302 Builder Note — Visual Fluency and Cognitive Direction Pass

## Status

Builder implementation complete and moved to review.

Task packet created directly in review state:

`tasks/phase-3/review/BP-302-visual-fluency-and-cognitive-direction-pass.md`

## Purpose

BP-302 was created after visual review of the live marketing homepage, `/repair`, and `/today/state` showed that the implementation was structurally competent but still carried unnecessary cognitive load.

This packet does not widen the route surface. It hardens the live proof path so the product feels more like a calm repair instrument and less like a dashboard of equal-weight panels.

## Files created

| File | Reason |
|---|---|
| `tasks/phase-3/review/BP-302-visual-fluency-and-cognitive-direction-pass.md` | Creates the peer-reviewable BP-302 task with explicit acceptance criteria. |
| `reviews/phase-3/open/BP-302-visual-fluency-and-cognitive-direction-builder-note.md` | Records implementation, decisions, deferrals, and validation status. |

## Files modified

| File | Reason |
|---|---|
| `docs/BRAND_AND_VISUAL_SYSTEM.md` | Adds the BP-302 visual fluency rule: one primary decision, one dominant next action, one support layer, secondary choices recede. |
| `docs/DRIFT_REGISTER.md` | Adds D-040 recording the accepted visual-fluency and cognitive-direction decision. |
| `docs/README_ACTIVE_SET.md` | Notes BP-302 visual-fluency authority and confirms it does not widen the route surface. |
| `src/config/theme.ts` | Adds governed visual-hierarchy tokens and component-rule tightening for bottom nav, cards, and next-best-move surfaces. |
| `src/app/globals.css` | Adds BP-302 visual-fluency overrides that consume generated theme variables instead of new recurring hard-coded colour values. |
| `src/config/page-data.ts` | Updates the state primary CTA wording/href to point toward Repair rather than Today. |
| `src/lib/check-in-state.ts` | Removes stale `nextHref` state fixture routing and cleans state-next-move wording. |
| `src/app/(marketing)/page.tsx` | Reduces warm accent competition by making only the first value pillar the accent card and the other pillars supporting cards. |
| `src/app/(app)/today/page.tsx` | Simplifies Today into primary action, support panel, quiet script, and disclosed watch-outs. |
| `src/app/(app)/today/state/page.tsx` | Sends the primary CTA directly into the recommended repair module and reduces state recap into disclosed tertiary content. |
| `src/app/(app)/repair/page.tsx` | Reworks Repair into one dominant recommended action, one support explanation, disclosed backup options, and quiet browse-later categories. |
| `src/app/(app)/repair/[slug]/page.tsx` | Reworks repair module detail to emphasise the first step and reduce equal-weight secondary cards. |

## Visual-fluency decisions implemented

### 1. Member/app screens now privilege one action

`/today`, `/today/state`, `/repair`, and `/repair/[slug]` now use the same hierarchy:

1. compressed page framing;
2. one dominant primary CTA;
3. one support panel explaining why;
4. quiet script/context section;
5. disclosed or tertiary supporting content.

### 2. `/today/state` now moves forward

The primary CTA now links directly to:

`/repair/${repairModule.slug}?entry=state&state=${stateKey}`

It no longer sends the user backwards to `/today` as the main action.

### 3. `/repair` no longer presents all content at equal weight

The recommended repair module is dominant. Backup modules are behind a disclosure. Category browsing is explicitly labelled as “Browse later”. The solo-first note is an inline cue, not another full card.

### 4. Marketing accent use is calmer

Only the first homepage value pillar keeps the warm accent treatment. The other value pillars use quieter supporting-card styling so the above-fold area does not become three equally loud orange cards.

### 5. Bottom nav remains available but less dominant

The bottom navigation uses quieter governed tokens, a smaller width, softer active state, and lower shadow weight. The app content gets more bottom padding so the nav is less likely to crowd or cover important action content.

## Deferrals preserved

BP-302 did not open or implement:

- `/guides/[slug]`
- `/knowledge/[slug]`
- `/store`
- `/pricing`
- `/library`
- `/safety`
- `/login`
- `/sign-up`
- `/account`
- `/settings`

This preserves D-036 and D-038.

## Token conformance

New recurring BP-302 visual decisions are governed through `src/config/theme.ts` and surfaced via `src/config/theme-css.ts`, including:

- primary-action visual treatment;
- support-panel visual treatment;
- quiet-panel visual treatment;
- disclosure treatment;
- bottom-nav treatment;
- marketing accent/support-card distinction;
- visual-fluency spacing/radius/button variables.

The BP-302 CSS block in `globals.css` consumes those `--vf-*` variables rather than introducing a second recurring style layer.

## Review checklist

A reviewer should test:

1. `/` — confirm the homepage no longer uses three equal warm accent cards.
2. `/today` — confirm the primary action is visually obvious and secondary warnings recede.
3. `/today/state?connection=neutral&tension=uneasy&capacity=strained` — confirm the CTA goes directly to a repair slug and says `Start repair step`.
4. `/repair` — confirm the dominant next action is clear, with backup options disclosed.
5. `/repair/after-the-fight` — confirm the first step and checklist are stronger than support context.
6. Bottom nav — confirm it remains available but does not dominate the page.
7. Source review — confirm BP-302 did not open deferred route families.

## Validation attempted

Attempted:

```bash
corepack pnpm lint
corepack pnpm build
```

Both were blocked in this container because Corepack attempted to download `pnpm@10.33.0` and registry access failed:

```text
getaddrinfo EAI_AGAIN registry.npmjs.org
```

No successful local lint/build claim is made in this builder note. Reviewer must run the commands locally after applying the patch.

## Known limitation

This pass materially reduces visual clutter on the affected surfaces, but it does not remove every historical hard-coded value from `globals.css`. BP-302 governs new recurring visual-fluency decisions through `theme.ts`; a future lower-level CSS hygiene packet can continue reducing older pre-existing literals if desired.
