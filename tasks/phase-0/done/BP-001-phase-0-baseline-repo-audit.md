# BP-001 — Phase 0 Baseline Repo Audit

## Packet ID
`BP-001`

## Initial task state
`tasks/phase-0/open/`

## Objective
Audit the current MarriageOS repo against the accepted Phase 0 operating model and canonical governance set, then produce a precise remediation map **without** making cleanup changes in this packet.

## Current phase
**Phase 0 — Repo cleanup and architecture lock**

## Why now
BP-000 established or verified the operating layer. The next honest move is not improvisational cleanup. It is a controlled baseline audit that identifies where the live repo still diverges from accepted structure, naming, sequencing, delivery-control expectations, and canonical authority.

This packet exists to answer one question clearly:

**What exactly must be cleaned, consolidated, ratified, retired, or packetised next — and what must not be touched yet?**

If this audit is skipped, later workers will start “helpfully” fixing adjacent issues without a defensible boundary. That is how Phase 0 turns into uncontrolled repo churn.

## Packet classification
- [ ] Code-only
- [x] Delivery-sensitive
- [ ] High-risk

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
- `REPO_TREE_PLACEMENT_PLAN.md` or the accepted repo tree placement plan currently adopted in the repo

## Delivery architecture fields

- Object type: repo audit, delivery-control audit, and remediation map
- Destination family: UI / operational surface
- Target surface: repo governance, file placement, task flow, delivery-control references, and implementation sequencing
- Renderer / component path: N/A
- Moment of use: immediately after operating-layer install confirmation and before broader Phase 0 remediation
- Phase eligibility: this is Phase 0 architecture-lock work; it narrows and sequences future cleanup without altering product behaviour
- Delivery-architecture sections consulted: sections governing moment-of-use, format fit, surface fit, sequencing, phase eligibility, and the working-matrix / route-to-surface logic where naming or delivery-control references are implicated

## Allowed files
- `tasks/phase-0/open/BP-001-phase-0-baseline-repo-audit.md`
- `tasks/phase-0/open/BP-001-phase-0-baseline-repo-audit-report.md`

## Forbidden files
- `src/**`
- `docs/**`
- `content/**`
- `sources/**`
- `public/**`
- `app/**`
- `components/**`
- `lib/**`
- `page-data/**`
- any auth, schema, metadata, SEO, graphics, or route files
- any file not explicitly listed in the allowed files section

## Required output
Produce **one audit report** at:

`tasks/phase-0/open/BP-001-phase-0-baseline-repo-audit-report.md`

That report must:

1. assess the live repo against the accepted operating layer and placement plan
2. identify exact drift, duplication, contradiction, or ambiguity by path
3. distinguish **fact**, **risk**, and **recommendation** clearly
4. identify which issues are true Phase 0 work versus later-phase work
5. identify where `DELIVERY_ARCHITECTURE.md` is missing, underweighted, duplicated, or silently contradicted in live repo behaviour or file structure
6. name any rogue authority files or governance files that now overreach their role
7. identify phase-numbering or sequencing inconsistencies across canonical docs
8. produce a **packetised remediation queue** for the next 3–7 packets, each with a one-line scope and rationale
9. recommend what should be retired, merged, left alone, or escalated for human ratification
10. make **no actual cleanup edits** beyond the report itself

## Acceptance criteria
- [ ] `tasks/phase-0/open/BP-001-phase-0-baseline-repo-audit-report.md` exists
- [ ] the report contains a repo-tree compliance section
- [ ] the report contains a canonical-authority and rogue-authority section
- [ ] the report contains a `DELIVERY_ARCHITECTURE.md` integration section
- [ ] the report contains a phase-sequencing / phase-numbering consistency section
- [ ] the report contains a duplicate / stale / ambiguous file section with exact paths
- [ ] the report contains a “leave alone for now” section to prevent over-cleaning
- [ ] the report contains a packetised remediation queue for the next 3–7 packets
- [ ] every finding is tied to an exact file path or exact absence
- [ ] every recommendation is clearly separated from factual findings
- [ ] no files outside the allowed list were changed
- [ ] no direct cleanup, refactor, deletion, or relocation was performed under this packet

## Validation steps
- [ ] Run `git diff --name-only` and confirm only the allowed files changed
- [ ] Run `find tasks/phase-0/open -maxdepth 1 -type f | sort` and confirm both BP-001 files exist
- [ ] Open the audit report and confirm it includes all required sections
- [ ] Confirm every cited issue uses exact file paths rather than vague references
- [ ] Confirm the report distinguishes Phase 0 issues from later-phase issues
- [ ] Confirm the report includes explicit treatment of `docs/DELIVERY_ARCHITECTURE.md`
- [ ] Confirm the report proposes next packets instead of directly performing cleanup

## Review lane
- [ ] Standard
- [x] Content-sensitive
- [ ] High-risk

## Reviewers required
- [x] Reviewer
- [x] Content / Structure Operator
- [x] Human Governor

## Risks / side effects
- The worker may try to “help” by fixing issues instead of auditing them.
- The audit may overclassify non-issues as cleanup work if it does not distinguish canon from support docs properly.
- The report may become vague if the worker does not anchor every finding to exact paths.
- The worker may surface later-phase product concerns that do not belong in a Phase 0 remediation queue.

## Stop conditions
Stop and escalate if:

- the repo tree materially differs from the accepted placement plan in a way that makes the current plan obsolete
- canonical docs conflict with each other so directly that a stable audit baseline cannot be established
- the worker cannot determine which repo tree placement plan is operative
- `DELIVERY_ARCHITECTURE.md` and `MASTER_SPEC.md` appear to be in unresolved conflict on delivery-sensitive boundaries
- the audit would require speculative interpretation of undocumented file purpose
- the worker feels pressure to fix issues instead of documenting them cleanly

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

## Expected audit report structure
The audit report should use this heading structure exactly:

1. **Executive summary**
2. **Audit baseline used**
3. **Repo-tree compliance**
4. **Canonical authority and rogue authority check**
5. **`DELIVERY_ARCHITECTURE.md` integration check**
6. **Phase sequencing and numbering consistency**
7. **Duplicate, stale, ambiguous, or overlapping files**
8. **Items to leave alone in Phase 0**
9. **Recommended remediation packets**
10. **Escalations requiring human ratification**
11. **Appendix: exact file path findings**

## Immediate next packet
If BP-001 is accepted, open the next packet directly in `tasks/phase-0/open/` based on the remediation queue produced by the audit report rather than guessing in advance.
