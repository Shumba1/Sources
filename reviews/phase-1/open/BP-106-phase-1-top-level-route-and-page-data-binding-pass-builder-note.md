# BP-106 Builder Note — Top-level route and page-data binding pass

## Files modified
- `src/app/(marketing)/page.tsx`
- `src/app/(marketing)/how-it-works/page.tsx`
- `src/app/(marketing)/start/page.tsx`
- `src/app/(app)/today/page.tsx`
- `src/app/(app)/repair/page.tsx`
- `src/app/(app)/guides/page.tsx`
- `src/app/(app)/knowledge/page.tsx`
- `src/app/(app)/progress/page.tsx`

## Files moved
- `tasks/phase-1/open/BP-106-phase-1-top-level-route-and-page-data-binding-pass.md` → `tasks/phase-1/review/BP-106-phase-1-top-level-route-and-page-data-binding-pass.md`

## Changed-file list with one-line reason
- `src/app/(marketing)/page.tsx` — bound top-level home surface to canonical route title + canonical page-data intent/CTA/sections.
- `src/app/(marketing)/how-it-works/page.tsx` — bound route surface to canonical route title + canonical page-data subtitle/CTA/sections.
- `src/app/(marketing)/start/page.tsx` — bound route surface to canonical route title + canonical page-data subtitle/CTA/sections.
- `src/app/(app)/today/page.tsx` — replaced ad hoc scaffold copy with canonical page-data-driven summary/CTA/sections.
- `src/app/(app)/repair/page.tsx` — replaced ad hoc scaffold copy with canonical page-data-driven summary/CTA/sections.
- `src/app/(app)/guides/page.tsx` — replaced ad hoc scaffold copy with canonical page-data-driven summary/CTA/sections.
- `src/app/(app)/knowledge/page.tsx` — replaced ad hoc scaffold copy with canonical page-data-driven summary/CTA/sections.
- `src/app/(app)/progress/page.tsx` — replaced ad hoc scaffold copy with canonical page-data-driven summary/CTA/sections.

## Validation results
- `pnpm lint` — pass
- `pnpm exec tsc --noEmit` — pass
- `pnpm build` — blocked in this environment due outbound Google Fonts fetch errors from `next/font` during build

## Route-binding rationale
- Top-level pages now take canonical surface names from `getRouteTitle(routeId)` instead of page-local strings.
- Top-level pages include explicit route-path/surface metadata labels aligned to canonical route identity.

## Page-data binding rationale
- Top-level pages now use `getPageData(routeId)` for intent/subtitle summary text, primary CTA target/label, and section-array-driven surface preview.
- This materially reduces page-local duplication and keeps top-level surface framing aligned with canonical page-data truth.

## Render-path proof note
- Each top-level page now exposes a bounded page-data proof surface (`sections.length` + preview of first three configured section components).
- This remains shallow and top-level only; no dynamic detail-route rendering was introduced.

## Forbidden-scope confirmation
- No dynamic detail-route implementation added.
- No backend/auth/billing/AI systems introduced.
- No store/pricing/account/settings feature implementation introduced.
- Patch remained bounded to top-level route and page-data binding.
