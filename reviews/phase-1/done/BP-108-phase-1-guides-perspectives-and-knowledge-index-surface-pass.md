# BP-108 — Guides/Perspectives and Knowledge index surface pass

## Packet metadata
- **Packet ID:** BP-108
- **Phase:** Phase 1
- **Status:** Open
- **Type:** Implementation / index-surface / content-surface / delivery-sensitive packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-1/review/`

---

## Objective

Turn the top-level **`/guides`** and **`/knowledge`** routes into credible, differentiated index surfaces so they feel like intentional parts of MarriageOS rather than leftover scaffolds.

This packet exists to prove that the app can now support two different top-level content-access modes:

- **Guides / Perspectives** = practical framing and structured directional help
- **Knowledge** = explanatory context, understanding, and sense-making

The result must remain **top-level only** and **Phase 1-bounded**.

This is **not** a dynamic-detail packet, **not** a full content system, and **not** a backend/search packet.

---

## Why this packet exists now

Phase 1 has already achieved the following:

- **BP-100** installed the baseline app stack.
- **BP-101** split marketing and app shells and created top-level scaffold routes.
- **BP-104** refined shell spacing and nav rhythm.
- **BP-105** hardened top-level shell and nav-state behaviour.
- **BP-106** bound top-level routes to canonical route and page-data truth.
- **BP-107** created the first believable `/today` → `/repair` product pathway.

That means the next step is to make the remaining top-level member surfaces feel deliberate.

The priority for this packet is **not depth**.  
The priority is **surface clarity, object grouping, and route usefulness**.

---

## Required reading order

Read in this order before changing anything:

1. `AGENTS.md`
2. `docs/MASTER_SPEC.md`
3. `docs/marriage_os_implementation_phases.md`
4. `docs/DRIFT_REGISTER.md`
5. `docs/DELIVERY_ARCHITECTURE.md`
6. `REPO_TREE_PLACEMENT_PLAN.md`
7. accepted/active BP-105 packet and builder note
8. accepted/active BP-106 packet and builder note
9. accepted/active BP-107 packet and builder note
10. current live:
   - `src/config/routes.ts`
   - `src/config/page-data.ts`
   - `src/config/seo.ts`
   - `src/config/theme.ts`
   - `src/lib/render-page-sections.tsx`
   - `src/lib/section-resolvers.ts`
   - `src/app/(app)/guides/page.tsx`
   - `src/app/(app)/knowledge/page.tsx`

### Required content-governance consult
Also read:

- `SOURCE_RESERVOIR_OBJECT_MAP.md`

Reason:
This packet is now close enough to top-level content-surface shaping that the builder must avoid inventing arbitrary object groupings or surfacing the wrong content families on the wrong route.

### Conditional consult
Also consult `GRAPHICS_AND_MEDIA_SYSTEM.md` **if** the packet introduces or changes:
- iconography
- card/media treatments
- visual badges
- illustration/media slots
- motion behaviour

If authority conflicts appear, stop and report them.

---

## Task classification

- **Type:** top-level index surface implementation / content-surface distinction / delivery-sensitive
- **Object type:** guides/perspectives and knowledge index surfaces
- **Destination family:** top-level member content surfaces, not detail content
- **Target surface:** `/guides` and `/knowledge`
- **Renderer / component path:** `src/app/(app)/**`, `src/config/**`, minimal supporting `src/components/**`, minimal `src/lib/**` only if needed
- **Moment of use:** user wants either practical framing/help (`/guides`) or understanding/context (`/knowledge`) without entering a deep content journey yet
- **Phase-eligible now:** yes
- **Delivery Architecture reference:** top-level surface fit, index-level usefulness, moment-of-use clarity, format/surface appropriateness

This packet is delivery-sensitive because it defines what these two surfaces are *for* in the product.

---

## Surface distinction contract

The builder must make the distinction between these routes obvious:

### `/guides`
This surface should feel like:
- directional
- practical
- bounded
- structured for action framing
- useful when the user wants a guided way to think or proceed

### `/knowledge`
This surface should feel like:
- explanatory
- context-building
- sense-making
- less action-immediate than `/guides`
- useful when the user wants to understand the pattern, dynamic, or mechanism

If the two surfaces feel interchangeable, the packet has failed.

---

## In scope

### 1. Make `/guides` a real index surface
`/guides` must stop feeling like a placeholder and become a believable top-level index surface.

At minimum, it should provide:
- clear route identity
- a short explanation of what kind of help lives here
- grouped top-level entry cards, tiles, or sections
- bounded, clickable pathways or anchors for exploration
- practical framing that differentiates it from `/knowledge`

If the canonical label is **Perspectives** in shell/nav, the surface must make that relationship understandable and not confusing.

### 2. Make `/knowledge` a real index surface
`/knowledge` must also stop feeling like a placeholder and become a believable top-level explanatory index surface.

At minimum, it should provide:
- clear route identity
- a short explanation of what kind of understanding lives here
- grouped top-level knowledge cards, themes, or sections
- bounded, clickable pathways or anchors for exploration
- obvious difference from `/guides`

### 3. Bind both surfaces to canonical route/page-data truth
Use:
- `src/config/routes.ts`
- `src/config/page-data.ts`

to drive titles, summaries, section groups, and top-level identity.

Avoid page-local duplication wherever canonical config already exists or should reasonably exist.

### 4. Use object-grouping discipline
Use `SOURCE_RESERVOIR_OBJECT_MAP.md` to avoid bad category/object mixing.

That means:
- do not treat raw source reservoirs as UI directly
- do not invent random surface groups disconnected from canonical object logic
- keep route-level groupings honest and understandable

### 5. Make action-shaped UI actually navigable
If a card, chip, or tile looks selectable, it should be selectable.

Because dynamic detail routes are out of scope, acceptable destinations include:
- route-local anchors
- query-param driven surface filtering
- bounded placeholder targets inside the same top-level route
- other already-existing top-level routes when appropriate

Do **not** leave action-shaped UI inert.

### 6. Keep the packet top-level and bounded
This packet must **not** build a full library.

It should create useful top-level index surfaces only.

---

## Out of scope

- dynamic detail routes:
  - `/guides/[slug]`
  - `/knowledge/[slug]`
- full article rendering
- full guide rendering
- backend/auth/billing/AI work
- search engine implementation
- database or API wiring
- store/pricing/account/settings work
- deep recommendation systems
- analytics instrumentation
- broad visual redesign
- large schema rewrites
- turning either route into a giant content dump

---

## Preferred implementation posture

This packet should prefer:

- strong route distinction
- config/page-data-driven index surfaces
- bounded clickable groupings
- top-level usefulness over library sprawl
- honest placeholders where needed, but with real interaction affordance

Avoid:
- making `/guides` and `/knowledge` feel the same
- giant content walls
- fake depth
- deep abstractions that belong to later phases
- hardcoded route-copy duplication once canonical data can drive it

---

## Allowed files

Builder may touch only the minimum file set required for this index-surface pass.

Likely allowed areas:

- `src/app/(app)/guides/page.tsx`
- `src/app/(app)/knowledge/page.tsx`
- `src/config/page-data.ts`
- `src/config/routes.ts`
- `src/config/seo.ts` only if tiny route-level coherence is needed
- minimal supporting `src/components/**`
- minimal supporting `src/lib/**` only if required to keep the surfaces config-driven and reviewable
- `src/app/globals.css` only if a tiny route-surface styling adjustment is genuinely required

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- dynamic detail-route files
- backend/auth/billing files
- `sources/**`
- Phase 0 governance files
- repair pathway deeper implementation
- store/pricing/account/settings work
- database or persistence layers
- analytics/tracking systems
- unrelated feature/business logic
- large schema rewrites

---

## Acceptance criteria

BP-108 passes only if all of the following are true:

1. `/guides` now feels like a genuine top-level practical/directional index surface
2. `/knowledge` now feels like a genuine top-level explanatory index surface
3. the distinction between the two surfaces is clear within a few seconds
4. both surfaces derive their identity meaningfully from canonical route/page-data truth
5. surface groupings are disciplined and do not violate source/object mapping logic
6. action-shaped cards/chips/tiles are actually navigable
7. no dynamic detail-route implementation was introduced
8. no backend/auth/billing/AI/search-engine creep was introduced
9. the patch remains bounded enough to clearly review as an index-surface packet
10. `pnpm lint` passes
11. `pnpm build` passes
12. the app now has more than one believable top-level usefulness mode beyond `/today` → `/repair`

---

## Validation requirements

Run and record:

- `pnpm lint`
- `pnpm build`

Also provide:
- changed-file list
- one-line reason per changed file
- note on `/guides` surface intent
- note on `/knowledge` surface intent
- note on how the distinction was made obvious
- note on how `SOURCE_RESERVOIR_OBJECT_MAP.md` influenced grouping decisions
- explicit confirmation that no forbidden-scope systems were introduced

If validation fails, record the exact failure.

---

## Builder instructions

1. Inspect the current `/guides` and `/knowledge` surfaces before editing.
2. Identify where they still feel scaffold-only or too interchangeable.
3. Bind route identity and surface grouping through canonical config/page-data where appropriate.
4. Use the Source Reservoir Object Map to avoid bad grouping logic.
5. Keep both surfaces top-level and bounded.
6. Make selectable-looking UI actually selectable.
7. Stop if the packet begins drifting into dynamic routes, full library buildout, or search/product-engine work.

---

## Reviewer focus

Reviewer must check:

- whether `/guides` and `/knowledge` now feel clearly different
- whether both now feel top-level useful rather than scaffold-only
- whether route/page-data truth is being used well
- whether object grouping feels disciplined rather than arbitrary
- whether action-shaped UI is actually navigable
- whether the packet stayed top-level and bounded
- whether lint/build pass

The Content / Structure Operator must confirm:
- the surface distinction is credible at moment-of-use
- `/guides` feels practical/directional
- `/knowledge` feels explanatory/contextual
- no content-object or destination drift was introduced

---

## Required outputs

### Primary output
A bounded top-level index-surface patch making `/guides` and `/knowledge` feel differentiated, useful, and navigable.

### Builder handoff note
Create:

`reviews/phase-1/open/BP-108-phase-1-guides-perspectives-and-knowledge-index-surface-pass-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- validation results
- `/guides` rationale
- `/knowledge` rationale
- distinction rationale
- source-object-map note
- explicit confirmation that no forbidden-scope systems were touched

---

## Initial task state

Place this file at:

`tasks/phase-1/open/BP-108-phase-1-guides-perspectives-and-knowledge-index-surface-pass.md`

Builder-complete work must move to:

`tasks/phase-1/review/`

Only accepted work ends in:

`tasks/phase-1/done/`

---

## Stop conditions

Stop and report immediately if:

- meaningful surface distinction cannot be achieved without dynamic detail routes
- canonical route/page-data truth and object-map logic materially conflict
- the packet begins drifting into full content-library implementation
- the patch stops being a bounded top-level index-surface pass

---

## Success definition

Success is not “there is more stuff on the page.”

Success is:

- `/guides` and `/knowledge` are obviously different in role
- both feel useful at top level
- route truth and page-data truth are doing real work
- grouping feels disciplined
- interaction affordances are real
- the patch stays bounded
- validation passes
- Phase 1 now has clearer non-repair content surfaces without pretending the full library exists
