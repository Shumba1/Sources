# BP-202 — Phase 2 build hardening packet: Codex build portability

## Packet metadata
- **Packet ID:** BP-202
- **Phase:** Phase 2
- **Status:** Open
- **Type:** Implementation / build hardening / validation portability packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Human Governor
- **Task state on completion by builder:** `tasks/phase-2/review/`

---

## Objective

Harden the current build so `pnpm build` can complete inside Codex without depending on live Google font fetches during the build step.

This packet exists to remove a verified validation blocker in the Codex runtime while preserving the already-approved product look and route behaviour.

This is a **Phase 2 hardening packet**, not a redesign packet and not a product-expansion packet.

---

## Why this packet exists now

BP-201 has been accepted and the local-first loop is now credible.

However, Codex validation still fails on:

- `pnpm build`

The failure is tied to the current `next/font/google` build path attempting to fetch Google font assets during build time inside the Codex runtime.

This failure does **not** appear to be the primary local-development blocker for the human operator. It is a **build portability / agent validation** blocker.

Therefore, BP-202 exists to:

- remove dependence on live Google font fetches during build
- preserve the approved visual hierarchy and premium tone as closely as practical
- restore credible end-to-end validation inside the constrained agent environment

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
8. `docs/Voice and Tone Bible.md`
9. `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
10. `templates/BUILD_PACKET_TEMPLATE.md`
11. current live:
    - `src/app/layout.tsx`
    - `src/app/globals.css`
    - any current font asset location or typography token/config files already referenced by layout or global styles

### Conditional consult
Also consult:
- `docs/DELIVERY_ARCHITECTURE.md` only if the patch risks changing visible shell tone or surface rhythm
- `src/config/theme.ts` only if typography tokens are routed through theme-level configuration

If authority conflicts appear, stop and report them.

---

## Task classification

- **Type:** build hardening / validation portability / bounded implementation packet
- **Object type:** typography loading strategy and build resilience
- **Destination family:** shared app shell infrastructure
- **Target surface:** global layout / global typography loading / build validation
- **Renderer / component path:** `src/app/**`, minimal supporting asset/config files only
- **Moment of use:** validation and deployment confidence, not end-user feature expansion
- **Phase-eligible now:** yes
- **Sequencing authority:** `docs/marriage_os_implementation_phases.md`

---

## Scope contract

### What BP-202 must do
BP-202 must make the current app build credibly inside Codex by removing reliance on live Google font fetches during build.

At minimum:

1. identify the current Google-font loading path used by the app shell
2. replace or harden that path so build success no longer depends on live font fetches from Google during build
3. preserve the approved premium tone and hierarchy as closely as practical
4. keep route behaviour unchanged
5. restore meaningful validation via `pnpm build`

### What BP-202 must not do
BP-202 must **not** become:

- a redesign packet
- a shell-composition rethink
- a typography experimentation pass
- a global CSS cleanup spree
- a performance programme unrelated to the font build blocker
- a stealth Phase 3 packet
- a metadata / SEO / installability packet

---

## In scope

### 1. Font loading strategy hardening
The builder must harden the current font-loading approach so the build no longer depends on live Google font fetches.

Preferred outcomes:

- preserve the same approved font families if practical via local/self-hosted usage
- otherwise preserve visual intent with the smallest acceptable regression
- keep the strategy explicit and reviewable

### 2. Layout-level integration
Update layout-level font wiring so the approved typography stack still applies correctly after the hardening change.

At minimum:

- preserve body/copy rhythm
- preserve display hierarchy
- preserve code/mono usage where it currently matters
- avoid class-name or variable breakage across the app

### 3. Controlled global-style adjustment
Make only the minimum global-style adjustments required to keep visual output coherent after the font-loading change.

### 4. Build portability validation
Run and record validation so the repo can be trusted again for Codex build checks.

At minimum:

- `pnpm lint`
- `pnpm build`

---

## Out of scope

- route redesign
- copy rewrites unrelated to typography breakage
- component refactors unrelated to font loading
- icon/manifest/installability work
- SEO/schema work
- page-structure changes
- member-shell aesthetic retuning beyond what is required to preserve current look
- performance tuning unrelated to the build blocker
- Phase 3 Repair work

---

## Product realism contract

Although this is a technical packet, visible regression still matters.

The patch must therefore:

- preserve the premium marketing tone already approved
- preserve the restrained, tool-like member-shell tone already approved
- avoid sudden font fallback ugliness that collapses hierarchy
- avoid reflow chaos caused by careless font substitution
- preserve calm scan-first readability

This is a **technical hardening packet with visual consequences**, so taste still matters.

---

## UX / quality contract

The patch must satisfy all of the following:

1. the app still reads as the same product after the font strategy change
2. major visual hierarchy remains intact
3. marketing and member-shell styling do not collapse into one treatment
4. no route behaviour changes are introduced
5. typography variables/classes remain coherent and predictable
6. the patch is small enough to review cleanly
7. build validation becomes credible again inside Codex

---

## Preferred implementation posture

This packet should prefer:

- deterministic build reliability over theoretical purity
- local/self-hosted font usage if practical
- the smallest viable patch
- preserving the approved aesthetic rather than seeking a new one
- explicit, reviewable font wiring

Avoid:

- typography rabbit holes
- broad CSS churn
- “while I’m here” refactors
- unnecessary asset proliferation
- visual taste drift

---

## Allowed files

Builder may touch only the minimum file set required for this hardening packet.

Likely allowed areas:

- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/config/theme.ts` only if genuinely required by current typography wiring
- local font asset folder if needed for the chosen strategy
- minimal package/config files only if strictly required for the font-loading solution

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless scope is explicitly widened:

- route-family page files unrelated to typography breakage
- Phase 3 Repair files
- store/pricing/library/account route files
- persistence/auth/AI files
- manifest/icon/installability files
- unrelated schema/SEO files
- Phase 1 or Phase 2 governance docs except the task file and required builder note

---

## Acceptance criteria

BP-202 passes only if all of the following are true:

1. `pnpm lint` passes
2. `pnpm build` passes inside Codex
3. build no longer depends on live Google font fetch success during the build step
4. visible regression is controlled and acceptable
5. the approved premium feel is materially preserved
6. no route or feature behaviour changed
7. no unrelated systems were touched
8. the patch remains bounded enough to review as a hardening packet rather than a redesign

---

## Validation requirements

Run and record:

- `pnpm lint`
- `pnpm build`

Also provide:

- changed-file list
- one-line reason per changed file
- note on font strategy chosen
- note on any visual trade-off introduced
- explicit confirmation that no unrelated systems were introduced or modified

If validation fails, record the exact failure.

---

## Builder instructions

1. Start from the current live layout/font wiring, not from abstract assumptions.
2. Solve the Codex build portability problem directly.
3. Keep the patch small.
4. Preserve the current product feel as closely as practical.
5. Do not widen into installability, SEO, or Phase 3 work.
6. Stop if the packet starts turning into a typography redesign.

---

## Reviewer focus

Reviewer must check:

- whether `pnpm build` now passes in Codex
- whether the font-loading strategy is now build-portable
- whether the patch stayed bounded
- whether visual regression is controlled
- whether marketing/member-shell tone integrity was preserved
- whether lint/build pass

The Human Governor must confirm:

- this was the right depth for a Codex build-hardening packet
- the patch solved the validated blocker without spawning unrelated churn

---

## Required outputs

### Primary output
A bounded Phase 2 build-hardening patch that removes Codex build dependence on live Google font fetches during build.

### Builder handoff note
Create:

`reviews/phase-2/open/BP-202-phase-2-build-hardening-packet-builder-note.md`

This note must include:

- files created
- files modified
- changed-file list
- validation results
- font strategy rationale
- visual regression note
- explicit confirmation that no forbidden-scope systems were touched

---

## Initial task state

Place this file at:

`tasks/phase-2/open/BP-202-phase-2-build-hardening-packet.md`

Builder-complete work must move to:

`tasks/phase-2/review/`

Only accepted work ends in:

`tasks/phase-2/done/`

---

## Stop conditions

Stop and report immediately if:

- the chosen font strategy causes unacceptable visual regression
- the build still depends on live Google font fetches after the attempted fix
- the patch starts drifting into redesign or unrelated infra work
- the file-touch set expands beyond a clean hardening packet

---

## Success definition

Success is not “fonts were changed.”

Success is:

- Codex can run `pnpm build`
- the app still looks materially like the approved product
- the patch stays bounded
- validation passes
- the repo becomes more trustworthy for future agent execution
