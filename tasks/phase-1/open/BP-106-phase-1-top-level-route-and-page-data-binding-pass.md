# BP-106 — Top-level route and page-data binding pass

## Packet metadata
- **Packet ID:** BP-106
- **Phase:** Phase 1
- **Status:** Open
- **Type:** Implementation / route-binding / page-data / delivery-sensitive packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-1/review/`

---

## Objective

Bind the accepted top-level Phase 1 routes to **canonical route truth** and **page-data truth** so the shell is no longer just structurally correct, but begins to operate as a coherent config-driven application surface.

This packet exists to:

- connect top-level route files more deliberately to `src/config/routes.ts`
- connect top-level route files to `src/config/page-data.ts`
- reduce page-local duplication in titles, scaffold labels, and section framing
- prove the project can render top-level surfaces from canonical config/data rather than ad hoc page-local strings

This is the first real **route/data-binding** packet.  
It is **not** a dynamic-route packet, **not** a content-population packet, and **not** a backend packet.

---

## Why this packet exists now

Phase 1 has already achieved the following:

- **BP-100** installed the baseline pnpm + Next.js + React + TypeScript + Tailwind stack and preserved the config-driven architecture.
- **BP-101** split the shell into marketing and app boundaries and created the required top-level scaffold routes.
- **BP-104** refined mobile shell spacing and nav rhythm.
- **BP-105** hardened top-level shell consistency and centralised nav-state behaviour against canonical route truth.

That means the next sensible step is to move from:
- shell-only scaffolds

to:
- shell + top-level route/data binding

without yet opening dynamic routes or deeper product logic.

---

## Required reading order

Read in this order before changing anything:

1. `AGENTS.md`
2. `docs/MASTER_SPEC.md`
3. `docs/marriage_os_implementation_phases.md`
4. `docs/DRIFT_REGISTER.md`
5. `docs/DELIVERY_ARCHITECTURE.md`
6. `REPO_TREE_PLACEMENT_PLAN.md`
7. accepted/active BP-101 packet and builder note
8. accepted/active BP-105 packet and builder note
9. current live:
   - `src/config/routes.ts`
   - `src/config/page-data.ts`
   - `src/config/theme.ts`
   - `src/config/seo.ts`
   - `src/config/component-registry.ts`
   - `src/config/runtime-component-registry.tsx`
   - `src/lib/render-page-sections.tsx`
   - `src/lib/section-resolvers.ts`
   - `src/app/(marketing)/**`
   - `src/app/(app)/**`

If authority conflicts appear, stop and report them. Do not improvise.

---

## Task classification

- **Type:** route/data binding / top-level surface binding / delivery-sensitive
- **Object type:** top-level route surfaces and page-data resolution
- **Destination family:** application shell and top-level product surfaces, not editorial detail content
- **Target surface:** `/`, `/how-it-works`, `/start`, `/today`, `/repair`, `/guides`, `/knowledge`, `/progress`
- **Renderer / component path:** `src/app/**`, `src/config/**`, `src/lib/**`, minimal supporting `src/components/**`
- **Moment of use:** first load, top-level navigation, first interpretation of each major product surface
- **Phase-eligible now:** yes
- **Delivery Architecture reference:** top-level surface fit, shell-to-surface coherence, moment-of-use clarity, phase-eligible route binding

This packet is delivery-sensitive because it determines how top-level routes derive meaning and presentation from canonical truth.

---

## In scope

### 1. Top-level route identity binding
Ensure each top-level route derives its identity from canonical route truth rather than page-local duplication.

At minimum, bind or align:
- route title
- route label
- scaffold framing/metadata where appropriate
- route-level surface intent

Authority source:
- `src/config/routes.ts`

The route files should stop behaving like isolated one-off pages and instead behave like expressions of route config.

### 2. Page-data binding for top-level surfaces
Use `src/config/page-data.ts` to drive top-level route content shape where appropriate.

The goal is not rich content.  
The goal is that top-level pages become **config/data-backed** rather than hand-authored placeholders.

This can include:
- headings
- deck/summary copy
- status text
- scaffold CTA group labels
- top-level surface metadata
- section arrays where the existing architecture supports them

Keep the binding shallow and top-level only.

### 3. Rendering path proof
Prove, in a bounded way, that the existing render architecture can support top-level route surfaces.

This may include safe, minimal use of:
- `src/config/component-registry.ts`
- `src/config/runtime-component-registry.tsx`
- `src/lib/render-page-sections.tsx`
- `src/lib/section-resolvers.ts`

But only if needed to make the top-level route/data binding coherent and reviewable.

Do **not** over-engineer a full content-render engine in this packet.

### 4. Surface consistency across top-level routes
Make top-level routes feel like they belong to one config-driven system.

That includes:
- consistent way titles are derived
- consistent way scaffold/state text is derived
- less page-by-page handcrafting
- clearer relationship between route config and rendered surface

### 5. Minimal SEO/config coherence where needed
If top-level route binding requires tiny alignment to `src/config/seo.ts`, that is allowed.

Keep it minimal and top-level only.

---

## Out of scope

- dynamic detail routes:
  - `/repair/[slug]`
  - `/guides/[slug]`
  - `/knowledge/[slug]`
- full content population
- real library/article rendering
- backend/auth/billing/AI work
- database or API wiring
- store/pricing/account/settings implementation
- dynamic resolver systems for future detail pages
- large schema rewrites
- broad visual redesign
- shell ownership changes
- feature logic inside Today/Repair/Guides/Knowledge/Progress beyond top-level surface binding

---

## Preferred implementation posture

This packet should prefer:

- top-level config binding over page-local duplication
- small, reviewable route-file changes
- deliberate reuse of existing config/lib structure
- shallow proof of architecture, not maximal architecture buildout
- route/data truth that can scale later without becoming abstract theatre now

Avoid:
- giant registry rewrites
- creating a “platform framework” inside the repo
- dynamic-detail abstractions prematurely
- converting every scaffold into a mini product feature
- hardcoded strings duplicated in route pages once a canonical config source exists

---

## Allowed files

Builder may touch only the minimum file set required for top-level route/data binding.

Likely allowed areas:

- `src/app/(marketing)/**`
- `src/app/(app)/**`
- `src/config/routes.ts`
- `src/config/page-data.ts`
- `src/config/seo.ts` only if tiny route-level coherence is needed
- `src/config/component-registry.ts`
- `src/config/runtime-component-registry.tsx`
- `src/lib/render-page-sections.tsx`
- `src/lib/section-resolvers.ts`
- minimal supporting `src/components/**` only if absolutely required to make the binding coherent

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- dynamic detail-route files
- backend/auth/billing files
- `sources/**`
- Phase 0 governance files
- store/pricing/account/settings implementations
- content-source ingestion files
- unrelated feature/business logic
- large schema changes unrelated to top-level route/data binding

---

## Acceptance criteria

BP-106 passes only if all of the following are true:

1. top-level routes derive more of their identity from canonical config rather than page-local duplication
2. `src/config/page-data.ts` materially drives top-level route surfaces
3. top-level routes feel more like config-driven product surfaces and less like ad hoc placeholders
4. route/data binding remains shallow and reviewable
5. no dynamic detail-route implementation was introduced
6. no backend/auth/billing/AI creep was introduced
7. no broad visual redesign was introduced
8. changes remain bounded enough to clearly review as a top-level binding packet
9. `pnpm lint` passes
10. `pnpm build` passes
11. the repo is better prepared for the first real pathway packet after this

---

## Validation requirements

Run and record:

- `pnpm lint`
- `pnpm build`

Also provide:
- changed-file list
- one-line reason per changed file
- note on route-truth binding approach
- note on page-data binding approach
- note on any render-path proof introduced
- explicit confirmation that no forbidden-scope systems were introduced

If validation fails, record the exact failure.

---

## Builder instructions

1. Inspect how top-level routes currently derive titles, copy, and scaffold framing.
2. Identify where page-local duplication still exists.
3. Move only the top-level truth that genuinely belongs in config/page-data.
4. Prefer reuse of the existing config/lib architecture over new abstractions.
5. Keep route pages small and declarative where possible.
6. Stop if the packet begins drifting into dynamic routes, deep content systems, or feature-heavy implementation.

---

## Reviewer focus

Reviewer must check:

- whether top-level route identity is now more canon/config-driven
- whether `src/config/page-data.ts` is genuinely being used, not merely touched
- whether route/data binding improved consistency without over-abstracting
- whether the packet stayed top-level only
- whether any dynamic-route or feature creep was introduced
- whether lint/build pass

The Content / Structure Operator must confirm:
- top-level surfaces now express clearer moment-of-use intent
- shell and surface identity fit together more naturally
- no content-object or destination drift was introduced

---

## Required outputs

### Primary output
A bounded top-level route/data-binding patch that reduces page-local duplication and proves config-driven surface rendering.

### Builder handoff note
Create:

`reviews/phase-1/open/BP-106-phase-1-top-level-route-and-page-data-binding-pass-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- validation results
- route-binding rationale
- page-data-binding rationale
- render-path proof note
- explicit confirmation that no forbidden-scope systems were touched

---

## Initial task state

Place this file at:

`tasks/phase-1/open/BP-106-phase-1-top-level-route-and-page-data-binding-pass.md`

Builder-complete work must move to:

`tasks/phase-1/review/`

Only accepted work ends in:

`tasks/phase-1/done/`

---

## Stop conditions

Stop and report immediately if:

- meaningful top-level binding cannot happen without dynamic-route work
- canonical route truth and page-data truth are materially contradictory
- the existing render architecture would require a broad rewrite to support this packet
- the packet begins drifting into full feature-page implementation
- the patch stops being a bounded top-level binding pass

---

## Success definition

Success is not “the top-level pages say more.”

Success is:

- route truth is more centralised
- page-data truth is actually being used
- top-level routes feel like expressions of one system
- the patch remains bounded
- validation passes
- the next packet can build the first real pathway on top of a more honest config-driven surface layer
