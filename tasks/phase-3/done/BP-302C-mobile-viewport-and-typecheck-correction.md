# BP-302C — Mobile Viewport and Typecheck Correction

## Packet metadata

- **Packet ID:** BP-302C
- **Phase:** Phase 3
- **Status:** Review
- **Type:** Implementation / mobile viewport / build-type correction
- **Primary role:** Builder
- **Secondary roles:** Reviewer, Human Governor
- **Task state on completion by builder:** `tasks/phase-3/review/`

---

## Objective

Preserve the approved BP-302B visual baseline while correcting two defects identified in local verification:

1. the member/app shell is not contained cleanly on narrow mobile viewports, unlike the marketing shell;
2. production type-check fails because `.next/dev/types/validator.ts` is being included by `tsconfig.json` and carrying dev-generated route typing into the production check.

This is a corrective hardening packet. It must not change the approved BP-302B visual direction except where required for mobile containment.

---

## Scope

### In scope

- member/app shell mobile viewport containment
- narrow-screen header behaviour
- narrow-screen panel/CTA/list-row containment
- bottom-nav containment at very narrow widths
- governed mobile viewport tokens in `src/config/theme.ts`
- CSS variable consumption in `src/app/globals.css`
- `tsconfig.json` correction for production type checking
- documentation in `docs/DRIFT_REGISTER.md`, `docs/BRAND_AND_VISUAL_SYSTEM.md`, and `docs/README_ACTIVE_SET.md`

### Out of scope

- new routes
- route-family expansion
- visual redesign of the approved BP-302B baseline
- marketing-page redesign
- canonical content generation
- database/auth/commercial work

---

## Non-negotiable review criteria

A reviewer must reject BP-302C if any of the following are true:

1. **Member/app pages horizontally overflow on mobile.**  
   `/repair`, `/repair/[slug]`, `/guides`, `/knowledge`, `/progress`, `/today`, and `/today/state` must remain viewport-contained.

2. **The app header clips at narrow widths.**  
   The check-in control may iconise on small screens, but it must not force the header wider than the viewport.

3. **The bottom nav creates page-level horizontal overflow.**  
   It may internally scroll on very narrow screens, but the shell itself must remain contained.

4. **The fix bypasses tokens.**  
   Recurring mobile containment decisions must be governed in `src/config/theme.ts` and exposed through generated CSS variables.

5. **The build-type fix removes route-aware production typing.**  
   `.next/types/**/*.ts` must remain included. Only `.next/dev/types/**/*.ts` should be removed/excluded.

---

## Implementation notes

- Use the approved BP-302B visual design as the baseline.
- Add only containment and build-type hardening.
- Do not reopen `/guides/[slug]` or `/knowledge/[slug]`.
- Do not use this packet to change copy architecture or content hierarchy.

---

## Validation expected locally

Run:

```bash
pnpm lint
pnpm build
```

Then manually check narrow mobile widths for:

- `/`
- `/repair`
- `/repair/after-the-fight?entry=repair-index&state=heatedButReachable`
- `/guides`
- `/today/state?connection=neutral&tension=uneasy&capacity=strained`
