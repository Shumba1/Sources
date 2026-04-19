# BP-101 — Phase 1 Repo Foundation and Shell Split

## Packet ID
BP-101

## Phase
Phase 1

## Status
Open

## Objective
Establish the first safe Phase 1 implementation slice by creating the repo foundation for the app shell and splitting the shell into bounded, reusable layout pieces, without introducing backend coupling, auth, billing, AI features, or product-content generation.

This packet is the first real build packet after Phase 0 closure. It should prove that the repo can execute a disciplined implementation packet while preserving canonical authority, delivery control, and the open → review → done lifecycle.

---

## Why this packet exists
Phase 0 established governance truth. Phase 1 must now begin with a deliberately narrow implementation slice that:

- creates or stabilises the app shell foundation
- respects the canonical implementation order
- avoids speculative infrastructure
- avoids feature creep
- gives later packets a clean shell to build on

This packet is **not** a feature packet. It is a **foundation and shell split** packet.

---

## Required reading order
Read in this order before making changes:

1. `AGENTS.md`
2. `docs/MASTER_SPEC.md`
3. `docs/marriage_os_implementation_phases.md`
4. `docs/DRIFT_REGISTER.md`
5. `docs/DELIVERY_ARCHITECTURE.md`
6. `REPO_TREE_PLACEMENT_PLAN.md`
7. Relevant route/config/schema files already present in the repo
8. Relevant app-shell/layout/navigation files already present in the repo

If any of these conflict, stop and report the contradiction. Do not improvise.

---

## Task classification
**Type:** implementation / shell / layout / delivery-sensitive

Because this packet touches route/surface/layout behaviour, `docs/DELIVERY_ARCHITECTURE.md` is mandatory, even though no content objects are being generated.

---

## Scope
### In scope
- establish or normalise a bounded app-shell structure
- split shell concerns into clear layout responsibilities
- create or stabilise route scaffolds for the earliest Phase 1 surfaces
- implement nav chrome/frame structure needed for the shell
- implement safe mobile viewport behaviour (`100dvh` / safe-area-aware shell behaviour where appropriate)
- keep the shell ready for later page-data and content-binding work
- fix only shell-adjacent wiring required to make the split coherent

### Out of scope
- auth
- backend services
- Supabase
- Stripe
- billing/entitlements
- AI features or agent runtime inside the app
- content generation
- editorial population
- full page implementations
- deep visual polish beyond what is needed for structural correctness
- speculative abstractions for future unknown systems

---

## Delivery-sensitive declarations
- **Object type:** app shell / layout / route scaffold
- **Destination family:** application shell (not a content object)
- **Target surface:** mobile-first PWA shell
- **Renderer / component path:** existing app layout shell and route scaffolding components in `src/**`
- **Moment of use:** first open / navigation / shell orientation
- **Phase eligibility:** eligible for Phase 1
- **DA reference:** sections governing moment-of-use, surface fit, route/surface discipline, and phase eligibility for shell-first delivery

---

## Allowed files
The Builder may touch only the minimum set required for the shell split. Typical allowed areas are:

- root app layout files
- shell/layout components under `src/**`
- route scaffold files for the earliest permitted Phase 1 surfaces
- app styling/token files only where necessary to support shell structure and safe-area behaviour
- config or registry files strictly required to wire the shell split coherently

The Builder must name exact target files before implementation begins.

---

## Forbidden files
Do not touch unless the Human Governor explicitly reissues scope:

- payment/billing files
- auth files
- database wiring
- AI utility or orchestration files
- content corpus under `sources/**`
- Phase 0 governance files except where a direct reference fix is strictly required by this packet
- unrelated feature pages
- broad visual redesign files outside the shell path

---

## Acceptance criteria
The packet passes only if all of the following are true:

1. the shell is split into bounded, understandable structural pieces rather than one swollen catch-all layer
2. route scaffolds exist or are stabilised for the earliest allowed shell surfaces
3. shell navigation/chrome works at the structural level
4. mobile viewport behaviour is safe and intentional, including `100dvh` / safe-area handling where needed
5. no backend, auth, billing, or AI wiring is introduced
6. no content-generation or content-population work is smuggled into the packet
7. the patch remains phase-correct and canon-compliant
8. the changed-file list is tight and justified
9. review can understand exactly what changed and why

---

## Validation requirements
Run all applicable checks already supported by the repo, for example:

- typecheck
- lint
- test suite if present and relevant
- local build

Also provide:

- changed-file list
- short rationale per changed file
- note on safe-area / viewport handling
- note confirming no backend/auth/billing/AI creep

If expected validation commands do not exist, state that explicitly rather than inventing them.

---

## Builder instructions
1. inspect current shell/layout/route structure before editing
2. define the exact target-file list
3. keep the patch minimal and structural
4. avoid introducing future-facing abstractions that are not yet justified
5. preserve existing canonical naming where possible
6. do not silently rewrite delivery logic
7. stop if shell work exposes unresolved canon/config contradictions

---

## Reviewer focus
The Reviewer must check:

- phase correctness
- shell split clarity
- route scaffold coherence
- viewport/safe-area correctness
- absence of backend/auth/billing/AI creep
- no silent doctrine change
- whether the packet solved a structural problem instead of just moving code around cosmetically

If delivery-sensitive implications exist, the Content / Structure Operator must also confirm surface-fit and shell moment-of-use fit.

---

## Expected outputs
### Primary output
A bounded patch implementing the shell split and route foundation.

### Handoff package
The Builder must provide:

- changed-file list
- validation results
- concise implementation note
- explicit statement that packet is ready for `tasks/phase-1/review/`

---

## Initial task state
Place this file at:

`tasks/phase-1/open/BP-101-phase-1-repo-foundation-and-shell-split.md`

Builder-complete work must move to:

`tasks/phase-1/review/`

Only accepted work ends in:

`tasks/phase-1/done/`

---

## Stop conditions
Stop and report immediately if:

- shell work requires backend coupling
- phase rules conflict across governing docs
- route assumptions depend on unratified content structures
- required files are missing and cannot be introduced without widening scope
- the packet starts drifting into full page build or product feature work

---

## Success definition
Success is not “the app looks impressive.”

Success is:
- the shell foundation is cleaner
- the next implementation packet has a stable base
- no forbidden systems were pulled in
- the patch is small enough to review properly
- Phase 1 begins without chaos
