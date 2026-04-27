# BP-302C Builder Note — Mobile Viewport and Typecheck Correction

## Status

Builder implementation complete and moved to review.

Task packet created directly in review state:

`tasks/phase-3/review/BP-302C-mobile-viewport-and-typecheck-correction.md`

## Why this corrective pass exists

The approved BP-302B visual baseline is retained. Local screenshots showed one remaining implementation defect: the marketing shell contained correctly on narrow mobile screens, but member/app pages clipped horizontally and the top-right check-in control pushed the app header out of the viewport.

Local build also reported a production type-check failure from `.next/dev/types/validator.ts`:

```text
Type '"/guides"' does not satisfy the constraint 'never'.
```

That points to dev-generated route typing being included in the production TypeScript program.

## Files created

| File | Reason |
|---|---|
| `tasks/phase-3/review/BP-302C-mobile-viewport-and-typecheck-correction.md` | Peer-reviewable corrective task with explicit rejection tests. |
| `reviews/phase-3/open/BP-302C-mobile-viewport-and-typecheck-builder-note.md` | Records implementation decisions and validation limits. |

## Files modified

| File | Reason |
|---|---|
| `docs/BRAND_AND_VISUAL_SYSTEM.md` | Adds mobile viewport containment rule for member/app pages. |
| `docs/DRIFT_REGISTER.md` | Adds D-042 for app mobile containment and dev-type contamination. |
| `docs/README_ACTIVE_SET.md` | Records BP-302C as a narrow corrective authority. |
| `src/config/theme.ts` | Adds governed `mobileViewport` tokens and CSS variables. |
| `src/app/globals.css` | Adds app-shell viewport containment, narrow header behaviour, panel containment, and bottom-nav containment. |
| `src/components/shell/app-shell.tsx` | Adds an accessible label before hiding check-in text at narrow widths. |
| `tsconfig.json` | Removes `.next/dev/types/**/*.ts` from production include and excludes `.next/dev`; keeps `.next/types/**/*.ts`. |

## Implementation decisions

### 1. BP-302B remains the baseline

No redesign was made. This pass only hardens mobile containment and build type hygiene.

### 2. The app check-in control iconises on small screens

At narrow mobile widths, the visible text is visually hidden but preserved by `aria-label="Run check-in"` on the link.

### 3. Production route-aware types remain enabled

`tsconfig.json` keeps `.next/types/**/*.ts`. Only `.next/dev/types/**/*.ts` was removed because dev-generated validator output should not contaminate the production type-check.

## Validation

This environment still cannot run `pnpm lint` or `pnpm build` because package installation/build execution requires dependencies not available here. Run locally:

```bash
pnpm lint
pnpm build
```

Then manually test the mobile viewport acceptance URLs in the task packet.
