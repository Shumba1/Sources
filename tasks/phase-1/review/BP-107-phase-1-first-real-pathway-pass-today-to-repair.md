# BP-107 — First real pathway pass: `/today` → `/repair`

## Packet metadata
- **Packet ID:** BP-107
- **Phase:** Phase 1
- **Status:** Open
- **Type:** Implementation / first-product-pathway / delivery-sensitive packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-1/review/`

---

## Objective

Build the first **real user pathway** in MarriageOS by making the top-level `/today` surface and the top-level `/repair` surface work together as a coherent, useful, moment-of-use flow.

This packet exists to prove that the app can do more than:

- install a stack
- render a shell
- show route scaffolds
- bind top-level route identity to config

It must now show a **real product movement**:

- user lands on `/today`
- user sees an actionable, bounded state surface
- user can move directly into `/repair`
- `/repair` feels like the logical continuation of `/today`, not just another disconnected scaffold

This is still a **Phase 1 packet**.  
It is **not** a dynamic-detail packet, **not** a backend packet, and **not** a full workflow engine.

---

## Why this packet exists now

Phase 1 has already achieved the following:

- **BP-100** installed the baseline pnpm + Next.js + React + TypeScript + Tailwind stack.
- **BP-101** split marketing and app shells and created top-level scaffold routes.
- **BP-104** refined mobile shell spacing and nav rhythm.
- **BP-105** hardened top-level shell consistency and nav-state behaviour.
- **BP-106** bound top-level routes to canonical route truth and page-data truth.

That means the next step is no longer shell work.  
The next step is to prove the first **useful pathway** inside the shell.

The recommended first pathway is:

**`/today` → `/repair`**

because it is closest to the repair-first product intent and closest to real moment-of-use value.

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
9. accepted/active BP-106 packet and builder note
10. current live:
   - `src/config/routes.ts`
   - `src/config/page-data.ts`
   - `src/config/theme.ts`
   - `src/config/seo.ts`
   - `src/lib/render-page-sections.tsx`
   - `src/lib/section-resolvers.ts`
   - `src/components/shell/**`
   - `src/app/(app)/today/page.tsx`
   - `src/app/(app)/repair/page.tsx`

### Conditional consult
Also consult `SOURCE_RESERVOIR_OBJECT_MAP.md` **only if** the packet starts making new reservoir-to-object decisions, introducing new content-object mapping logic, or widening beyond top-level route/page-data shaping. It is **not** mandatory reading for a bounded top-level pathway packet that stays inside existing config/page-data truth.

If authority conflicts appear, stop and report them.

---

## Task classification

- **Type:** first-pathway implementation / top-level experience binding / delivery-sensitive
- **Object type:** top-level user flow between `/today` and `/repair`
- **Destination family:** application surface and top-level repair pathway, not editorial detail content
- **Target surface:** `/today` and `/repair`
- **Renderer / component path:** `src/app/(app)/**`, `src/config/**`, minimal supporting `src/components/**`
- **Moment of use:** user opens the app and needs a practical next move now
- **Phase-eligible now:** yes
- **Delivery Architecture reference:** repair-first experience, top-level moment-of-use utility, solo-first practical action surface

This packet is delivery-sensitive because it is the first place the product has to feel genuinely useful rather than merely well-structured.

---

## Pathway realism contract

The builder must design the `/today` → `/repair` flow for a user who is:

- emotionally activated but still reachable
- opening the app **alone**
- not ready for a long content journey
- seeking immediate help, not education for its own sake
- likely to bounce if the surface feels too content-heavy, preachy, or abstract
- in need of one or two bounded next steps rather than a broad library

The pathway must satisfy all of the following:

1. `/today` reduces ambiguity quickly
2. `/today` offers **one primary move** and at most **one secondary move**
3. `/repair` continues the primary move in a way that feels constructive
4. `/repair` remains **solo-first**
5. no fake personalization is implied
6. no hidden backend state or simulated memory is implied
7. no advice depends on the partner participating immediately
8. the user should feel oriented, not judged
9. the user should feel moved toward action, not dumped into content sprawl

---

## Pathway realism fixtures

Design and judge the flow against fixtures like these:

### Fixture A — after a fight
The user opened the app about 30 minutes after a tense argument. They feel angry, misunderstood, and tempted to make things worse by sending another message or continuing the fight. They do not need theory right now. They need one constructive next move.

### Fixture B — distance without explosion
The user feels the relationship has gone cold over weeks. There was no dramatic blow-up, but things feel disconnected and heavy. They are unsure where to start and do not want to be thrown into a giant library.

### Fixture C — overwhelmed but still hoping
The user is emotionally tired, not highly analytical, and open to help — but only if the app feels calm, direct, and practical. If the surface looks too “course-like” or too content-dense, they will disengage.

### Fixture D — tonight, not someday
The user wants something they can do **tonight**. Not a multi-week plan. Not a theory stack. Not a personality framework. A bounded next move.

### Fixture E — solo-first reality
The user cannot assume their partner will join, cooperate, or even respond constructively right now. The pathway must still make sense.

The builder does **not** need to literally name these fixtures in the UI. They are design realism constraints.

---

## Flow guardrails

The `/today` → `/repair` pathway must **not** become any of the following:

- a widget-heavy dashboard
- a generic self-help page
- a content library disguised as action
- a fake coaching simulation
- a decision-tree engine
- a partner-dependent intervention flow
- a lecture about relationships
- a page full of equal-weight options that forces the user to think too much

The intended movement is:

- `/today` = “Here is what matters right now.”
- `/repair` = “Here is the next constructive thing you can do.”

If the implementation does not preserve that movement, it has failed the packet even if the code is clean.

---

## In scope

### 1. Make `/today` a real action surface
`/today` should stop feeling like a generic scaffold and start acting like a bounded “what should I do next?” entry surface.

At minimum, `/today` should present a coherent top-level structure such as:

- current state framing
- one or two next-best moves
- one direct path into `/repair`
- bounded supporting cues or summaries

This should be driven from canonical config/page-data truth where appropriate.

### 2. Make `/repair` feel like the logical continuation
`/repair` should stop feeling like a disconnected placeholder and instead feel like the next step after `/today`.

At minimum, `/repair` should present:

- a clear repair-oriented entry frame
- a simple top-level explanation of what this surface is for
- one or more bounded repair options or repair-state sections
- continuity with the language/intent introduced on `/today`

Do **not** implement `/repair/[slug]` in this packet.

### 3. Establish pathway continuity
The user should be able to understand, from the surfaces themselves, that:

- `/today` is where I orient
- `/repair` is where I act next

The pathway should feel intentional in:
- headings
- summary copy
- CTA text
- section framing
- shell treatment

### 4. Keep the pathway top-level and bounded
This is **not** a full workflow system.

Do not add:
- saved state
- progress tracking logic
- personalization engines
- decision trees
- backend state
- module-detail pages

Keep it top-level, honest, and phase-appropriate.

### 5. Reuse canonical config/page-data where appropriate
Prefer to bind this pathway through:
- `src/config/routes.ts`
- `src/config/page-data.ts`
- existing rendering/config structures

If small additions to page-data are needed to make `/today` and `/repair` meaningfully useful, that is allowed.

---

## Out of scope

- dynamic detail routes:
  - `/repair/[slug]`
- full repair module system
- database or API wiring
- auth/billing/AI work
- account/settings/store/pricing implementation
- progress persistence
- algorithmic personalization
- analytics instrumentation
- full content library binding
- feature logic for guides/knowledge/progress beyond maintaining shell consistency
- broad visual redesign

---

## Preferred implementation posture

This packet should prefer:

- one bounded, believable user flow
- config/page-data reuse
- top-level clarity over pseudo-intelligence
- strong CTA and surface continuity
- small, reviewable changes

Avoid:
- overbuilding a workflow engine
- pretending personalization exists when it does not
- generic wellness-dashboard fluff
- content sprawl
- deep abstraction layers that do not yet pay off

---

## Allowed files

Builder may touch only the minimum file set required for the first pathway pass.

Likely allowed areas:

- `src/app/(app)/today/page.tsx`
- `src/app/(app)/repair/page.tsx`
- `src/config/page-data.ts`
- `src/config/routes.ts`
- `src/config/seo.ts` only if tiny route-level coherence is needed
- minimal supporting `src/components/**`
- minimal supporting `src/lib/**` only if required to keep the pathway config-driven and reviewable
- `src/app/globals.css` only if a tiny route-surface styling adjustment is genuinely required

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- dynamic detail-route files
- backend/auth/billing files
- `sources/**`
- Phase 0 governance files
- guides/knowledge/progress deeper implementations
- store/pricing/account/settings work
- database or persistence layers
- analytics or tracking systems
- unrelated feature/business logic
- large schema rewrites

---

## Acceptance criteria

BP-107 passes only if all of the following are true:

1. `/today` now feels like a genuine top-level action surface
2. `/repair` now feels like a genuine top-level repair surface
3. the movement from `/today` to `/repair` feels intentional and understandable
4. the implementation remains top-level and bounded
5. no `/repair/[slug]` or other dynamic detail-route work was introduced
6. no backend/auth/billing/AI/persistence creep was introduced
7. the pathway reuses canonical route/page-data truth where appropriate
8. the pathway realism contract and fixtures are visibly honoured in the resulting surfaces
9. the patch remains bounded enough to clearly review as a first-pathway packet
10. `pnpm lint` passes
11. `pnpm build` passes
12. the app now demonstrates at least one believable moment-of-use flow

---

## Validation requirements

Run and record:

- `pnpm lint`
- `pnpm build`

Also provide:
- changed-file list
- one-line reason per changed file
- note on pathway-continuity approach
- note on `/today` intent
- note on `/repair` intent
- note on how the realism contract and fixtures were honoured
- explicit confirmation that no forbidden-scope systems were introduced

If validation fails, record the exact failure.

---

## Builder instructions

1. Inspect the current `/today` and `/repair` surfaces before editing.
2. Identify what is still shell-only or placeholder-ish.
3. Use config/page-data truth where possible instead of page-local copy duplication.
4. Build one honest pathway, not a fake full system.
5. Keep `/today` oriented toward “what next?”
6. Keep `/repair` oriented toward “do the next constructive thing.”
7. Use the realism fixtures as design constraints, not as copy to paste literally.
8. Stop if the packet begins drifting into dynamic routes, workflow engines, or persistent state systems.

---

## Reviewer focus

Reviewer must check:

- whether `/today` now feels genuinely useful
- whether `/repair` now feels like a real next step
- whether pathway continuity is clear
- whether the packet stayed top-level and bounded
- whether any dynamic-route or feature-engine creep was introduced
- whether config/page-data truth is being used well
- whether the realism contract is actually reflected in the surfaces
- whether lint/build pass

The Content / Structure Operator must confirm:
- the pathway supports the intended moment-of-use
- the surfaces now better reflect repair-first product intent
- the realism fixtures would be served credibly by the resulting flow
- no content-object or destination drift was introduced

---

## Required outputs

### Primary output
A bounded first-pathway patch making `/today` and `/repair` work together as a coherent top-level flow.

### Builder handoff note
Create:

`reviews/phase-1/open/BP-107-phase-1-first-real-pathway-pass-today-to-repair-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- validation results
- pathway rationale
- `/today` rationale
- `/repair` rationale
- realism-contract note
- explicit confirmation that no forbidden-scope systems were touched

---

## Initial task state

Place this file at:

`tasks/phase-1/open/BP-107-phase-1-first-real-pathway-pass-today-to-repair.md`

Builder-complete work must move to:

`tasks/phase-1/review/`

Only accepted work ends in:

`tasks/phase-1/done/`

---

## Stop conditions

Stop and report immediately if:

- meaningful pathway continuity cannot be achieved without dynamic-route work
- current page-data/config truth is too thin or contradictory to support this packet
- the packet begins drifting into workflow-engine or persistence work
- the patch stops being a bounded top-level pathway pass

---

## Success definition

Success is not “the pages look richer.”

Success is:

- `/today` gives the user a believable next move
- `/repair` feels like the right continuation
- the pathway is clear without backend magic
- the surfaces feel credible for the realism fixtures
- the patch stays bounded
- validation passes
- Phase 1 now contains one real product pathway rather than only shell surfaces
