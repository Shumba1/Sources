// src/design/fonts.ts
// Font loader and fallback definitions aligned to canonical theme rules.

import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';

export const uiSans = Inter({
  subsets: ['latin'],
  variable: '--font-ui-sans',
  display: 'swap',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Noto Sans"',
    'Arial',
    'sans-serif',
  ],
});

export const displaySerif = Fraunces({
  subsets: ['latin'],
  variable: '--font-display-serif',
  display: 'swap',
  fallback: [
    '"Iowan Old Style"',
    '"Palatino Linotype"',
    '"Book Antiqua"',
    'Georgia',
    '"Noto Serif"',
    'serif',
  ],
});

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['"SFMono-Regular"', 'Consolas', '"Liberation Mono"', 'Menlo', 'monospace'],
});
