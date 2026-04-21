# BP-111 — Phase 1 route completion for `/today/check-in` and `/today/state`

## Packet metadata
- **Packet ID:** BP-111
- **Phase:** Phase 1
- **Status:** Open
- **Type:** Implementation / route-completion / local-fixture / delivery-sensitive packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-1/review/`

---

## Objective

Implement the two remaining **true Phase 1 route blockers**:

- `/today/check-in`
- `/today/state`

This packet exists because the Phase 1 pass gate has now been clarified and ratified:

- Phase 1 closure is judged against the **required baseline routes**, not the full forward route tree
- `/today/check-in` and `/today/state` remain inside Phase 1 close-out scope
- dynamic detail routes, commercial/public-readiness routes, and auth/account routes are explicitly deferred to later phases

This packet must complete those two routes on a **Phase 1 basis only**.

That means:
- the routes must render credibly
- the routes must feel app-like and coherent inside the current shell
- they must work with **local fixtures**
- they must prepare the real Phase 2 local-first state loop
- they must **not** prematurely implement the full deterministic state engine or persistence layer

---

## Why this packet exists now

The updated phase-gate canon now says:

- Phase 1 closure blockers are limited to:
  - `/`
  - `/how-it-works`
  - `/start`
  - `/today`
  - `/today/check-in`
  - `/today/state`
  - `/repair`
  - `/guides`
  - `/knowledge`
  - `/progress`

and the accepted defer map explicitly pushes later route families into later phases. fileciteturn27file0turn27file1turn27file2turn27file3

The same phase docs also say:

- **Phase 1** is about the PWA shell, baseline routes, and local fixture layer
- **Phase 2** is where the full local-first state loop is proven:
  - `CheckInGrid`
  - deterministic classifier
  - `StateSummaryCard`
  - `NextBestMoveCard`
  - `MakeItWorseCard`
  - `QuickScriptCard`
  - the full `/start → /today/check-in → /today/state → /today` journey

So BP-111 must complete the remaining **route foundation**, without stealing Phase 2’s core logic. fileciteturn27file1turn27file2

---

## Required reading order

Read in this order before changing anything:

1. `AGENTS.md`
2. `docs/MASTER_SPEC.md`
3. `docs/marriage_os_implementation_phases.md`
4. `docs/Implementation Plan.md`
5. `docs/DRIFT_REGISTER.md`
6. `docs/README_ACTIVE_SET.md`
7. `docs/DELIVERY_ARCHITECTURE.md`
8. accepted/active BP-107 packet and builder note
9. accepted/active BP-110 packet and builder note
10. current live:
   - `src/config/routes.ts`
   - `src/config/page-data.ts`
   - `src/config/theme.ts`
   - `src/config/seo.ts`
   - `src/app/(app)/today/page.tsx`
   - `src/app/(marketing)/start/page.tsx`
   - `src/components/shell/**`

### Conditional consult
Also consult `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` if the packet introduces or changes:
- iconography
- directional affordances
- visual state cues
- motion or media treatment

If authority conflicts appear, stop and report them.

---

## Task classification

- **Type:** route completion / Phase 1 blocker completion / local-fixture rendering / delivery-sensitive
- **Object type:** `/today/check-in` and `/today/state` top-level route surfaces
- **Destination family:** app/member shell, top-level utility routes
- **Target surface:** `/today/check-in`, `/today/state`
- **Renderer / component path:** `src/app/(app)/**`, minimal supporting `src/config/**`, minimal supporting `src/components/**`
- **Moment of use:** user enters the assessment flow and needs a believable guided next step inside the app shell
- **Phase-eligible now:** yes
- **Delivery Architecture reference:** top-level utility surface fit, solo-first clarity, orientation and state visibility without content sprawl

---

## Scope contract

### What BP-111 must do
BP-111 must make these routes:

- real
- navigable
- shell-consistent
- believable with local fixtures
- reviewable as part of Phase 1 closure

### What BP-111 must **not** do
BP-111 must **not** become the full Phase 2 state engine packet.

That means:
- no full deterministic classifier implementation
- no persistence layer
- no backend wiring
- no auth dependency
- no broad feature expansion
- no deep result logic engine
- no hidden Phase 2 work disguised as “helpful completion”

---

## In scope

### 1. Implement `/today/check-in` as a real route
This route must render as a credible top-level check-in surface inside the member shell.

At minimum it should provide:
- a clear check-in purpose
- a bounded set of local-fixture question groups or selectable inputs
- a clear next action / continue action
- shell-consistent layout and interaction patterns
- believable transition logic toward `/today/state`

It does **not** need to implement the full deterministic classification system in this packet.

### 2. Implement `/today/state` as a real route
This route must render as a credible top-level state-result surface inside the member shell.

At minimum it should provide:
- a clear state summary frame
- believable local-fixture result presentation
- one clear next move toward `/today`
- one bounded prevention / anti-escalation cue
- shell-consistent action hierarchy

It does **not** need the full Phase 2 state engine behind it yet.

### 3. Use local fixtures honestly
Both routes must rely on **local fixtures / local route-safe state assumptions**, not pretend that persistence or a full classifier already exists.

Acceptable approaches include:
- explicit local fixture objects
- deterministic placeholder result paths using simple local state
- route/query/local component state only, if used transparently and simply

Do **not** fake backend memory or hidden personalization.

### 4. Keep the journey believable
The user should be able to understand the shape of the upcoming journey:

`/start` → `/today/check-in` → `/today/state` → `/today`

even if BP-111 does not yet deliver the full mature Phase 2 logic.

### 5. Align with canonical route/page-data truth where appropriate
Use:
- `src/config/routes.ts`
- `src/config/page-data.ts`

where appropriate for route identity, labels, and top-level copy framing.

Keep the routes consistent with the rest of the app.

---

## Out of scope

- full deterministic state classifier
- `features/check-in/state-engine.ts`
- persistence of check-ins
- backend/database wiring
- auth/billing/AI work
- deep result logic
- dynamic detail routes
- broad redesign of existing `/today`
- progress logic
- analytics/tracking
- full Phase 2 implementation

---

## Preferred implementation posture

This packet should prefer:

- honest local-fixture rendering
- clear route completion
- shell-consistent interaction patterns
- believable but bounded flow
- simple, reviewable code

Avoid:
- over-engineering a temporary engine
- pretending persistence exists
- giant question banks
- fake complexity that will be replaced in Phase 2 anyway
- content-heavy educational screens instead of utility surfaces

---

## Allowed files

Builder may touch only the minimum file set required for these two routes.

Likely allowed areas:

- `src/app/(app)/today/check-in/page.tsx`
- `src/app/(app)/today/state/page.tsx`
- `src/config/page-data.ts`
- `src/config/routes.ts`
- minimal supporting `src/components/**`
- minimal supporting `src/lib/**` only if needed for local-fixture wiring
- `src/app/globals.css` only if a tiny route-surface styling adjustment is genuinely required

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- persistence/database files
- auth files
- AI utilities
- `sources/**`
- unrelated route families
- dynamic detail-route files
- commerce/library routes
- broader today/repair pathway logic beyond what is necessary for local-fixture continuity
- Phase 0 or BP-110 governance docs

---

## Acceptance criteria

BP-111 passes only if all of the following are true:

1. `/today/check-in` renders as a credible member-shell utility route
2. `/today/state` renders as a credible member-shell utility route
3. both routes feel like part of the current app, not bolt-on placeholders
4. the route sequence `/start → /today/check-in → /today/state → /today` is now visibly scaffolded and believable
5. local fixtures are used honestly and clearly
6. no full deterministic classifier or persistence work was smuggled in
7. no backend/auth/billing/AI creep was introduced
8. the patch remains bounded enough to clearly review as a Phase 1 route-completion packet
9. `pnpm lint` passes
10. `pnpm build` passes
11. only these two remaining Phase 1 route blockers are being addressed, not wider phase theft

---

## Validation requirements

Run and record:

- `pnpm lint`
- `pnpm build`

Also provide:
- changed-file list
- one-line reason per changed file
- note on `/today/check-in` implementation approach
- note on `/today/state` implementation approach
- note on local-fixture strategy
- explicit confirmation that no forbidden-scope systems were introduced

If validation fails, record the exact failure.

---

## Builder instructions

1. Start from the corrected Phase 1 gate, not the old BP-109 blocker list.
2. Implement only `/today/check-in` and `/today/state`.
3. Keep them believable enough for Phase 1 closure, but no deeper.
4. Use local fixtures rather than fake persistence or overbuilt logic.
5. Preserve the app-shell quality and interaction clarity established in earlier packets.
6. Stop if the packet begins drifting into full Phase 2 state-engine work.

---

## Reviewer focus

Reviewer must check:

- whether both routes now render credibly
- whether they feel shell-consistent and app-like
- whether the flow from `/start` to `/today` is visibly scaffolded
- whether the local-fixture strategy is honest and bounded
- whether the packet stayed inside Phase 1 route completion
- whether lint/build pass

The Content / Structure Operator must confirm:
- both routes feel like legitimate utility surfaces
- the user’s orientation burden stays low
- no content-object or destination drift was introduced

The Human Governor must check:
- this packet closes the remaining true Phase 1 route blockers
- it does not steal Phase 2 scope prematurely

---

## Required outputs

### Primary output
A bounded route-completion patch implementing `/today/check-in` and `/today/state` with honest local-fixture behaviour.

### Builder handoff note
Create:

`reviews/phase-1/open/BP-111-phase-1-route-completion-check-in-and-state-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- validation results
- `/today/check-in` rationale
- `/today/state` rationale
- local-fixture note
- explicit confirmation that no forbidden-scope systems were touched

---

## Initial task state

Place this file at:

`tasks/phase-1/open/BP-111-phase-1-route-completion-check-in-and-state.md`

Builder-complete work must move to:

`tasks/phase-1/review/`

Only accepted work ends in:

`tasks/phase-1/done/`

---

## Stop conditions

Stop and report immediately if:

- the routes cannot be made credible without full classifier logic
- the current page-data/config truth is too thin to support bounded route completion
- the packet begins drifting into persistence or state-engine implementation
- the patch stops being a narrow Phase 1 route-completion packet

---

## Success definition

Success is not “the state engine is finished.”

Success is:

- both remaining Phase 1 blocker routes exist and feel real
- the journey into `/today` is now visibly complete at route level
- the implementation is honest about using local fixtures
- the patch stays bounded
- validation passes
- Phase 1 can be re-reviewed against the corrected gate without route-gap ambiguity
