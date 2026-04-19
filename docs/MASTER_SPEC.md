# MASTER_SPEC.md

**Status:** Canonical source of truth for product doctrine and spec-governance  
**Applies to:** V1 implementation of the Marriage Stabilization & Strengthening System  
**Last ratified:** 2026-04-01  
**Authority level:** Highest human-readable authority. When this document conflicts with executable config, accepted drift decisions in this file and `docs/DRIFT_REGISTER.md` determine the winner.

---

## 1. Product identity

### 1.1 Product name
**Marriage Stabilization & Strengthening System**

### 1.2 Product type
A **website with an app shell**, not a native app.

### 1.3 Core mission
Help married couples protect the bond that keeps the family stable by detecting drift early, interrupting escalation fast, restoring connection practically, and building habits that keep mutual desire, respect, and teamwork alive most of the year.

### 1.4 Plain-English promise
We help couples stop accidentally destroying the bond that supports the family.

### 1.5 Governing belief
Marriage drifts toward entropy unless it is intentionally reinforced.

---

## 2. Product doctrine

### 2.1 The product is not
- generic relationship advice
- therapy homework
- ideology delivery
- sex tracking
- coercion logic
- grievance content
- surveillance software

### 2.2 The product is
- a mobile-first micro-intervention system
- built for moments of friction, not long calm-study sessions
- structured around fast diagnosis and practical next steps
- intended for couples with **remaining goodwill**
- family-conscious, without romanticising cold martyrdom or fake staying

### 2.3 Safety boundary
This system is for repair, not control.

It is **not for**:
- active abuse
- coercion
- secret surveillance
- active affairs as a lifestyle
- relationships with no goodwill left

### 2.4 Family doctrine
Preserve the family where repair is still possible. Do not romanticise passive resentment, cold-war coexistence, or fake staying.

### 2.5 Human realism clause
The product must account for:
- novelty hunger
- external validation risk
- affair vulnerability
- comparison dynamics
- complacency penalties

This must be translated into product language, not internet ideology.

---

## 3. Audience

### 3.1 Core audience
- married couples
- long-term couples
- parents
- libido-mismatched couples
- couples who still respect each other but feel flat

### 3.2 Excluded audience
- abusive relationships
- relationships with no goodwill left
- users seeking coercive leverage over a partner

---

## 4. V1 product logic

### 4.1 Primary loop
**Diagnose fast → classify state → stop damage → run the right repair protocol → track whether the bond is improving**

### 4.2 Three pillars
1. Prevent escalation  
2. Restore connection  
3. Build long-term resilience

### 4.3 Architecture truth
Crisis beats curriculum. The product must answer:
- what state are we in?
- what do I do now?
- what makes this worse?
- what is the next repair step?

### 4.4 Product centre
**Repair** is the centre of V1.

Knowledge is a repository. It is not the centre of the product.

---

## 5. Desire and parallel-track doctrine

### 5.1 Desire doctrine
The system must explicitly assume:
- mutual desire does not self-maintain
- attraction is easier to lose than to rebuild
- familiarity without intentional repair erodes erotic charge
- a spouse often has to work harder than a novel outsider because marriage carries history, logistics, and memory

### 5.2 Men and women doctrine
Men and women often experience the same decay through different immediate pathways. The product must respect those parallel truths and reunite them at the system level.

### 5.3 Guide doctrine
Internal model key remains `guides`.  
User-facing label becomes **Perspectives**.

The three ratified surfaces are:
- His Perspective
- Her Perspective
- Read Both Perspectives

These are parallel interpretation layers, not adversarial camps.

---

## 6. Canonical source hierarchy

When documents disagree, use this order:

1. Accepted addenda and ratified drift fixes  
2. Executable config (`src/config/routes.ts`, `src/config/page-data.ts`, `src/config/theme.ts`, `src/schemas/*`)  
3. This file (`docs/MASTER_SPEC.md`)  
4. Binding support-control docs within their allowed scope (`docs/Voice and Tone Bible.md`, `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`, `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md`)  
5. Revised premium UX narrative docs  
6. Older PWA and architecture prose  
7. Everything else = reference only, not implementation authority

---

## 7. Canonical implementation files

The builder models are allowed to treat only the following as implementation truth:

### 7.1 Governance and support controls
- `docs/MASTER_SPEC.md`
- `docs/DRIFT_REGISTER.md`
- `docs/Voice and Tone Bible.md` *(binding writing-arbitration file within its allowed scope)*
- `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` *(binding graphics/media/iconography control file within its allowed scope)*
- `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` *(binding technical SEO, indexability, sitemap, robots, canonical, and page-schema control file within its allowed scope)*

### 7.2 Executable config
- `src/config/routes.ts`
- `src/config/theme.ts`
- `src/config/page-data.ts`
- `src/config/seo.ts`
- `src/schemas/domain.ts`
- `src/schemas/ui.ts`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

### 7.3 Editorial source of truth
- `content/repair/*`
- `content/guides/*`
- `content/knowledge/*`
- `content/products/*`

No builder should implement from older prose when these files exist.

---

## 8. Ratified drift decisions

### 8.1 Repair remains the centre of V1
Accepted.

### 8.2 Guides vs Perspectives
- internal key: `guides`
- route id: `guides`
- UI label: `Perspectives`

### 8.3 Repair category labels
Keep the underlying infrastructure slugs stable. Update display labels only.

| Internal slug | Canonical display label |
|---|---|
| `stop-damage` | `Stop Damage` |
| `restore-bond` | `Restore Bond` |
| `repair-desire` | `Attraction & Desire` |
| `overload-life-phase` | `Life Pressure` |
| `threats-to-system` | `External Pressure` |
| `stay-and-rebuild` | `Stay & Rebuild` |

### 8.4 CTA copy revisions
The revised premium copy wins over older PWA copy.

Canonical examples:
- `Check Our State` → `Check the Relationship State`
- `Continue Solo` → `Start the Solo Check-In`
- `How are things today?` → `How does the relationship feel today?`
- `Do This First` → `Open the First Repair Step`
- `Today’s next move` → `Today’s next best move`

### 8.5 Knowledge detail architecture
Accepted addendum.

- `KnowledgeArticleCard` is for list/index/related-content use
- `ArticleSection` is for `/knowledge/[slug]` body rendering

### 8.6 Upgrade route drift
`/upgrade` is **not** part of canonical V1.

Use:
- `/pricing` for plan and access explanation
- `/store` and product detail routes for tool/program purchase

### 8.7 Safety screen
Canonical safety cards are:
- Not for abuse
- Not for coercion
- Not for surveillance
- Family preservation is not martyrdom

### 8.8 Graphics and media system
Visual asset, iconography, directional-affordance, imagery, motion, and media-boundary decisions are governed by `docs/GRAPHICS_AND_MEDIA_SYSTEM.md` within its allowed scope.

Technical SEO, indexability, metadata, canonical URL, robots, sitemap, and page-schema decisions are governed by `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` within its allowed scope.

---

## 9. V1 route policy

### 9.1 Public journey
`/` → `/how-it-works` → `/start`

### 9.2 Core onboarding journey
`/start` → `/today/check-in` → `/today/state` → `/today`

### 9.3 Returning-user journey
`/today` → `/repair/[slug]`

### 9.4 Education journey
`/today` → `/guides/[slug]` or `/knowledge/[slug]` → linked repair

### 9.5 Commerce journey
`/repair/[slug]` → `/store/[category]/[slug]` or `/pricing`

---

## 10. Canonical UX rules

Every screen must obey:
- one dominant primary CTA above the fold
- one dominant idea per screen
- hero text in 1–2 lines where practical
- cards, not essays, on scan-first pages
- no moralising
- no fake urgency
- no red-pill caricature
- always include what makes this worse where relevant
- always provide a next move where relevant

### 10.1 Member-shell rules
- app shell is dark, calm, and premium
- serif is never used on operational/control surfaces
- touch targets should meet 44–48px comfort
- reading measure targets 66ch, max 75ch
- body line-height targets 1.55+
- app shell should use safe-area aware `100dvh`

---

## 11. Repair Centre policy

### 11.1 Repair module skeleton
Every repair module should use the same structure:
1. What’s Happening
2. What Makes It Worse
3. Do This First
4. Say This
5. Do This Tonight
6. 7-Day Reset
7. Escalate If…

### 11.2 Canonical V1 modules
1. Quiet Drift  
2. Resentment Building  
3. Entrenched Resentment  
4. Pressure Loop  
5. One-Sided Initiation  
6. Touched Out / Postpartum  
7. Mental Load / Manager Mode  
8. Autonomy Deficit  
9. Desire Maintenance  
10. Keep Us Wanted  
11. External Pull / Affair Risk  
12. Stay & Rebuild

---

## 12. Monetisation policy

Monetisation must be contextual and native, not bolted on.

### 12.1 Free layer
- state check-in
- state result
- first repair action
- one version of major modules
- basic His/Her Perspective content
- selected scripts and quick tools

### 12.2 Paid layer
- 7-day and 30-day resets
- deeper protocol stacks
- planners, workbooks, and script packs
- AI rewrite / conflict coach
- extended progress history
- library and entitlement-based access

### 12.3 V1 product inventory anchor
- Hard Conversation Scripts Pack
- Weekly State of the Union Template
- Resentment Audit Workbook
- Desire Maintenance Monthly Planner
- 14-Day Marriage Reset
- 30-Day Bond Rebuild
- Desire Maintenance Lab

---

## 13. Builder instruction

No builder model should be prompted with “use all the docs and build the app.”

Canonical builder instruction:

> Use only `docs/MASTER_SPEC.md`, `docs/DRIFT_REGISTER.md`, `src/config/routes.ts`, `src/config/theme.ts`, `src/config/page-data.ts`, `src/schemas/domain.ts`, `src/schemas/ui.ts`, and `content/**`. Ignore superseded narrative documents unless specifically asked to inspect them for unresolved drift.

---

## 14. Change control

Any future spec change must update, in this order:
1. `docs/DRIFT_REGISTER.md`
2. this file if doctrine or authority changes
3. the relevant executable config file
4. any affected content or components

If a new document disagrees with this file and does not appear in the drift register, it is **not canonical**.
