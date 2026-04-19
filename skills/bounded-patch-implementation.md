# skills/bounded-patch-implementation.md

## Purpose

This procedure tells the Builder how to execute a packet without causing repo drift.

The Builder is not here to redesign the product.
The Builder is here to deliver the smallest correct patch.

---

## Inputs required

The Builder must have:

- a complete build packet
- the active canonical files
- the target file list
- validation steps
- the required review lane

Do not begin from a vague brief.

---

## Implementation rules

### 1. Only change approved files
If a file is not in the packet’s allowed list, do not touch it unless the Planner updates the packet.

### 2. Preserve canon before elegance
Do not “improve” labels, routes, doctrine, or delivery expression if the packet did not ask for it.

### 3. Small diffs win
Prefer:
- local edits
- existing patterns
- current component contracts
- explicit props and schemas

Avoid:
- speculative abstractions
- broad renaming passes
- opportunistic refactors
- hidden logic moves

### 4. Keep phase integrity
Do not smuggle later-phase systems into earlier-phase work.
Examples:
- no database dependence in local-first phase work
- no AI dependency in deterministic core product work
- no entitlement logic before the correct commerce phase

### 5. Respect product centre
If the patch shifts attention away from Repair during V1, it is probably wrong.

### 6. Respect delivery architecture when applicable
If the packet is delivery-sensitive, the Builder must preserve:
- object type
- destination family
- target surface
- renderer / component path
- moment of use
- phase eligibility

Do not silently rewrite delivery logic under the cover of implementation.

---

## Required Builder output

At handoff, the Builder must return:

### Changed files
Exact list.

### Change summary
What changed in each file.

### Validation
What was run and what passed.

### Known risks
Short list only.

### Delivery notes
For delivery-sensitive work, state whether object, surface, renderer, and moment-of-use assumptions were preserved.

### Review notes
Anything the Reviewer or Content / Structure Operator should examine closely.

### Recommendation
One of:
- ready for review
- blocked
- needs packet revision

---

## Builder stop conditions

Stop and escalate if:

- canon conflicts are discovered
- the packet is under-scoped or over-scoped
- the target component path does not exist
- the request requires schema changes that were not declared
- the patch starts touching auth, monetisation, safety, or core routing unexpectedly
- content destination is unclear
- the correct renderer or route contract cannot be identified
- the work is delivery-sensitive but the packet does not define moment of use, surface, or renderer
- `docs/DELIVERY_ARCHITECTURE.md` should govern the task but was not included

Do not improvise through uncertainty.

---

## Build hygiene checklist

- [ ] I stayed inside the allowed files
- [ ] I did not reintroduce dead architecture
- [ ] I did not create later-phase dependencies
- [ ] I preserved route/config/schema alignment
- [ ] I ran the required validations
- [ ] I wrote a clear handoff for review
- [ ] I preserved the declared delivery shape for delivery-sensitive work

If any box is unchecked, the patch is not ready.
