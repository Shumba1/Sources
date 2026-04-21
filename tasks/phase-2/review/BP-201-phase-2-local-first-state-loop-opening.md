# BP-201 — Phase 2 opening packet: local-first state loop completion

## Packet metadata
- **Packet ID:** BP-201
- **Phase:** Phase 2
- **Status:** Review
- **Type:** Implementation / local-first state loop / deterministic utility packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-2/review/`

---

## Objective

Open **Phase 2** by completing the first true local-first product loop inside the already-approved shell:

`/start` → `/today/check-in` → `/today/state` → `/today`

This packet exists to move Marriage OS from:

- shell correctness
- top-level route coverage
- believable pathway scaffolds

into:

- a deterministic local-first check-in flow
- a believable state result
- one clear next move into Today
- one visible anti-escalation frame
- no backend dependency

This is the **Phase 2 opening packet**, not a broad state-platform build.

---

## Why this packet exists now

Phase 1 closure has already been reviewed as **CONDITIONAL GO**, with Phase 2 explicitly allowed to open after Human Governor acknowledgement of residual non-blockers.

The canonical phase document defines Phase 2 as:

- `CheckInGrid`
- deterministic state classifier
- local fixture results
- `StateSummaryCard`
- `NextBestMoveCard`
- `MakeItWorseCard`
- `QuickScriptCard`

with the required working journey:

`/start` → `/today/check-in` → `/today/state` → `/today`

The companion Implementation Plan says the same phase must deliver:

- Start flow
- Check-in screen
- deterministic classifier
- State result screen
- Today dashboard
- persistence/tests

but the canonical sequencing authority remains `docs/marriage_os_implementation_phases.md`, so this packet must prioritize the local-first deterministic loop and not outrun it with backend work.

---

## Required reading order

Read in this order before changing anything:

1. `AGENTS.md`
2. `docs/README_ACTIVE_SET.md`
3. `docs/MASTER_SPEC.md`
4. `docs/DRIFT_REGISTER.md`
5. `docs/marriage_os_implementation_phases.md`
6. `docs/Implementation Plan.md`
7. `docs/DELIVERY_ARCHITECTURE.md`
8. `docs/Voice and Tone Bible.md`
9. `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
10. accepted/active BP-107 packet and builder note (phase 1)
11. accepted/active BP-110 packet and builder note (phase 1)
12. accepted/active BP-111 packet and builder note (phase 1)
13. the accepted Phase 1 closure rerun report  (phase 1)
14. current live:
    - `src/config/routes.ts`
    - `src/config/page-data.ts`
    - `src/config/theme.ts`
    - `src/config/seo.ts`
    - `src/app/(marketing)/start/page.tsx`
    - `src/app/(app)/today/check-in/page.tsx`
    - `src/app/(app)/today/state/page.tsx`
    - `src/app/(app)/today/page.tsx`
    - `src/components/shell/**`
    - any current check-in/state-related local fixture utilities

### Conditional consult
Also consult `docs/SOURCE_RESERVOIR_OBJECT_MAP.md` only if the packet starts inventing new content-object categories for state or result surfaces. It should normally not need to.

If authority conflicts appear, stop and report them.

---

## Task classification

- **Type:** local-first state loop implementation / deterministic utility flow
- **Object type:** `/start` → `/today/check-in` → `/today/state` → `/today`
- **Destination family:** member-shell utility flow, not detail content
- **Target surface:** check-in, state, today
- **Renderer / component path:** `src/app/(app)/**`, minimal `src/config/**`, minimal `src/components/**`, minimal `src/lib/**`
- **Moment of use:** user needs fast orientation and one clear next action tonight
- **Phase-eligible now:** yes
- **Sequencing authority:** `docs/marriage_os_implementation_phases.md`

---

## Scope contract

### What BP-201 must do
BP-112 must deliver a believable, deterministic, local-first loop:

1. user opens `/start`
2. user enters `/today/check-in`
3. user completes a bounded check-in
4. app resolves a deterministic state result in `/today/state`
5. user lands in `/today` with a coherent next move

### What BP-201 must not do
BP-201 must **not** become:

- backend persistence work
- auth work
- AI diagnosis work
- a giant rules engine
- a full analytics/progress system
- a fake personalization engine
- a content dump

---

## In scope

### 1. Real `CheckInGrid`
Implement or upgrade the actual check-in surface so it feels like a credible product utility, not a thin route shell.

At minimum:
- bounded question groups
- clear selection patterns
- strong one-path continuation
- low cognitive load
- solo-first wording
- mobile-first interaction integrity

### 2. Deterministic classifier (local only)
Implement a deterministic state classifier for the current V1 scope.

Hard rule:
- do **not** use an LLM for primary classification in V1.

The classifier should:
- accept local check-in inputs
- map them to one state
- optionally assign substates/tags if the current design genuinely supports them
- resolve one first repair direction
- remain auditable and reviewable

### 3. Real `/today/state`
Make `/today/state` feel like a genuine state-result route, not just a fixture screen.

At minimum:
- clear state summary
- one next best move
- one anti-escalation / make-it-worse cue
- one quick-script or equivalent bounded support element
- one clear action into `/today`

### 4. Real `/today`
Make `/today` actually consume the loop result coherently.

At minimum:
- current state visible
- next best move visible
- one prevention/support card visible
- today feels like the natural continuation of `/today/state`

### 5. Local-first only
Use local route state, query state, or local fixture/state-management patterns only.

Acceptable:
- route/query params
- local state containers
- deterministic fixture objects
- small local utility modules

Do **not** add:
- Supabase
- database writes
- auth requirement
- remote inference

---

## Out of scope

- persistence of check-ins across sessions
- real user profiles
- saved state
- owned entitlements
- AI utilities
- dynamic detail routes
- progress metrics from real data
- store/pricing/library work
- broad redesign outside what is needed for loop coherence
- analytics/tracking systems

---

## Product realism contract

The loop must feel designed for a user who:

- is stressed, activated, confused, or worn down
- wants one practical next move
- is using the app alone
- does not want a lecture
- will disengage if the flow feels too long, too fuzzy, or too “therapy worksheet”

The loop must therefore:
- reduce ambiguity fast
- avoid pseudo-profound copy
- avoid equal-weight options everywhere
- produce one clear next move
- feel calm and decisive
- preserve the premium member-shell tone already established

---

## UX / quality contract

The flow must satisfy all of the following:

1. `/start` still makes the pathway obvious
2. `/today/check-in` feels like an intentional assessment step
3. `/today/state` feels like a real result, not a placeholder
4. `/today` feels like the practical continuation
5. one dominant CTA exists at each step
6. scan-first hierarchy is preserved
7. the member shell stays premium, restrained, and tool-like
8. if something looks actionable, it is actionable

---

## Preferred implementation posture

This packet should prefer:

- deterministic logic over fake cleverness
- simple auditable mappings
- restrained but decisive UI
- route-to-route continuity
- local-first proof over theoretical completeness

Avoid:
- giant classification matrices too early
- “AI coach” language
- content sprawl
- invisible state logic
- three different next moves fighting each other

---

## Allowed files

Builder may touch only the minimum file set required for this loop.

Likely allowed areas:

- `src/app/(marketing)/start/page.tsx`
- `src/app/(app)/today/check-in/page.tsx`
- `src/app/(app)/today/state/page.tsx`
- `src/app/(app)/today/page.tsx`
- minimal supporting components for:
  - `CheckInGrid`
  - `StateSummaryCard`
  - `NextBestMoveCard`
  - `MakeItWorseCard`
  - `QuickScriptCard`
- minimal local utility/module files for deterministic state mapping
- `src/config/page-data.ts`
- `src/config/routes.ts`
- `src/app/globals.css` only where genuinely needed for loop coherence

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- Supabase or persistence files
- auth files
- Stripe/commerce files
- AI route handlers or prompts
- unrelated route families
- dynamic detail-route files
- Phase 1 governance docs
- later-phase product surfaces

---

## Acceptance criteria

BP-112 passes only if all of the following are true:

1. the end-to-end route sequence `/start → /today/check-in → /today/state → /today` works credibly
2. the classifier is deterministic and reviewable
3. no LLM is used for primary diagnosis/classification
4. `/today/state` produces one believable state and one clear next move
5. `/today` clearly tells the user what to do next
6. the loop works without backend dependency
7. the member-shell premium tone is preserved
8. no persistence/auth/AI/commerce creep was introduced
9. the patch remains bounded enough to review as a Phase 2 opening packet
10. `pnpm lint` passes
11. `pnpm build` passes

---

## Validation requirements

Run and record:

- `pnpm lint`
- `pnpm build`

Also provide:
- changed-file list
- one-line reason per changed file
- deterministic mapping note
- note on `/today/check-in`
- note on `/today/state`
- note on `/today`
- explicit confirmation that no forbidden-scope systems were introduced

If validation fails, record the exact failure.

---

## Builder instructions

1. Start from the current live routes and current shell quality, not from early scaffolds.
2. Keep the loop calm, fast, and auditable.
3. Do not fake persistence or personalization.
4. Keep the result state count bounded.
5. Preserve strong CTA hierarchy.
6. Stop if the packet starts drifting into backend or AI work.

---

## Reviewer focus

Reviewer must check:

- whether the full local-first loop now works
- whether the classifier is deterministic and comprehensible
- whether the user is told what to do next fast enough
- whether the loop feels believable tonight, not academic
- whether the packet stayed inside Phase 2 opening scope
- whether lint/build pass

The Content / Structure Operator must confirm:
- the loop remains solo-first
- state/result language is practical rather than preachy
- the pathway serves moment-of-use reality

The Human Governor must confirm:
- this is the right depth for opening Phase 2
- the app now has a credible deterministic core loop without backend dependency

---

## Required outputs

### Primary output
A bounded Phase 2 opening patch implementing the deterministic local-first state loop.

### Builder handoff note
Create:

`reviews/phase-2/open/BP-201-phase-2-local-first-state-loop-opening-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- validation results
- deterministic mapping rationale
- loop rationale
- explicit confirmation that no forbidden-scope systems were touched

---

## Initial task state

Place this file at:

`tasks/phase-2/open/BP-201-phase-2-local-first-state-loop-opening.md`

Builder-complete work must move to:

`tasks/phase-2/review/`

Only accepted work ends in:

`tasks/phase-2/done/`

---

## Stop conditions

Stop and report immediately if:

- the deterministic classifier cannot be kept bounded
- the loop cannot feel credible without backend persistence
- the packet begins drifting into AI/auth/database work
- the patch stops being a clean Phase 2 opening packet

---

## Success definition

Success is not “there are more components.”

Success is:

- the deterministic loop works locally
- the user reaches one believable state and one next move
- the flow feels product-real
- the patch stays bounded
- validation passes
- Phase 2 is genuinely underway rather than nominally opened
