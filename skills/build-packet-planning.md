# skills/build-packet-planning.md

## Purpose

This procedure turns a request into a bounded build packet that a Builder can execute without improvising architecture.

Use this for:
- code changes
- route work
- content rendering work
- schema work
- copy changes
- feature slices
- refactors that must stay small and phase-safe

Do not skip this step.

---

## Inputs required

Before drafting the packet, the Planner must know:

- the exact user or project request
- the current implementation phase
- the canonical files that govern the request
- the likely target route, schema, component, or content family
- whether the Content / Structure Operator is required
- whether the request is patch-sized or ADR-sized
- whether the task is delivery-sensitive

If any of the above is unclear, stop and resolve that first.

---

## Task classification

Classify the request before writing the packet.

### Code-only
Use when the work is technical and does not alter delivery expression.

### Delivery-sensitive
Use when the work touches:
- copy
- labels
- content objects
- page-data
- route fit
- renderer / component binding
- metadata / schema surfaces
- target surface behaviour
- free / paid boundary expression

Delivery-sensitive packets must explicitly include `docs/DELIVERY_ARCHITECTURE.md`.

### High-risk
Use when the work affects:
- auth
- monetisation
- entitlements
- safety boundaries
- canonical routing
- core state engine
- AI utility boundaries

---

## Packet output format

Every build packet must contain these sections.

### 1. Objective
One sentence.
Concrete.
No slogans.

### 2. Current phase
State the active phase from `docs/marriage_os_implementation_phases.md`.

### 3. Why now
Why this work belongs in the current phase and not later.

### 4. Canonical files consulted
List the exact files that govern the task.

### 5. Allowed files
List the files the Builder is allowed to modify.

### 6. Forbidden files
List files or systems the Builder must not touch.

### 7. Required output
Describe the specific end state, not the aspiration.

### 8. Acceptance criteria
Use testable bullets.
Example:
- route renders
- no stale labels remain
- `ArticleSection` is used on `/knowledge/[slug]`
- mobile shell still behaves cleanly

### 9. Validation steps
Name the commands, checks, or manual path tests to run.

### 10. Review lane
Choose one:
- standard
- content-sensitive
- high-risk

### 11. Risks / side effects
Name likely regressions or canon conflicts.

### 12. Stop conditions
What should make the Builder stop instead of guessing.

---

## Additional required fields for delivery-sensitive packets

If the task is delivery-sensitive, the packet must also define:

- object type
- destination family
- target surface
- renderer / component path
- moment of use
- phase eligibility
- delivery-architecture sections consulted

A delivery-sensitive packet that omits those fields is not ready.

---

## Planning discipline

### Keep the patch bounded
If the task touches too many systems, split it.

### Name the route and file targets
“Fix the app” is not a packet.
“Update `src/config/page-data.ts` and `src/app/repair/page.tsx` to align the repair index label and card source” is a packet.

### Name the phase reason explicitly
If a request belongs to a later phase, defer it instead of dressing it up as current work.

### Separate implementation from doctrine
Do not use the packet to relitigate product doctrine unless a genuine canonical conflict is found.

### Match the read set to the task
If the work changes user-facing delivery, add:
- `docs/Voice and Tone Bible.md`
- `docs/DELIVERY_ARCHITECTURE.md`

If the work changes metadata or search surfaces, also add:
- `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`

If the work changes media or visual system behaviour, also add:
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`

---

## Planner checklist

- [ ] I identified the active phase correctly
- [ ] I checked the canonical authority order
- [ ] I named exact target files
- [ ] I named exact forbidden files
- [ ] I bounded the patch to a realistic size
- [ ] I listed validation steps
- [ ] I selected the correct review lane
- [ ] I added Content / Structure review when route/copy/content/render fit is relevant
- [ ] I included stop conditions
- [ ] I included `docs/DELIVERY_ARCHITECTURE.md` for delivery-sensitive work
- [ ] I named object type, destination, surface, renderer, and moment of use for delivery-sensitive work

If any box is unchecked, the packet is not ready.

---

## Done condition

The packet is ready only when a Builder could execute it without inventing:
- new architecture
- new product doctrine
- new route logic
- new content families
- new phase sequencing
- new delivery logic that was never specified
