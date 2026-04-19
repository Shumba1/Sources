# BP-101 — Phase 1 repo foundation and shell split (revised against accepted live baseline)

## Packet metadata
- **Packet ID:** BP-101
- **Phase:** Phase 1
- **Status:** Open
- **Type:** Implementation / shell split / delivery-sensitive packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-1/review/`

---

## Objective

Implement the **first real shell-structure packet** on top of the now-accepted Phase 1 baseline stack.

This packet must **not** reinstall the stack and must **not** redo BP-100 work.  
It must take the live repo as it now exists — pnpm baseline, root app files, config layer, and preserved architecture-intent files — and split the app into a **clean, reviewable shell structure** that supports later page-data and route work.

The goal is to prove a disciplined Phase 1 implementation slice by:

- keeping `src/app/layout.tsx` thin
- separating **marketing shell** from **app shell**
- creating a small set of **top-level route scaffolds only**
- centralising shell chrome / viewport / safe-area behaviour
- avoiding feature work, content work, auth, billing, backend, and AI creep

---

## Why this packet exists now

BP-100 has already been accepted in review as a coherent baseline install:

- pnpm-based manifest and lockfile are present
- Next.js / React / TypeScript / Tailwind baseline is present
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css` exist
- `public/` baseline exists
- pre-existing architecture-intent files under `src/config/**`, `src/lib/**`, `src/schemas/**`, and `src/components/**` were preserved
- BP-103 recommended **accept BP-100 and open BP-101**

That means BP-101 must now assume the baseline exists and must **not** waste effort rebuilding it. fileciteturn17file0

---

## Required reading order

Read in this order before changing anything:

1. `AGENTS.md`
2. `docs/MASTER_SPEC.md`
3. `docs/marriage_os_implementation_phases.md`
4. `docs/DRIFT_REGISTER.md`
5. `docs/DELIVERY_ARCHITECTURE.md`
6. `REPO_TREE_PLACEMENT_PLAN.md`
7. `tasks/phase-1/open/BP-100-phase-1-baseline-app-stack-install.md`
8. `reviews/phase-1/open/BP-102-phase-1-tech-stack-verification-report.md`
9. `reviews/phase-1/open/BP-103-phase-1-focused-review-for-BP-100.md`
10. `src/config/routes.ts`
11. `src/config/page-data.ts`
12. `src/config/theme.ts`
13. current live `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

If authority conflicts appear, stop and report them. Do not improvise.

---

## Task classification

- **Type:** implementation / shell / route scaffold / delivery-sensitive
- **Object type:** app shell structure
- **Destination family:** application shell, not editorial content
- **Target surface:** mobile-first PWA shell and top-level route entry surfaces
- **Renderer / component path:** `src/app/**`, `src/components/**`, minimal supporting `src/config/**`
- **Moment of use:** first open, first navigation, shell orientation
- **Phase-eligible now:** yes
- **Delivery Architecture reference:** shell-first surface fit, moment-of-use fit, and phase-eligibility controls

This packet touches route/surface/layout behaviour, so `docs/DELIVERY_ARCHITECTURE.md` is mandatory.

---

## Live-state assumptions you must respect

The live repo already has, at minimum:

- `package.json`
- `pnpm-lock.yaml`
- `tsconfig.json`
- `next.config.ts`
- `next-env.d.ts`
- `postcss.config.mjs`
- `eslint.config.mjs`
- `.env.example`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `public/icon.svg`
- `public/manifest.webmanifest`

Do **not** treat this packet as stack installation. Those files are baseline truth now. fileciteturn17file0

---

## Scope

### In scope

#### 1. Thin root layout
Refactor `src/app/layout.tsx` so it becomes a true root wrapper, not a catch-all shell.

The root layout should own only:
- document skeleton
- font/class plumbing
- global metadata baseline if appropriate
- global CSS import
- minimal app-wide wrappers that genuinely belong at root

Do **not** keep route-specific shell logic stuffed into root layout.

#### 2. Marketing shell vs app shell split
Introduce a clear separation between:

- **marketing shell**
- **member/app shell**

Preferred mechanism: **App Router route groups** or an equivalently clear pattern that keeps shell concerns readable and reviewable.

The result should make it obvious:
- which routes are public-marketing surfaces
- which routes are app/member shell surfaces
- where top bar / bottom nav / side nav / right rail decisions belong

#### 3. Top-level route scaffolds only
Create or stabilise only the **minimum top-level scaffold routes** needed to prove the shell split works.

### Required top-level routes to cover now
Use `src/config/routes.ts` as the authority for naming and path truth.

At minimum, BP-101 should cover these **top-level** surfaces:

**Marketing**
- `/`
- `/how-it-works`
- `/start`

**App shell**
- `/today`
- `/repair`
- `/guides`
- `/knowledge`
- `/progress`

These may be lightweight placeholder pages, but they must be real routed surfaces under the correct shell.

Do **not** implement dynamic detail routes in this packet:
- `/repair/[slug]`
- `/guides/[slug]`
- `/knowledge/[slug]`
- `/store/[category]`
- `/store/[category]/[slug]`

Do **not** implement store/pricing/safety/login/signup/library/account/settings in this packet unless a tiny routing or shell dependency makes one unavoidable and explicitly justified.

#### 4. Shared shell chrome primitives
Create or stabilise the shared shell pieces needed for structure, such as:

- top bar
- bottom nav
- app shell frame
- marketing shell frame
- container / content rail primitives

These should live in bounded components, not buried inside page files.

#### 5. Safe-area / viewport handling
Move viewport and safe-area behaviour into the shared shell layer so it is:

- deliberate
- reusable
- not page-by-page duct tape

This includes `100dvh` / safe-area-aware handling where appropriate.

#### 6. Minimal wiring only
Touch config or registry files only where necessary to make the shell split coherent.

---

## Out of scope

- reinstalling pnpm / Next / TypeScript / Tailwind baseline
- auth
- backend services
- Supabase
- Stripe
- billing / entitlements
- AI features or agent runtime inside the app
- dynamic detail pages
- product content population
- editorial scaffolding
- store implementation
- pricing implementation
- safety/legal page implementation
- account/settings implementation
- feature logic inside Today / Repair / Guides / Knowledge / Progress
- deep visual polish beyond what is needed for shell clarity
- speculative abstractions for future unknown systems

---

## Preferred implementation shape

The exact file names may vary if the live repo structure strongly suggests an equivalent pattern, but the intended shape is:

- root app layout remains thin
- marketing routes sit under a marketing shell boundary
- app/member routes sit under an app shell boundary
- shared shell chrome lives in bounded components under `src/components/**`
- route files stay small and declarative
- shell decisions are readable from structure, not hidden in giant components

A likely good pattern is:

- `src/app/layout.tsx` → thin root
- `src/app/(marketing)/**` → marketing shell + marketing top-level routes
- `src/app/(app)/**` → app shell + member top-level routes
- `src/components/shell/**` → shell primitives

Do **not** force this exact shape if the live repo already offers a cleaner equivalent, but do not invent a vague alternative with the same ambiguity.

---

## Allowed files

Builder may touch only the minimum file set required for the shell split.

Likely allowed areas:

- `src/app/**`
- `src/components/**` for shell primitives only
- `src/config/routes.ts`
- `src/config/page-data.ts` only if tiny alignment is required
- `src/config/theme.ts` only if tiny shell-token alignment is required
- `src/app/globals.css`
- minimal supporting files strictly required to make the shell compile cleanly

If additional files are needed, name and justify them before editing.

---

## Forbidden files

Do not touch unless the Human Governor explicitly widens scope:

- payment / billing files
- auth files
- database wiring
- AI utility or orchestration files
- `sources/**`
- Phase 0 governance files
- content-generation files
- dynamic detail-route content renderers
- unrelated feature pages
- store/pricing/safety/account/settings implementations
- broad visual redesign files outside shell needs

---

## Acceptance criteria

BP-101 passes only if all of the following are true:

1. `src/app/layout.tsx` is thinner and clearly root-scoped
2. marketing shell and app shell are separated cleanly
3. the required top-level scaffold routes exist under the correct shell
4. shell chrome lives in bounded shared primitives rather than duplicated page code
5. safe-area / viewport handling is centralised and intentional
6. no dynamic detail-route implementation was pulled in
7. no backend/auth/billing/AI creep was introduced
8. no content-population or editorial work was smuggled into the packet
9. the patch is small enough to review as a structural shell packet
10. `pnpm lint` passes
11. `pnpm build` passes
12. the repo is materially better prepared for later page-data and content-binding work

---

## Validation requirements

Run and record:

- `pnpm lint`
- `pnpm build`

Also provide:

- changed-file list
- one-line reason per changed file
- note on shell split choice
- note on safe-area / viewport handling
- note confirming no forbidden-scope creep

If validation fails, record the exact failure and do not bluff.

---

## Builder instructions

1. Inspect the current live shell/layout structure before editing.
2. Name the exact target-file list before implementation.
3. Keep the patch structural, not decorative.
4. Reuse the accepted baseline where possible.
5. Preserve `src/app/robots.ts` and `src/app/sitemap.ts` unless a routing/layout change makes a tiny import fix necessary.
6. Do not silently rewrite delivery logic or route truth.
7. Stop if shell work exposes unresolved canon/config contradictions.

---

## Reviewer focus

Reviewer must check:

- phase correctness
- whether BP-101 assumed the accepted live baseline correctly
- shell split clarity
- top-level route scaffold correctness against `src/config/routes.ts`
- safe-area / viewport correctness
- absence of dynamic-detail creep
- absence of backend/auth/billing/AI creep
- whether shell changes improve structure rather than merely shuffle code around

The Content / Structure Operator must also confirm:
- shell surfaces match the intended moment-of-use
- no content-object drift was introduced
- marketing vs app shell separation matches delivery intent

---

## Required outputs

### Primary output
A bounded structural patch implementing the shell split and the required top-level scaffold routes.

### Builder handoff note
Create:

`reviews/phase-1/open/BP-101-phase-1-repo-foundation-and-shell-split-builder-note.md`

This note must include:
- files created
- files modified
- changed-file list
- validation results
- shell split rationale
- safe-area / viewport note
- explicit confirmation that no forbidden systems were introduced

---

## Initial task state

Place this file at:

`tasks/phase-1/open/BP-101-phase-1-repo-foundation-and-shell-split.md`

Builder-complete work must move to:

`tasks/phase-1/review/`

Only accepted work ends in:

`tasks/phase-1/done/`

---

## Stop conditions

Stop and report immediately if:

- shell work requires backend coupling
- route truth in `src/config/routes.ts` cannot be honoured without widening scope
- delivery rules conflict across governing docs
- safe shell separation cannot be achieved without dragging in dynamic detail routes
- the packet starts drifting into full page build or product feature implementation
- the patch becomes a disguised visual redesign instead of a shell split

---

## Success definition

Success is **not** “the homepage looks cooler.”

Success is:

- the root is thinner
- shell responsibilities are easier to reason about
- marketing vs app shell separation is visible in repo structure
- the required top-level scaffold routes exist
- validation passes
- the next packet can build on a stable shell instead of a swollen baseline page
