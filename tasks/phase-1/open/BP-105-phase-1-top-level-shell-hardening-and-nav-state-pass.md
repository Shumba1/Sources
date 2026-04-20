# BP-105 — Top-level shell hardening and nav state pass

## Packet metadata
- **Packet ID:** BP-105
- **Phase:** Phase 1
- **Status:** Open
- **Type:** Implementation / shell hardening / navigation-state / delivery-sensitive packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-1/review/`

---

## Objective

Harden the accepted Phase 1 shell so the top-level routes behave like a coherent product shell rather than a set of loose scaffolds.

This packet exists to tighten:

- active/inactive navigation state behaviour
- shell route consistency across marketing and app surfaces
- shared top-level shell affordances
- scaffold-page behavioural consistency
- shell-level route truth against canonical config

It is **not** a feature packet and **not** a dynamic-route packet.

---

## Why this packet exists now

Phase 1 has already achieved the following:

- **BP-100** installed the baseline pnpm + Next.js + React + TypeScript + Tailwind stack and preserved the config-driven architecture.
- **BP-101** split the shell into marketing and app boundaries and added the required top-level scaffold routes.
- **BP-104** refined mobile shell spacing and bottom-nav rhythm.

That means the next sensible step is **shell hardening**, not more baseline work and not feature expansion.

The shell now needs to feel internally consistent before later packets bind deeper page-data behaviour or first-pathway logic.

---

## Required reading order

Read in this order before changing anything:

1. `AGENTS.md`
2. `docs/MASTER_SPEC.md`
3. `docs/marriage_os_implementation_phases.md`
4. `docs/DRIFT_REGISTER.md`
5. `docs/DELIVERY_ARCHITECTURE.md`
6. `REPO_TREE_PLACEMENT_PLAN.md`
7. accepted/active BP-101 packet and builder note
8. accepted/active BP-104 packet and builder note
9. current live:
   - `src/config/routes.ts`
   - `src/config/page-data.ts`
   - `src/app/(marketing)/**`
   - `src/app/(app)/**`
   - `src/components/shell/shell-primitives.tsx`
   - `src/components/shell/marketing-shell.tsx`
   - `src/components/shell/app-shell.tsx`
   - `src/components/shell/member-bottom-nav.tsx`
   - `src/app/globals.css`

If authority conflicts appear, stop and report them.

---

## Task classification

- **Type:** shell hardening / nav state / route consistency / delivery-sensitive
- **Object type:** persistent shell behaviour and top-level route consistency
- **Destination family:** application shell, not editorial content
- **Target surface:** top-level marketing and app-shell routes
- **Renderer / component path:** `src/app/**`, `src/components/shell/**`, minimal supporting `src/config/**`
- **Moment of use:** first navigation, route switching, shell recognition, persistent chrome usage
- **Phase-eligible now:** yes
- **Delivery Architecture reference:** shell stability, top-level surface consistency, route/surface fit, moment-of-use discipline

This is delivery-sensitive because it affects repeated navigation and shell comprehension.

---

## In scope

### 1. Active nav-state hardening
Ensure navigation state is deliberate and stable across top-level app routes.

At minimum:
- active bottom-nav item is always correct
- inactive states remain readable
- active/inactive treatment does not depend on brittle ad hoc logic
- route matching for top-level app routes is robust and reviewable

If needed, improve how route truth is derived from `src/config/routes.ts` or related canonical config.

### 2. Top-level shell consistency
Tighten consistency across top-level routes so that:

- page scaffolds do not feel structurally different without reason
- headings, shell offsets, and scaffold framing are predictable
- route entry surfaces feel like members of one system

This is not about full content polish. It is about shell-level consistency and behavioural clarity.

### 3. Marketing/app boundary hardening
Confirm and improve the shell distinction between:

- marketing surfaces
- member/app surfaces

without changing the route-group structure established in BP-101.

This may include:
- top-bar consistency
- shell spacing consistency
- shared shell primitives alignment
- route entry cues that make the two shell families feel intentional

### 4. Route truth alignment
Audit and, if needed, minimally align shell/nav behaviour to canonical route/config sources, especially:

- `src/config/routes.ts`
- any nav config used by `member-bottom-nav.tsx`

The shell should not drift from canonical route naming or path truth.

### 5. Scaffold-state hardening
Make the top-level scaffold pages feel intentionally scaffolded rather than arbitrarily placeholder-ish.

That can include:
- consistent scaffold framing
- predictable CTA placement
- predictable spacing and hierarchy
- shell-aware surface treatment

Do **not** turn scaffold pages into fully built feature pages.

---

## Out of scope

- dynamic detail routes
- `/repair/[slug]`, `/guides/[slug]`, `/knowledge/[slug]`
- backend/auth/billing/AI work
- Today/Repair/Guides/Knowledge/Progress feature logic
- store/pricing/account/settings implementation
- editorial content population
- database or API wiring
- broad visual redesign
- route-group structure rewrite
- replacing the shell split itself
- introducing a large new design system layer

---

## Preferred implementation posture

This packet should prefer:

- small, bounded shell-component changes
- route-truth alignment over ad hoc fixes
- state hardening over visual flourish
- consistency improvements over new abstractions
- config-driven nav logic where appropriate

Avoid:
- giant CSS rewrites
- hardcoded route logic duplicated in multiple files
- feature-page creep disguised as scaffold improvement
- decorative overbuild

---

## Allowed files

Builder may touch only the minimum file set required for shell hardening.

Likely allowed areas:

- `src/components/shell/**`
- `src/app/(marketing)/**`
- `src/app/(app)/**`
- `src/app/globals.css`
- `src/config/routes.ts`
- minimal related config files only if genuinely needed for route-truth alignment

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- dynamic detail-route files
- backend/auth/billing files
- `sources/**`
- Phase 0 governance files
- store/pricing/account/settings implementations
- data layer / API files
- unrelated content or feature pages
- large schema changes unrelated to shell/nav hardening

---

## Acceptance criteria

BP-105 passes only if all of the following are true:

1. active/inactive nav state is more robust and reviewable
2. top-level app routes feel more shell-consistent
3. marketing/app shell boundary remains clear and slightly more intentional
4. route/nav logic aligns cleanly with canonical route truth
5. no route-group rewrite was introduced
6. no dynamic detail-route work was introduced
7. no backend/auth/billing/AI creep was introduced
8. changes remain bounded and reviewable as a shell hardening packet
9. `pnpm lint` passes
10. `pnpm build` passes
11. the repo is better prepared for later route/data binding packets

---

## Validation requirements

Run and record:

- `pnpm lint`
- `pnpm build`

Also provide:
- changed-file list
- one-line reason per changed file
- note on nav-state hardening approach
- note on route-truth alignment approach
- explicit confirmation that no forbidden-scope systems were introduced

If validation fails, record the exact failure.

---

## Builder instructions

1. Inspect the live top-level shell and nav behaviour before editing.
2. Identify where active-state logic and scaffold inconsistency currently live.
3. Prefer central fixes over repeated page-by-page fixes.
4. Align with `src/config/routes.ts` rather than hardcoding route truth in multiple places.
5. Keep scaffold pages visibly scaffold-level, not feature-complete.
6. Stop if the packet begins drifting into dynamic routes or content-heavy implementation.

---

## Reviewer focus

Reviewer must check:

- whether active nav-state logic is cleaner and more reliable
- whether shell consistency genuinely improved
- whether canonical route truth is better respected
- whether the packet stayed a shell hardening packet
- whether any feature creep or dynamic-route creep was introduced
- whether lint/build pass

The Content / Structure Operator must confirm:
- shell state improvements support the intended moment-of-use
- marketing/app surface distinction remains clear
- no content-object or destination drift was introduced

---

## Required outputs

### Primary output
A bounded shell-hardening patch improving top-level route consistency and nav-state behaviour.

### Builder handoff note
Create:

`reviews/phase-1/open/BP-105-phase-1-top-level-shell-hardening-and-nav-state-pass-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- validation results
- nav-state hardening rationale
- route-truth alignment note
- explicit confirmation that no forbidden-scope systems were touched

---

## Initial task state

Place this file at:

`tasks/phase-1/open/BP-105-phase-1-top-level-shell-hardening-and-nav-state-pass.md`

Builder-complete work must move to:

`tasks/phase-1/review/`

Only accepted work ends in:

`tasks/phase-1/done/`

---

## Stop conditions

Stop and report immediately if:

- nav-state hardening requires dynamic-route implementation
- canonical route truth cannot be honoured without wider config redesign
- the packet begins drifting into feature/page implementation
- the shell split itself appears fundamentally flawed rather than merely under-hardened
- the patch stops being small-to-medium shell work

---

## Success definition

Success is not “the pages look more finished.”

Success is:

- top-level navigation state is more trustworthy
- shell behaviour is more internally consistent
- route truth is more centralised
- the shell feels more like a disciplined product frame
- the patch stays bounded
- validation passes
- the next route/data-binding packet can build on a steadier shell
