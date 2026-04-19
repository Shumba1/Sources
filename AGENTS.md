# AGENTS.md

## Purpose

This file is the top-level worker contract for the MarriageOS repo.

Every planner, builder, reviewer, or content / structure operator entering this repo must follow this file before touching code, content, schemas, routes, metadata, page-data, or product copy.

This repo is not an open playground. It is a **phase-gated, canon-bound, repair-first product build**.

---

## Project definition

MarriageOS is a **mobile-first, repair-first relationship operating system** for couples with remaining goodwill.

The product is designed to:

- detect drift early
- interrupt escalation quickly
- route the user into the right repair path
- protect desire, respect, and teamwork over time
- feel usable in the moment of friction, not only in calm study mode

It is **not**:

- generic relationship advice
- therapy homework
- ideology content
- coercion logic
- surveillance software
- grievance entertainment
- “AI-first” product theatre

Repair is the centre of V1.

---

## Canonical authority order

When files disagree, use this order immediately:

1. `docs/DRIFT_REGISTER.md` and ratified addenda
2. Executable config and schema layer:
   - `src/config/routes.ts`
   - `src/config/page-data.ts`
   - `src/config/theme.ts`
   - `src/config/seo.ts`
   - `src/schemas/ui.ts`
   - `src/schemas/domain.ts`
3. `docs/MASTER_SPEC.md`
4. Accepted ADRs
5. Active support-control docs within their scope:
   - `docs/README_ACTIVE_SET.md`
   - `docs/Voice and Tone Bible.md`
   - `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
   - `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`
   - `docs/DELIVERY_ARCHITECTURE.md`
   - `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`
   - `docs/marriage_os_implementation_phases.md`
   - `docs/marriage_os_repo_enforcement_checklist.md`
   - `REPO_TREE_PLACEMENT_PLAN.md`
6. Everything else = reference only

If a planning document conflicts with the canonical layer above, the canonical layer wins.

### Important delivery rule

`docs/DELIVERY_ARCHITECTURE.md` is **not** the top canonical authority, but it is the **primary delivery-control file** for work touching:

- copy
- labels
- route fit
- page-data
- content objects
- component / render binding
- target surface behaviour
- metadata / schema surfaces
- free / paid boundary expression
- phase eligibility of delivery objects

For delivery-sensitive work, treating `DELIVERY_ARCHITECTURE.md` as optional is an error.

---

## Builder start order

If you are new to the repo, read in this order before proposing changes:

1. `docs/README_ACTIVE_SET.md`
2. `docs/MASTER_SPEC.md`
3. `docs/DRIFT_REGISTER.md`
4. `docs/ADR-001-production-architecture-marriage-os.md`
5. `docs/ADR-002-repo-cleanup-follow-up.md`
6. `REPO_TREE_PLACEMENT_PLAN.md`
7. `docs/Voice and Tone Bible.md`
8. `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
9. `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`
10. `docs/DELIVERY_ARCHITECTURE.md`
11. `src/config/routes.ts`
12. `src/config/theme.ts`
13. `src/config/page-data.ts`
14. `src/schemas/ui.ts`
15. `src/schemas/domain.ts`

Do not build from memory. Do not build from stale prose if executable config already exists.

---

## Work-type reading matrix

Use the following minimum read set before building.

### Code-only patch
Read:
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- relevant ADRs
- relevant executable config / schema files

### Content / render / route-label patch
Read:
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/Voice and Tone Bible.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- relevant executable config / schema files

### Metadata / SEO / page-schema patch
Read:
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- relevant executable config / schema files

### Graphics / media / surface-expression patch
Read:
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- relevant executable config / schema files

If the work changes user-facing delivery but the packet does not name `docs/DELIVERY_ARCHITECTURE.md`, the packet is incomplete.

---

## Current role set

### 1. Planner / Architect
Defines the bounded task.

Owns:
- scope
- target files
- forbidden files
- dependencies
- acceptance criteria
- validation steps
- review requirements

### 2. Builder
Produces the smallest viable patch that satisfies the packet.

Owns:
- implementation
- patch hygiene
- test execution
- concise change log

### 3. Reviewer
Checks the patch against canon, schemas, routes, and repo rules.

Owns:
- compliance review
- regression detection
- acceptance verdict
- rework triggers

### 4. Content / Structure Operator
Checks whether content, route, schema, render surface, and voice mode actually fit.

Owns:
- object shape
- destination fit
- phase eligibility
- render-fit
- naming / label fit
- moment-of-use fit
- content safety and delivery discipline

### 5. Human Governor
Final decision-maker.

Owns:
- scope approval
- sequencing
- escalation
- go / hold decisions
- acceptance into durable project state

The Human Governor is the only role that can convert “in review” into accepted project state.

---

## Core operating rules

### Rule 1 — Phase gates are real
Use `docs/marriage_os_implementation_phases.md` as the execution-phase authority.

Do not build ahead of the current phase.

The current build order is:

1. Phase 0 — Repo cleanup and architecture lock
2. Phase 1 — PWA foundation with no database
3. Phase 2 — Local-first state system
4. Phase 3 — Repair Centre with local content
5. Phase 4 — Perspectives and Knowledge with local content
6. Phase 5 — Commerce UI and library states, still local
7. Phase 6 — Supabase integration
8. Phase 7 — Stripe and entitlement wiring
9. Phase 8 — Progress from real data
10. Phase 9 — AI utilities

### Rule 2 — Do not outrun local-first sequencing
Before Supabase or Stripe, the product must already feel real through:
- route rendering
- mobile shell
- local fixtures
- deterministic state flow
- repair-first experience

### Rule 3 — One bounded packet at a time
Every meaningful task must start with a build packet.

The packet must define:
- objective
- current phase
- canonical files consulted
- allowed files
- forbidden files
- acceptance criteria
- validation commands
- review lanes required

For delivery-sensitive work, the packet must also define:
- object type
- destination family
- target surface
- renderer / component path
- moment of use
- phase eligibility
- delivery-architecture sections consulted

### Rule 4 — Repo truth beats chat
If a decision, structure, rule, or implementation artifact is not written back into the repo, it is not durable project state.

### Rule 5 — No agent theatre
No swarms.
No “autonomous company” behaviour.
No speculative rewrites.
No personality lore.
No making up architecture because a model is confident.

---
### Rule 6 — Task state is explicit

`open` is not a terminal state.

Use this lifecycle for packet execution:

- `open` = approved to start or actively being built
- `review` = Builder has finished and attached the required handoff package
- `rework` = review failed but the task can be corrected
- `blocked` = the task cannot proceed without dependency resolution or governor direction
- `done` = Human Governor accepted the task into durable repo state

A task may leave `open` only when the Builder has supplied all of the following:

- changed-file list
- concise change summary
- validation results
- risks / side effects
- review notes
- recommended next state

If those do not exist, the task is not ready for `review`.

### Rule 7 — “Builder finished” is not “done”

A task is only done when:

- review passed
- delivery checks passed where relevant
- the Human Governor accepted it
- the repo write-back is complete
- the tracker was updated
- the next action was logged if needed

---

## Review lanes

### Standard lane
Use:
- Planner
- Builder
- Reviewer
- Human Governor

Applies to:
- typical code work
- route fixes
- component work
- schema-aligned implementation

### Content-sensitive lane
Use:
- Planner
- Builder
- Reviewer
- Content / Structure Operator
- Human Governor

Applies to:
- copy changes
- route label changes
- content object work
- page-data changes
- content rendering changes
- metadata / schema surface changes
- guide / knowledge / repair / product content work
- any patch whose user-facing delivery depends on `docs/DELIVERY_ARCHITECTURE.md`

### Task folder state model

Use this folder/state model in the repo:

```text
tasks/
  phase-<n>/
    open/
    review/
    rework/
    blocked/
    done/
```

And the matching review lanes:

```text
reviews/
  phase-<n>/
    open/
    done/
```

### State transition rules

- `open` → `review` when Builder handoff is complete
- `review` → `done` when the Human Governor accepts the task
- `review` → `rework` when fixes are required
- `review` → `blocked` when a dependency or canonical conflict stops progress
- `rework` → `open` only after the packet or task file is updated for a fresh build pass

Do not move a task from `open` straight to `done`.

---

## Mandatory stop conditions

Stop immediately if any of the following are true:

- canonical files conflict and the conflict is unresolved
- the request breaks the current implementation phase
- the request assumes a second auth system
- the request revives `/upgrade` as live logic
- the request reintroduces stale public labels or CTA copy
- the request uses `KnowledgeArticleCard` as the body renderer for `/knowledge/[slug]`
- the request creates content with no defined destination
- the request introduces AI as foundational product truth
- the request requires a large rewrite when a bounded patch was requested
- the worker cannot name the exact files that should be changed
- a delivery-sensitive patch has no declared moment of use, surface, or renderer path
- `docs/DELIVERY_ARCHITECTURE.md` was required but not consulted

When a stop condition fires, do not guess. Escalate with a short, explicit blocker note.
