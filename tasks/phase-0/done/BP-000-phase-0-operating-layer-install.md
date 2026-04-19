# BP-000 — Phase 0 Operating Layer Install

## Packet ID
`BP-000`

## Objective
Install the MarriageOS operating layer into the repo so every later worker runs from repo-held rules, bounded packets, explicit review lanes, and mandatory delivery-architecture checks where relevant.

## Current phase
**Phase 0 — Repo cleanup and architecture lock**

## Why now
Phase 0 is about making the repo impossible to misread before feature work begins. This packet does that in the narrowest possible way: it installs the worker contract, reusable procedures, templates, and the initial queue structure **without** changing product behaviour.

This packet is intentionally smaller than the full Phase 0 cleanup. It creates the operating discipline first so the cleanup work is done under control rather than improvised in chat.

## Packet classification
- [ ] Code-only
- [x] Delivery-sensitive
- [ ] High-risk

## Canonical files consulted
- `README.md`
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/ADR-001-production-architecture-marriage-os.md`
- `docs/ADR-002-repo-cleanup-follow-up.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- `docs/marriage_os_implementation_phases.md`
- `docs/marriage_os_operator_checklist.md`
- `docs/marriage_os_repo_enforcement_checklist.md`

## Delivery architecture fields

- Object type: operating-layer governance files and execution templates
- Destination family: UI / operational surface
- Target surface: repo workflow, build packets, reviews, and tracker handoff
- Renderer / component path: N/A
- Moment of use: before any future worker starts repo work
- Phase eligibility: this is Phase 0 architecture lock work and must happen before broader implementation
- Delivery-architecture sections consulted: sections governing moment-of-use, format fit, surface fit, phase eligibility, and working-matrix sequencing

## Allowed files
- `AGENTS.md`
- `skills/build-packet-planning.md`
- `skills/bounded-patch-implementation.md`
- `skills/repo-review-gate.md`
- `skills/content-structure-operator.md`
- `templates/BUILD_PACKET_TEMPLATE.md`
- `templates/REVIEW_REPORT_TEMPLATE.md`
- `templates/CONTENT_RENDER_CHECK_TEMPLATE.md`
- `tasks/phase-0/open/BP-000-phase-0-operating-layer-install.md`
- `tasks/phase-0/review/.gitkeep`
- `tasks/phase-0/rework/.gitkeep`
- `tasks/phase-0/blocked/.gitkeep`
- `tasks/phase-0/done/.gitkeep`
- `reviews/phase-0/open/.gitkeep`
- `reviews/phase-0/done/.gitkeep`

## Forbidden files
- `src/**`
- `docs/**`
- `content/**`
- `sources/**`
- any auth implementation files
- any route implementation files
- any schema files
- any SEO files
- any monetisation files
- any file not explicitly listed in the allowed files section

## Required output
The repo must contain:

1. a root-level `AGENTS.md`
2. a root-level `skills/` directory with the four agreed procedures
3. a root-level `templates/` directory with the three agreed templates
4. a root-level `tasks/phase-0/` lifecycle with `open/`, `review/`, `rework/`, `blocked/`, and `done/`
5. this packet stored in `tasks/phase-0/open/`
6. a root-level `reviews/phase-0/` lane prepared for review reports
7. operating instructions that explicitly require `docs/DELIVERY_ARCHITECTURE.md` for delivery-sensitive work
8. no product-code or canonical-doc changes

## Acceptance criteria
- [ ] `AGENTS.md` exists at repo root
- [ ] `skills/` exists at repo root and contains exactly the four approved skill files
- [ ] `templates/` exists at repo root and contains exactly the three approved template files
- [ ] `tasks/phase-0/open/BP-000-phase-0-operating-layer-install.md` exists
- [ ] `tasks/phase-0/review/`, `rework/`, `blocked/`, and `done/` exist with `.gitkeep`
- [ ] task and review folders contain `.gitkeep` files where needed
- [ ] `AGENTS.md`, planner, builder, reviewer, and content / structure files explicitly wire in `docs/DELIVERY_ARCHITECTURE.md` where relevant
- [ ] build and review templates capture object, destination, surface, renderer, moment-of-use, and delivery-architecture reference fields for delivery-sensitive work
- [ ] no files in `src/`, `docs/`, `content/`, or `sources/` were changed
- [ ] the operating layer can be understood without leaving the repo
- [ ] the repo now supports bounded packet → build → review → done / rework / blocked execution

## Validation steps
- [ ] Run `git diff --name-only` and confirm only allowed files changed
- [ ] Run `find skills templates tasks reviews -maxdepth 3 -type f | sort`
- [ ] Open `AGENTS.md` and confirm role set = Planner / Builder / Reviewer / Content-Structure Operator / Human Governor
- [ ] Open `AGENTS.md` and confirm `docs/DELIVERY_ARCHITECTURE.md` is mandatory for delivery-sensitive work
- [ ] Open the templates and confirm delivery-sensitive fields exist
- [ ] Open the packet file and confirm it matches the installed tree
- [ ] Confirm the lifecycle folders make `open` non-terminal
- [ ] Confirm no product routes, schemas, or docs were touched

## Review lane
**Content-sensitive**

## Reviewers required
- [x] Reviewer
- [x] Content / Structure Operator
- [x] Human Governor

## Risks / side effects
- The operating layer may drift from canonical docs later if not reviewed during major repo-governance changes.
- Some contributors may try to treat these files as replacing product canon rather than governing execution.
- If the repo already contains hidden task/review conventions, this tree could duplicate them.

## Stop conditions
Stop and escalate if:

- the repo already contains a live task/review folder system that conflicts with this one
- any canonical doc directly contradicts the proposed role set or folder naming
- a reviewer insists these files must live under `docs/` instead of repo root
- installation requires touching `src/`, `docs/`, or product content to “make it work”
- the team cannot agree on how `docs/DELIVERY_ARCHITECTURE.md` should govern delivery-sensitive work

Do not widen this packet to solve adjacent problems.

## Builder handoff notes
Leave blank until implementation handoff.

---

## Immediate next packet
After this packet is accepted, open:

`BP-001 — Phase 0 baseline repo audit`

That next packet should audit and clean the actual product repo against the accepted Phase 0 scope.
