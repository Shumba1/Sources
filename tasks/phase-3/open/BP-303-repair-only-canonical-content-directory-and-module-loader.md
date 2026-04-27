# BP-303 — Repair-Only Canonical Content Directory and Module Loader

## Packet ID
`BP-303`

## Initial task state
`tasks/phase-3/open/`

## Objective
Create the Phase-3 Repair-only canonical content directory and typed module loader so `/repair`, `/repair/[slug]`, and `/today/state` consume structured local Repair content from `content/repair/*` instead of app-layer fixture arrays.

## Current phase
`Phase 3 — Repair Centre with local content`

## Why now
BP-301 opened the bounded `/repair/[slug]` proof path. BP-302, BP-302B, and BP-302C established the accepted visual and mobile baseline for the Repair Centre. Phase 3 can now move from scaffolded Repair routes to governed local Repair content.

This belongs now because `docs/marriage_os_implementation_phases.md` makes Repair the centre of Phase 3 and requires repair modules to work from local content/fixtures before backend, auth, commerce, Guides detail, or Knowledge detail work begins.

## Packet classification
- [ ] Code-only
- [x] Delivery-sensitive
- [x] High-risk

High-risk reason: this packet creates the first physical canonical content directory for Phase 3. It must not accidentally canonise provisional fixture copy, open deferred route families, or turn Repair modules into article content.

## Canonical files consulted
- `docs/README_ACTIVE_SET.md`
- `docs/marriage_os_implementation_phases.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`
- `docs/BRAND_AND_VISUAL_SYSTEM.md`
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
- `docs/Voice and Tone Bible.md`
- `tasks/phase-3/open/Phase-3-required-reading-memo.md`
- `tasks/phase-3/review/BP-301-phase-3-repair-centre-foundation.md`
- `tasks/phase-3/review/BP-302-visual-fluency-and-cognitive-direction-pass.md`
- `tasks/phase-3/review/BP-302B-visual-fluency-peer-correction-pass.md`
- `tasks/phase-3/review/BP-302C-mobile-viewport-and-typecheck-correction.md`

## Delivery architecture fields

- Object type: repair module content object / typed schema / loader / route binding
- Destination family: repair
- Target surface: `/repair`, `/repair/[slug]`, `/today/state`, related repair cards, repair-module CTAs
- Renderer / component path: `src/app/(app)/repair/page.tsx`, `src/app/(app)/repair/[slug]/page.tsx`, `src/app/(app)/today/state/page.tsx`; loader expected at `src/lib/repair-content.ts` or another declared `src/lib/*` path
- Moment of use: after a fight, high-temperature repair, shutdown/drift, overwhelm, same-day repair, late-night check-in
- Phase eligibility: Phase 3 explicitly covers repair index, symptom/category browsing, repair module template, checklist/protocol rendering, reset timeline, and state → repair flow using local content/fixtures
- Delivery-architecture sections consulted: `§3 Canonical content families and public presentation`; `§4.3 Operation`; `§5.2 State metadata required for each content object`; `§5.3 Safety classification`; `§6 Moment-of-use taxonomy`; `§16 phase mapping / readiness matrix`; `§18 Working matrix`; plus `MASTER_SPEC.md §11.1 Repair module skeleton` and `§11.2 Canonical V1 modules`

## Allowed files
- `tasks/phase-3/open/BP-303-repair-only-canonical-content-directory-and-module-loader.md`
- `content/repair/**`
- `src/schemas/domain.ts`
- `src/schemas/repair-module.ts`
- `src/lib/repair-content.ts`
- `src/lib/check-in-state.ts`
- `src/config/page-data.ts`
- `src/app/(app)/repair/page.tsx`
- `src/app/(app)/repair/[slug]/page.tsx`
- `src/app/(app)/today/state/page.tsx`
- `docs/DRIFT_REGISTER.md`
- `docs/README_ACTIVE_SET.md`
- `reviews/phase-3/open/BP-303-repair-only-canonical-content-directory-and-module-loader-builder-note.md`

If the builder needs to touch any additional file, stop and record the reason before expanding scope.

## Forbidden files
- `src/app/(app)/guides/[slug]/**`
- `src/app/(app)/knowledge/[slug]/**`
- `src/app/(marketing)/store/**`
- `src/app/(marketing)/pricing/**`
- `src/app/(marketing)/library/**`
- `src/app/(marketing)/safety/**`
- `src/app/(auth)/**`
- `content/guides/**`
- `content/knowledge/**`
- `content/products/**`
- `sources/**`
- `docs/MASTER_SPEC.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- `docs/marriage_os_implementation_phases.md`
- database, Supabase, auth, payment, entitlement, AI, or commerce files
- Any undeclared file outside the allowed list

## Required output

The completed patch must produce a Repair-only content loading layer with these outcomes:

1. Root-level `content/repair/*` exists as the Phase-3 Repair content home.
2. No canonical Repair content is placed under `src/content/*`.
3. A typed Repair module schema exists and makes required fields explicit.
4. Current local Repair fixture/scaffold modules are migrated into `content/repair/*` as structured content objects.
5. Every migrated module declares source status honestly. Fixture/scaffold content must be marked as provisional or fixture-backed, not source-conditioned or ratified unless it has actually passed the source pipeline.
6. Every module carries a controlled safety classification compatible with `DELIVERY_ARCHITECTURE.md §5.3`: `SAFE`, `CAUTION`, `SCREEN`, or `EXCLUDE`.
7. Every module has a moment-of-use and state metadata sufficient for `/today/state` recommendation logic.
8. A loader/adaptor exposes content through functions such as:
   - `getAllRepairModules()`
   - `getRepairModuleBySlug(slug)`
   - `getRecommendedRepairModuleForState(state)`
   - `getRelatedRepairModules(slug)`
9. `/repair` renders from the loader, not from local page arrays.
10. `/repair/[slug]` renders from the loader and generates params from content slugs.
11. `/today/state` routes its primary next action into a Repair module selected through the loader/state mapping.
12. Deferred route families stay deferred.
13. BP-302B/BP-302C visual hierarchy and mobile containment remain intact.
14. Governance notes are updated only where required to record the new content directory and active Repair-only scope.

## Acceptance criteria
- [ ] `content/repair/*` is the only new canonical content directory created by this packet.
- [ ] No `content/guides/*`, `content/knowledge/*`, or `content/products/*` content is introduced.
- [ ] No `src/content/*` canonical content directory is introduced.
- [ ] Repair modules are structured intervention objects, not markdown articles or long-form essays.
- [ ] The schema requires at least: `slug`, `title`, `category`, `safetyClass`, `moment`, `stateFit`, `situation`, `bestUsedWhen`, `notFor`, `firstStep`, `checklist`, `quickScript`, `watchOuts`, `successCondition`, `fallbackMove`, `relatedModules`, and `sourceTrace` or clearly equivalent fields.
- [ ] `safetyClass` uses only the controlled enum from Delivery Architecture.
- [ ] `sourceTrace.status` or equivalent distinguishes `fixture`, `source-conditioned`, and `ratified` states without pretending provisional content is canonical final content.
- [ ] `/repair` uses the content loader for its recommended module, backup modules, and category browsing.
- [ ] `/repair/[slug]` uses the content loader for module detail rendering.
- [ ] `/today/state` uses the loader/state mapping for its primary Repair CTA.
- [ ] Unknown or invalid repair slugs produce a correct not-found path, not a silent fallback to unrelated content.
- [ ] Related modules do not point to missing slugs.
- [ ] The accepted BP-302B/BP-302C visual baseline is preserved.
- [ ] `/guides/[slug]` and `/knowledge/[slug]` are not created or opened.
- [ ] Store, pricing, library, safety, auth, account, database, entitlement, and AI work remain untouched.
- [ ] `docs/DRIFT_REGISTER.md` records the new Repair-only content-directory decision if it changes or clarifies prior implementation assumptions.
- [ ] `docs/README_ACTIVE_SET.md` identifies BP-303 as the active Phase-3 Repair content-loading packet while the task is in flight.

## Validation steps
- [ ] `pnpm lint`
- [ ] `pnpm build`
- [ ] Manually test `/repair`.
- [ ] Manually test `/repair/after-the-fight?entry=repair-index&state=heatedButReachable` or the nearest migrated equivalent slug.
- [ ] Manually test `/today/state?connection=neutral&tension=uneasy&capacity=strained` and verify the primary CTA points into a concrete Repair module.
- [ ] Manually test at least one invalid repair slug and confirm not-found behaviour.
- [ ] Inspect mobile viewport for `/repair`, `/repair/[slug]`, and `/today/state` to confirm BP-302C containment remains intact.
- [ ] Search for duplicated app-layer Repair module arrays in `src/app/(app)/repair/page.tsx`, `src/app/(app)/repair/[slug]/page.tsx`, and `src/app/(app)/today/state/page.tsx`; none should remain as content sources.
- [ ] Confirm no files exist under `content/guides`, `content/knowledge`, or `content/products` unless explicitly pre-existing and untouched.
- [ ] Confirm no new route directory exists for `/guides/[slug]`, `/knowledge/[slug]`, `/store`, `/pricing`, `/library`, `/safety`, `/login`, `/sign-up`, `/account`, or `/settings`.

## Review lane
- [ ] Standard
- [x] Content-sensitive
- [x] High-risk

## Reviewers required
- [x] Reviewer
- [x] Content / Structure Operator
- [x] Human Governor

## Risks / side effects
- Provisional fixture content may be mistaken for final canonical content if `sourceTrace` is weak.
- A schema that is too loose will allow article-style Repair content and recreate clutter later.
- A schema that is too rigid may block valid source-conditioned module variations.
- State-to-module mapping may overfit the current small fixture set.
- Creating a root-level `content/repair/*` directory may tempt builders to create Guides, Knowledge, or Products content prematurely.
- If the loader is poorly typed, missing slugs and broken related-module links may not be caught until runtime.

## Stop conditions
- The builder cannot create `content/repair/*` without also opening Guides, Knowledge, Store, auth, database, entitlement, or AI surfaces.
- The builder cannot preserve BP-302B/BP-302C visual baseline while wiring the loader.
- The builder cannot assign a safety class to a module without inventing context.
- The builder cannot distinguish fixture/provisional content from source-conditioned or ratified content.
- The builder finds that current fixture content is too thin to migrate safely without fabricating doctrine.
- `pnpm build` fails due to route typing, missing slugs, or content shape issues and cannot be repaired within the allowed file list.

## Builder handoff package

When the Builder finishes, this section must include:

- Changed files:
- Change summary:
- Validation results:
- Known risks / side effects:
- Review notes:
- Recommended next state: `review` / `blocked`

## Post-review disposition

- Review verdict:
- Final task state: `done` / `rework` / `blocked`
- Review report path:
- Governor decision note:
