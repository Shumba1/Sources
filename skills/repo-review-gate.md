# skills/repo-review-gate.md

## Purpose

This procedure is the Reviewer’s hard gate.

Its job is not to admire the patch.
Its job is to decide whether the patch is safe, phase-correct, canon-compliant, delivery-correct, and actually acceptable.

---

## Reviewer mandate

The Reviewer checks whether the patch:

- solves the stated problem
- stays inside the packet
- respects canon
- avoids regressions
- keeps the current phase intact
- preserves product doctrine
- preserves delivery logic where relevant
- needs Content / Structure escalation

If the answer is no, send it back.

---

## Required review inputs

- build packet
- changed files
- validation output
- canonical files relevant to the task
- any review notes from the Builder
- `docs/DELIVERY_ARCHITECTURE.md` whenever the task is delivery-sensitive

---

## Review pass

### 1. Scope check
- Did the Builder stay inside the packet?
- Were any undeclared files changed?
- Did the work balloon into a rewrite?

### 2. Canon check
Check against:
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- relevant ADRs
- route/config/schema layer

### 3. Delivery-architecture check
For delivery-sensitive work, check against:
- `docs/DELIVERY_ARCHITECTURE.md`
- `docs/Voice and Tone Bible.md`
- relevant route / page-data / schema files

Confirm:
- the object still belongs in the declared destination family
- the target surface still fits the moment of use
- the renderer / component path still makes sense
- the patch did not silently change free / paid or phase-eligibility expression
- the patch did not drift into “good content in the wrong container”

### 4. Repo hygiene check
Reject immediately if the patch:
- revives NextAuth
- revives `/upgrade`
- reintroduces stale public labels / CTA copy
- breaks the accepted knowledge-detail renderer path
- treats dead scaffold as live architecture

### 5. Phase check
Confirm the work belongs in the active implementation phase.

### 6. Validation check
Confirm the required tests or manual checks were actually run.

### 7. Drift check
Look for quiet drift:
- naming mismatch
- route mismatch
- schema mismatch
- page-data mismatch
- unsupported UX language
- product-centre drift away from Repair
- delivery drift away from the declared moment or surface

### 8. Escalation check
If copy, labels, content objects, metadata surfaces, or render surfaces were touched, require Content / Structure review unless the packet explicitly proved that it is unnecessary.

---

## Output format

The Reviewer must return:

### Verdict
- pass
- pass with minor notes
- rework required
- blocked

### Findings
Bullet list of concrete findings only.

### Canon conflicts
List exact file/path conflicts if present.

### Delivery conflicts
List exact object / destination / surface / renderer conflicts if present.

### Required fixes
Only if the patch fails.

### Escalation
State whether Content / Structure or Human Governor escalation is required.

---

## Automatic rework triggers

Send the patch back immediately if:

- it conflicts with canonical files
- it breaks phase order
- it creates undeclared dependencies
- it uses the wrong renderer path
- it changes copy that violates the Voice & Tone Bible
- it changes search/schema surfaces without checking the technical SEO system
- it ignores `docs/DELIVERY_ARCHITECTURE.md` on delivery-sensitive work
- it passes tests but still violates doctrine, destination fit, or moment-of-use fit

---

## Reviewer principle

A patch can be technically clever and still be wrong.

This gate is here to reject “clever but wrong”.
