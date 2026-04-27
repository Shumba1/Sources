# BP-302 — Visual Fluency and Cognitive Direction Pass

## Packet metadata
- **Packet ID:** BP-302
- **Phase:** Phase 3
- **Status:** Review
- **Type:** UX hierarchy / visual-system hardening / member-shell cognitive-load reduction
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Content / Structure Operator, Human Governor
- **Task state on completion by builder:** `tasks/phase-3/review/`

---

## Objective

Reduce visual clutter and cognitive load across the live marketing and member-shell proof surfaces before Phase 3 content volume increases.

BP-302 is not a route-expansion packet. It is a **visual fluency** packet. The goal is to make every affected screen answer, quickly and visibly:

1. **What is this page asking me to do?**
2. **What is the one primary next action?**
3. **What is supporting context rather than another competing action?**
4. **Where do I go from here?**

The pass must preserve the existing brand direction while tightening the implementation into a calmer, more directive, lower-load product experience.

---

## Why this packet exists now

BP-301 made the Repair Centre structurally real and opened `/repair/[slug]`. Visual review of the live marketing homepage, `/repair`, and `/today/state` showed that the screens are structurally competent but still too visually democratic:

- too many bordered containers at equal weight;
- too many card-within-card patterns;
- underpowered primary CTAs;
- unclear distinction between direction, explanation, secondary options, and navigation;
- a bottom nav that is useful but visually too dominant;
- member-shell surfaces that risk feeling like a dashboard rather than a guided repair instrument.

This matters before heavier Repair, Guides/Perspectives, Knowledge, and product content is loaded. More content will amplify weak hierarchy.

---

## Required reading order

Read in this order before reviewing or extending this packet:

1. `AGENTS.md`
2. `README.md`
3. `docs/README_ACTIVE_SET.md`
4. `docs/DRIFT_REGISTER.md`
5. `docs/MASTER_SPEC.md`
6. `docs/marriage_os_implementation_phases.md`
7. `docs/DELIVERY_ARCHITECTURE.md`
8. `docs/SYSTEM_DECAY_REPAIR_MODEL.md`
9. `docs/Voice and Tone Bible.md`
10. `docs/GRAPHICS_AND_MEDIA_SYSTEM.md`
11. `docs/BRAND_AND_VISUAL_SYSTEM.md`
12. `docs/TECHNICAL_SEO_AND_PAGE_SCHEMA_SYSTEM.md` only if public-route metadata or sitemap policy changes
13. `tasks/phase-3/review/BP-301-phase-3-repair-centre-foundation.md`
14. `reviews/phase-3/open/BP-301-phase-3-repair-centre-foundation-builder-note.md`
15. current live implementation:
    - `src/config/theme.ts`
    - `src/config/theme-css.ts`
    - `src/app/globals.css`
    - `src/app/(marketing)/page.tsx`
    - `src/app/(app)/today/page.tsx`
    - `src/app/(app)/today/state/page.tsx`
    - `src/app/(app)/repair/page.tsx`
    - `src/app/(app)/repair/[slug]/page.tsx`
    - `src/components/shell/**`

If authority conflicts appear, record them in `docs/DRIFT_REGISTER.md` before broadening scope.

---

## Packet classification

- **Type:** UX hierarchy / visual fluency hardening
- **Object type:** marketing homepage surface, member-shell state/repair surfaces, repair-module surface, shell/navigation primitives
- **Destination family:** marketing + member app proof path
- **Target surfaces:** `/`, `/today`, `/today/state`, `/repair`, `/repair/[slug]`, app bottom nav
- **Brand / visual posture:** calm premium; one dominant next action; member-shell instrument mode; blue-led app surfaces; warm marketing accent restrained to public persuasion
- **Renderer / component path:** existing App Router pages and CSS primitives only
- **Moment of use:** low-patience, emotionally loaded user who needs direction, not a dashboard
- **Phase-eligible now:** yes
- **Sequencing authority:** `docs/marriage_os_implementation_phases.md`

---

## Scope contract

### BP-302 must do

1. create an explicit peer-reviewable visual-fluency task and acceptance criteria;
2. record the accepted visual-fluency decision in the drift register;
3. update the Brand and Visual System so the rule is canonical, not just implicit;
4. add governed theme tokens for visual hierarchy and lower-load component roles;
5. reduce equal-weight cards and nested containers on `/repair`;
6. make `/today/state` move directly into the recommended repair step, not backwards to Today;
7. make primary CTAs visually and verbally stronger than secondary links;
8. reduce bottom-nav visual dominance without removing it;
9. calm the marketing homepage so the warm accent does not compete across multiple equal cards;
10. preserve BP-301 route boundaries and avoid opening deferred route families.

### BP-302 must not do

- add new route families;
- open `/guides/[slug]` or `/knowledge/[slug]`;
- add commerce/auth/account surfaces;
- introduce backend persistence;
- introduce runtime AI content;
- rewrite the product doctrine;
- create a generic component-library expansion detached from the current proof path;
- use warm ember/rust as the default member-shell action colour.

---

## Required implementation standards

### 1. One-screen hierarchy rule

Every affected app screen must visibly resolve to:

1. one dominant next action;
2. one supporting explanation layer;
3. optional secondary choices;
4. tertiary exploration that visually recedes.

No Repair or State screen should present several card groups as if they are all equally important.

### 2. CTA direction rule

CTA language must describe the user’s next move.

Bad examples:
- `Open Today` after the user has already completed a state read;
- `Open step` where the actual next move is the product’s centrepiece.

Acceptable examples:
- `Start repair step`;
- `Start 10-minute damage stop`;
- `Run the first step`.

### 3. Container restraint rule

Avoid card-inside-card patterns unless the nested element is functionally distinct and visually quiet.

Secondary information should use quieter panels, disclosure blocks, soft rows, or inline notes rather than another full card treatment.

### 4. Token conformance rule

New recurring style decisions must route through `src/config/theme.ts` and `src/config/theme-css.ts`. Do not add recurring hard-coded colour/gradient/shadow values to `globals.css`.

### 5. Marketing/member distinction rule

- Marketing may use warm accent to invite and persuade.
- Member app surfaces must remain dark, sparse, blue-led, practical, and tool-first.
- The warm accent must not become the member-shell primary action language.

---

## Acceptance criteria for peer review

A reviewer should reject BP-302 if any of the following are true:

1. `/today/state` still points its primary CTA back to `/today` rather than into the recommended repair step.
2. `/repair` still presents the recommended module, backup modules, categories, and notes at roughly equal visual weight.
3. The primary app CTA still looks like a quiet text link rather than the central action.
4. New recurring CSS values are hard-coded directly in `globals.css` instead of being exposed through `theme.ts` / `theme-css.ts`.
5. The bottom nav still competes visually with the primary action area.
6. The marketing homepage still uses three equally loud warm accent cards above the fold.
7. BP-302 opens deferred route families or changes the canonical phase deferral boundary.
8. The task, builder note, or drift register fails to record the decision and review basis.

A reviewer may accept BP-302 if:

- the affected screens feel calmer and more directive;
- the primary next action is unambiguous;
- secondary content visibly recedes;
- navigation remains available but not dominant;
- visual decisions are governed by tokens;
- phase deferrals remain intact.

---

## Completion evidence required

Builder must record:

- files changed;
- deferrals preserved;
- visual-fluency decisions made;
- validation commands attempted;
- any commands that could not run and why.
