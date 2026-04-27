# BP-302B — Visual Fluency Peer-Correction Pass

## Packet metadata

- **Packet ID:** BP-302B
- **Phase:** Phase 3
- **Status:** Review
- **Type:** Implementation / visual fluency / scan-grammar correction
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Human Governor
- **Task state on completion by builder:** `tasks/phase-3/review/`

---

## Objective

Correct the residual scan-grammar defects identified in peer review of BP-302.

BP-302 improved broad hierarchy, but review screenshots showed that the execution still failed in practical reading conditions:

- numbered repair steps visually collapsed into run-on text
- alternative repair options collapsed duration, title, summary, and action into one paragraph-like row
- controlled contrast was underused, making headings and scan anchors too similar
- sticky/action controls and the bottom nav competed for attention
- Repair screens still required too much close reading before the next action was obvious

BP-302B exists to make the live Repair proof path easier to scan under stress.

This is **not** a new feature packet, **not** a route-expansion packet, and **not** a content-generation packet.

---

## Scope

### In scope

- `/repair`
- `/repair/[slug]`
- `/today`
- `/today/state`
- Repair-specific scan grammar
- restrained warm accent usage inside the member shell
- governed token additions in `src/config/theme.ts`
- CSS variable exposure through `src/config/theme-css.ts`
- app CSS changes in `src/app/globals.css`
- documentation of the corrective rule in:
  - `docs/BRAND_AND_VISUAL_SYSTEM.md`
  - `docs/DRIFT_REGISTER.md`
  - `docs/README_ACTIVE_SET.md`

### Out of scope

- `/guides/[slug]`
- `/knowledge/[slug]`
- `/store`
- `/pricing`
- `/library`
- `/safety`
- `/login`
- `/sign-up`
- `/account`
- `/settings`
- database work
- authentication
- AI helper features
- canonical content generation beyond local fixture copy already present

---

## Non-negotiable review criteria

A reviewer must reject BP-302B if any of the following are true:

1. **Numbered repair steps render as run-on text.**  
   Each step must have a visible index, spacing, and its own row.

2. **Alternative repair options collapse into paragraph-like rows.**  
   Each option must separate:
   - duration
   - title
   - summary
   - action

3. **Use-condition comparisons are hard to scan.**  
   `Best used when` and `Not for` must render as definition-style cards or equivalent structured groupings.

4. **Warm accent is used as a decorative flood.**  
   The warm accent may guide headings, icons, rules, and scan anchors. It must not replace the calm blue-led primary app action layer.

5. **A fake CTA appears clickable but does nothing.**  
   Any button-like affordance must either navigate, scroll, submit, or be visually demoted.

6. **Sticky controls crowd the bottom navigation.**  
   Repair module actions must not compete with the fixed bottom nav.

7. **New colours are hard-coded outside the governed token layer.**  
   Recurring visual values must route through `theme.ts` and exposed CSS variables.

---

## Acceptance test

From a cold glance at `/repair`, a reviewer should be able to identify:

1. the recommended repair move
2. why it was selected
3. the single primary action
4. where alternatives live, without mistaking them for equal-weight recommendations

From a cold glance at `/repair/[slug]`, a reviewer should be able to identify:

1. the first action
2. when to use it
3. when not to use it
4. the ordered checklist
5. the script and timing support as secondary aids

If the reviewer needs to read a dense block to find the next move, BP-302B fails.
