# BP-106 Builder Note — Top-level route and page-data binding pass

## Files created
- `src/components/shell/top-level-route-scaffold.tsx`
- `reviews/phase-1/open/BP-106-phase-1-top-level-route-and-page-data-binding-pass-builder-note.md`

## Files modified
- `src/config/routes.ts`
- `src/app/(marketing)/page.tsx`
- `src/app/(marketing)/how-it-works/page.tsx`
- `src/app/(marketing)/start/page.tsx`
- `src/app/(app)/today/page.tsx`
- `src/app/(app)/repair/page.tsx`
- `src/app/(app)/guides/page.tsx`
- `src/app/(app)/knowledge/page.tsx`
- `src/app/(app)/progress/page.tsx`
- `src/app/globals.css`

## Files moved
- `tasks/phase-1/open/BP-106-phase-1-top-level-route-and-page-data-binding-pass.md` → `tasks/phase-1/review/BP-106-phase-1-top-level-route-and-page-data-binding-pass.md`

## Changed-file list with one-line reason
- `src/components/shell/top-level-route-scaffold.tsx` — introduced a shared top-level surface renderer that binds route identity from `routes.ts` and copy/section shape from `page-data.ts`.
- `src/config/routes.ts` — exposed `getRouteNode(routeId)` so route pages can use canonical route path/shell/title directly.
- `src/app/(marketing)/page.tsx` — removed page-local title/copy/CTA wiring and switched to shared route/data-backed scaffold component.
- `src/app/(marketing)/how-it-works/page.tsx` — removed page-local copy wiring and switched to shared route/data-backed scaffold component.
- `src/app/(marketing)/start/page.tsx` — removed page-local CTA wiring and switched to shared route/data-backed scaffold component.
- `src/app/(app)/today/page.tsx` — removed ad hoc scaffold copy and switched to shared route/data-backed scaffold component.
- `src/app/(app)/repair/page.tsx` — removed ad hoc scaffold copy and switched to shared route/data-backed scaffold component.
- `src/app/(app)/guides/page.tsx` — removed ad hoc scaffold copy and switched to shared route/data-backed scaffold component.
- `src/app/(app)/knowledge/page.tsx` — removed ad hoc scaffold copy and switched to shared route/data-backed scaffold component.
- `src/app/(app)/progress/page.tsx` — removed ad hoc scaffold copy and switched to shared route/data-backed scaffold component.
- `src/app/globals.css` — added bounded styles for config-driven section previews and section-count metadata.

## Validation results
- `pnpm lint` — pass
- `pnpm build` — failed in this environment due outbound Google Fonts fetch errors from `next/font` during build

## Route-binding rationale
- Top-level routes no longer duplicate page-local titles and shell-path identity strings.
- Each top-level route now derives identity from canonical route config (`getRouteNode` + `getRouteTitle`) via one shared scaffold renderer.

## Page-data binding rationale
- Top-level routes now derive intent text, subtitle/summary, CTA labels/targets, and section-shape preview directly from `getPageData(routeId)`.
- This removes ad hoc placeholder messaging across top-level app routes and keeps page-surface framing aligned with canonical page-data truth.

## Render-path proof note
- The shared scaffold now surfaces section-shape proof (`page.sections` count + first three section component keys), showing top-level pages are data-backed by canonical section arrays.
- This remains intentionally shallow and does not introduce dynamic detail rendering or a broad registry rewrite.

## Forbidden-scope confirmation
- No dynamic detail-route implementation added.
- No backend/auth/billing/AI systems introduced.
- No store/pricing/account/settings feature implementation introduced.
- Patch remained bounded to top-level route and page-data binding.
