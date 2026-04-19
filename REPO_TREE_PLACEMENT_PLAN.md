# MarriageOS — Exact Repo Tree Placement Plan

## Purpose

This plan places the new build-governance layer into the existing MarriageOS repo **without** bloating the repo into a second product.

It assumes the current repo already contains the canonical product and architecture material in:

- `README.md`
- `docs/`
- `src/`
- `sources/`

The new operating layer should sit **around** that canon, not compete with it.

---

## Placement decision

Use this exact tree overlay.

```text
/
├── AGENTS.md                                   # NEW — top-level worker contract
├── README.md                                   # EXISTING — product/repo entry point
├── docs/                                       # EXISTING — canonical governance + architecture
├── src/                                        # EXISTING — executable product layer
├── sources/                                    # EXISTING — raw / derived source reservoirs
├── skills/                                     # NEW — reusable worker procedures
│   ├── build-packet-planning.md
│   ├── bounded-patch-implementation.md
│   ├── repo-review-gate.md
│   └── content-structure-operator.md
├── templates/                                  # NEW — standard operating templates
│   ├── BUILD_PACKET_TEMPLATE.md
│   ├── REVIEW_REPORT_TEMPLATE.md
│   └── CONTENT_RENDER_CHECK_TEMPLATE.md
├── tasks/                                      # NEW — packet lifecycle lanes
│   └── phase-0/
│       ├── open/
│       │   └── BP-000-phase-0-operating-layer-install.md
│       ├── review/
│       │   └── .gitkeep
│       ├── rework/
│       │   └── .gitkeep
│       ├── blocked/
│       │   └── .gitkeep
│       └── done/
│           └── .gitkeep
└── reviews/                                    # NEW — review artifacts
    └── phase-0/
        ├── open/
        │   └── .gitkeep
        └── done/
            └── .gitkeep
```

---

## Why this is the right tree

### 1. Root-level `AGENTS.md`
`AGENTS.md` must sit at repo root because it is the first contract any worker should see. It governs how the repo is read and how packets are executed.

### 2. Root-level `skills/`
These files are reusable procedures, not product canon. They should not live in `docs/` because `docs/` already carries the product and architecture authorities.

### 3. Root-level `templates/`
Templates are operational scaffolds. Keeping them outside `docs/` avoids polluting canonical documentation with blank forms.

### 4. Root-level `tasks/`
This is the bounded packet queue and state machine. It gives each phase visible execution lanes without introducing a heavy project-management system.

### 5. Root-level `reviews/`
Reviews need their own clean lane so review verdicts do not get mixed into packet definitions. Packet creation and review are separate jobs.

### 6. Canonical editorial destinations vs physical folders
The `content/repair/*`, `content/guides/*`, `content/knowledge/*`, and `content/products/*`
families remain canonical editorial destination labels even if the physical
`content/` directory is not scaffolded yet. Do not create empty content trees in
Phase 0 merely because the destination families are canonical.

---

## Delivery architecture rule

`docs/DELIVERY_ARCHITECTURE.md` stays in `docs/` and remains the primary delivery-control file for:

- content objects
- route labels
- page-data expression
- target surfaces
- metadata / schema surfaces
- render-fit decisions
- moment-of-use fit

Do **not** duplicate that logic inside `skills/`, `templates/`, or the spreadsheet.  
Those layers must reference it, not replace it.

---

## What should **not** be added now

Do **not** add these in Phase 0 unless a packet explicitly requires them:

- `dashboard-data/`
- `scripts/`
- `outputs/`
- `STATE.json`
- `MISSION.md`
- `LOG.md`
- `DECISIONS.md`

### Reason
The existing MarriageOS repo already has its mission, doctrine, and canonical layer in `README.md` and `docs/`. Adding the full Puppeteer-style shell now would create duplicate truth and unnecessary maintenance overhead.

This build system should stay lean until there is real pressure for more automation or a local dashboard.

---

## Spreadsheet placement rule

Keep the workbook tracker **outside** repo truth by default.

### Default
- Keep the live `.xlsx` as a human-side control file outside the repo.

### Only if you want snapshots inside git
Place it here:

```text
ops/external/MarriageOS_Build_and_Handoff_Tracker.xlsx
```

But do **not** make the spreadsheet a canonical instruction source. The repo markdown files outrank it.

---

## Adoption order

Implement the operating layer in this order:

1. `AGENTS.md`
2. `skills/*`
3. `templates/*`
4. `tasks/phase-0/open/BP-000-phase-0-operating-layer-install.md`
5. empty `review/`, `rework/`, `blocked/`, and `done/` task folders with `.gitkeep`
6. empty review folders with `.gitkeep`
7. then queue the next cleanup packet

---

## Immediate next packet after installation

After `BP-000` is accepted, open the next packet in:

```text
tasks/phase-0/open/BP-001-phase-0-baseline-repo-audit.md
```

That next packet should handle the actual Phase 0 repo audit and cleanup against:

- dead auth remnants
- stale `/upgrade` remnants
- stale public labels / CTA copy
- accepted knowledge-detail renderer path
- canonical route / config / schema authority lock
- delivery-sensitive work types that must now read `docs/DELIVERY_ARCHITECTURE.md`

Do **not** combine that with the installation packet.

---

## Non-negotiable placement rules

- `AGENTS.md` stays at repo root.
- `skills/` and `templates/` stay at repo root.
- Packets start in `tasks/.../open/`.
- Builder-complete packets move to `tasks/.../review/`; only accepted tasks end in `tasks/.../done/`.
- Failed reviews move to `tasks/.../rework/` or `tasks/.../blocked/`.
- Accepted tasks end in `tasks/.../done/`.
- Reviews live in `reviews/`.
- Product canon remains in `docs/`, `src/`, and approved content/config layers.
- `docs/DELIVERY_ARCHITECTURE.md` remains the delivery-control file for surface-facing work.
- The operating layer governs execution. It does not replace the canonical product docs.

---

## Final recommendation

Use this tree exactly.

It is lean enough for daily use, explicit enough for peer review, and aligned with the manual-first, role-based, repo-truth approach that is worth keeping from Puppeteer without importing the bloat.
