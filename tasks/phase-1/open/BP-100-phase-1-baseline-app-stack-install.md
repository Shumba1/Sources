# BP-100 — Phase 1 baseline app stack install

## Packet metadata
- **Packet ID:** BP-100
- **Phase:** Phase 1
- **Status:** Open
- **Type:** Remediation / foundation-install packet
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-1/review/`

---

## Objective

Install and wire the **baseline application tech stack** required for Phase 1 so the repository becomes a coherent, runnable **Next.js + React + TypeScript + Tailwind** app-shell foundation.

This packet exists because BP-102 concluded **NO-GO**: the repo has partial Next-oriented source artefacts and strong architecture intent, but it does **not** yet have the baseline app stack installed or configured.

The goal is to establish the **minimum correct foundation** for shell work — not to build features, not to wire backend services, and not to start product-page implementation beyond a safe root shell.

---

## Required stance

- This is a **bounded installation and wiring packet**
- Install only the baseline stack required to support Phase 1 shell work
- Preserve and integrate existing architecture-intent files already present under `src/config/**`, `src/lib/**`, `src/schemas/**`, and `src/components/**`
- Do **not** invent feature work
- Do **not** add auth, payments, database wiring, AI tooling, or product-copy implementation
- Do **not** create empty architecture theatre beyond what Phase 1 requires

---

## Canonical reading set before implementation

Read these first:

- `AGENTS.md`
- `README.md`
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/marriage_os_implementation_phases.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- `REPO_TREE_PLACEMENT_PLAN.md`
- `reviews/phase-1/open/BP-102-phase-1-tech-stack-verification-report.md`

The BP-102 report is not optional. It defines the exact baseline gaps this packet exists to fix.

---

## Background evidence driving this packet

BP-102 found the live repo was missing all of the following:

- `package.json`
- lockfile
- `tsconfig.json`
- `next.config.*`
- App Router root files (`src/app/layout.tsx`, `src/app/page.tsx`)
- Tailwind/PostCSS/global CSS baseline
- `public/` directory
- baseline build/run scripts

But BP-102 also confirmed that partial Next-oriented and config-driven source files already exist, including:

- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/config/routes.ts`
- `src/config/page-data.ts`
- `src/config/theme.ts`
- `src/config/seo.ts`
- `src/config/component-registry.ts`
- `src/config/runtime-component-registry.tsx`
- `src/schemas/ui.ts`
- `src/schemas/domain.ts`
- `src/lib/render-page-sections.tsx`
- `src/lib/section-resolvers.ts`
- `src/components/domain/knowledge/article-section.tsx`

This packet must build the missing baseline stack **around** those files, not bulldoze them.

---

## In scope

### Stack installation and baseline wiring
- choose and declare **one** package manager
- create `package.json`
- add lockfile
- install/configure:
  - Next.js
  - React
  - React DOM
  - TypeScript
  - Tailwind CSS
  - PostCSS / Autoprefixer if required by chosen version
  - minimal lint tooling needed for a sane baseline
- add `tsconfig.json`
- add `next-env.d.ts` if required
- add `next.config.*`
- add `postcss.config.*`
- add Tailwind config or CSS entry pattern appropriate to chosen Next/Tailwind setup
- create `src/app/layout.tsx`
- create `src/app/page.tsx`
- create `src/app/globals.css`
- create `public/` baseline for safe static asset and manifest use
- ensure existing `src/app/robots.ts` and `src/app/sitemap.ts` live coherently inside the app structure
- ensure alias configuration supports existing `@/...` imports
- ensure root scripts exist for `dev`, `build`, `start`, and `lint`

### Minimal shell foundation only
- establish a plain root layout
- establish a plain root page
- ensure the app boots
- ensure baseline viewport / metadata / global CSS are sane enough for later shell work

---

## Out of scope

- route expansion beyond the minimum needed for root shell coherence
- navigation system implementation
- full page shell split
- component design system expansion
- auth
- Stripe
- Supabase
- AI utilities
- analytics
- feature pages
- content population
- editorial scaffolding beyond what is required for app boot
- advanced SEO/schema implementation beyond preserving existing files coherently

---

## Package-manager rule

Use **one** package manager only.

### Preferred default
Use **pnpm** unless the live repo already proves a different committed standard.

If pnpm is used, the packet must result in:
- `package.json`
- `pnpm-lock.yaml`

Do **not** leave the repo in a mixed-manager state.

---

## Implementation requirements

### 1. Manifest and baseline dependencies
Create a coherent `package.json` with:

- framework/runtime dependencies
- dev dependencies
- standard scripts:
  - `dev`
  - `build`
  - `start`
  - `lint`

Also declare the package manager if supported by the chosen manifest style.

### 2. TypeScript and alias truth
Create `tsconfig.json` aligned to actual repo structure.

Requirements:
- support existing `@/...` imports
- ensure `src/`-based structure is recognised
- avoid speculative alias sprawl

### 3. Next.js and app-root truth
Create a coherent App Router baseline under `src/app/`.

Must include:
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

The root layout should be minimal and phase-appropriate:
- proper HTML/document skeleton
- sensible metadata baseline
- global CSS import
- no feature chrome yet unless required for boot integrity

### 4. Styling baseline
Install and configure the minimum styling layer required for clean shell work.

Requirements:
- Tailwind present and actually wired
- global stylesheet present
- no competing CSS system introduced
- do not over-engineer tokens in this packet
- preserve room for the existing `src/config/theme.ts` to matter later

### 5. Public/static baseline
Create a minimal `public/` structure if required for manifest/icon/static expectations.

Do not bloat it.
Only add what is needed for a credible app baseline.

### 6. Existing-source integration
Do not delete or sideline these existing files without reason:

- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/config/routes.ts`
- `src/config/page-data.ts`
- `src/config/theme.ts`
- `src/config/seo.ts`
- `src/config/component-registry.ts`
- `src/config/runtime-component-registry.tsx`
- `src/schemas/ui.ts`
- `src/schemas/domain.ts`
- `src/lib/render-page-sections.tsx`
- `src/lib/section-resolvers.ts`
- `src/components/domain/knowledge/article-section.tsx`

If any are currently non-runnable because of missing baseline wiring, fix the wiring rather than deleting the file.

### 7. No false finish
The repo is not “done” when files merely exist.

The packet only passes if:
- dependencies are declared
- config files are coherent
- scripts exist
- aliases resolve
- the project can reasonably proceed to shell work
- no obvious contradictory install state remains

---

## Required outputs

### A. Code/config changes in repo
Implement the baseline stack and wiring directly in the repo.

### B. Builder handoff note
Create:

`reviews/phase-1/open/BP-100-phase-1-baseline-app-stack-install-builder-note.md`

This note must include:
- files created
- files modified
- package manager chosen
- dependencies added
- commands run
- validation results
- unresolved issues, if any

---

## Validation requirements

Run only the commands needed to prove the stack is coherently installed.

Required validation includes, where available and appropriate:

- package-manager install command
- lint command
- build command
- any safe type-checking implied by the setup

At minimum, record the result of:

- install command
- `dev` script existence
- `build` script execution result
- `lint` script execution result

If any validation fails, do **not** hide it. Record the exact failure.

---

## Delivery-sensitive control

This packet is primarily technical, but it still touches delivery-facing foundations.

Record the following:

- **Task classification:** code / shell foundation
- **Object type:** app shell foundation
- **Destination family:** Phase 1 shell groundwork, not editorial destination content
- **Target surface:** root app shell / mobile-first baseline
- **Renderer / component path:** `src/app/layout.tsx`, `src/app/page.tsx`, supporting baseline files
- **Moment of use:** app entry / first-load shell baseline
- **Phase-eligible now:** yes
- **Delivery architecture sections consulted:** cite exact relevant sections used

Do **not** let this packet silently become content design or product IA work.

---

## Acceptance criteria

This packet is complete only if all of the following are true:

1. `package.json` exists and is coherent
2. exactly one package manager is clearly chosen and locked
3. lockfile exists and matches chosen manager
4. `tsconfig.json` exists and supports existing alias usage
5. `next.config.*` exists if required by the chosen setup
6. `src/app/layout.tsx` exists
7. `src/app/page.tsx` exists
8. `src/app/globals.css` exists
9. styling baseline is wired coherently
10. `public/` baseline exists if required
11. existing Next/config/schema/render files remain integrated rather than orphaned
12. `dev`, `build`, `start`, and `lint` scripts exist
13. validation results are recorded honestly
14. no auth, payments, database, or feature-scope creep is introduced
15. repo is in a state that can responsibly proceed to BP-101

---

## Stop conditions

Stop and flag immediately if:

- existing repo files reveal a conflicting hidden stack choice that contradicts the packet assumptions
- chosen package manager cannot be installed or resolved in the environment
- existing partial files would need broad redesign rather than bounded integration
- canonical docs and live stack requirements are in direct conflict
- implementation would require backend/service decisions that belong to later packets

If a stop condition occurs:
- do not bluff
- produce the builder note with exact blocker evidence
- leave the packet ready for review with a blocked recommendation

---

## File targets expected

At minimum, expect creation or modification in paths such as:

- `package.json`
- lockfile for chosen manager
- `tsconfig.json`
- `next-env.d.ts`
- `next.config.*`
- `postcss.config.*`
- Tailwind config and/or CSS entry files as required
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `public/**`
- optional small supporting files strictly required for app baseline coherence

Do **not** expand beyond this without justification.

---

## Review focus for next stage

The reviewer should specifically check:

- mixed-manager drift
- alias correctness
- app-root coherence
- styling coherence
- whether existing `src/config/**` and `src/lib/**` files were preserved intelligently
- whether the stack is actually ready for BP-101
- whether this packet overreached into feature work

---

## Handoff rule

When implementation is complete:

1. move this packet from `tasks/phase-1/open/` to `tasks/phase-1/review/`
2. create the builder note in `reviews/phase-1/open/`
3. do **not** mark the task done
4. do **not** open BP-101 automatically unless review confirms this packet passed
