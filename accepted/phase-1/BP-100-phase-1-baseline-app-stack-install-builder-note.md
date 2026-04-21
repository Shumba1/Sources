# BP-100 — Phase 1 baseline app stack install builder note

## Summary
Baseline app-stack foundation files were added around the existing `src/config/**`, `src/lib/**`, `src/schemas/**`, and `src/components/**` architecture-intent files.

## Files created
- `package.json`
- `.gitignore`
- `next.config.ts`
- `tsconfig.json`
- `next-env.d.ts`
- `postcss.config.mjs`
- `eslint.config.mjs`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `public/icon.svg`
- `public/manifest.webmanifest`
- `tasks/phase-1/open/BP-100-phase-1-baseline-app-stack-install.md`
- `tasks/phase-1/open/BP-101-phase-1-repo-foundation-and-shell-split.md`
- `tasks/phase-1/open/BP-102-phase-1-tech-stack-verification.md`
- `reviews/phase-1/open/BP-102-phase-1-tech-stack-verification-report.md`

## Files preserved and integrated
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/config/routes.ts`
- `src/config/page-data.ts`
- `src/config/theme.ts`
- `src/config/seo.ts`
- `src/config/component-registry.ts`
- `src/config/runtime-component-registry.tsx`
- `src/schemas/ui.ts`
- `src/schemas/domain.ts`
- `src/lib/render-page-sections.tsx`
- `src/lib/section-resolvers.ts`
- `src/components/domain/knowledge/article-section.tsx`

## Package-manager choice
- `pnpm@10.33.0`

## Dependencies declared
Runtime:
- `next`
- `react`
- `react-dom`
- `zod`

Dev:
- `typescript`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `eslint`
- `eslint-config-next`
- `tailwindcss`
- `@tailwindcss/postcss`
- `postcss`

## Local commands to run next
```bash
corepack enable
corepack use pnpm@10.33.0
pnpm install
pnpm lint
pnpm build
```

## Validation status
- Manifest/config/source wiring: completed in this snapshot.
- Lockfile generation: pending local `pnpm install`.
- Runtime validation: pending local `pnpm lint` and `pnpm build`.

## Unresolved issues
- No lockfile is included yet because package installation must be run in the live local repo.
- BP-101 should remain paused until the install, lint, and build checks pass locally.
