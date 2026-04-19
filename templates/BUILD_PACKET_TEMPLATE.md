# BUILD_PACKET_TEMPLATE.md

## Packet ID
`BP-###`

## Initial task state
`tasks/phase-<n>/open/`

## Objective
<one-sentence goal>

## Current phase
<exact phase label from docs/marriage_os_implementation_phases.md>

## Why now
<why this belongs in the current phase>

## Packet classification
- [ ] Code-only
- [ ] Delivery-sensitive
- [ ] High-risk

## Canonical files consulted
- `docs/README_ACTIVE_SET.md`
- <add exact files used>

## Delivery architecture fields
<required for delivery-sensitive work; write N/A only if truly code-only>

- Object type: <module / article / card / CTA / route copy / metadata / page-data / other>
- Destination family: <repair / guides / knowledge / products / progress / UI>
- Target surface: <route / screen / card / modal / metadata surface / notification / other>
- Renderer / component path: <component path or N/A>
- Moment of use: <after a fight / late-night check-in / calm study / purchase consideration / other>
- Phase eligibility: <why this object belongs now>
- Delivery-architecture sections consulted: <exact section, table, or matrix reference>

## Allowed files
- `<path>`
- `<path>`

## Forbidden files
- `<path>`
- `<system or route>`
- Any undeclared file outside the allowed list

## Required output
<what must exist or be true when the patch is done>

## Acceptance criteria
- [ ] <criterion>
- [ ] <criterion>
- [ ] <criterion>

## Validation steps
- [ ] <command or manual path check>
- [ ] <command or manual path check>

## Review lane
- [ ] Standard
- [ ] Content-sensitive
- [ ] High-risk

## Reviewers required
- [ ] Reviewer
- [ ] Content / Structure Operator
- [ ] Human Governor

## Risks / side effects
- <risk>
- <risk>

## Stop conditions
- <condition>
- <condition>

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
