# BP-001 — Phase 0 Baseline Repo Audit Report

## Scope and method
This report audits the live repo against the accepted Phase 0 operating model and canonical governance set, without applying cleanup edits. Findings are anchored to exact paths or explicit absences.

---

## 1) Repo-tree compliance (Phase 0 operating model)

### Fact
1. **Task/review lifecycle mostly exists as required**:
   - `tasks/phase-0/open/`
   - `tasks/phase-0/review/`
   - `tasks/phase-0/rework/`
   - `tasks/phase-0/blocked/`
   - `tasks/phase-0/done/`
   - `reviews/phase-0/open/`
   - `reviews/phase-0/done/`
2. **Additional non-canonical task state folder exists**: `tasks/phase-0/queued/`.
3. **BP-001 packet file was missing at audit start** (only `tasks/phase-0/open/BP-000-phase-0-operating-layer-install.md` existed).
4. **No operative `REPO_TREE_PLACEMENT_PLAN.md` file exists at repo root or docs root** (exact absence).

### Risk
- The extra `tasks/phase-0/queued/` state silently expands lifecycle semantics beyond AGENTS/BP-000 state model and can cause inconsistent state transitions.
- Absence of an explicit placement-plan artifact increases interpretation risk when future workers decide where governance/support files should live.

### Recommendation
- Phase 0 remediation should ratify one task-state model and either:
  1) retire `tasks/phase-0/queued/`, or
  2) formally add `queued` to canonical state docs.
- Add (or explicitly decline) a single durable placement-plan file and cross-link it from `README.md` and `docs/README_ACTIVE_SET.md`.

---

## 2) Canonical authority and rogue-authority audit

### Fact
1. Canonical authority order is present and largely aligned across:
   - `AGENTS.md`
   - `README.md`
   - `docs/README_ACTIVE_SET.md`
   - `docs/MASTER_SPEC.md`
2. `docs/Implementation Plan.md` is present and active as companion planning, but includes implementation-phase framing that can be misread as execution sequencing authority.
3. `docs/DELIVERY_ARCHITECTURE.md` correctly self-labels as non-canonical planning, but contains unresolved-language remnants that no longer match `docs/DRIFT_REGISTER.md` status (see section 4 and 5).

### Rogue/overreach candidates
- **Potential overreach-by-interpretation**: `docs/Implementation Plan.md` (not rogue by existence, but prone to misuse where workers treat it as sequencing authority over `docs/marriage_os_implementation_phases.md`).
- **Path authority mismatch**: `.github/pull_request_template.md` is cited as active in `README.md` and `docs/README_ACTIVE_SET.md`, but actual file path is `docs/pull_request_template.md`.

### Risk
- Reviewers/builders may treat the wrong planning file as authority in phase decisions.
- PR process guidance can fail or fragment if teams look for `.github/pull_request_template.md` and do not find it.

### Recommendation
- Keep `Implementation Plan.md` but add explicit top-of-file warning language and path cross-links in a dedicated remediation packet.
- Ratify one PR template path and fix all references repo-wide.

---

## 3) `DELIVERY_ARCHITECTURE.md` integration audit

### Fact
1. `AGENTS.md` and packet discipline explicitly require `docs/DELIVERY_ARCHITECTURE.md` for delivery-sensitive work.
2. `docs/DELIVERY_ARCHITECTURE.md` contains robust non-canonical scope controls and canonical-order guardrails.
3. Internal contradiction/staleness remains in `docs/DELIVERY_ARCHITECTURE.md §16.5` and §17:
   - states D-026 is open and “to be added” to `docs/DRIFT_REGISTER.md`
   - but D-026 is already present and marked **Accepted** in `docs/DRIFT_REGISTER.md`.
4. The file also carries dual-numbering references (Implementation Plan phase numbers vs canonical Implementation Phases numbering), with stale wording that implies unresolved governance.

### Risk
- Delivery-sensitive workers may over-interpret unresolved notes and hesitate or branch into inconsistent phase gates.
- The delivery-control file can be seen as underweighted or unreliable if its drift-status references are stale.

### Recommendation
- Phase 0 packet should perform a **delivery-control consistency pass** limited to drift-status and phase-gate wording (no doctrine changes).
- Keep `DELIVERY_ARCHITECTURE.md` active; do not demote it. Fix stale internal references so it remains a trustworthy delivery-control companion.

---

## 4) Phase-sequencing / phase-numbering consistency

### Fact
1. Canonical sequencing authority is clear in:
   - `docs/marriage_os_implementation_phases.md`
   - `AGENTS.md`
   - `docs/DRIFT_REGISTER.md` D-026 (Accepted)
2. `docs/Implementation Plan.md` uses different phase numbering by design as workstream plan and now includes a clarifying sequencing note.
3. `docs/DELIVERY_ARCHITECTURE.md` still contains text that treats D-026 as unresolved/open.

### Phase classification
- **True Phase 0 issue**: stale cross-doc sequencing text that undermines authority clarity (`docs/DELIVERY_ARCHITECTURE.md`).
- **Later-phase issue**: none required to resolve this contradiction.

### Recommendation
- Fix sequencing language consistency in one bounded docs packet (Phase 0 governance cleanup).

---

## 5) Duplicate / stale / ambiguous file findings (exact paths)

### Fact inventory
1. **PR template path mismatch**
   - Referenced: `.github/pull_request_template.md` in `README.md`, `docs/README_ACTIVE_SET.md`
   - Actual file: `docs/pull_request_template.md`
2. **Task-state ambiguity**
   - Canonical lifecycle describes: `open/review/rework/blocked/done`
   - Extra live folder: `tasks/phase-0/queued/`
3. **Placement-plan ambiguity**
   - Packet requests `REPO_TREE_PLACEMENT_PLAN.md` (or accepted equivalent)
   - No explicit file found in repo (exact absence)
4. **Content-source expectation gap**
   - Multiple governance docs define editorial canonical families at `content/repair/*`, `content/guides/*`, `content/knowledge/*`, `content/products/*`
   - No `content/` directory exists in current repo (exact absence)
5. **Stale drift-status language in delivery control**
   - `docs/DELIVERY_ARCHITECTURE.md` references D-026 as unresolved despite accepted status in `docs/DRIFT_REGISTER.md`.

### Risk
- Worker confusion, accidental over-cleaning, or delayed execution due to authority/path uncertainty.

### Recommendation
- Address each item in packetized, bounded governance remediation rather than broad refactor.

---

## 6) True Phase 0 vs later-phase work split

### True Phase 0 (do now)
- Resolve governance/path ambiguities:
  - PR template path truth
  - task-state model truth (`queued` status decision)
  - placement-plan artifact truth
- Resolve stale cross-doc drift-status references (D-026 wording in delivery doc).
- Clarify authority notes so workers cannot misread planning docs as canonical execution sources.

### Later-phase (do not pull into BP-001)
- Creating full `content/*` editorial structure (Phase 3/4 content delivery readiness work).
- Product-route rendering completeness and full app-shell implementation details.
- Supabase/Stripe wiring and entitlement flows.
- Any feature-level cleanup in `src/**`.

---

## 7) Leave-alone-for-now list (anti-over-cleaning guard)

1. `docs/Implementation Plan.md` should **not** be deleted in Phase 0; it remains useful as companion workstream planning.
2. `sources/**` corpus and feeder materials should remain intact; this packet is governance audit, not source pruning.
3. `src/**` implementation files should remain untouched in this packet.
4. `docs/SYSTEM_DECAY_REPAIR_MODEL.md` and other support-control docs should remain unless directly contradictory to canonical layer.
5. Any unresolved open drift items D-021..D-025 in `docs/DRIFT_REGISTER.md` should remain open until explicit human ratification.

---

## 8) Packetised remediation queue (next 3–7 packets)

### BP-002 — Governance path truth pass
**Scope:** Align PR template path references and declare one authoritative location for PR template usage.  
**Rationale:** Removes immediate review-lane ambiguity without touching product code.

### BP-003 — Task lifecycle model ratification
**Scope:** Decide fate of `tasks/phase-0/queued/` (retire or canonize), then align AGENTS/templates/checklists accordingly.  
**Rationale:** Prevents tracker-state drift and invalid transitions.

### BP-004 — Delivery-control consistency patch
**Scope:** Update `docs/DELIVERY_ARCHITECTURE.md` stale D-026/open-language and sequencing notes to match accepted `docs/DRIFT_REGISTER.md`.  
**Rationale:** Keeps delivery-sensitive planning trustworthy and phase-gate safe.

### BP-005 — Repo tree placement plan ratification
**Scope:** Create/ratify a single placement-plan artifact (`REPO_TREE_PLACEMENT_PLAN.md` or named canonical equivalent) and cross-link from governance entry points.  
**Rationale:** Stops placement guesswork for future packets.

### BP-006 — Canonical-set existence reconciliation
**Scope:** Reconcile documented `content/*` canonical editorial paths with current repo reality (declare deferred status vs create scaffolds in a phase-eligible way).  
**Rationale:** Prevents false assumptions that editorial source directories already exist.

### BP-007 — Phase 0 closure review packet
**Scope:** Run a focused governance-only review against BP-002..BP-006 outputs and issue a Phase 0 closure recommendation.  
**Rationale:** Forces explicit governor acceptance before Phase 1/2 acceleration.

---

## 9) Retirement / merge / escalate map

### Retire
- Unratified lifecycle state usage (`tasks/phase-0/queued/`) **unless** formally ratified.

### Merge/align
- PR-template references pointing to `.github/pull_request_template.md` should merge onto the actually ratified path.
- D-026 sequencing notes in delivery planning should align to accepted drift status.

### Leave alone
- `docs/Implementation Plan.md` as companion plan (with clarified boundaries).
- `sources/**` and existing source corpus organization.

### Escalate for human ratification
1. Whether to canonize or retire `queued` as a lifecycle state.
2. Whether placement-plan should be a dedicated file or folded into `docs/README_ACTIVE_SET.md`.
3. Whether `content/*` directories should be scaffolded in Phase 0 or explicitly deferred and documented as intentional absence.

---

## 10) Stop-condition check outcome
No blocking canonical contradiction was found that prevents baseline audit output. The repo is auditable with current canonical set, but governance consistency cleanup is required before broad remediation work.
