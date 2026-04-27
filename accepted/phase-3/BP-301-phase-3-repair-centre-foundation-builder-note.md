# BP-301 Builder Note — Repair Centre foundation with first repair slug

## Status

Builder implementation complete and moved to review.

Task packet moved from:

`tasks/phase-3/open/BP-301-phase-3-repair-centre-foundation.md`

to:

`tasks/phase-3/review/BP-301-phase-3-repair-centre-foundation.md`

## Files created

| File | Reason |
|---|---|
| `src/lib/repair-modules.ts` | Adds bounded local repair module fixtures and slug helpers for Phase 3. |
| `src/app/(app)/repair/[slug]/page.tsx` | Opens the first bounded dynamic Repair detail route. |
| `src/config/theme-css.ts` | Derives runtime CSS variable declarations from `src/config/theme.ts`. |
| `reviews/phase-3/open/BP-301-phase-3-repair-centre-foundation-builder-note.md` | Records implementation, validation, deferrals, and visual-system compliance. |

## Files modified

| File | Reason |
|---|---|
| `docs/marriage_os_implementation_phases.md` | Clarified minor wording so `/repair/[slug]` opens in Phase 3 while `/guides/[slug]` and `/knowledge/[slug]` stay Phase 4. Also aligned commercial/auth defer labels to later canonical phases. |
| `docs/README_ACTIVE_SET.md` | Updated the accepted defer map to match the corrected canonical phase interpretation. |
| `docs/Implementation Plan.md` | Updated companion-plan wording so it does not imply Guides/Knowledge detail routes open with Repair. |
| `docs/DRIFT_REGISTER.md` | Updated D-036 and added D-038 and D-039 for route-boundary and theme-token conformance decisions. |
| `src/app/layout.tsx` | Injects CSS variables derived from `theme.ts` at root runtime. |
| `src/app/globals.css` | Normalised recurring hard-coded app shell/action/card values to governed CSS variables and added repair-module styles. |
| `src/app/sitemap.ts` | Reconciled sitemap output to implemented public indexable routes only. |
| `src/config/theme.ts` | Expanded `cssVariables` so recurring app shell/action/card decisions route through the canonical token layer. |
| `src/config/page-data.ts` | Replaced repair query-string placeholders with concrete `/repair/[slug]` paths where applicable. |
| `src/app/(app)/repair/page.tsx` | Reworked Repair index to use bounded local module fixtures and concrete slug links. |
| `src/app/(app)/today/page.tsx` | Routes Today’s primary action into the recommended concrete repair module slug. |
| `tasks/phase-3/review/BP-301-phase-3-repair-centre-foundation.md` | Marked task packet as review-ready. |

## Files removed

| File | Reason |
|---|---|
| `src/app/globals.css.orig` | Removed stale parallel CSS authority that could create visual-system drift. |

## Slug set implemented

BP-301 intentionally implements a bounded local slug set:

- `/repair/after-the-fight`
- `/repair/distance-reset`
- `/repair/overwhelm-decompression`

The first/default proof path is `/repair/after-the-fight`.

## Repair Centre rationale

`/repair` now behaves as a local Repair Centre rather than a placeholder surface. It derives its recommended and supporting modules from `src/lib/repair-modules.ts`, preserves scan-first hierarchy, and keeps Repair framed as the action/intervention surface.

## `/repair/[slug]` rationale

The dynamic route renders a real local repair module with:

- module summary
- best-used-when / not-for boundary
- first-step CTA
- checklist/protocol
- reset timeline
- caution card
- quick script
- sticky action bar

This is intentionally not a generic article renderer and not a Guides/Knowledge detail system.

## State → repair continuity rationale

`/today` now resolves the current local state to a recommended repair module and links directly into `/repair/[slug]`.

The intended local proof path is now:

`/start → /today/check-in → /today/state → /today → /repair/[slug]`

## Deferrals confirmed

The following route families were not opened:

- `/guides/[slug]`
- `/knowledge/[slug]`
- commercial/public-readiness route files
- auth/account/settings route files

The phase wording now records `/guides/[slug]` and `/knowledge/[slug]` as Phase 4 work, while `/repair/[slug]` is the Phase 3 proof path.

## Brand and visual-system compliance

`docs/BRAND_AND_VISUAL_SYSTEM.md` remains the visual authority and `src/config/theme.ts` is now more operationally enforced.

Recurring shell/action/card CSS decisions were moved behind governed variables in `theme.ts`, exposed through `src/config/theme-css.ts`, and injected in `src/app/layout.tsx`.

Repair remains:

- dark
- sparse
- blue-led
- tool-first
- action/intervention-oriented
- visually distinct from Guides/Perspectives and Knowledge

No marketing-only warm ember/campaign CTA styling was introduced into the member Repair flow.

## SEO / sitemap note

`sitemap.ts` now emits only implemented public indexable routes:

- `/`
- `/how-it-works`

Deferred public/commercial surfaces are no longer emitted before their App Router pages exist.

## Validation results

Attempted:

- `pnpm lint`
- `pnpm build`

Result:

- Could not complete in this container. Corepack attempted to download `pnpm@10.33.0`, but network access failed with `getaddrinfo EAI_AGAIN registry.npmjs.org`.

Not claimed as passed.

Reviewer should run locally after applying this patch:

```bash
pnpm lint
pnpm build
```

## Scope confirmations

- No backend, database, auth, commerce, entitlement, or AI systems were introduced.
- No Guides or Knowledge detail routes were opened.
- No broad redesign was introduced.
- Repair now has a bounded dynamic proof path and local content fixture layer.
