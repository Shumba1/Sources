// src/config/theme.ts
// Canonical executable theme layer for Marriage OS V1.
// This file governs visual tokens, naming overlays, copy rules, and component constraints.

import type { NavItem } from './routes';

export type ThemeState =
  | 'stable'
  | 'drift'
  | 'resentment-building'
  | 'entrenched-resentment';

export type FontRole =
  | 'marketingHero'
  | 'appTitle'
  | 'body'
  | 'label'
  | 'button'
  | 'nav'
  | 'meta';

export type RepairCategorySlug =
  | 'stop-damage'
  | 'restore-bond'
  | 'repair-desire'
  | 'overload-life-phase'
  | 'threats-to-system'
  | 'stay-and-rebuild';

export const theme = {
  meta: {
    name: 'marriage-os-canonical-v1',
    mode: 'calm-premium',
    canonical: true,
    notes: [
      'Website with app shell',
      'Repair remains the centre of V1',
      'One dominant CTA per screenful',
      'Marketing uses serif selectively; app stays sans-first',
      'Marketing uses the warm accent layer as invitation; member/app remains blue-led and tool-first',
      'Repair is the intervention surface; Guides/Perspectives are the meaning layer; Knowledge is the reference layer',
      'Knowledge detail pages use ArticleSection, not card-only rendering',
    ],
  },

  fonts: {
    variables: {
      sans: '--font-ui-sans',
      serif: '--font-display-serif',
      mono: '--font-mono',
    },
    stacks: {
      sans: `var(--font-ui-sans), Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Arial, sans-serif`,
      serif: `var(--font-display-serif), Fraunces, "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, "Noto Serif", serif`,
      mono: `var(--font-mono), "JetBrains Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace`,
    },
    roleRules: {
      marketingHero: {
        font: 'serif',
        allowedOn: ['homepage hero', 'pricing hero', 'store hero', 'how-it-works hero'],
        bannedOn: ['today', 'repair', 'check-in', 'forms', 'buttons', 'state cards', 'progress'],
        maxLines: 2,
      },
      appTitle: {
        font: 'sans',
        allowedOn: ['member pages', 'repair modules', 'state pages', 'guides', 'knowledge'],
        bannedOn: [],
        maxLines: 2,
      },
      body: {
        font: 'sans',
        allowedOn: ['all body copy', 'knowledge articles', 'guides', 'pricing', 'product detail'],
        bannedOn: [],
      },
      label: {
        font: 'sans',
        allowedOn: ['chips', 'badges', 'labels'],
        bannedOn: [],
      },
      button: {
        font: 'sans',
        allowedOn: ['all controls'],
        bannedOn: ['none'],
      },
      nav: {
        font: 'sans',
        allowedOn: ['top bar', 'bottom nav', 'side nav', 'breadcrumbs'],
        bannedOn: [],
      },
      meta: {
        font: 'mono',
        allowedOn: ['timestamps', 'debug panels', 'payload disclosures'],
        bannedOn: ['hero', 'body', 'button'],
      },
    } satisfies Record<FontRole, Record<string, unknown>>,
  },

  color: {
    base: {
      obsidianNavy: '#0F1724',
      deepSlate: '#1A2433',
      softInk: '#243247',
      warmIvory: '#F7F4EE',
      stoneMist: '#E7E1D6',
      lineSoft: 'rgba(255,255,255,0.08)',
      lineLight: 'rgba(15,23,36,0.10)',
    },
    brand: {
      cognitiveBlue: '#4E7BFF',
      mutedBlue: '#8EABFF',
      paleBlueGlow: '#DCE7FF',
    },
    warmAccent: {
      ember: '#D04F1C',
      deepEmber: '#7B1D0A',
      emberGlow: 'rgba(244,120,42,0.16)',
      amberText: 'rgba(248,194,138,0.86)',
      amberTextSoft: 'rgba(248,194,138,0.84)',
      amberLine: 'rgba(255,172,117,0.35)',
      amberLineSoft: 'rgba(246,175,108,0.16)',
      emberCardLine: 'rgba(255,180,128,0.20)',
      emberBadgeBg: 'rgba(248,120,49,0.14)',
      emberBadgeLine: 'rgba(255,179,128,0.18)',
      emberIcon: 'rgba(255,191,112,0.94)',
      warmText: '#FBF4EA',
      warmTextStrong: '#FFF7EF',
      warmTextMuted: 'rgba(248,239,227,0.84)',
      warmTextSoft: 'rgba(250,239,224,0.94)',
      warmButtonText: '#FFF8F2',
    },
    state: {
      stable: '#6E9B7D',
      drift: '#C89A3D',
      resentmentBuilding: '#B8772F',
      entrenchedResentment: '#9B5C52',
    },
    text: {
      onDark: '#F7F4EE',
      onDarkMuted: 'rgba(247,244,238,0.76)',
      onLight: '#132032',
      onLightMuted: 'rgba(19,32,50,0.72)',
      inverse: '#FFFFFF',
    },
    surface: {
      appShell: '#0F1724',
      appElevated: '#1A2433',
      appSelected: '#243247',
      marketingShell: '#F7F4EE',
      cardLight: '#FFFFFF',
      cardDark: '#1A2433',
      cardMuted: 'rgba(255,255,255,0.04)',
    },
    badge: {
      stableBg: 'rgba(110,155,125,0.16)',
      driftBg: 'rgba(200,154,61,0.16)',
      resentmentBuildingBg: 'rgba(184,119,47,0.16)',
      entrenchedResentmentBg: 'rgba(155,92,82,0.16)',
    },
  },

  typography: {
    hero: {
      fontFamily: 'serif',
      mobileSize: 'clamp(1.875rem, 1.2rem + 2.2vw, 2.75rem)',
      desktopSize: 'clamp(2.25rem, 1.7rem + 1.8vw, 3.5rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      maxLines: 2,
    },
    appTitle: {
      fontFamily: 'sans',
      size: 'clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      maxLines: 2,
    },
    body: {
      fontFamily: 'sans',
      size: 'clamp(1.0625rem, 0.9rem + 0.4vw, 1.1875rem)',
      lineHeight: 1.55,
      letterSpacing: '-0.01em',
    },
    bodyLoose: {
      fontFamily: 'sans',
      size: 'clamp(1.0625rem, 0.9rem + 0.4vw, 1.1875rem)',
      lineHeight: 1.62,
      letterSpacing: '-0.01em',
    },
    subhead: {
      fontFamily: 'sans',
      size: 'clamp(1.25rem, 1.05rem + 0.8vw, 1.5rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
    },
    label: {
      fontFamily: 'sans',
      size: '0.875rem',
      lineHeight: 1.2,
      weight: 600,
    },
    button: {
      fontFamily: 'sans',
      size: '0.95rem',
      lineHeight: 1,
      weight: 600,
      letterSpacing: '-0.01em',
    },
    meta: {
      fontFamily: 'mono',
      size: '0.8125rem',
      lineHeight: 1.3,
    },
    measure: {
      readingTarget: '66ch',
      readingMax: '75ch',
    },
  },

  layout: {
    minViewportHeight: '100dvh',
    headerHeightMobile: '4rem',
    headerHeightDesktop: '4.5rem',
    bottomNavHeight: '4.75rem',
    contentMaxWidth: '80rem',
    readingTargetWidth: '66ch',
    readingMaxWidth: '75ch',
    shellPaddingInlineMobile: '1rem',
    shellPaddingInlineDesktop: '1.5rem',
    safeAreaTop: 'max(1rem, env(safe-area-inset-top))',
    safeAreaRight: 'max(1rem, env(safe-area-inset-right))',
    safeAreaBottom: 'max(1rem, env(safe-area-inset-bottom))',
    safeAreaLeft: 'max(1rem, env(safe-area-inset-left))',
  },

  interaction: {
    targetMin: 44,
    targetComfort: 48,
    targetGap: 8,
    transitionFast: '140ms ease',
    transitionStandard: '220ms ease',
  },

  copyRules: {
    heroMaxLines: 2,
    subtitleMaxSentences: 2,
    primaryCtasAboveFold: 1,
    secondaryCtasAboveFoldMax: 1,
    avoidGenericContinue: true,
    headlineToCtaMessageMatch: true,
    scanPagesUseCardsNotEssays: true,
  },

  labels: {
    nav: {
      today: 'Today',
      repair: 'Repair',
      guides: 'Perspectives',
      knowledge: 'Knowledge',
      progress: 'Progress',
    } satisfies Record<NavItem, string>,
    repairCategories: {
      'stop-damage': 'Stop Damage',
      'restore-bond': 'Restore Bond',
      'repair-desire': 'Attraction & Desire',
      'overload-life-phase': 'Life Pressure',
      'threats-to-system': 'External Pressure',
      'stay-and-rebuild': 'Stay & Rebuild',
    } satisfies Record<RepairCategorySlug, string>,
    stateHelpers: {
      stable: 'Things are broadly steady.',
      drift: 'Some distance is forming.',
      'resentment-building': 'Strain is becoming a pattern.',
      'entrenched-resentment': 'Distance is now deeply set.',
    } satisfies Record<ThemeState, string>,
  },

  componentRules: {
    appShell: {
      surface: 'dark',
      safeAreaAware: true,
      minHeight: '100dvh',
      fixedWhitePanelsForbidden: true,
    },
    marketingShell: {
      surface: 'light',
      stickyHeader: true,
    },
    topBar: {
      sticky: true,
      maxRightActions: 2,
    },
    bottomNav: {
      itemCount: 5,
      labelsAlwaysVisible: true,
      minTargetPx: 48,
    },
    heroBlock: {
      titleMaxLines: 2,
      subtitleMaxSentences: 2,
      primaryCtaRequired: true,
      allowIllustrationOnMemberPages: false,
    },
    card: {
      fixedHeightCopyForbidden: true,
      radius: '1.25rem',
      defaultPadding: '1.25rem',
    },
    stateBadge: {
      colorOnlyForbidden: true,
      helperLineRequired: true,
    },
    nextBestMoveCard: {
      oneActionOnly: true,
      timeEstimateRequired: true,
      toneGuidanceRequired: true,
      successConditionRequired: true,
    },
    makeItWorseCard: {
      defaultCollapsed: true,
      maxVisibleItemsBeforeExpand: 5,
      bulletsMustBeVerbLed: true,
    },
    quickScriptCard: {
      copyButtonRequired: true,
      whenToUseRequired: true,
      whenNotToUseRequired: true,
    },
    repairModuleHero: {
      bestUsedWhenRequired: true,
      notForRequired: true,
      resetLengthRequired: true,
    },
    productCard: {
      problemSolvedRequired: true,
      bulletsMax: 3,
      priceQuiet: true,
    },
  },
} as const;

export const cssVariables = {
  '--color-app-shell': theme.color.surface.appShell,
  '--color-app-elevated': theme.color.surface.appElevated,
  '--color-marketing-shell': theme.color.surface.marketingShell,
  '--color-primary': theme.color.brand.cognitiveBlue,
  '--color-primary-soft': theme.color.brand.paleBlueGlow,
  '--text-on-dark': theme.color.text.onDark,
  '--text-on-light': theme.color.text.onLight,
  '--fs-body': theme.typography.body.size,
  '--fs-subhead': theme.typography.subhead.size,
  '--fs-page-title': theme.typography.appTitle.size,
  '--fs-marketing-hero': theme.typography.hero.mobileSize,
  '--lh-body': String(theme.typography.body.lineHeight),
  '--lh-loose': String(theme.typography.bodyLoose.lineHeight),
  '--measure-read': theme.typography.measure.readingTarget,
  '--measure-max': theme.typography.measure.readingMax,
  '--hit-min': `${theme.interaction.targetMin}px`,
  '--hit-gap': `${theme.interaction.targetGap}px`,
} as const;
