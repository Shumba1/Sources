# Marriage OS — Implementation Phases

## Purpose

This document defines the execution phases for Marriage OS implementation.

This file is the **canonical execution-phase and content-gating authority** for Marriage OS.

If any other planning or implementation document uses different phase numbering or describes supporting work in a different order, this file wins for:
- build sequencing
- phase-pass gates
- content eligibility
- readiness to move to the next implementation tranche

It reflects the settled project rules:

- build the **PWA experience first**
- prove the **core product loop locally**
- connect the **database after the app already behaves like Marriage OS**
- keep **Repair** as the centre of V1
- add **AI utilities last**, not first

---

## Core sequencing rule

For Marriage OS, the correct order is:

1. **make the product think and render locally**
2. **then make it persist and authenticate**
3. **then make it sell and remember ownership**
4. **then add AI helpers**

That means the PWA shell and core user flow should work convincingly **before** Supabase integration.

---

## Phase 0 — Repo cleanup and architecture lock

### Goal
Remove dead architecture and lock the accepted production direction before feature work begins.

### Scope
- remove or mark dead any `NextAuth` scaffold
- remove stale `/upgrade` route logic
- replace stale public labels and stale CTA copy
- apply the accepted `ArticleSection` fix for knowledge detail
- lock the canonical config layer:
  - `routes.ts`
  - `theme.ts`
  - `page-data.ts`
  - schemas
  - component registry

### Output
- clean repo baseline
- no ambiguous auth architecture
- no stale monetisation path
- no stale knowledge-detail mapping
- no stale public UX language

### Pass gate
Move forward only if:
- dead auth architecture is gone or clearly marked dead
- `/upgrade` is gone as live route logic
- knowledge detail path is corrected
- canonical config files are treated as build authority

---

## Phase 1 — PWA foundation with no database

### Goal
Make the app feel real in-browser with zero backend dependency.

### Scope
- Next.js app shell structure
- marketing shell
- member shell
- top bar / bottom nav / side nav
- manifest / icons / installability
- safe-area handling
- `100dvh` shell behaviour
- route scaffolds for all main pages
- local fixture layer for rendering states

### Minimum routes that should render
- `/`
- `/how-it-works`
- `/start`
- `/today/check-in`
- `/today/state`
- `/today`
- `/repair`
- `/repair/[slug]`
- `/guides`
- `/guides/[slug]`
- `/knowledge`
- `/knowledge/[slug]`
- `/progress`
- `/store`
- `/pricing`
- `/library`

### Output
- installable PWA-style shell
- working route structure
- responsive navigation
- no backend required to demo the product flow

### Pass gate
Move forward only if:
- the app installs or behaves like an installable PWA
- all primary routes render
- navigation works cleanly
- the shell feels app-like, not like a broken website

---

## Phase 2 — Local-first state system

### Goal
Prove the core utility loop without backend complexity.

### Scope
- `CheckInGrid`
- deterministic state classifier
- local fixture results
- `StateSummaryCard`
- `NextBestMoveCard`
- `MakeItWorseCard`
- `QuickScriptCard`

### Required working journey
`/start` → `/today/check-in` → `/today/state` → `/today`

### Output
- complete local state flow
- believable state classification
- immediate next-step logic
- no database dependency

### Pass gate
Move forward only if:
- a user can complete the loop end-to-end
- the state result feels believable
- Today tells the user what to do next
- the flow works entirely from local fixtures

---

## Phase 3 — Repair Centre with local content

### Goal
Build the real product centre before backend.

### Scope
- repair index
- symptom/category browsing
- repair module template
- checklist/protocol rendering
- reset timeline
- sticky action bar
- linked local products/guides

### Output
- repair modules render cleanly
- users can move from state result into repair actions
- the product clearly centres on Repair

### Pass gate
Move forward only if:
- Repair is obviously the centre of the experience
- repair modules work from local content/fixtures
- the flow from state → repair is coherent and fast

---

## Phase 4 — Perspectives and Knowledge with local content

### Goal
Render the content architecture correctly before persistence.

### Scope
- guides index/detail
- knowledge index/detail
- local content sources (MDX or structured local seeds)
- `KnowledgeArticleCard` for list/index/related use
- `ArticleSection` for `/knowledge/[slug]`

### Output
- perspective pages render correctly
- knowledge pages render correctly
- knowledge detail uses the accepted body renderer path
- content is navigable without backend

### Pass gate
Move forward only if:
- Perspectives work as parallel, non-adversarial tracks
- Knowledge behaves as supporting repository content
- detail pages use `ArticleSection`, not card misuse

---

## Phase 5 — Commerce UI and library states, still local

### Goal
Make commercial surfaces feel native before live payments.

### Scope
- store
- product detail
- pricing
- library page
- fake owned/unowned states
- fake entitlement toggles
- contextual monetisation placements

### Output
- believable store and pricing surfaces
- product detail pages that feel like tools, not vague course ads
- library UI states that make sense
- no payment backend required yet

### Pass gate
Move forward only if:
- pricing/store/library surfaces are coherent
- owned vs unowned states are understandable
- monetisation feels native to the product, not bolted on

---

## Phase 6 — Supabase integration

### Goal
Replace local persistence with real production rails.

### Scope
- Supabase Auth
- profiles
- check-ins
- saved items
- entitlement reads
- progress views
- member access guards

### Output
- real user accounts
- persisted check-ins
- persistent saved state
- durable member experience across sessions

### Pass gate
Move forward only if:
- sign-in works
- check-ins persist
- saved items persist
- the app recovers the user experience across sessions

---

## Phase 7 — Stripe and entitlement wiring

### Goal
Turn the commercial UI into real commerce.

### Scope
- Stripe checkout
- webhook handling
- purchase records
- entitlement updates
- owned product unlocking
- library ownership states

### Output
- live purchase flow
- entitlement logic connected to library/product access
- owned tools unlock correctly

### Pass gate
Move forward only if:
- a purchase reliably unlocks the correct asset
- ownership state is accurate
- library and product pages reflect entitlement correctly

---

## Phase 8 — Progress layer from real data

### Goal
Use real stored behaviour to power trend surfaces.

### Scope
- state trend
- repair completion
- bond metrics
- attraction/desire metrics
- progress summaries from real check-in data

### Output
- real progress surfaces
- trend summaries based on actual user behaviour
- recommendation prompts grounded in stored data

### Pass gate
Move forward only if:
- progress is derived from real events
- the output is useful, not vanity reporting
- progress helps the user know what to do next

---

## Phase 9 — AI utilities

### Goal
Add bounded AI leverage after the deterministic product works.

### Scope
- message rewriter
- conflict coach
- check-in summary
- other tightly bounded helper tools

### Output
- optional AI helpers
- no dependence on AI for core product truth
- safe fallback behaviour

### Pass gate
Move forward only if:
- the deterministic product already works without AI
- AI outputs are schema-bound
- AI is additive, not foundational

---

## What must work before the database

These must work locally first:

- route navigation
- member shell
- check-in UI
- deterministic state engine
- repair content rendering
- perspective rendering
- knowledge rendering
- pricing/store/library UI states
- installable PWA shell

These can wait for Supabase:

- login/signup
- persistent check-ins
- saved items
- owned-product library
- entitlement enforcement
- user-specific progress

---

## First real proof-of-life milestone

The first milestone that proves Marriage OS is real is:

`/start → /today/check-in → /today/state → /today → /repair/[slug]`

with:
- local fixtures
- no backend dependency
- usable mobile shell
- believable product logic

If that works, implementation is truly underway.

---

## Execution summary

### Build order
1. Phase 0 — cleanup and architecture lock
2. Phase 1 — PWA shell and routes
3. Phase 2 — local state engine / Today loop
4. Phase 3 — local Repair Centre
5. Phase 4 — local Perspectives + Knowledge
6. Phase 5 — local Store / Pricing / Library states
7. Phase 6 — Supabase Auth + DB integration
8. Phase 7 — Stripe + entitlements
9. Phase 8 — Progress from real data
10. Phase 9 — AI utilities

### Short rule
**Yes: make the PWA and core product loop work first. Then connect the database once the app already behaves like Marriage OS.**
