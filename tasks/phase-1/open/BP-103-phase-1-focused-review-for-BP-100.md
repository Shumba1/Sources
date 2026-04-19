# BP-103 — Focused review pass for BP-100 baseline app stack install

## Packet metadata
- **Packet ID:** BP-103
- **Phase:** Phase 1
- **Status:** Open
- **Type:** Focused review / acceptance packet
- **Primary role:** Reviewer
- **Secondary roles:** Content / Structure Operator, Human Governor
- **Task state on completion by reviewer:** `tasks/phase-1/review/`

---

## Objective

Run a **focused live-tree review pass** on **BP-100 — Phase 1 baseline app stack install** and determine whether it should be:

- **Accepted**
- **Returned for rework**
- **Blocked**

This is a review packet, not a build packet.

The builder has now completed the baseline installation and subsequent corrective fixes, including:
- baseline app-stack install
- lint repair
- font build repair
- runtime registry typing repair
- successful `pnpm build`

Your job is to verify the **live repository state**, not to trust the claim blindly.

---

## Required stance

- Review the **live repo**, not patch artifacts
- Do **not** make implementation edits
- Do **not** install additional packages unless absolutely required just to verify the already-declared baseline
- Do **not** widen scope into BP-101 shell work
- Be strict about whether BP-100 achieved its actual acceptance criteria
- Distinguish clearly between:
  - passed
  - passed with non-blocking observations
  - failed / rework required
  - blocked

---

## Canonical reading set before review

Read these first:

- `AGENTS.md`
- `README.md`
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/marriage_os_implementation_phases.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- `REPO_TREE_PLACEMENT_PLAN.md`
- `tasks/phase-1/open/BP-100-phase-1-baseline-app-stack-install.md`
- `reviews/phase-1/open/BP-100-phase-1-baseline-app-stack-install-builder-note.md`
- `reviews/phase-1/open/BP-102-phase-1-tech-stack-verification-report.md`

These documents define what BP-100 was supposed to fix.

---

## Review scope

### In scope
Verify the live repo for:

- package-manager truth
- lockfile truth
- manifest truth
- Next.js / React / TypeScript baseline truth
- Tailwind / PostCSS baseline truth
- app-root truth
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- `public/` baseline truth
- alias truth
- script truth
- successful build truth
- whether existing config/schema/render files were preserved sensibly
- whether BP-101 can now proceed

### Out of scope
- implementing shell split work
- changing layout or design choices unless they are acceptance blockers
- auth / payments / backend / AI tooling
- content generation
- route expansion beyond review needs
- speculative cleanup

---

## What to verify

### 1. Manifest and package-manager truth
Confirm:
- `package.json` exists
- `pnpm-lock.yaml` exists
- repo is now clearly pnpm-based
- there is no mixed-manager drift

Check:
- `package.json`
- `pnpm-lock.yaml`
- absence of `package-lock.json`, `yarn.lock`, `bun.lock*`

### 2. Baseline dependency truth
Verify the manifest declares a coherent baseline stack:

- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss`
- relevant PostCSS/Tailwind adapter packages
- `eslint`
- `eslint-config-next`

Do not judge package versions aesthetically. Judge whether the stack is coherent and runnable.

### 3. Config truth
Verify presence and coherence of:
- `tsconfig.json`
- `next.config.ts` (or equivalent actual config file)
- `next-env.d.ts`
- `postcss.config.mjs`
- `eslint.config.mjs`
- `.env.example`

Check whether:
- aliases align with actual `src/` structure
- Next/TS config is coherent
- Next’s auto-edited `tsconfig.json` remains sane

### 4. App-root truth
Verify:
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- existing `src/app/robots.ts`
- existing `src/app/sitemap.ts`

Check whether:
- app root is coherent
- there is no duplicate competing `app/` root
- the current root shell is appropriately minimal for BP-100

### 5. Styling baseline truth
Verify:
- Tailwind is actually wired
- global CSS exists
- no conflicting styling strategy was introduced
- baseline is sufficient for Phase 1 shell work

### 6. Public/static baseline truth
Verify:
- `public/` exists
- baseline static assets introduced for shell credibility are present
- nothing bloated or unrelated was added

### 7. Existing architecture-intent preservation
Check that BP-100 did not clobber or orphan the pre-existing architecture-intent files, especially:

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

The review must state whether the baseline install integrated around these files intelligently.

### 8. Validation truth
Verify the current live repo can pass:

- `pnpm lint`
- `pnpm build`

If rerunning both is too expensive in the review environment, verify exact evidence from live-tree builder notes and run at least the lighter validation that is feasible. If both can be rerun safely, do so.

### 9. Scope-discipline truth
Confirm whether BP-100 stayed within scope:
- baseline install only
- no Phase 1 shell split creep
- no backend/auth/payments creep
- no broad feature implementation creep

---

## Required commands / evidence style

Use exact commands where useful, such as:

- `pwd`
- `git branch --show-current`
- `git status --short`
- `find . -maxdepth 3 -type f | sort`
- `sed -n '1,240p' package.json`
- `sed -n '1,260p' tsconfig.json`
- `sed -n '1,220p' next.config.ts`
- `sed -n '1,220p' postcss.config.mjs`
- `sed -n '1,220p' eslint.config.mjs`
- `sed -n '1,220p' src/app/layout.tsx`
- `sed -n '1,220p' src/app/page.tsx`
- `sed -n '1,220p' src/app/globals.css`
- `find public -maxdepth 3 -type f | sort`
- `pnpm lint`
- `pnpm build`

If any file is absent, say so explicitly.

Anchor findings to exact files, exact absences, and exact command outcomes.

---

## Deliverable required

Create:

`reviews/phase-1/open/BP-103-phase-1-focused-review-for-BP-100.md`

---

## Required report structure

Your report must use exactly these sections:

# 1. Executive verdict
State one of:
- **ACCEPT**
- **REWORK**
- **BLOCKED**

And answer:
- Did BP-100 pass?
- Can BP-101 now open?

# 2. Live-tree baseline reviewed
List working directory, branch, commands run, and files inspected.

# 3. Package-manager and manifest truth

# 4. Config and alias truth

# 5. App-root and styling baseline truth

# 6. Public/static baseline truth

# 7. Existing architecture preservation check

# 8. Validation truth
State exact lint/build results.

# 9. Scope-discipline check

# 10. Non-blocking observations

# 11. Recommendation
State one of:
- accept BP-100 and open BP-101
- accept BP-100 but open a small follow-up packet first
- return BP-100 to rework
- block Phase 1 progression

# 12. Appendix: exact file path findings

---

## Acceptance criteria for this review packet

This review packet is complete only if:

- it is based on the **live repo**
- it checks the actual BP-100 install, not earlier assumptions
- it makes a clear **ACCEPT / REWORK / BLOCKED** call
- it explicitly answers whether BP-101 can now open
- it stays strictly in review lane
- it records exact evidence rather than vague impressions

---

## Stop conditions

Stop and flag immediately if:

- the live repo no longer reflects the expected BP-100 baseline files
- build/lint regressions have reappeared
- mixed package-manager drift is discovered
- BP-100 overreached into later-phase feature work in a way that creates review ambiguity

If a stop condition occurs, complete the report anyway with exact evidence.

---

## Handoff rule

When the review is complete:

1. leave BP-100 ready for acceptance or rework decision
2. do **not** mark anything done automatically
3. do **not** open BP-101 automatically unless the evidence supports it
4. keep the report tight, evidence-first, and phase-disciplined
