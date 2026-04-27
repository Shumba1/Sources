# BP-302B Builder Note — Visual Fluency Peer-Correction Pass

## Status

Builder implementation complete and moved to review.

Task packet created directly in review state:

`tasks/phase-3/review/BP-302B-visual-fluency-peer-correction-pass.md`

## Why this corrective pass exists

Peer review of the first BP-302 implementation was fair. The direction improved, but the execution still had defects visible in the live screenshots:

- numbered steps had poor scan separation
- alternative repair options collapsed into dense text
- headings and section anchors did not use enough controlled contrast
- some button-like affordances were underpowered or ambiguous
- sticky repair-module controls competed with the fixed bottom nav

BP-302B corrects those defects without widening the Phase 3 route scope.

## Files created

| File | Reason |
|---|---|
| `tasks/phase-3/review/BP-302B-visual-fluency-peer-correction-pass.md` | Peer-reviewable corrective task with explicit rejection tests. |
| `reviews/phase-3/open/BP-302B-visual-fluency-peer-correction-builder-note.md` | Records implementation, decisions, and validation limits. |

## Files modified

| File | Reason |
|---|---|
| `docs/BRAND_AND_VISUAL_SYSTEM.md` | Adds BP-302B scan-grammar correction rule. |
| `docs/DRIFT_REGISTER.md` | Adds D-041 for residual BP-302 scan-grammar defects. |
| `docs/README_ACTIVE_SET.md` | Records BP-302B interpretation and active authority. |
| `src/config/theme.ts` | Adds restrained app accent and scan-structure tokens. |
| `src/app/globals.css` | Adds governed CSS rules for step rows, option rows, definition cards, bullet lists, and bottom-nav spacing. |
| `src/app/(app)/repair/page.tsx` | Rebuilds the repair index alternatives as structured option rows and makes category browsing quieter. |
| `src/app/(app)/repair/[slug]/page.tsx` | Rebuilds use conditions, checklist rows, script support, and removes sticky-action crowding. |
| `src/app/(app)/today/page.tsx` | Applies scan-grammar support to script and watch-out sections. |
| `src/app/(app)/today/state/page.tsx` | Applies scan-grammar support to state explanation and script sections. |

## Implementation decisions

### 1. Warm accent is now allowed, but restrained

BP-302B introduces warm accent usage in the member shell only for:

- section headings
- icon cues
- definition labels
- step indexes
- subtle rules / borders

The primary app action remains blue-led and calm.

### 2. Repair options are now proper rows

`/repair` no longer uses a soft text row that can collapse title, summary, duration and action together. Alternative modules now use `pathway-option-row`, with separate meta, title, summary and action zones.

### 3. Numbered steps are real scan rows

`/repair/[slug]` now renders checklist steps with `pathway-numbered-steps`, explicit index bubbles, row backgrounds and spacing.

### 4. Use conditions are definition cards

`Best used when` and `Not for` now render as separated definition cards so the comparison can be read quickly.

### 5. Sticky module action removed

The previous repair-module sticky action was removed and replaced with a quiet Back to Repair action. This avoids competition with the fixed bottom nav.

## Deferrals preserved

BP-302B does **not** open or alter:

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

## Validation

Validation attempted:

```bash
corepack pnpm lint
corepack pnpm build
```

The local validation environment may still block on Corepack package-manager download if `pnpm@10.33.0` is not already cached. If network access fails, reviewers must run these commands in the local repo environment.

## Review instruction

Reviewers should test at minimum:

- `/repair`
- `/repair/after-the-fight?entry=state&state=heatedButReachable`
- `/today`
- `/today/state?connection=neutral&tension=uneasy&capacity=strained`

Reject if any active repair screen still requires dense reading to identify the next action.
