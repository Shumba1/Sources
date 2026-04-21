# BP-110 — Phase 1 pass-gate alignment and accepted variance ratification

## Packet metadata
- **Packet ID:** BP-110
- **Phase:** Phase 1
- **Status:** Open
- **Type:** Governance / pass-gate alignment / accepted-variance packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Human Governor
- **Task state on completion by builder:** `tasks/phase-1/review/`

---

## Objective

Align the **written Phase 1 pass gates** with the **actual intended Phase 1 scope** so that Phase 1 closure is judged against the correct foundation standard rather than an over-literal “every configured route must already render” reading.

This packet exists because BP-109 returned an explicit **NO-GO** and identified two problems at once:

1. the live product has made substantial, real Phase 1 progress
2. the current written gates still classify several later-phase route families as Phase 1 blockers

This packet must resolve that mismatch by:

- ratifying what **Phase 1 actually requires**
- ratifying what is **explicitly deferred**
- recording the defer map in canonical docs
- ensuring future closure review is testing the intended scope rather than route-count theatre

This is a **governance alignment packet**, not an app-build packet.

---

## Why this packet exists now

BP-109 concluded:

- Phase 1 is **not complete** under `Implementation Plan.md`
- Phase 1 is **not complete** under `marriage_os_implementation_phases.md`
- Phase 2 should **not** open yet

It also identified the specific reason: multiple missing routes are being treated as Phase 1 blockers, including dynamic detail routes and later-phase commercial/account surfaces. That is procedurally consistent with the current wording, but strategically too literal for the intended Phase 1 foundation. The report explicitly said there is **no accepted variance currently identified**. This packet creates that variance properly and updates the governing docs accordingly.

---

## Required reading order

Read in this order before changing anything:

1. `AGENTS.md`
2. `docs/MASTER_SPEC.md`
3. `docs/marriage_os_implementation_phases.md`
4. `docs/Implementation Plan.md`
5. `docs/DRIFT_REGISTER.md`
6. `docs/README_ACTIVE_SET.md`
7. `REPO_TREE_PLACEMENT_PLAN.md`
8. `reviews/phase-1/open/BP-109-phase-1-closure-review-report.md`
9. `src/config/routes.ts`

If these authorities materially conflict, stop and report before editing.

---

## Task classification

- **Type:** governance alignment / phase-gate correction / accepted variance
- **Object type:** Phase 1 closure criteria and route-family defer map
- **Target surface:** canonical docs, not app UI
- **Phase-eligible now:** yes

---

## Core ratification outcome required

This packet must produce a clean, explicit ratification of the following Phase 1 scope map.

### A. Keep in Phase 1 close-out (true blockers)
These remain required before Phase 1 can close:

- `/today/check-in`
- `/today/state`

Reason:
These are directly tied to the top-level user orientation/state pathway and the BP-109 report explicitly warns that opening Phase 2 local-state work on an incomplete check-in/state scaffold would create avoidable rework.

### B. Defer to Phase 3 — detail-route and content-object expansion
These are **not** Phase 1 blockers and must be explicitly moved out of Phase 1 closure criteria:

- `/repair/[slug]`
- `/guides/[slug]`
- `/knowledge/[slug]`

Reason:
These are dynamic detail routes and belong to the phase where detail rendering, deeper content objects, and content-surface expansion are intentionally opened.

### C. Defer to Phase 4 — commercial and public-readiness surfaces
These are **not** Phase 1 blockers and must be explicitly moved out of Phase 1 closure criteria:

- `/store`
- `/pricing`
- `/library`
- `/safety`

Reason:
These are commercial, library, or public-readiness / trust surfaces and do not belong in the Phase 1 shell-and-top-level-foundation gate.

### D. Defer to Phase 4 or 5 — auth/account/member settings
These are **not** Phase 1 blockers and must be explicitly moved out of Phase 1 closure criteria:

- `/login`
- `/sign-up`
- `/account`
- `/settings`

Reason:
These belong to the auth/account/access phase and should not block Phase 1 unless the product is explicitly trying to prove gated member flows now, which it is not.

---

## In scope

### 1. Pass-gate wording alignment
Update the relevant canonical docs so that Phase 1 closure criteria reflect the intended Phase 1 foundation.

This includes:
- removing or correcting any wording that implies all configured routes must render in Phase 1
- replacing that with a narrower, phase-appropriate route requirement
- explicitly separating:
  - Phase 1 required routes
  - Phase 3 deferred detail routes
  - Phase 4 deferred commercial/public-readiness routes
  - Phase 4/5 deferred auth/account routes

### 2. Accepted variance ratification
Record an explicit accepted variance that says:

- the current broader configured route tree remains valid as a forward map
- but its later-phase routes are **not** all Phase 1 blockers
- Phase 1 closure is judged against the aligned route-family map above

### 3. DRIFT_REGISTER entry or resolution update
Add or update the relevant drift register entry so there is a durable record that:

- previous Phase 1 wording was too literal for intended execution
- the defer map has now been ratified
- future closure reviews must use the aligned pass gate

### 4. Active-set / repo entry-point alignment
Update any relevant repo entry docs so they do not continue pointing reviewers toward the old over-literal Phase 1 interpretation.

Likely files:
- `docs/README_ACTIVE_SET.md`
- `README.md` if needed
- any checklist or implementation-sequencing file that directly restates Phase 1 closure

### 5. Keep route config intact
Do **not** gut `src/config/routes.ts`.

The broader route map may still be useful as the forward roadmap. The point of this packet is to align **phase gating**, not erase future routes from existence unless the governing docs explicitly require it.

---

## Out of scope

- implementing any missing app routes
- app-shell or UI changes
- `/today/check-in` or `/today/state` implementation
- dynamic detail-route implementation
- store/pricing/library implementation
- auth/account implementation
- SEO or PWA runtime changes
- route-config redesign beyond what is necessary to prevent pass-gate confusion

---

## Preferred implementation posture

This packet should prefer:

- explicit phase-gate wording
- explicit defer-map tables or bullet lists
- tight cross-document consistency
- durable variance recording
- minimum viable documentation changes

Avoid:
- broad rewriting of the roadmap
- deleting useful future-route planning
- vague prose that leaves room for the same confusion again
- turning the docs into an essay instead of an enforceable gate

---

## Allowed files

Builder may touch only the minimum canonical docs required to align the pass gate.

Likely allowed areas:

- `docs/marriage_os_implementation_phases.md`
- `docs/Implementation Plan.md`
- `docs/DRIFT_REGISTER.md`
- `docs/README_ACTIVE_SET.md`
- `README.md` only if genuinely needed for top-level consistency
- other phase-gating/checklist docs only if they clearly restate the disputed pass gate

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- `src/app/**`
- `src/components/**`
- `src/config/page-data.ts`
- runtime/product code
- `sources/**`
- unrelated governance docs
- later-phase roadmap sections unrelated to the Phase 1 gate confusion

---

## Acceptance criteria

BP-110 passes only if all of the following are true:

1. Phase 1 closure wording is materially clearer and no longer implies that all configured future routes are Phase 1 blockers
2. `/today/check-in` and `/today/state` remain explicitly inside Phase 1 close-out scope
3. the exact defer map below is recorded in canonical docs:
   - Phase 3: `/repair/[slug]`, `/guides/[slug]`, `/knowledge/[slug]`
   - Phase 4: `/store`, `/pricing`, `/library`, `/safety`
   - Phase 4 or 5: `/login`, `/sign-up`, `/account`, `/settings`
4. an explicit accepted variance or equivalent ratified clarification is recorded
5. DRIFT_REGISTER is updated to reflect the resolved pass-gate ambiguity
6. active-set / entry docs no longer point reviewers toward the old over-literal interpretation
7. the patch stays bounded to governance alignment
8. Phase 1 can be re-reviewed against the corrected gate without ambiguity

---

## Validation requirements

Run and record:

- targeted text checks showing the new Phase 1 closure wording
- targeted text checks showing the defer map is recorded consistently
- no runtime validation commands are required for this packet because it is docs-only

Also provide:
- changed-file list
- one-line reason per changed file
- note on accepted variance wording
- note on how the BP-109 NO-GO findings were incorporated
- explicit confirmation that no product code was touched

---

## Builder instructions

1. Start from the BP-109 report’s actual blocker list, not memory.
2. Align the docs so the gate matches the intended Phase 1 foundation.
3. Preserve the usefulness of forward route planning while removing those routes as Phase 1 blockers.
4. Keep the packet tightly bounded to pass-gate correction and accepted variance.
5. Do not implement missing routes in this packet.
6. Stop if the packet begins drifting into broader roadmap redesign.

---

## Reviewer focus

Reviewer must check:

- whether the previous ambiguity is genuinely resolved
- whether the exact defer map is recorded cleanly and consistently
- whether `/today/check-in` and `/today/state` remain Phase 1 blockers
- whether dynamic detail/commercial/auth routes are no longer treated as Phase 1 blockers
- whether the packet stayed docs-only and bounded
- whether the updated wording is enforceable rather than vague

The Human Governor must explicitly confirm that the defer map reflects intended execution reality before BP-109 is rerun.

---

## Required outputs

### Primary output
A bounded governance patch aligning the Phase 1 pass gate and ratifying the accepted defer map.

### Builder handoff note
Create:

`reviews/phase-1/open/BP-110-phase-1-pass-gate-alignment-and-accepted-variance-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- summary of the new Phase 1 gate wording
- summary of the defer map
- accepted variance note
- explicit confirmation that no product code was touched

---

## Initial task state

Place this file at:

`tasks/phase-1/open/BP-110-phase-1-pass-gate-alignment-and-accepted-variance.md`

Builder-complete work must move to:

`tasks/phase-1/review/`

Only accepted work ends in:

`tasks/phase-1/done/`

---

## Stop conditions

Stop and report immediately if:

- the governing docs are too contradictory to align without a wider architecture/roadmap decision
- the defer map cannot be recorded without clashing with a higher canonical authority
- the packet begins drifting into implementation work
- the patch stops being a bounded pass-gate alignment packet

---

## Success definition

Success is not “the docs say yes.”

Success is:

- the Phase 1 closure gate now matches intended execution reality
- the exact defer map is canonically recorded
- the BP-109 NO-GO can be rerun against a corrected gate
- only `/today/check-in` and `/today/state` remain as true Phase 1 route blockers
- the team can close Phase 1 honestly rather than by brute-force route inflation
