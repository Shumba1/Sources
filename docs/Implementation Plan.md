# Implementation Plan for Peer Review

> **Boundary note:** This file is the companion workstream and deliverables plan. It is **not** the canonical phase-gate authority. Use `docs/marriage_os_implementation_phases.md` for build sequencing and content eligibility, and use `docs/DRIFT_REGISTER.md` where drift items have already been accepted.


## 1. Objective

Build V1 of the Marriage OS as a **solo-first, mobile-first web app with an app-like shell**, designed to:

* diagnose relationship state quickly
* classify the current pattern
* stop immediate damage
* route the user into the right repair protocol
* track whether the system is improving over time

That product logic is already explicit in the source material: **diagnose fast → classify state → stop damage → run the right repair protocol → track whether the bond is improving.** 

---

## 2. Build assumptions

### Canonical authority

Implementation must use only:

* `docs/MASTER_SPEC.md`
* `docs/DRIFT_REGISTER.md`
* `docs/BRAND_AND_VISUAL_SYSTEM.md` for brand posture, palette, shell expression, and Repair/Guides/Knowledge visual hierarchy
* `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` for graphics, iconography, directional affordances, motion, and media constraints
* `src/config/theme.ts`
* `src/config/page-data.ts`
* `marriage_os_implementation_phases.md` for phase-gating and build sequencing

### Sequencing authority rule

`marriage_os_implementation_phases.md` is the **canonical phase-gate authority** for build sequencing and content eligibility.

This implementation plan remains the **companion workstream and deliverables plan**.
If phase numbering differs between the two documents, use `marriage_os_implementation_phases.md` for:
- execution order
- phase-pass gates
- content-operator eligibility

Use this file for:
- bounded workstream scope
- deliverables
- verification expectations
- peer-review questions

### Active feeder references

Use selectively for doctrine, UX refinement, and engineering scaffolding:

* `Marriage Project.md`
* `Marriage Project Revised premium UX spec.md`
* `Marriage Project Addendum - splitting the knowledge layer...`
* `Marriage Project Version One Code Samples.md`
* `Marriage Project Builder-ready Token file and page-by-page component spec.md`

### Explicitly not canonical

* `Marriage Project Version One PWA.md` is reference-only. It still contains useful logic, but it also carries stale CTA copy and stale route assumptions such as `Upgrade`, so it should not drive implementation directly. 

---

## 3. Core product rules the implementation must preserve

These are not optional polish items. They are build constraints.

### Product stance

* Not for abuse
* Not for coercion
* Not for surveillance
* Not for relationships with no goodwill left
* Not generic relationship advice
* Not ideology content
* Not sex-tracking theatre  

### Structural stance

* Repair remains the centre of V1
* Knowledge is a repository, not the centre of the product
* Perspectives are parallel, not adversarial
* Today must answer “what do I do next?” almost immediately
* System Decay / System Repair is the commercial heart of the product  

### UX stance

* One dominant CTA above the fold
* 44–48px practical tap targets
* 17–19px body text
* 66ch target reading width
* `100dvh` shell
* no fixed-height copy cards
* 320px and 200% zoom support
* precise CTA copy, not vague `Continue` buttons
* Lucide as the primary icon system unless a later drift decision documents an exception
* sparse, tool-first member-shell media and restrained marketing media per `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` 
* public/search surfaces, noindex/private surfaces, and schema behaviour follow `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` 

### Architecture stance

* repo/MDX remains the source of truth for editorial content
* business logic stays isolated in features
* schemas govern contracts
* knowledge detail uses `ArticleSection`, not `KnowledgeArticleCard` as a body renderer  

---

## 4. Delivery strategy

The correct delivery model is **phased, bounded, and verified**.

Do not attempt a one-shot full build.
Do not let any model invent missing architecture.
Do not mix planning, building, and judging in one pass.

### Delivery method

Each phase should follow this loop:

1. **Freeze scope**
2. **Generate bounded patch**
3. **Run validation**
4. **Run independent review**
5. **Accept or reject**
6. **Only then move to next phase**

This is the only practical way to suppress hallucination and mirage in a multi-model implementation workflow.

---

## 5. Phase plan

## Phase 0 — Governance and setup freeze

### Goal

Make the repo impossible to misread.

### Deliverables

* canonical config files in place
* active-set README in `docs/`
* source manifest in `docs/`
* source notes on legacy files
* initial repo scaffold checked against canonical route/config layer

### Exit criteria

* builder can identify canonical sources in under 30 seconds
* no unresolved drift decisions remain open for V1
* all implementation prompts can refer to the same source set

### Peer-review question

Is there any remaining file that a builder could plausibly mistake as canonical?

---

## Phase 1 — Repo foundation

### Goal

Stand up the project skeleton and app shell.

### Scope

* route tree
* app/marketing shell split
* theme tokens
* navigation
* component registry
* central icon wrapper and semantic icon map
* base layout
* safety/legal skeleton pages

### Priority

The code-samples file already gives the correct build order: routes first, then schemas, then shells/navigation/UI. 

### Deliverables

* `src/config/routes.ts`
* `src/config/theme.ts`
* `src/config/page-data.ts`
* `src/config/component-registry.ts`
* `src/config/icon-map.ts`
* `src/components/ui/icon.tsx`
* `src/app/(marketing)` and `src/app/(app)` route groups
* `AppShell`, `MarketingShell`, `TopBar`, `BottomNav`, `SideNav`, `HeroBlock`, `Card`

### Verification

* Phase 1 required route baseline routes render (`/`, `/how-it-works`, `/start`, `/today`, `/today/check-in`, `/today/state`, `/repair`, `/guides`, `/knowledge`, `/progress`)
* no route references missing components
* nav and shell are functional on mobile and desktop
* shell obeys `100dvh`, safe-area rules, and tap sizing rules
* iconography, directional affordances, and media behaviour follow `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` 
* metadata, canonical, robots, sitemap, and JSON-LD behaviour follow `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` 

### Accepted variance note for Phase 1 closure

The full configured route tree in `src/config/routes.ts` remains the forward roadmap and implementation contract.

For Phase 1 closure specifically, the following families are deferred and are not closure blockers:

- **Phase 3 detail routes:** `/repair/[slug]`, `/guides/[slug]`, `/knowledge/[slug]`
- **Phase 4 commercial/public-readiness surfaces:** `/store`, `/pricing`, `/library`, `/safety`
- **Phase 4 or 5 auth/account/member settings:** `/login`, `/sign-up`, `/account`, `/settings`

### Peer-review question

Does the shell already feel like an app, or does it still feel like a blog with tabs bolted on?

---

## Phase 2 — Schema and data contracts

### Goal

Lock the domain model before feature work spreads.

### Scope note

This phase is **workstream scope**, not sequencing authority.

The presence of schemas, seeds, or Supabase migrations here does **not** mean builders may outrun the local-first execution order defined in `marriage_os_implementation_phases.md`.

Interpret this phase as:
- schema contracts
- resolver contracts
- typed seeds
- migration definitions and local scaffolding

Do **not** interpret it as permission to wire live Supabase persistence, live auth dependency, or content/operator phase eligibility ahead of the local proof-of-life loop.

For build sequencing and content-gate decisions, `marriage_os_implementation_phases.md` wins.

### Scope

* UI schemas
* domain schemas
* DB schema
* seed data
* resolver contracts

### Deliverables

* `schemas/ui.ts`
* `schemas/domain.ts`
* Supabase migrations for:

  * profiles
  * check-ins
  * saved items
  * products
  * purchases
  * entitlements
  * progress views
* typed seeds for states, repair modules, guides, knowledge, product catalog

### Verification

* schemas align with DB types
* seeds validate cleanly
* all page-data references resolve against domain types
* no ad hoc JSON shapes inside components

### Peer-review question

Can any builder still “just guess” the shape of a repair module, knowledge article, or product object?

---

## Phase 3 — State engine and onboarding loop

### Goal

Ship the core utility loop first.

### User flow

`/start` → `/today/check-in` → `/today/state` → `/today`

### Scope

* Start Here screen
* Today Check-In
* deterministic state classification
* State Result
* Today dashboard
* persistence of check-ins

### Hard rule

Do **not** use an LLM as the primary classifier in V1.

The state engine should be deterministic:

* input answers
* state mapping
* substate tagging
* first repair recommendation
* “make it worse” items
* quick script recommendation

This is the right call because the product promises fast, repeatable intervention, not mystical AI diagnosis.

### Deliverables

* `CheckInGrid`
* `StateSummaryCard`
* `NextBestMoveCard`
* `MakeItWorseCard`
* `QuickScriptCard`
* `features/check-in/state-engine.ts`

### Verification

* each valid input set yields one state
* substates map consistently
* Today first screenful shows:

  * current state
  * next best move
  * one prevention card 
* CTA copy matches the premium spec:

  * `Start the Solo Check-In`
  * `See the Current State`
  * `Open the First Repair Step` 

### Peer-review question

Does the system tell the user exactly what to do next, or does it merely describe their feelings back to them?

---

## Phase 4 — Repair Centre

### Goal

Build the actual product centre and monetisation engine.

### Scope

* Repair index
* state-based suggestions
* symptom-based browsing
* repair module template
* free first-step execution
* reset timelines
* related tools and guides

### Core module set

Implement these first:

* Quiet Drift
* Resentment Building
* Entrenched Resentment
* Pressure Loop
* One-Sided Initiation
* Touched Out / Postpartum
* Mental Load / Manager Mode
* Autonomy Deficit
* Desire Maintenance
* Keep Us Wanted
* External Pull / Affair Risk
* Stay & Rebuild

### Standard module anatomy

Every module must keep the same 7-part structure:

1. What’s Happening
2. What Makes It Worse
3. Do This First
4. Say This
5. Do This Tonight
6. 7-Day Reset
7. Escalate If… 

### Deliverables

* `RepairCategoryGrid`
* repair module pages
* `ChecklistCard`
* `ResetTimeline`
* linked product and guide cards
* sticky mobile action bar

### Verification

* every module has all seven sections
* every module has one immediate free action
* repair category labels use the ratified public copy:

  * `Attraction & Desire`
  * `Life Pressure`
  * `External Pressure` 
* Repair page follows the premium lane structure:

  * Suggested for your state
  * Browse by symptom
  * Resets and tools 

### Peer-review question

Is Repair genuinely the centre of the product, or is it still just another tab among equals?

---

## Phase 5 — Perspectives and Knowledge

### Goal

Add interpretation and deeper understanding without bloating the product.

### Perspectives scope

* Perspectives index
* His Perspective
* Her Perspective
* Read Both Perspectives
* bridge content near the top

### Knowledge scope

* Knowledge index
* topic browsing
* article detail
* practical end-branch into repair or templates

### Hard architectural rule

Implement the accepted knowledge-layer correction:

* `KnowledgeArticleCard` for `/knowledge` index, featured content, related content, search results
* `ArticleSection` for `/knowledge/[slug]` article bodies 

Do not ignore this. It is a real architecture fix, not decoration.

### Deliverables

* `GuideSectionCard`
* `KnowledgeArticleCard`
* `ArticleSection`
* resolver split:

  * `knowledgeArticles()`
  * `articleSections()`

### Verification

* knowledge detail pages render chunked article sections
* knowledge ends in practical CTA branches
* Perspectives never presents as “men vs women”
* reading width stays within the approved measure rules 

### Peer-review question

Do these sections support repair, or do they tempt the product into becoming a reading app?

---

## Phase 6 — Commerce and library

### Goal

Attach monetisation natively, without breaking trust.

### Scope

* store index
* product detail
* pricing
* checkout
* webhook
* entitlements
* owned library

### Product stance

Products must read as **tools**, not course ads:

* problem solved must be clear
* price must be visually quiet
* CTAs must name the asset or outcome
* store should feel like an extension of Repair, not a separate commerce site 

### Deliverables

* `ProductCard`
* `BundleCard`
* `TemplatePreviewCard`
* pricing page
* library page
* entitlements logic
* purchase flows

### Verification

* product ownership persists correctly
* owned tools appear in Library
* Library shows owned status, last opened, resume action 
* contextual monetisation points exist in:

  * repair footer
  * guides
  * knowledge articles
  * Today dashboard
  * library/account 

### Peer-review question

Does monetisation feel native to the workflow, or does it interrupt trust?

---

## Phase 7 — Progress and retention

### Goal

Make improvement visible and operational.

### Scope

* state trend
* repair completion
* bond metrics
* attraction/desire metrics
* recovery speed

### Deliverables

* progress dashboard
* trend cards
* metrics summaries
* recommendation prompts based on deterioration or improvement

### Verification

* progress is derived from real behaviour and events
* “Recovery speed” is implemented as a premium metric
* progress uses clear summaries rather than dashboard clutter 

### Peer-review question

Does Progress give the user useful momentum, or is it just scorekeeping theatre?

---

## Phase 8 — AI utilities

### Goal

Add bounded AI features after the deterministic product works.

### Safe initial AI features

* message rewriting
* conflict coach
* check-in summary
* template adaptation
* guided copy suggestions

### Unsafe first-pass AI uses

* primary state diagnosis
* unconstrained relationship advice generation
* freeform safety judgement
* unbounded module creation

### Deliverables

* AI route handlers
* prompt versioning
* response schemas
* failure fallbacks

### Verification

* every AI response validates against a schema
* prompts and responses are logged
* every AI tool degrades safely if the model fails

### Peer-review question

Is AI acting as a bounded accelerator, or is it quietly becoming the product’s truth engine?

---

## 6. Verification framework

Every phase should be checked through four gates.

### Gate 1 — Spec compliance

* matches canonical layer
* no drift against master spec
* no stale labels or CTA copy reintroduced

### Gate 2 — Technical correctness

* typecheck
* lint
* route/component mapping
* schema validation

### Gate 3 — UX compliance

* one dominant CTA
* scan-first layout
* no text walls on operational screens
* mobile-first shell behaviour
* tap target and layout compliance 

### Gate 4 — Product compliance

* tells user what to do next
* supports repair first
* preserves tone
* avoids coercive or preachy framing

---

## 7. Work allocation across models

A strong multi-model setup would look like this:

### Model A — Planner / integrator

Use for:

* ticket definition
* dependency sequencing
* patch scoping
* contradiction detection

### Model B — Builder

Use for:

* bounded implementation patch
* one feature area at a time
* tests included

### Model C — Verifier

Use for:

* unsupported assumption detection
* missing requirement detection
* quality rejection

### Human

Owns:

* acceptance
* taste judgement
* commercial judgement
* escalation decisions

That is the right orchestration model. The models are not the bottleneck; uncontrolled scaffolding is.

---

## 8. Deliverables expected at peer-review stage

By the end of peer review, the reviewers should be judging:

1. the canonical governance layer
2. the phase sequencing
3. the verification model
4. the bounded AI strategy
5. the risk controls against hallucination and mirage
6. the decision to keep the classifier deterministic in V1
7. the decision to treat Repair as the centre, not Knowledge

---

## 9. Main risks and controls

| Risk                  | What it looks like                                | Control                                        |
| --------------------- | ------------------------------------------------- | ---------------------------------------------- |
| Spec drift returns    | stale copy/routes/components reappear             | canonical layer + drift register               |
| AI overbuilds         | builder invents missing structures                | bounded tickets + verifier                     |
| Knowledge bloat       | product turns into a content library              | Repair-first routing + article action branches |
| UX regression         | blog-like pages, weak CTAs, cramped mobile        | theme/page-data compliance checks              |
| Commerce distrust     | aggressive upsells too early                      | contextual monetisation only                   |
| Architecture mismatch | list-card components forced into article-body use | accept and enforce `ArticleSection` split      |

---

## 10. Acceptance standard

The implementation plan passes peer review only if reviewers conclude that:

* the product can be built **incrementally**
* the source-of-truth problem is actually contained
* the AI usage is **bounded and verifiable**
* the build order reflects real dependency order
* the plan protects the product’s tone and structure
* the plan makes it hard for a builder to fake progress

---

## Final recommendation

The strongest version of this build is:

* **deterministic core**
* **repair-first product architecture**
* **bounded AI augmentation**
* **schema-led implementation**
* **strict source governance**
* **phase gates with independent review**

Anything looser than that will drift.




===================================================================

## Peer-review matrix

| Phase                                     | Scope                                                                                                  | Inputs                                                                                                                               | Deliverables                                                                                                                                                                                                    | Verification                                                                                                                                                                        | Reviewer questions                                                                                                                            | Go/No-go gate                                                                                                                                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0. Governance and source freeze**       | Lock the source hierarchy, resolve spec drift, and make the repo impossible to misread                 | `docs/MASTER_SPEC.md`, `docs/DRIFT_REGISTER.md`, `docs/README_ACTIVE_SET.md`, `docs/SOURCE_MANIFEST.md`, source notes on legacy docs | Canonical authority layer in place, active feeder set marked, archived PWA marked reference-only, ratified drift decisions logged                                                                               | Check that builders can identify canonical sources immediately; confirm no unresolved V1 drift remains; confirm archived docs cannot plausibly be mistaken for implementation truth | Is there any remaining file that could still override the canonical layer by accident? Are any open contradictions still unratified?          | **Go** only if canonical sources are unambiguous and all V1 drift decisions are logged and settled                                                                                                         |
| **1. Repo foundation**                    | Stand up repo skeleton, shell split, routes, theme, registry, and SEO metadata scaffolding            | Canonical `routes.ts`, `theme.ts`, `page-data.ts`, `seo.ts`, component registry guidance, repo structure guidance from code samples | `src/config/routes.ts`, `src/config/theme.ts`, `src/config/page-data.ts`, `src/config/seo.ts`, `src/config/component-registry.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`, route groups, `AppShell`, `MarketingShell`, `TopBar`, `BottomNav`, `SideNav`, `HeroBlock`, `Card` | Typecheck, lint, route render check, route-to-component map sanity check, shell responsiveness, safe-area and `100dvh` behaviour, robots/sitemap output sanity check, metadata assembly sanity check | Does the product already feel app-like rather than like a marketing site with tabs? Are route/component assumptions clean? Is the public/private search boundary already encoded in implementation files? | **Go** only if the Phase 1 required route baseline renders (`/`, `/how-it-works`, `/start`, `/today`, `/today/check-in`, `/today/state`, `/repair`, `/guides`, `/knowledge`, `/progress`), registry matches routes, shell/nav work cleanly on mobile and desktop, and technical SEO scaffolding reflects canonical indexability/schema policy |
| **2. Schema and data contracts**          | Lock UI, domain, DB, seeds, and resolver contracts before feature work spreads                         | Canonical schemas/config, code-sample domain models, DB schema guidance                                                              | `schemas/ui.ts`, `schemas/domain.ts`, Supabase migrations, typed seeds for states/modules/guides/knowledge/products, resolver interfaces                                                                        | Schema validation, DB-to-schema alignment, seed validation, no ad hoc payload shapes inside feature code                                                                            | Can any builder still “guess” a repair module, product, or knowledge article shape? Are enums aligned across UI, data, and DB?                | **Go** only if contracts are stable, seeds validate, and all core content/entity types are explicitly modelled                                                                                             |
| **3. State engine and onboarding loop**   | Build the core loop: start, check-in, classification, state result, Today dashboard                    | Canonical page-data, doctrine, state/substate model, check-in fields, UX copy rules                                                  | `/start`, `/today/check-in`, `/today/state`, `/today`, deterministic state engine, `CheckInGrid`, `StateSummaryCard`, `NextBestMoveCard`, `MakeItWorseCard`, `QuickScriptCard`, check-in persistence            | Fixture-based state mapping tests, CTA copy checks, first-screenful checks, persistence test, no-LLM dependency for primary classification                                          | Does the system tell the user what to do next, or does it just describe their emotional state? Is the classifier deterministic and auditable? | **Go** only if every valid input set produces one state, consistent substates, and one next action; Today must surface current state, next best move, and one prevention card immediately                  |
| **4. Repair Centre**                      | Build the product centre: symptom-led access, state-led recommendations, module execution, reset flows | Canonical doctrine, repair module architecture, premium UX labels, seed content for core modules                                     | Repair index, category browsing, suggested modules rail, repair module pages, `ChecklistCard`, `ResetTimeline`, sticky mobile action bar, linked guides/products                                                | Module completeness check, free-first-step check, label audit, mobile action test, content routing test                                                                             | Is Repair genuinely the centre of the product? Do modules feel practical and immediate, or theoretical and bloated?                           | **Go** only if each module has the 7-part anatomy and at least one immediate free action, and Repair uses ratified public labels such as `Attraction & Desire`, `Life Pressure`, and `External Pressure`   |
| **5. Perspectives and Knowledge**         | Add interpretation and deeper understanding without turning the product into a reading app             | Canonical page-data/theme, doctrine, revised UX spec, knowledge-layer addendum, guide/knowledge content                              | Perspectives index, His/Her/Read Both pages, Knowledge index, topic browsing, article detail, `GuideSectionCard`, `KnowledgeArticleCard`, `ArticleSection`, split resolvers                                     | Body-renderer check for article pages, action-branch check on knowledge articles, bridge-content check for Perspectives, reading-width and chunking checks                          | Do these sections support repair, or do they distract from it? Has the knowledge-layer architecture been fixed properly?                      | **Go** only if `/knowledge/[slug]` uses `ArticleSection`, every article ends in a practical branch, and Perspectives never reads like adversarial gender content                                           |
| **6. Commerce and Library**               | Attach monetisation natively to the workflow and make purchases usable                                 | Product catalog, pricing rules, entitlement model, canonical product/card behaviour, store and pricing page specs                    | Store index, product detail pages, pricing page, checkout, webhook, entitlements, Library, `ProductCard`, `BundleCard`, `TemplatePreviewCard`                                                                   | Entitlement tests, purchase flow tests, owned-item surfacing tests, product CTA audit, visual hierarchy review                                                                      | Does monetisation feel native to repair, or does it interrupt trust? Are products presented as tools rather than course ads?                  | **Go** only if ownership persists correctly, Library clearly shows owned/resume states, and upsells are contextual rather than intrusive                                                                   |
| **7. Progress and retention**             | Make improvement visible and operational, not theatrical                                               | Canonical progress page spec, metrics rules, event model from check-ins/modules/completions                                          | Progress dashboard, state trend, repair completion, bond metrics, attraction/desire metrics, recovery speed metric, recommendation prompts                                                                      | Event-to-metric integrity checks, summary clarity review, over-instrumentation check, recommendation relevance check                                                                | Does Progress create useful momentum, or just another dashboard? Are metrics tied to real events and next actions?                            | **Go** only if metrics derive from real behaviour, include `Recovery speed`, and support recommendations instead of vanity reporting                                                                       |
| **8. AI utilities**                       | Add bounded AI only after the deterministic core is working                                            | Canonical product constraints, AI route ideas from code samples, prompt/schema constraints, allowed use cases                        | Message rewriter, conflict coach, check-in summary, prompt versioning, response schemas, safe fallbacks                                                                                                         | Schema validation on responses, failure fallback tests, adversarial prompt review, logging/version checks                                                                           | Is AI acting as a bounded helper, or quietly becoming the truth engine? Are outputs constrained enough to audit?                              | **Go** only if AI is non-core, schema-bound, logged, and safely optional; no AI should be required for primary state diagnosis or core repair routing                                                      |
| **9. Integrated QA and launch readiness** | Prove the system works as one product rather than as isolated features                                 | Entire canonical layer, repo, seeds, tests, reviewer notes, drift register                                                           | End-to-end test pack, route coverage, acceptance checklist, launch-readiness report, unresolved-risk log                                                                                                        | E2E smoke tests, accessibility checks, mobile review, regression review against canonical layer, independent reviewer sign-off                                                      | Does the product still match its doctrine under real navigation? Has any stale naming, stale route, or stale component logic crept back in?   | **Go** only if end-to-end flows pass, canonical copy/labels remain intact, no unresolved high-severity drift exists, and independent review signs off                                                      |

## Cross-phase reviewer checks

Use these on every phase:

| Check                   | What to look for                                                               | Fail signal                                                                              |
| ----------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| **Spec compliance**     | Matches canonical layer, not legacy drift                                      | Old CTAs, old labels, dead routes like `/upgrade`, stale component assumptions           |
| **Technical integrity** | Types, schemas, routes, seeds, migrations all line up                          | Hidden JSON guessing, mismatched enums, dangling routes/components                       |
| **UX compliance**       | One dominant CTA, scan-first layout, readable surfaces, mobile-first behaviour | Text walls, vague buttons, cramped tap targets, shell behaving like a website not an app |
| **Product integrity**   | Repair-first, calm tone, practical next action, no coercive framing            | Knowledge bloat, preachy copy, moralising tone, AI replacing core logic                  |

## Hard acceptance rule

A phase is not accepted because the build “looks plausible.”
A phase is accepted only when:

* it matches the canonical layer,
* its outputs validate technically,
* its UX behaviour matches the ratified rules,
* and an independent reviewer cannot identify unsupported assumptions.

==========================================

## Builder handoff tracker

Use this as the working delivery board against the peer-review matrix.

| ID  | Phase                 | Workstream                  | Key outputs                                                             | Not started | In build | In review | Accepted | Rework | Notes / owner |
| --- | --------------------- | --------------------------- | ----------------------------------------------------------------------- | ----------- | -------- | --------- | -------- | ------ | ------------- |
| 0.1 | Governance            | Canonical layer present     | `MASTER_SPEC.md`, `DRIFT_REGISTER.md`, `theme.ts`, `page-data.ts`, `TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| 0.2 | Governance            | Active-set governance       | `README_ACTIVE_SET.md`, `SOURCE_MANIFEST.md`, source notes              | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 0.3 | Governance            | Legacy source control       | Archived PWA marked reference-only; feeder docs clearly limited         | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 1.1 | Repo foundation       | Route config                | `src/config/routes.ts` aligned to canonical layer                       | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 1.2 | Repo foundation       | Theme config                | `src/config/theme.ts` wired and usable by app shell                     | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 1.3 | Repo foundation       | Page config                 | `src/config/page-data.ts` aligned to current labels/copy                | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 1.4 | Repo foundation       | Component registry          | `component-registry.ts` matches routes and page config                  | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 1.5 | Repo foundation       | Shell components            | `AppShell`, `MarketingShell`, `TopBar`, `BottomNav`, `SideNav`          | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 1.6 | Repo foundation       | Base UI primitives          | `HeroBlock`, `Card`, input/search/filter primitives                     | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 1.7 | Repo foundation       | Route scaffolds             | Marketing/app route groups render without breakage                      | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 2.1 | Schemas/data          | UI schema contracts         | `schemas/ui.ts` complete and stable                                     | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 2.2 | Schemas/data          | Domain schema contracts     | `schemas/domain.ts` complete and stable                                 | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 2.3 | Schemas/data          | Database migrations         | Profiles, check-ins, saves, products, purchases, entitlements, progress | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 2.4 | Schemas/data          | Seed data                   | States, modules, guides, knowledge, products                            | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 2.5 | Schemas/data          | Resolver interfaces         | Feature/server contracts defined and typed                              | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 3.1 | State engine          | Start flow                  | `/start` uses canonical copy and CTA logic                              | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 3.2 | State engine          | Check-in screen             | `/today/check-in`, `CheckInGrid`, sticky action flow                    | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 3.3 | State engine          | Deterministic classifier    | `state-engine.ts` maps answers → state/substates/modules                | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 3.4 | State engine          | State result screen         | `/today/state`, `StateSummaryCard`, `NextBestMoveCard`                  | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 3.5 | State engine          | Today dashboard             | `/today`, `MakeItWorseCard`, `QuickScriptCard`, recheck flow            | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 3.6 | State engine          | Persistence/tests           | Check-ins stored, fixture tests pass                                    | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 4.1 | Repair Centre         | Repair index                | Search, filter chips, category grid, suggested rail                     | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 4.2 | Repair Centre         | Module template             | Standard 7-part module structure implemented                            | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 4.3 | Repair Centre         | Core module batch A         | Quiet Drift, Resentment Building, Pressure Loop                         | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 4.4 | Repair Centre         | Core module batch B         | One-Sided Initiation, Touched Out, Mental Load                          | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 4.5 | Repair Centre         | Core module batch C         | Autonomy Deficit, Desire Maintenance, Keep Us Wanted                    | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 4.6 | Repair Centre         | Core module batch D         | External Pull, Stay & Rebuild, Entrenched Resentment                    | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 4.7 | Repair Centre         | Reset/support components    | `ChecklistCard`, `ResetTimeline`, sticky mobile action bar              | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 4.8 | Repair Centre         | Linked assets               | Related guides/products wired into modules                              | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 5.1 | Perspectives          | Perspectives index          | Public label is `Perspectives`, internal key remains `guides`           | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 5.2 | Perspectives          | Guide detail pages          | His / Her / Read Both pages and bridge content                          | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 5.3 | Knowledge             | Knowledge index             | Topics, article cards, search, action-oriented browsing                 | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 5.4 | Knowledge             | Article body architecture   | `ArticleSection` implemented and used on `/knowledge/[slug]`            | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 5.5 | Knowledge             | Resolver split              | `knowledgeArticles()` vs `articleSections()`                            | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 5.6 | Knowledge             | Practical branching         | Every article ends with repair/template/save actions                    | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 6.1 | Commerce              | Store index                 | Category tabs, featured products, bundles, native feel                  | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 6.2 | Commerce              | Product detail              | Product clarity sections, previews, related tools                       | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 6.3 | Commerce              | Pricing page                | Free vs paid structure aligned to canonical copy                        | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 6.4 | Commerce              | Checkout/webhook            | Purchase flow, webhook handling                                         | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 6.5 | Commerce              | Entitlements                | Owned content access and unlock logic                                   | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 6.6 | Commerce              | Library                     | Owned items, saved items, resume state, last opened                     | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 7.1 | Progress              | Progress dashboard          | State trend, repair completion, bond metrics                            | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 7.2 | Progress              | Attraction/desire metrics   | Attraction & desire tracking surfaces                                   | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 7.3 | Progress              | Recovery speed              | Recovery speed metric and recommendation logic                          | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 8.1 | AI utilities          | Message rewriter            | Schema-bound rewrite endpoint                                           | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 8.2 | AI utilities          | Conflict coach              | Bounded coaching endpoint with safe fallback                            | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 8.3 | AI utilities          | Check-in summary            | Structured summary endpoint, non-core                                   | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 8.4 | AI utilities          | Prompt governance           | Prompt versions, logging, response schema checks                        | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 9.1 | QA / launch readiness | Unit/integration coverage   | State engine, routes, entitlements, module logic                        | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 9.2 | QA / launch readiness | E2E coverage                | Check-in, repair, purchase, library access                              | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 9.3 | QA / launch readiness | UX/accessibility review     | Mobile shell, tap targets, reading width, zoom, CTA hierarchy           | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 9.4 | QA / launch readiness | Canonical regression review | No stale copy, labels, routes, or component drift reintroduced          | ☐           | ☐        | ☐         | ☐        | ☐      |               |
| 9.5 | QA / launch readiness | Launch readiness report     | Risks, unresolved issues, acceptance summary                            | ☐           | ☐        | ☐         | ☐        | ☐      |               |

## Status rules

| Status          | Meaning                                           | Rule                                                              |
| --------------- | ------------------------------------------------- | ----------------------------------------------------------------- |
| **Not started** | No implementation work begun                      | Ticket may be clarified, but no code or content patch has started |
| **In build**    | Active implementation underway                    | Scope must be bounded; no silent expansion                        |
| **In review**   | Build complete, awaiting verification             | Must include validation evidence, not just “looks done”           |
| **Accepted**    | Meets canonical, technical, UX, and product gates | Can be depended on by downstream phases                           |
| **Rework**      | Review failed or drift detected                   | Must not be treated as partially accepted                         |

## Recommended ownership columns to add internally

If you want to run this as a real execution board, add these columns next to `Notes / owner`:

| Builder | Verifier | Due | Evidence link | Blockers |
| ------- | -------- | --- | ------------- | -------- |

## Hard operating rule

Nothing moves to **Accepted** unless all four are true:

* matches canonical layer
* passes technical validation
* passes UX review
* passes product review

If you want, I’ll convert this into a **copy-paste-ready CSV** or a **Notion-style board format**.
