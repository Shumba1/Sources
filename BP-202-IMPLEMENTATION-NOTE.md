# BP-202 implementation note

This archive updates the app to use locally installed Fontsource packages instead of `next/font/google` for Fraunces, Inter, and JetBrains Mono.

## Important

This environment could not regenerate `pnpm-lock.yaml` because `pnpm` and npm network access are unavailable here.

If you already ran:

```bash
pnpm add @fontsource-variable/inter @fontsource-variable/fraunces @fontsource-variable/jetbrains-mono
```

then keep your locally updated `pnpm-lock.yaml` when applying this patch archive.

## Code changes in this archive

- `package.json`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/design/fonts.ts`
