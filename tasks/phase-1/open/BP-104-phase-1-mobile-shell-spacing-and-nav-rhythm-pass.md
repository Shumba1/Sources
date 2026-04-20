# BP-104 — Mobile shell spacing and nav rhythm pass

## Packet metadata
- **Packet ID:** BP-104
- **Phase:** Phase 1
- **Status:** Open
- **Type:** UI refinement / shell rhythm / delivery-sensitive packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-1/review/`

---

## Objective

Refine the **mobile shell spacing, safe-area handling, and navigation rhythm** introduced in BP-101 so that the top-level scaffold routes feel stable, readable, and tap-safe across common mobile viewport widths.

This is a **small follow-up packet**.  
It is **not** a redesign packet and **not** a feature packet.

The aim is to correct the spacing and rhythm issues observed during human review on some mobile viewports while preserving the accepted shell split delivered in BP-101.

---

## Why this packet exists

BP-101 was accepted as a structural shell packet:

- marketing shell and app shell were split
- top-level scaffold routes were created
- shared shell chrome was introduced
- safe-area / viewport handling was centralised
- lint/build passed locally

Human review then found that the shell looked correct overall, but **navigation spacing issues appeared on some mobile viewport sizes**.

That is the exact kind of follow-up BP-104 exists to address:
- shell spacing
- nav rhythm
- safe-area consistency
- sticky chrome spacing
- content padding around shell chrome

It must not widen into feature work or visual overhauls.

---

## Required reading order

Read in this order before changing anything:

1. `AGENTS.md`
2. `docs/MASTER_SPEC.md`
3. `docs/marriage_os_implementation_phases.md`
4. `docs/DELIVERY_ARCHITECTURE.md`
5. `tasks/phase-1/review/BP-101-phase-1-repo-foundation-and-shell-split.md` or the accepted BP-101 packet path in the repo
6. `reviews/phase-1/open/BP-101-phase-1-repo-foundation-and-shell-split-builder-note.md`
7. current live:
   - `src/app/globals.css`
   - `src/components/shell/shell-primitives.tsx`
   - `src/components/shell/marketing-shell.tsx`
   - `src/components/shell/app-shell.tsx`
   - `src/components/shell/member-bottom-nav.tsx`
   - top-level scaffold route pages under `src/app/(marketing)/**` and `src/app/(app)/**`

If authority conflicts appear, stop and report them.

---

## Task classification

- **Type:** shell refinement / spacing / rhythm / delivery-sensitive
- **Object type:** shell chrome spacing and viewport behaviour
- **Destination family:** application shell, not editorial content
- **Target surface:** mobile-first shell and top-level scaffold routes
- **Renderer / component path:** `src/app/globals.css`, `src/components/shell/**`, minimal supporting shell files
- **Moment of use:** first-load shell, first navigation, persistent chrome interaction
- **Phase-eligible now:** yes
- **Delivery Architecture reference:** shell moment-of-use, mobile-first interaction, scaffold route stability

This packet is delivery-sensitive because it affects how users physically experience the shell on entry and navigation.

---

## In scope

### 1. Mobile spacing corrections
Tighten or rebalance spacing where shell chrome feels off on narrow/mobile viewport widths, including:

- top-bar padding
- shell main padding
- bottom-nav padding
- spacing between content and sticky chrome
- overly generous or cramped gaps on scaffold pages

### 2. Safe-area consistency
Ensure safe-area handling is consistent and intentional across:

- top padding
- bottom padding
- sticky bottom navigation
- content areas above persistent bottom chrome

The goal is to avoid both:
- clipped/overlapped content
- excessive wasted space

### 3. Navigation rhythm
Improve the bottom-nav and shell rhythm so that:

- tap targets remain usable
- labels do not feel cramped
- spacing is visually steady across common phone widths
- active/inactive states remain readable

### 4. Common viewport sanity pass
Refine the shell for common narrow and mid-mobile widths.

At minimum, builder should sanity-check roughly these classes of widths:

- narrow phone
- typical modern phone
- wider phone / small tablet portrait

You do not need a full device lab. You do need a real spacing sanity pass.

---

## Out of scope

- changing route structure
- changing shell ownership or route groups
- feature implementation
- dynamic detail routes
- content population
- redesigning the aesthetic direction
- auth
- billing
- backend services
- AI features
- desktop polish beyond what is required to avoid regressions
- new design system abstractions unrelated to shell spacing
- marketing copy work
- page-specific bespoke styling unless required to prevent shell breakage

---

## Preferred implementation posture

This packet should prefer:

- **small CSS changes**
- **small shell-component changes**
- rhythm corrections over creative redesign
- spacing-token consistency over ad hoc per-page patches

Avoid:
- giant `globals.css` rewrites
- route-specific band-aids unless absolutely necessary
- decorative embellishment disguised as spacing fixes

---

## Allowed files

Builder may touch only the minimum file set required for shell-spacing refinement.

Likely allowed areas:

- `src/app/globals.css`
- `src/components/shell/shell-primitives.tsx`
- `src/components/shell/marketing-shell.tsx`
- `src/components/shell/app-shell.tsx`
- `src/components/shell/member-bottom-nav.tsx`
- minimal scaffold route files only if a tiny className/layout alignment is necessary

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- route group structure
- backend/auth/billing files
- `sources/**`
- governance files
- detail-route implementations
- store/pricing/account/settings work
- feature/business logic
- config/schema layers unrelated to shell spacing
- unrelated page content

---

## Acceptance criteria

BP-104 passes only if all of the following are true:

1. mobile shell spacing is visibly more stable on common viewport widths
2. bottom-nav spacing/tap rhythm is improved
3. safe-area handling remains centralised and coherent
4. content is not hidden behind sticky chrome
5. no route structure changes were introduced
6. no feature or product-scope creep was introduced
7. changes remain small and reviewable
8. `pnpm lint` passes
9. `pnpm build` passes
10. shell split from BP-101 remains intact and easier to use, not more fragile

---

## Validation requirements

Run and record:

- `pnpm lint`
- `pnpm build`

Also provide:
- changed-file list
- one-line reason per changed file
- note on which mobile spacing issues were corrected
- note on any viewport widths specifically checked
- explicit confirmation that no shell-ownership or route-structure changes were made

If validation fails, record the exact failure.

---

## Builder instructions

1. Start by identifying the exact spacing/rhythm issues in the current mobile shell.
2. Prefer the smallest set of changes that fixes the problem.
3. Keep the shell split architecture untouched.
4. Fix shell rhythm centrally, not via scattered page-level hacks.
5. If a page-level adjustment is unavoidable, keep it tiny and justify it.
6. Stop if the packet begins drifting into redesign or feature implementation.

---

## Reviewer focus

Reviewer must check:

- that BP-104 stayed a spacing/rhythm packet
- that mobile shell issues are actually improved
- that bottom-nav usability improved
- that safe-area handling is still centralised
- that no route/group/feature creep was introduced
- that lint/build pass
- that the patch is small enough to be believable as a refinement packet

The Content / Structure Operator must confirm:
- shell rhythm improvements support the intended moment-of-use
- no content-object or destination drift was introduced
- marketing and app shell boundaries remain clear

---

## Required outputs

### Primary output
A small, bounded refinement patch improving mobile shell spacing and nav rhythm.

### Builder handoff note
Create:

`reviews/phase-1/open/BP-104-phase-1-mobile-shell-spacing-and-nav-rhythm-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- validation results
- exact spacing/rhythm issues corrected
- viewport widths checked
- explicit confirmation that no forbidden-scope systems were touched

---

## Initial task state

Place this file at:

`tasks/phase-1/open/BP-104-phase-1-mobile-shell-spacing-and-nav-rhythm-pass.md`

Builder-complete work must move to:

`tasks/phase-1/review/`

Only accepted work ends in:

`tasks/phase-1/done/`

---

## Stop conditions

Stop and report immediately if:

- fixing spacing seems to require route-structure changes
- the shell split itself appears flawed rather than merely tight/loose in spacing
- the packet starts drifting into broader visual redesign
- safe-area issues cannot be corrected without wider architectural change
- the patch stops being “small follow-up” work

---

## Success definition

Success is not “it looks fancier.”

Success is:

- shell spacing feels calmer on mobile
- bottom-nav rhythm is improved
- sticky chrome and content spacing feel intentional
- the patch is small
- validation passes
- BP-101 remains structurally intact while becoming more usable
