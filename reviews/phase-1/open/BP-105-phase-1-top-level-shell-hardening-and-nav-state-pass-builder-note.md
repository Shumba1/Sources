# BP-105 Builder Note — Top-level shell hardening and nav state pass

## Files created
- `reviews/phase-1/open/BP-105-phase-1-top-level-shell-hardening-and-nav-state-pass-builder-note.md`

## Files modified
- `src/config/routes.ts`
- `src/components/shell/member-bottom-nav.tsx`
- `src/app/(app)/today/page.tsx`
- `src/app/(app)/repair/page.tsx`
- `src/app/(app)/guides/page.tsx`
- `src/app/(app)/knowledge/page.tsx`
- `src/app/(app)/progress/page.tsx`
- `src/app/globals.css`

## Changed-file list with one-line reason
- `src/config/routes.ts` — added central route helpers for path normalization, robust nav matching, and canonical route-title lookup.
- `src/components/shell/member-bottom-nav.tsx` — switched active-state logic from ad hoc string checks to centralized route-truth helper.
- `src/app/(app)/today/page.tsx` — hardened scaffold consistency using canonical route title, scaffold status cue, and predictable CTA placement.
- `src/app/(app)/repair/page.tsx` — hardened scaffold consistency using canonical route title, scaffold status cue, and predictable CTA placement.
- `src/app/(app)/guides/page.tsx` — hardened scaffold consistency using canonical route title (`Perspectives`), scaffold status cue, and predictable CTA placement.
- `src/app/(app)/knowledge/page.tsx` — hardened scaffold consistency using canonical route title, scaffold status cue, and predictable CTA placement.
- `src/app/(app)/progress/page.tsx` — hardened scaffold consistency using canonical route title, scaffold status cue, and predictable CTA placement.
- `src/app/globals.css` — improved scaffold-status styling and strengthened bottom-nav inactive/hover/focus/active readability.

## Validation results
- `pnpm lint` — pass
- `pnpm build` — failed in this environment due outbound Google Fonts fetch errors from `next/font` during build

## Nav-state hardening rationale
- Active-state derivation now uses `getPrimaryNavForPath(pathname)` in route config rather than duplicate `pathname.startsWith` checks inside the nav component.
- Matching accounts for exact matches, nested paths, and dynamic segment patterns through central helpers.

## Route-truth alignment note
- Route truth remains sourced from canonical `routeTree` and `primaryMemberNav` in `src/config/routes.ts`.
- App-shell scaffold headings now consume `getRouteTitle(routeId)` from canonical route data so display names stay aligned with route config.

## Forbidden-scope confirmation
- No dynamic-detail route implementation added.
- No backend/auth/billing/AI systems introduced.
- No route-group structure rewrite introduced.
- Patch remained bounded to shell/nav/scaffold-hardening surfaces.
