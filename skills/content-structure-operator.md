# skills/content-structure-operator.md

## Purpose

This procedure is for the Content / Structure Operator.

Use it whenever the work touches:
- labels
- copy
- content families
- route fit
- component fit
- schema fit
- page-data
- knowledge / guides / repair / product content
- metadata or search-facing structure
- content objects that must render correctly in a specific surface

This role exists to prevent **good writing in the wrong container** and **content drift disguised as progress**.

`docs/DELIVERY_ARCHITECTURE.md` is one of this role’s primary source files.  
If this role has not checked delivery architecture, it has not finished the job.

---

## Core questions

For every content-sensitive patch, answer these questions:

1. What is the object?
2. Where does it live?
3. Why does it belong there?
4. Is it allowed in the current phase?
5. Does the render surface match the object?
6. Does the route label, internal key, and public label agree?
7. Does the voice mode fit the user moment?
8. Does the content respect product doctrine and safety boundaries?
9. Does the patch still honour the delivery logic recorded in `docs/DELIVERY_ARCHITECTURE.md`?

If any answer is weak, the work is not ready.

---

## Required checks

### 1. Destination fit
Confirm whether the object belongs in:
- Repair
- Perspectives (`guides` internally)
- Knowledge
- Products / Store
- Progress
- UI copy / operational surface

Do not allow a knowledge article to do the job of a repair object.
Do not let a product page read like a generic course ad.

### 2. Route / renderer fit
Check the exact rendering path.

Examples:
- `/knowledge/[slug]` body must use `ArticleSection`
- list/index cards are not full-body renderers
- page-data labels must align with route intent
- content must bind to an actual renderable component

### 3. Phase eligibility
Use `docs/marriage_os_implementation_phases.md`.

Reject any object that:
- belongs to a later phase
- depends on a surface not yet implemented
- assumes AI or commerce before the correct phase

### 4. Voice mode and delivery fit
Use:
- `docs/Voice and Tone Bible.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- `docs/SOURCE_RESERVOIR_OBJECT_MAP.md`

Check:
- voice mode (`hurt`, `blaming`, `act`)
- moment-of-use fit
- target surface fit
- free / paid boundary expression if relevant
- whether crisis is being treated like curriculum
- whether the object is practical enough for the actual user moment

### 5. Naming fit
Check:
- internal key
- public label
- CTA copy
- schema naming
- route naming

Do not let stale labels come back in through “small copy fixes”.

### 6. Safety and doctrine fit
Reject content that drifts into:
- coercion
- surveillance
- grievance content
- ideology delivery
- side-taking Perspectives
- vague wellness language detached from repair action

### 7. Delivery architecture alignment
State the exact `docs/DELIVERY_ARCHITECTURE.md` section, matrix row, or rule cluster that governs the object.

If the operator cannot point to the governing delivery logic, the review is incomplete.

---

## Output format

The Content / Structure Operator must return:

### Verdict
- fit
- fit with notes
- rework required
- blocked

### Object classification
Name the object type and destination.

### Delivery-architecture reference
State the exact section or matrix area consulted.

### Route / renderer decision
State the correct route and render path.

### Phase decision
State whether it belongs in the current phase.

### Voice / delivery notes
Short, explicit notes only.

### Required fixes
Only when needed.

---

## Automatic rejection cases

Reject immediately if:

- the content has no defined destination
- the render surface is wrong
- the public label contradicts canon
- the object belongs to a later phase
- the knowledge layer is being asked to carry the real product
- the patch turns Repair into background decoration
- the copy passes grammar but fails practical usefulness
- delivery architecture was required but not consulted

---

## Short version

This role guards against structural nonsense.

It ensures the right thing is being rendered in the right place, at the right phase, for the right user moment, under the right doctrine.
