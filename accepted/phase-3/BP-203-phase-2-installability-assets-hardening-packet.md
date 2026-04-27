# BP-203 — Phase 2 installability assets hardening packet

## Packet metadata
- **Packet ID:** BP-203
- **Phase:** Phase 2
- **Status:** Review
- **Type:** Implementation / installability hardening / bounded asset packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Human Governor
- **Task state on completion by builder:** `tasks/phase-2/review/`

---

## Objective

Strengthen the app’s installability surface by expanding manifest icon depth, adding missing raster install assets, and wiring those assets into root metadata without changing route behaviour or broader product UI.

This packet exists to close the thin installability residuals left after Phase 1 closure and BP-202 hardening.

This is a **Phase 2 hardening packet**, not a redesign packet and not a Phase 3 product packet.

---

## Why this packet exists now

The app now has a credible local-first Phase 2 loop and a Codex-portable font strategy, but the install surface was still thin:

- one SVG app icon
- minimal manifest icon declaration
- no dedicated PNG install icons
- no Apple touch icon or favicon set wired through root metadata

The canonical graphics/media rules explicitly allow PNG where install icons and maskable icons require it, and the implementation phases document treats installable PWA posture as part of the shell reality already in play.

Therefore, BP-203 exists to:

- deepen manifest icon coverage
- make browser / install surfaces feel intentional
- keep branding restrained and premium
- avoid unrelated route or UX drift

---

## Required reading order

Read in this order before changing anything:

1. `README.md`
2. `AGENTS.md`
3. `docs/README_ACTIVE_SET.md`
4. `docs/MASTER_SPEC.md`
5. `docs/DRIFT_REGISTER.md`
6. `docs/marriage_os_implementation_phases.md`
7. `docs/Implementation Plan.md`
8. `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
9. `templates/BUILD_PACKET_TEMPLATE.md`
10. current live:
    - `public/manifest.webmanifest`
    - `public/icon.svg`
    - `src/app/layout.tsx`

### Conditional consult
Also consult `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` only if metadata wiring risks drifting into SEO or canonical-route behaviour. It should normally not need to.

If authority conflicts appear, stop and report them.

---

## Task classification

- **Type:** installability hardening / asset-depth / bounded implementation packet
- **Object type:** manifest entries, install icons, metadata icon wiring
- **Destination family:** shared shell infrastructure
- **Target surface:** browser tab, install prompt, homescreen/app icon surface
- **Renderer / component path:** `public/**`, `src/app/layout.tsx`
- **Moment of use:** app discovery, install intent, shell trust signal
- **Phase-eligible now:** yes
- **Sequencing authority:** `docs/marriage_os_implementation_phases.md`

---

## Scope contract

### What BP-203 must do
BP-203 must materially strengthen installability assets while keeping the patch narrow.

At minimum:

1. add dedicated PNG install icons at practical sizes
2. add maskable icon coverage
3. add Apple touch icon coverage
4. wire the new assets into root metadata and manifest declarations coherently
5. keep existing route and shell behaviour unchanged

### What BP-203 must not do
BP-203 must **not** become:

- a brand redesign
- an iconography redesign for shipped UI
- a marketing pass
- a metadata / SEO expansion packet
- a broader asset-production spree
- a route or page-composition pass

---

## In scope

### 1. Manifest hardening
Expand the manifest icon set beyond the current thin declaration.

### 2. Install icon asset coverage
Add the minimum practical raster assets required for current-phase install surfaces.

### 3. Root metadata wiring
Ensure layout metadata references the right favicon / apple-touch assets.

### 4. Validation
Run and record bounded validation as far as the implementation environment allows.

---

## Out of scope

- route copy changes
- component redesign
- shell spacing or hierarchy retuning
- app-state logic work
- Phase 3 Repair work
- store/pricing/account/library work
- broader SEO/schema changes

---

## Product realism contract

The install surface should feel deliberate, not accidental.

The patch must therefore:

- keep branding restrained and premium
- preserve the current icon identity rather than inventing a new one
- avoid noisy asset proliferation
- respect the graphics/media rule that PNG is appropriate for install icons and maskable icons

---

## UX / quality contract

The patch must satisfy all of the following:

1. the manifest now has meaningful PNG icon depth
2. maskable icon coverage exists
3. Apple touch icon coverage exists
4. favicon coverage is coherent
5. no route behaviour changes are introduced
6. the patch is small enough to review cleanly

---

## Preferred implementation posture

This packet should prefer:

- restrained asset coverage over exhaustive platform-chasing
- reuse of the approved app icon identity
- narrow metadata changes only where necessary
- installability correctness over decorative exploration

Avoid:

- rebranding impulses
- UI icon drift
- SEO creep
- unrelated public-asset churn

---

## Allowed files

Builder may touch only the minimum file set required for this hardening packet.

Likely allowed areas:

- `public/manifest.webmanifest`
- `public/icon.svg`
- `public/icons/**`
- `public/favicon.ico`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png`
- `src/app/layout.tsx`

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- route-family page files
- app-state / classifier files
- font-loading files
- Phase 3 Repair files
- persistence/auth/AI files
- unrelated schema/SEO files
- Phase 1 or Phase 2 governance docs except the task file and required builder note

---

## Acceptance criteria

BP-203 passes only if all of the following are true:

1. the manifest has materially stronger icon coverage
2. favicon coverage is coherent
3. Apple touch icon coverage exists
4. maskable icon coverage exists
5. the install surface feels intentional enough for the current phase
6. no unrelated route or UI drift was introduced
7. the patch remains bounded enough to review as a hardening packet

---

## Validation requirements

Run and record:

- asset presence checks for each declared icon path
- manifest / metadata coherence review
- `pnpm lint` if the environment supports it
- `pnpm build` if the environment supports it

If command validation cannot be run in the implementation environment, record the limitation explicitly.

---

## Builder instructions

1. Reuse the current icon identity; do not redesign it.
2. Prefer PNG only where installability rules justify raster assets.
3. Keep metadata changes explicit and reviewable.
4. Do not widen into broader SEO or UX work.
5. Stop if the packet starts becoming a brand or shell packet.

---

## Reviewer focus

Reviewer must check:

- whether icon depth is now meaningfully stronger
- whether metadata and manifest declarations are coherent
- whether the patch stayed narrow
- whether unrelated surfaces remained untouched

The Human Governor must confirm:
- this is sufficient installability hardening for the current phase
- the patch does not mask unrelated UI or architecture drift

---

## Required outputs

### Primary output
A bounded installability-hardening patch that expands manifest/icon coverage and root metadata wiring.

### Builder handoff note
Create:

`reviews/phase-2/open/BP-203-phase-2-installability-assets-hardening-packet-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- validation results
- icon coverage summary
- explicit confirmation that no forbidden-scope systems were touched

---

## Initial task state

Place this file at:

`tasks/phase-2/open/BP-203-phase-2-installability-assets-hardening-packet.md`

Builder-complete work must move to:

`tasks/phase-2/review/`

Only accepted work ends in:

`tasks/phase-2/done/`

---

## Stop conditions

Stop and report immediately if:

- the install assets require a broader rebrand to land cleanly
- metadata changes begin to drift into wider SEO/schema work
- the patch stops being a clean installability hardening packet

---

## Success definition

Success is not “there are more files.”

Success is:

- install surfaces now have credible icon depth
- metadata and manifest wiring are coherent
- the patch is bounded
- no unrelated UX drift was introduced
