# Phase 3 Readiness Audit — 2026-04-27

## Scope

This audit checks whether the repo is aligned with the canonical phase model **before opening Phase 3 (Repair Centre with local content)**.

Primary checks:
- Canonical authority and phase-gate alignment
- Implemented-vs-configured route reality
- Phase 0–2 completion posture
- BP-301 opening-scope readiness (`/repair` + `/repair/[slug]`)

## Executive verdict

**Mostly on track, but not fully Phase 3-ready without a bounded cleanup packet.**

The app cleanly delivers the required local-first flow for Phase 2 (`/start → /today/check-in → /today/state → /today`) and has a strong Repair index surface already. However, there are critical implementation gaps and sequencing risks to resolve before BP-301 can be considered cleanly ready:

1. `/repair/[slug]` is configured canonically but not implemented in App Router.
2. `/guides/[slug]` and `/knowledge/[slug]` are also configured but not implemented; this is acceptable if deferred, but should be explicitly controlled in BP-301 scope.
3. `sitemap.ts` currently emits public URLs (`/store`, `/pricing`, `/safety`, `/store/[category]`) that do not have corresponding route files yet, creating crawlable dead-end URLs.

## Canon and phase-gate alignment

- Canonical authority order and active-set structure are present and explicit.
- Phase sequencing authority is clear: local-first before backend/auth/commerce/AI.
- Phase 3 remains correctly framed as Repair-centred; Phase 4 as Guides/Knowledge detail expansion.

Result: **Aligned at doctrine/config level**.

## Phase 0–2 implementation posture

### Confirmed strong

- Required Phase 1 baseline surfaces are implemented in App Router:
  - `/`, `/how-it-works`, `/start`, `/today/check-in`, `/today/state`, `/today`, `/repair`, `/guides`, `/knowledge`, `/progress`.
- Phase 2 deterministic classifier and fixture-driven state logic are implemented locally in `src/lib/check-in-state.ts`.
- Build and lint pass on current branch.

### Notable implementation reality

- `routeTree` includes the forward roadmap (including deferred families), which is acceptable.
- Current rendered app surface is intentionally narrower than configured route inventory.

Result: **Phase 0–2 quality appears healthy**.

## Phase 3 readiness findings

### Finding A — `/repair/[slug]` missing (High)

- Canonical route config includes `repairModule` at `/repair/[slug]`.
- `pageData` includes a dedicated `repairModule` object shape.
- App Router does not yet include `src/app/(app)/repair/[slug]/page.tsx`.

Impact:
- BP-301 opening mission cannot be considered complete until this route exists with a real module template.

### Finding B — Route-family sprawl risk at opening packet boundary (Medium)

- Route config includes `/guides/[slug]` and `/knowledge/[slug]`.
- These are currently unimplemented and should remain deferred from BP-301 unless explicitly widened.

Impact:
- Without packet discipline, opening work can drift into multi-family detail-route implementation before Repair detail is complete.

### Finding C — Sitemap emits unimplemented public URLs (High)

- `sitemap.ts` includes `/store`, `/pricing`, `/safety`, plus category paths.
- Corresponding App Router files are not present.

Impact:
- Crawlers are directed to non-existent pages.
- Technical SEO posture is internally inconsistent with implementation reality.

## BP-301 preflight recommendation

Open BP-301 with this exact bounded objective:

1. Implement `/repair/[slug]` only (dynamic detail route + module template render).
2. Keep `/guides/[slug]` and `/knowledge/[slug]` deferred.
3. Preserve state continuity: `/today/state` and `/today` links should resolve into concrete repair module slugs for first-step continuity.
4. Reconcile sitemap output with actually implemented public routes until Phase 4 commercial/public-readiness surfaces open.

## Suggested acceptance checks for BP-301

- `/repair` renders index + category browsing + state-relevant first module suggestion.
- `/repair/[slug]` renders module hero, protocol/checklist, reset timeline, and sticky action bar.
- `/start → /today/check-in → /today/state → /today → /repair/[slug]` works locally without backend.
- `/guides/[slug]` and `/knowledge/[slug]` remain out of scope.
- `pnpm lint` and `pnpm build` pass.

## Commands run during this audit

- `pnpm lint`
- `pnpm build`
- targeted file inspections under `docs/`, `src/config/`, `src/app/`, and `src/lib/`.
