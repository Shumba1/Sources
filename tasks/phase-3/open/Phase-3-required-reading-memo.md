# Phase 3 Required Reading Memo

## Purpose

This memo defines the required reading set for **Phase 3 — Repair Centre with local content**.

It exists to stop the next Phase 3 packet from drifting into:
- generic content generation
- knowledge/guides expansion too early
- rogue doctrine creation
- dynamic-route sprawl
- delivery-shape confusion

Phase 3 is the first point where **real product content** and **real implementation** become tightly coupled.  
That makes the reading discipline stricter than it was in Phase 2.

---

## Phase 3 operating reality

Phase 3 is where Marriage OS must stop feeling like:
- a believable shell
- a deterministic utility loop
- a set of promising route stubs

and start feeling like:
- a real Repair-first product
- a system that routes into practical repair actions
- a product whose centre is obviously **Repair**

The canonical phase document defines Phase 3 as:
- repair index
- symptom/category browsing
- repair module template
- checklist/protocol rendering
- reset timeline
- sticky action bar
- linked local products/guides

It also states the first true proof-of-life milestone is:

`/start → /today/check-in → /today/state → /today → /repair/[slug]`

That is the correct opening target for Phase 3.

---

## Dynamic-route posture for Phase 3

### What becomes legitimate now
Phase 3 is the first phase where a dynamic detail route is not only allowed, but required to make the product feel real.

For Phase 3 opening work, that route is:

- `/repair/[slug]`

### What does **not** open in the first Phase 3 packet
The cleaned defer map separates the detail-route families:

- `/repair/[slug]` opens in Phase 3 as the Repair proof path.
- `/guides/[slug]` remains Phase 4 Perspectives work.
- `/knowledge/[slug]` remains Phase 4 Knowledge work.

So **BP-301 must not open Guides or Knowledge detail routes**.

### Packet-level decision
For Phase 3 opening discipline:

- `/repair/[slug]` opens now
- `/guides/[slug]` is deferred from BP-301
- `/knowledge/[slug]` is deferred from BP-301

### Why that deferment is correct
This is not a contradiction of the defer map.  
It is an execution-boundary decision based on the canonical phase model:

- **Phase 3** centres on **Repair**
- **Phase 4** centres on **Perspectives and Knowledge with local content**

So `guides` and `knowledge` detail routes are **deferred to Phase 4 packets** unless a later accepted packet explicitly widens scope.

That protects:
- build focus
- content quality
- route realism
- doctrinal consistency

---

## Reading hierarchy rule

Before Phase 3 work starts, use this hierarchy:

1. `docs/DRIFT_REGISTER.md`
2. Executable config / schemas:
   - `src/config/routes.ts`
   - `src/config/theme.ts`
   - `src/config/page-data.ts`
   - `src/schemas/ui.ts`
   - `src/schemas/domain.ts`
3. `docs/MASTER_SPEC.md`
4. Accepted ADRs
5. Active support-control docs within allowed scope:
   - `docs/Voice and Tone Bible.md`
   - `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
   - `docs/BRAND_AND_VISUAL_SYSTEM.md`
   - `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`
   - `docs/DELIVERY_ARCHITECTURE.md`
   - `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`

This follows the active-set rule already established in `docs/README_ACTIVE_SET.md`.

---

## Mandatory reading order for Phase 3

Read these in this order before any Phase 3 implementation packet.

### 1. `docs/README_ACTIVE_SET.md`
**Why first**
- establishes source hierarchy
- identifies active vs reference-only layers
- prevents planning docs from being mistaken for canon

### 2. `docs/DRIFT_REGISTER.md`
**Why**
- Phase 3 is where content, routes, naming, and delivery-shape can collide
- unresolved or accepted drift items must be visible before implementation

### 3. `docs/MASTER_SPEC.md`
**Why**
- preserves product doctrine
- keeps Repair as the centre of V1
- prevents generic self-help drift
- keeps solo-first posture intact

### 4. `docs/marriage_os_implementation_phases.md`
**Why**
- this is the canonical phase-gate authority
- defines what Phase 3 is
- defines what Phase 4 is
- protects sequencing discipline

### 5. `docs/DELIVERY_ARCHITECTURE.md`
**Why**
- Phase 3 introduces real product objects, not just shells
- controls what kind of object each Repair asset actually is
- stops repair modules from becoming essays or vague content buckets

### 6. `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`
**Why**
- one of the most operationally important Phase 3 docs
- tells the team which source reservoir should feed which object type
- prevents chatter from becoming backbone doctrine
- prevents books from being misused as raw emotional phrasing

### 7. `docs/SYSTEM_DECAY_REPAIR_MODEL.md`
**Why**
- provides the conceptual backbone for why Repair exists
- keeps symptom → protocol conversion tied to real system logic
- prevents “repair” from collapsing into generic communication advice

### 8. `docs/Voice and Tone Bible.md`
**Why**
- Phase 3 contains real user-facing module copy
- governs scripts, protocol intros, action headers, warnings, and user guidance
- prevents preachiness, self-help sludge, and pseudo-profound filler

### 9. `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
**Why**
- Repair surfaces need practical clarity, not visual noise
- controls icon system, directional affordances, and sparse member-shell posture
- especially important once sticky action bars and protocol cards appear

### 10. `docs/BRAND_AND_VISUAL_SYSTEM.md`
**Why**
- Phase 3 is where Repair must become visually and structurally distinct from Guides/Perspectives and Knowledge
- governs the marketing-shell/member-shell split
- confirms Repair as the action/intervention centre, Guides/Perspectives as the meaning layer, and Knowledge as the reference layer
- prevents member repair flows from inheriting marketing-only warmth, campaign panels, or public persuasion styling
- establishes the dark, sparse, blue-led, private, tool-first member-shell standard for Repair

### 11. `docs/marriage_os_repo_enforcement_checklist.md`
**Why**
- useful guardrail once new route families and render paths appear
- keeps implementation tied to active canon and approved controls

### 12. `docs/ADR-001-production-architecture-marriage-os.md`
**Why**
- keeps the production architecture stable while Phase 3 gets more ambitious
- stops backend/auth/commerce assumptions from leaking into local Repair work

### 13. `docs/ADR-002-repo-cleanup-follow-up.md`
**Why**
- prevents stale route logic, dead scaffolds, and superseded product assumptions from resurfacing

### 14. `docs/Implementation Plan.md`
**Why**
- not sequencing authority
- still useful as a companion execution/workstream plan
- helps with implementation posture, not phase-gating

### 15. `docs/marriage_os_operator_checklist.md`
**Why**
- becomes more important because the user may want to **finalize real Repair content**
- useful when content generation begins feeding product modules
- keeps the content pipeline disciplined instead of token-wasteful

---

## Conditional consult documents

These are not mandatory for every Phase 3 packet, but must be consulted when relevant.

### `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`
Consult if:
- the packet changes indexability
- the packet changes metadata/canonical policy
- the packet opens public-facing detail routes

For a member-shell `/repair/[slug]` packet, this is usually a light consult, not a central authority.

### `docs/SOURCE_MANIFEST.md`
Consult if:
- provenance or source identity becomes important
- there is a dispute about what reservoir material should be trusted
- a content-finalization packet needs traceability back to source groups

---

## Phase 3 reading tiers

### Tier 1 — must-read
- `docs/README_ACTIVE_SET.md`
- `docs/DRIFT_REGISTER.md`
- `docs/MASTER_SPEC.md`
- `docs/marriage_os_implementation_phases.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`
- `docs/SYSTEM_DECAY_REPAIR_MODEL.md`
- `docs/Voice and Tone Bible.md`
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
- `docs/BRAND_AND_VISUAL_SYSTEM.md`

### Tier 2 — must-consult
- `docs/marriage_os_repo_enforcement_checklist.md`
- `docs/ADR-001-production-architecture-marriage-os.md`
- `docs/ADR-002-repo-cleanup-follow-up.md`
- `docs/Implementation Plan.md`
- `docs/marriage_os_operator_checklist.md`

### Tier 3 — consult if touched
- `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`
- `docs/SOURCE_MANIFEST.md`

---

## Phase 3 content ambition note

Phase 3 is the first phase where the user may reasonably want to **shape and finalize the actual Repair content**, not just the shell.

That is legitimate.

But Phase 3 packets must still avoid:
- uncontrolled content sprawl
- opening too many route families at once
- confusing doctrine generation with implementation
- turning Repair into a dumping ground for every good source fragment

The safest operating model is:

- **BP-301** opens Repair structure and one real dynamic repair route
- later Phase 3 packets deepen repair modules and finalize more repair content
- `guides` and `knowledge` detail families remain deferred until Phase 4 packets unless explicitly widened

---

## Practical Phase 3 rule

When in doubt, ask:

1. Does this object make Repair more product-real right now?
2. Does it belong to the user’s moment of use?
3. Is the source reservoir correct for this object?
4. Is this really a Repair object, or is it trying to become Perspectives / Knowledge too early?
5. Does this widen route families beyond what the current packet can review properly?
6. Does the surface comply with the member-shell instrument mode in `docs/BRAND_AND_VISUAL_SYSTEM.md`?
7. Is Repair presenting as action/intervention rather than Guides/Perspectives meaning content or Knowledge reference content?

If the answer to (4), (5), or (7) is yes, the work probably belongs in Phase 4 or requires a new packet boundary.

If the answer to (6) is no, the work is visual-system drift and must be corrected before acceptance.

---

## Final instruction for BP-301

BP-301 should read and obey this memo.

Its opening mission is not “do all Phase 3”.

Its opening mission is:

- make `/repair` real
- make `/repair/[slug]` real
- make state → repair continuity real
- keep the packet bounded enough to review cleanly
- apply `docs/BRAND_AND_VISUAL_SYSTEM.md` so Repair presents as the action/intervention centre, not as Guides/Perspectives or Knowledge
