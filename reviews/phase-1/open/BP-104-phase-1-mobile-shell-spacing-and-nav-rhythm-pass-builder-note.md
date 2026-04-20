# BP-104 builder note — Phase 1 mobile shell spacing and nav rhythm pass

## Files modified
- `src/app/globals.css`
- `src/components/shell/shell-primitives.tsx`
- `src/components/shell/app-shell.tsx`
- `tasks/phase-1/review/BP-104-phase-1-mobile-shell-spacing-and-nav-rhythm-pass.md`

## Changed-file list with reason
- `src/app/globals.css` — tightened mobile safe-area baselines, introduced shell rhythm tokens, stabilized top-bar and bottom-nav heights, improved nav label/tap spacing, and added a dedicated main-content modifier for app shell bottom-nav clearance.
- `src/components/shell/shell-primitives.tsx` — added `withBottomNav` option on `ShellMain` so app routes reserve bottom-nav space without forcing the same spacing into marketing routes.
- `src/components/shell/app-shell.tsx` — enabled `withBottomNav` on member shell content to keep scaffold content clear of sticky bottom nav.
- `tasks/phase-1/review/BP-104-phase-1-mobile-shell-spacing-and-nav-rhythm-pass.md` — moved packet to review state and updated status metadata to `Review`.

## Builder handoff package
- **Changed-file list:** included above.
- **Concise change summary:** Mobile shell spacing rhythm is now tokenized and more consistent, with dedicated space reservation for sticky nav and improved tap-target readability on narrower widths.
- **Validation results:**
  - `pnpm lint` passed.
  - `pnpm build` failed due environment network restriction while fetching Google Fonts (`Inter`, `Fraunces`, `JetBrains Mono`) during Next.js build.
- **Risks / side effects:**
  - Slightly denser top-level shell spacing on larger viewports due unified rhythm token.
  - No route structure or feature-scope changes introduced.
- **Review notes:**
  - Focused on CSS + shell primitive refinement only, preserving BP-101 shell split and route ownership.
- **Recommended next state:** `review`.

## Follow-up refinement (mobile nav label collision)
- Added a narrow-viewport media query (`max-width: 420px`) to switch the bottom nav from fixed 5-column grid to horizontal flex with per-tab minimum width.
- This prevents `Perspectives` and `Knowledge` labels from colliding on narrow phones while preserving existing desktop rhythm.
