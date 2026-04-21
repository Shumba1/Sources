// src/design/fonts.ts
// Canonical font-token names for the local/self-hosted font stack.
// Runtime loading now happens in src/app/layout.tsx via Fontsource packages
// so production builds do not depend on next/font/google fetches.

export const fontVariableNames = {
  uiSans: '--font-ui-sans',
  displaySerif: '--font-display-serif',
  mono: '--font-mono',
} as const;

export const fontFamilyNames = {
  uiSans: 'Inter Variable',
  displaySerif: 'Fraunces Variable',
  mono: 'JetBrains Mono Variable',
} as const;
