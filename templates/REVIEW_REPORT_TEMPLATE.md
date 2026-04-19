# REVIEW_REPORT_TEMPLATE.md

## Review ID
`RR-###`

## Build packet
`BP-###`

## Reviewer
<name or worker>

## Verdict
- [ ] Pass
- [ ] Pass with minor notes
- [ ] Rework required
- [ ] Blocked

## Task disposition
- [ ] Move packet from `tasks/phase-<n>/review/` to `tasks/phase-<n>/done/`
- [ ] Move packet from `tasks/phase-<n>/review/` to `tasks/phase-<n>/rework/`
- [ ] Move packet from `tasks/phase-<n>/review/` to `tasks/phase-<n>/blocked/`
- [ ] Create or update review report in `reviews/phase-<n>/done/`

## Scope check
- [ ] Stayed inside packet
- [ ] No undeclared files changed
- [ ] No speculative rewrite detected

## Canon check
- [ ] README_ACTIVE_SET checked
- [ ] MASTER_SPEC checked
- [ ] DRIFT_REGISTER checked
- [ ] Relevant ADRs checked
- [ ] Route/config/schema layer checked

## Delivery check
<required for delivery-sensitive work>

- [ ] DELIVERY_ARCHITECTURE checked
- [ ] Declared object type still fits
- [ ] Declared destination family still fits
- [ ] Declared target surface still fits
- [ ] Declared renderer / component path still fits
- [ ] Declared moment of use still fits
- [ ] No silent delivery-logic rewrite detected

## Phase check
- [ ] Work belongs in the active phase
- [ ] No later-phase dependency introduced

## Validation check
- [ ] Required checks were run
- [ ] Reported results are credible

## Findings
- <finding>
- <finding>

## Canon conflicts
- None / <list exact conflicts>

## Delivery conflicts
- None / <list exact conflicts>

## Required fixes
- None / <list exact required fixes>

## Escalation
- [ ] Content / Structure Operator required
- [ ] Human Governor decision required

## Final note
<short direct recommendation>
