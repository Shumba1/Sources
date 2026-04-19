# BP-102 — Phase 1 tech stack verification

## Packet metadata
- **Packet ID:** BP-102
- **Phase:** Phase 1
- **Status:** Open
- **Type:** Verification-only packet
- **Primary role:** Reviewer / Auditor
- **Secondary role:** Human Governor
- **Task state on completion by agent:** `tasks/phase-1/review/`
- **This packet is read-only:** **No repo edits, no dependency installs, no file moves, no code generation**

---

## Objective

Verify the **live repository tree** to determine whether the actual **application tech stack** required to begin Phase 1 is already installed and wired sufficiently for shell work to proceed.

This packet exists because Phase 0 closure confirmed the **operating layer**, not the **product/application stack**.

The agent must answer, with evidence:

1. Is the project already a functioning or near-functioning app-shell repo?
2. What stack components are actually present?
3. What is missing, misconfigured, or only partially installed?
4. Is the repo **GO / CONDITIONAL GO / NO-GO** for `BP-101 — Phase 1 repo foundation and shell split`?

---

## Required stance

- Review the **live repo**, not prior patch files.
- Treat this as an **evidence-first verification**.
- Do **not** install packages.
- Do **not** patch code.
- Do **not** create scaffolds.
- Do **not** “fix while checking”.
- Distinguish clearly between:
  - **present**
  - **present but incomplete**
  - **absent**
  - **unclear / needs human decision**

---

## Canonical reading set before verification

Read these first:

- `AGENTS.md`
- `README.md`
- `docs/README_ACTIVE_SET.md`
- `docs/MASTER_SPEC.md`
- `docs/marriage_os_implementation_phases.md`
- `docs/DELIVERY_ARCHITECTURE.md`
- `REPO_TREE_PLACEMENT_PLAN.md`
- `tasks/phase-1/open/BP-101-phase-1-repo-foundation-and-shell-split.md` (if present)

These documents govern sequence and intended Phase 1 behaviour. They do **not** prove installation.

---

## Verification scope

### In scope
Evidence-gathering against the live repo for:

- package manager and lockfile truth
- framework truth
- TypeScript truth
- styling system truth
- app/router truth
- lint/format truth
- build/run script truth
- path alias truth
- static asset/public truth
- shell/layout foundation truth
- environment/config truth
- repo signs of partial or broken install

### Out of scope
- feature implementation
- backend wiring
- auth
- Stripe
- Supabase
- AI tooling
- product copy generation
- content scaffolding
- route redesign
- code cleanup beyond reporting findings

---

## What to verify

The agent must check for the following, using exact file paths and direct command evidence where possible.

### 1. Package-manager truth
Verify:

- `package.json`
- lockfile present and which one:
  - `pnpm-lock.yaml`
  - `package-lock.json`
  - `yarn.lock`
  - `bun.lock*`
- `packageManager` field in `package.json` if present

Report:

- chosen package manager
- whether lockfile and package manager agree
- whether there is mixed-manager drift

### 2. Framework truth
Verify whether the repo is actually set up for the intended app stack.

Check for evidence of:

- Next.js
- React
- TypeScript
- App Router or Pages Router
- any non-Next framework conflict

Inspect:

- `package.json`
- `next.config.*`
- `src/app/**` and/or `app/**`
- `pages/**` if present

Report:

- framework in use
- router mode in use
- whether the repo is coherent or split across competing patterns

### 3. TypeScript truth
Verify:

- `tsconfig.json`
- `typescript` dependency
- path aliases
- baseUrl / paths alignment with actual repo structure

Report:

- whether TS is installed
- whether aliases exist
- whether alias configuration matches folder reality

### 4. Styling-system truth
Verify:

- Tailwind presence and version path
- PostCSS config if used
- global stylesheet location
- token/theme bridge evidence if already present
- signs of conflicting CSS strategies

Check likely files such as:

- `tailwind.config.*`
- `postcss.config.*`
- `src/app/globals.css`
- `app/globals.css`
- `src/styles/**`

Report:

- styling stack present or absent
- whether it is minimally ready for Phase 1 shell work
- whether config appears broken, partial, or missing

### 5. Shell / layout foundation truth
Verify whether the repo already has basic shell primitives or route scaffolds.

Check for evidence of:

- root layout
- page shell
- navigation frame
- mobile-safe viewport handling
- public assets
- route scaffolds
- config-driven page or section system if any

Likely paths include:

- `src/app/layout.*`
- `src/app/page.*`
- `src/components/**`
- `src/lib/**`
- `public/**`

Report:

- what shell foundation exists
- whether it is enough to start BP-101 cleanly
- whether there are conflicting or duplicate shell patterns

### 6. Build and run truth
Verify in `package.json`:

- `dev`
- `build`
- `start`
- `lint`
- any type-check script
- any test script

If safe and available in the environment, run **read-only verification commands** such as:

- `node -v`
- package-manager version command
- `npm run lint -- --help` or equivalent **only if non-destructive**
- `npm run build -- --help` or equivalent **only if non-destructive**

Do **not** trigger heavy installs or destructive actions.

Report:

- scripts present
- scripts missing
- whether scripts appear coherent for a normal Next.js workflow

### 7. Env/config risk
Verify presence or absence of:

- `.env.example`
- `.env.local.example`
- config files implying required secrets
- accidental hard dependency on unavailable env vars for shell startup

Do **not** reveal secrets if any exist.

Report only:

- whether shell work appears blocked by env requirements
- whether environment requirements are documented or missing

### 8. Repo health signals
Check for:

- duplicate app roots
- duplicate config files
- broken naming collisions
- signs of half-completed migrations
- references to removed systems
- generated artefacts committed improperly
- obvious package/config mismatch

This is not a cleanup packet. Just report exact findings.

---

## Required commands / evidence style

Use exact commands where useful, for example:

- `pwd`
- `find . -maxdepth 3 -type f | sort`
- `find src -maxdepth 4 -type f | sort` (if `src/` exists)
- `find app -maxdepth 4 -type f | sort` (if `app/` exists)
- `sed -n '1,220p' package.json`
- `sed -n '1,220p' tsconfig.json`
- `sed -n '1,220p' next.config.*`
- `sed -n '1,220p' tailwind.config.*`
- `sed -n '1,220p' postcss.config.*`
- `sed -n '1,220p' src/app/layout.*`
- `sed -n '1,220p' src/app/page.*`

If a file is absent, say so explicitly.

Anchor every finding to:

- exact path
- exact absence
- or exact command result

---

## Deliverable required

Create:

`reviews/phase-1/open/BP-102-phase-1-tech-stack-verification-report.md`

---

## Required report structure

Your report must use exactly these sections:

# 1. Executive verdict
State one of:
- **GO**
- **CONDITIONAL GO**
- **NO-GO**

And answer:
- Is the app tech stack installed?
- Is the repo ready for BP-101?

# 2. Live-tree baseline reviewed
List branch/context if known, exact commands run, and files inspected.

# 3. Package-manager and lockfile truth
State manager, lockfile, and any mismatch.

# 4. Framework and router truth
State framework, router mode, and any conflicting patterns.

# 5. TypeScript and alias truth
State TS status and whether aliases align with reality.

# 6. Styling-system truth
State Tailwind/CSS/PostCSS status and whether shell work can proceed cleanly.

# 7. Shell and route foundation truth
State what shell primitives, layouts, routes, and public assets already exist.

# 8. Build/run script truth
State scripts present, missing, and whether the repo appears runnable as an app shell.

# 9. Env/config risk
State whether env requirements block shell work.

# 10. Blockers and non-blockers
Separate hard blockers from merely untidy findings.

# 11. Recommendation for BP-101
State:
- proceed unchanged
- proceed with narrowed scope
- pause and issue remediation packet first

# 12. Appendix: exact file path findings
List exact file path evidence and exact absences.

---

## Acceptance criteria

This packet is complete only if:

- the report is based on the **live repo**
- the report uses exact paths and exact absences
- the report makes a clear **GO / CONDITIONAL GO / NO-GO** call
- the report explicitly states whether BP-101 should proceed
- no repo files are modified other than the review report itself
- no package installs or implementation edits are performed

---

## Stop conditions

Stop and flag immediately if:

- the repo has no recognisable app stack at all
- multiple competing framework roots make the truth ambiguous
- config files imply destructive or risky commands would be needed to verify
- canonical docs and live stack reality are in major contradiction

If a stop condition occurs, still complete the report with a **NO-GO** verdict and exact evidence.

---

## Handoff rule

When your review report is complete:

1. leave this packet ready to move from `tasks/phase-1/open/` to `tasks/phase-1/review/`
2. do **not** mark the task done
3. do **not** create a PR if no code changed
4. keep the outcome evidence-first and compact
