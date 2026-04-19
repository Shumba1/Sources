# BP-007 — Phase 0 Closure Review

## Packet ID
`BP-007`

## Initial task state
`tasks/phase-0/open/`

## Objective
Run one focused review pass against the **live MarriageOS repo tree after application of the Phase 0 governance patch**, then issue a clear go / no-go recommendation on whether **Phase 0 can be closed and Phase 1 can begin**.

This is a **verification-and-closure packet**, not a remediation packet.

## Current phase
**Phase 0 — Repo cleanup and architecture lock**

## Why now
The audit report identified a bounded set of governance inconsistencies and recommended remediation before broader build work. Those fixes have now been implemented as a full patch. The next honest step is to verify the **live tree**, not the patch file in isolation.

This packet exists to answer one question cleanly:

**Did the live repo absorb the Phase 0 governance patch correctly, with no material residual contradictions that would make a Phase 1 start premature?**

If this review is skipped, the team risks carrying unresolved lifecycle ambiguity, authority-path confusion, or delivery-control inconsistency into the first real implementation phase.

## Primary worker role
**Reviewer**

Apply a **Content / Structure Operator lens** wherever delivery-sensitive files or delivery-control references are implicated.

## Packet classification
- [ ] Code-only
- [x] Delivery-sensitive
- [x] High-risk

## Canonical files consulted
- `README.md`
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- `docs/marriage_os_implementation_phases.md`
- `docs/marriage_os_operator_checklist.md`
- `docs/marriage_os_repo_enforcement_checklist.md`
- `docs/ADR-001-production-architecture-marriage-os.md`
- `docs/ADR-002-repo-cleanup-follow-up.md`
- `AGENTS.md`
- `REPO_TREE_PLACEMENT_PLAN.md`
- `.github/pull_request_template.md`

## Delivery architecture fields

- Object type: phase-closure review, governance verification, and go / no-go decision support
- Destination family: UI / operational surface
- Target surface: repo governance, lifecycle truth, delivery-control trust, authority-path integrity, and phase-gate readiness
- Renderer / component path: N/A
- Moment of use: immediately after applying the bounded Phase 0 governance patch and immediately before any Phase 1 work is opened
- Phase eligibility: this is the final Phase 0 gate; it does not create product functionality and must not widen into implementation work
- Delivery-architecture sections consulted: sections governing moment-of-use, surface fit, sequencing, phase eligibility, and working-matrix implications where delivery-control references are involved

## Allowed files
- `tasks/phase-0/open/BP-007-phase-0-closure-review.md`
- `reviews/phase-0/open/BP-007-phase-0-closure-review-report.md`

## Forbidden files
- `src/**`
- `docs/**`
- `content/**`
- `sources/**`
- `public/**`
- `app/**`
- `components/**`
- `lib/**`
- `skills/**`
- `templates/**`
- `tasks/**` except the task file itself
- `reviews/**` except the required review report path
- any config, auth, schema, SEO, graphics, or route files
- any file not explicitly listed in the allowed files section

## Required output
Produce **one review report** at:

`reviews/phase-0/open/BP-007-phase-0-closure-review-report.md`

That report must:

1. verify whether the Phase 0 patch is actually reflected in the live repo tree
2. confirm whether the task lifecycle is now truthfully limited to `open / review / rework / blocked / done`
3. confirm whether `tasks/phase-0/queued/` has been retired or is still present
4. confirm whether `.github/pull_request_template.md` is now the live and consistently referenced PR template path
5. confirm whether `REPO_TREE_PLACEMENT_PLAN.md` exists in the repo and is cross-linked from the appropriate entry documents
6. confirm whether `docs/DELIVERY_ARCHITECTURE.md` no longer carries stale language that treats D-026 as unresolved
7. confirm whether `docs/Implementation Plan.md` now includes boundary language that prevents it being mistaken for canonical execution authority
8. confirm whether canonical `content/*` destination families are explicitly treated as **deferred physical scaffolding**, not silently assumed present
9. list any residual contradictions, omissions, stale references, or ambiguous states by exact path
10. issue a clear **Go / No-Go** recommendation for closing Phase 0 and opening Phase 1
11. if the verdict is **No-Go**, name the exact blocking items and the minimum packet(s) needed to clear them
12. make **no cleanup edits** beyond the report itself

## Required review report structure
The review report should use this heading structure exactly:

1. **Executive verdict**
2. **Live-tree baseline reviewed**
3. **Patch application verification**
4. **Lifecycle truth check**
5. **Authority-path and PR-template truth check**
6. **Delivery-control consistency check**
7. **Placement-plan installation and cross-link check**
8. **Canonical destination deferral check**
9. **Residual blockers or contradictions**
10. **Phase 0 closure recommendation**
11. **Appendix: exact file path findings**

## Acceptance criteria
- [ ] `reviews/phase-0/open/BP-007-phase-0-closure-review-report.md` exists
- [ ] the report confirms whether the live repo matches the Phase 0 patch intent rather than merely restating the patch
- [ ] the report contains a lifecycle truth check
- [ ] the report contains an authority-path and PR-template truth check
- [ ] the report contains a delivery-control consistency check centered on `docs/DELIVERY_ARCHITECTURE.md`
- [ ] the report contains a placement-plan installation and cross-link check
- [ ] the report contains a canonical destination deferral check for `content/*`
- [ ] every finding is tied to an exact file path or exact absence
- [ ] every blocker is clearly separated from non-blocking observations
- [ ] the report ends with an explicit **Go** or **No-Go** for Phase 0 closure
- [ ] no files outside the allowed list were changed
- [ ] no direct remediation, refactor, deletion, or relocation was performed under this packet

## Validation steps
- [ ] Run `git diff --name-only` and confirm only the review report path changed
- [ ] Run `find tasks/phase-0 -maxdepth 2 -type d | sort` and confirm the live lifecycle state folders match the canonized model
- [ ] Run `test -d tasks/phase-0/queued && echo PRESENT || echo ABSENT` and record the result
- [ ] Run `test -f .github/pull_request_template.md && echo PRESENT || echo ABSENT` and record the result
- [ ] Run `test -f REPO_TREE_PLACEMENT_PLAN.md && echo PRESENT || echo ABSENT` and record the result
- [ ] Open `README.md` and `docs/README_ACTIVE_SET.md` and confirm the placement-plan and PR-template references are correct
- [ ] Open `docs/DELIVERY_ARCHITECTURE.md` and confirm stale D-026/open-language has been resolved
- [ ] Open `docs/Implementation Plan.md` and confirm boundary language is present
- [ ] Confirm the report distinguishes residual blockers from non-blocking observations
- [ ] Confirm the report gives an explicit Phase 0 closure recommendation

## Review lane
- [ ] Standard
- [x] Content-sensitive
- [x] High-risk

## Reviewers required
- [ ] Reviewer
- [ ] Content / Structure Operator
- [x] Human Governor

## Risks / side effects
- The worker may review the patch artifact rather than the live repo tree.
- The worker may drift into remediation instead of verification.
- The worker may treat missing optional scaffolds as blockers when they are only deferred-by-phase.
- The worker may underweight `docs/DELIVERY_ARCHITECTURE.md` and miss delivery-control trust issues.
- The worker may issue a vague closure recommendation without naming exact blockers.

## Stop conditions
Stop and escalate if:

- the live repo tree materially differs from the patch intent in a way that makes this packet a re-audit rather than a closure review
- canonical docs conflict so directly that a stable closure recommendation cannot be made
- the worker cannot determine whether the live repo or an unapplied patch file is being reviewed
- evidence of partial patch application makes findings unreliable without a separate remediation packet
- the worker feels pressure to fix issues instead of documenting closure readiness cleanly

Do not widen this packet into remediation.

## Builder handoff package
<leave blank until implementation handoff>

When the Builder finishes, this section must include:

- Changed files:
- Change summary:
- Validation results:
- Known risks / side effects:
- Review notes:
- Recommended next state: `review` / `blocked`

## Post-review disposition
<leave blank until review is complete>

- Review verdict:
- Final task state: `done` / `rework` / `blocked`
- Review report path:
- Governor decision note:

---

## Final decision rule
This packet is only complete when the report states one of the following plainly:

- **GO — Phase 0 may be closed and Phase 1 may open**
- **NO-GO — Phase 0 must remain open pending the exact blockers named above**
