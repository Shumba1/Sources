// src/config/page-data.ts
// Canonical executable page layer for Marriage OS V1.
// This file resolves public copy drift and page-hierarchy drift into one buildable config.

import type { RouteId } from './routes';

export type ShellKind = 'marketing' | 'app';
export type CTAType = 'primary' | 'secondary' | 'ghost' | 'link';

export interface CTA {
  label: string;
  href: string;
  variant: CTAType;
}

export interface HeroConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export interface SectionConfig {
  key: string;
  component:
    | 'HeroBlock'
    | 'FeatureGrid'
    | 'HowItWorksSteps'
    | 'TrustStrip'
    | 'CardGroup'
    | 'CheckInGrid'
    | 'StateSummaryCard'
    | 'NextBestMoveCard'
    | 'MakeItWorseCard'
    | 'QuickScriptRow'
    | 'RecheckCard'
    | 'SearchField'
    | 'FilterChipRow'
    | 'SuggestedModulesRail'
    | 'RepairCategoryGrid'
    | 'RepairModuleHero'
    | 'ExpandablePanelStack'
    | 'ChecklistCard'
    | 'ResetTimeline'
    | 'GuideIndexGrid'
    | 'GuideSectionCards'
    | 'KnowledgeTopicGrid'
    | 'KnowledgeArticleCard'
    | 'ArticleSection'
    | 'ProgressOverview'
    | 'ProductGrid'
    | 'BundleGrid'
    | 'ComparisonTable'
    | 'LibraryGrid'
    | 'SafetyCardGrid';
  title?: string;
  variant?: 'hero' | 'standard' | 'compact' | 'muted' | 'emphasis';
  props?: Record<string, unknown>;
  notes?: string[];
}

export interface PageConfig {
  routeId: RouteId;
  displayTitle: string;
  shell: ShellKind;
  intent: string;
  hero?: HeroConfig;
  sections: SectionConfig[];
  pageRules: string[];
  canonical: true;
}

const cta = (label: string, href: string, variant: CTAType = 'primary'): CTA => ({
  label,
  href,
  variant,
});

export const pageData: Record<RouteId, PageConfig> = {
  home: {
    routeId: 'home',
    displayTitle: 'Home',
    shell: 'marketing',
    intent: 'Convert cold traffic into a state check or system explanation.',
    canonical: true,
    hero: {
      eyebrow: 'Relationship operating system',
      title: 'Good relationships drift when nobody is steering.',
      subtitle:
        'A calm, practical system for spotting drift early, lowering damage quickly, and guiding the next repair step.',
      primaryCta: cta('Check the Relationship State', '/start'),
      secondaryCta: cta('See How the System Works', '/how-it-works', 'secondary'),
    },
    sections: [
      { key: 'home-hero', component: 'HeroBlock', variant: 'hero' },
      {
        key: 'value-pillars',
        component: 'FeatureGrid',
        title: 'What the system does',
        props: {
          items: [
            { title: 'Prevent escalation', body: 'Stop the moves that make tonight worse.' },
            { title: 'Restore connection', body: 'Get a usable next step, not vague advice.' },
            { title: 'Build resilience', body: 'Protect warmth, desire, and teamwork over time.' },
          ],
        },
      },
      {
        key: 'how-it-works-strip',
        component: 'HowItWorksSteps',
        props: {
          steps: ['Check the state', 'See the pattern', 'Open the first repair step', 'Track improvement'],
        },
      },
      {
        key: 'featured-repair-categories',
        component: 'CardGroup',
        title: 'Start where the strain actually is',
        props: {
          cards: ['Stop Damage', 'Restore Bond', 'Attraction & Desire', 'Life Pressure', 'External Pressure', 'Stay & Rebuild'],
        },
      },
      {
        key: 'featured-products',
        component: 'ProductGrid',
        title: 'Structured tools',
        props: {
          items: ['14-Day Marriage Reset', 'Hard Conversation Scripts Pack', 'His + Her Perspectives Bundle'],
        },
      },
      {
        key: 'trust-strip',
        component: 'TrustStrip',
        variant: 'muted',
        props: { items: ['Calm', 'Practical', 'Non-judgmental', 'Built for moments of friction'] },
      },
    ],
    pageRules: ['One dominant CTA above the fold.', 'Hero title max 2 lines.', 'Do not lead with discounts.'],
  },

  howItWorks: {
    routeId: 'howItWorks',
    displayTitle: 'How It Works',
    shell: 'marketing',
    intent: 'Explain the system without sounding theoretical.',
    canonical: true,
    hero: {
      eyebrow: 'Fast explanation',
      title: 'This is not therapy homework.',
      subtitle:
        'It is a practical flow: classify the current state, open the right repair step, and track whether things are improving.',
      primaryCta: cta('Start the State Check', '/start'),
      secondaryCta: cta('Browse the Repair Centre', '/repair', 'secondary'),
    },
    sections: [
      { key: 'how-hero', component: 'HeroBlock', variant: 'hero' },
      {
        key: 'four-step-flow',
        component: 'HowItWorksSteps',
        props: { steps: ['Check in', 'See the current state', 'Get the next best move', 'Run a reset'] },
      },
      {
        key: 'what-it-is-vs-isnt',
        component: 'CardGroup',
        title: 'What this is / what this is not',
        props: {
          left: ['Fast triage', 'Practical repair', 'Structured maintenance'],
          right: ['Not therapy journaling', 'Not ideology', 'Not sex tracking'],
        },
      },
      {
        key: 'screen-preview-strip',
        component: 'CardGroup',
        title: 'What the flow looks like',
        props: { cards: ['Today Check-In', 'Current State', 'First Repair Step', 'Repair Module'] },
      },
    ],
    pageRules: ['Keep sections short.', 'No essay blocks above the CTA repeat.'],
  },

  start: {
    routeId: 'start',
    displayTitle: 'Start Here',
    shell: 'marketing',
    intent: 'Get the user into the solo-first flow fast.',
    canonical: true,
    hero: {
      eyebrow: 'Start here',
      title: 'Tell us what feels off right now.',
      subtitle: 'We will classify the state and show the next best move.',
      primaryCta: cta('Start the Solo Check-In', '/today/check-in'),
    },
    sections: [
      { key: 'start-hero', component: 'HeroBlock', variant: 'hero' },
      {
        key: 'entry-mode',
        component: 'CardGroup',
        title: 'How are you using this?',
        props: {
          cards: [
            { title: 'Solo', body: 'Default V1 path.', active: true },
            { title: 'Use Together', body: 'Coming later.', disabled: true },
          ],
        },
      },
      {
        key: 'privacy-and-friction',
        component: 'TrustStrip',
        props: { items: ['Private by default', 'No essays', 'Built for moments of friction'] },
      },
    ],
    pageRules: ['Solo-first V1.', 'The primary button must name the next step.'],
  },

  store: {
    routeId: 'store',
    displayTitle: 'Store',
    shell: 'marketing',
    intent: 'Sell tools as native extensions of Repair.',
    canonical: true,
    hero: {
      eyebrow: 'Structured tools',
      title: 'Structured tools for the problem you’re in now.',
      primaryCta: cta('Browse Templates and Resets', '/store'),
    },
    sections: [
      { key: 'store-hero', component: 'HeroBlock', variant: 'hero' },
      {
        key: 'store-tabs',
        component: 'FilterChipRow',
        props: { chips: ['Templates', 'Guides', 'Resets', 'Bundles'] },
      },
      { key: 'store-products', component: 'ProductGrid' },
      { key: 'store-bundles', component: 'BundleGrid' },
    ],
    pageRules: ['Store must feel like an extension of Repair, not a detached ecommerce site.'],
  },

  storeCategory: {
    routeId: 'storeCategory',
    displayTitle: 'Store Category',
    shell: 'marketing',
    intent: 'Category-specific product browse.',
    canonical: true,
    sections: [{ key: 'store-category-grid', component: 'ProductGrid' }],
    pageRules: ['Keep filters and product cards tool-like, not ad-like.'],
  },

  productDetail: {
    routeId: 'productDetail',
    displayTitle: 'Product Detail',
    shell: 'marketing',
    intent: 'Sell one product through clarity, not pressure.',
    canonical: true,
    sections: [
      {
        key: 'product-hero',
        component: 'HeroBlock',
        props: { requiredFields: ['title', 'problemSolved', 'whoItsFor', 'primaryCta'] },
      },
      {
        key: 'product-clarity',
        component: 'CardGroup',
        props: { cards: ['What problem this solves', 'What’s inside', 'Who this is for'] },
      },
      {
        key: 'product-preview',
        component: 'CardGroup',
        props: { cards: ['Preview bullets', 'Delivery format', 'Related repair modules'] },
      },
      { key: 'related-products', component: 'ProductGrid' },
    ],
    pageRules: ['Price must stay visually quiet.', 'CTA must name the asset.'],
  },

  pricing: {
    routeId: 'pricing',
    displayTitle: 'Pricing',
    shell: 'marketing',
    intent: 'Clarify free vs paid without sales bloat.',
    canonical: true,
    hero: {
      title: 'Start free. Add structure when repair needs more support.',
      primaryCta: cta('See Free and Paid Access', '/pricing'),
    },
    sections: [
      { key: 'pricing-hero', component: 'HeroBlock', variant: 'hero' },
      { key: 'free-vs-paid', component: 'ComparisonTable' },
      { key: 'low-ticket-tools', component: 'ProductGrid', title: 'Start with a structured tool' },
    ],
    pageRules: ['Keep the comparison plain-language.', 'No bloated pricing jargon.'],
  },

  safety: {
    routeId: 'safety',
    displayTitle: 'Safety',
    shell: 'marketing',
    intent: 'Set hard boundaries around use of the system.',
    canonical: true,
    hero: { title: 'This system is for repair, not control.' },
    sections: [
      { key: 'safety-hero', component: 'HeroBlock', variant: 'hero' },
      {
        key: 'safety-cards',
        component: 'SafetyCardGrid',
        props: {
          cards: ['Not for abuse', 'Not for coercion', 'Not for surveillance', 'Family preservation is not martyrdom'],
        },
      },
    ],
    pageRules: ['Keep the boundary language crisp.', 'No hedging.'],
  },

  login: {
    routeId: 'login',
    displayTitle: 'Log In',
    shell: 'marketing',
    intent: 'Authenticate returning users.',
    canonical: true,
    sections: [{ key: 'login-hero', component: 'HeroBlock', variant: 'compact' }],
    pageRules: ['Authentication pages should stay minimal.'],
  },

  signup: {
    routeId: 'signup',
    displayTitle: 'Create Account',
    shell: 'marketing',
    intent: 'Create account for saved state, progress, and purchases.',
    canonical: true,
    sections: [{ key: 'signup-hero', component: 'HeroBlock', variant: 'compact' }],
    pageRules: ['Do not over-explain.'],
  },

  today: {
    routeId: 'today',
    displayTitle: 'Today',
    shell: 'app',
    intent: 'Fast orientation surface that gives one practical next move right now.',
    canonical: true,
    hero: {
      eyebrow: 'Tonight focus',
      title: 'Today’s next best move',
      subtitle: 'Slow the temperature. Take one constructive step before the next message or argument.',
      primaryCta: cta('Start the 10-minute reset', '/repair'),
      secondaryCta: cta('Run a 60-second Check-In', '/today/check-in', 'secondary'),
    },
    sections: [
      { key: 'today-hero', component: 'HeroBlock', variant: 'compact' },
      {
        key: 'today-current-state',
        component: 'StateSummaryCard',
        title: 'What this moment most likely is',
        props: {
          label: 'Heated but reachable',
          summary: 'Things are strained, but still reachable. Protect what is still working and avoid one more damaging move tonight.',
        },
      },
      {
        key: 'today-next-best-move',
        component: 'NextBestMoveCard',
        title: 'Do this next',
        props: {
          action: 'Start the 10-minute damage stop.',
          href: '/repair?entry=today-primary',
          time: '10 minutes tonight',
          success: 'You leave this step calmer and less likely to escalate.',
          caution: 'Do not send one more reactive message first.',
        },
      },
      {
        key: 'still-working-card',
        component: 'CardGroup',
        title: 'What is still working',
        props: { format: ['remainingGoodwill', 'dontCatastrophise', 'reasonRepairIsStillPossible'] },
      },
      {
        key: 'today-make-it-worse',
        component: 'MakeItWorseCard',
        props: {
          bullets: ['Piling on after a fight', 'Trying to win the argument tonight', 'Using blame text walls as “clarity”'],
        },
      },
      {
        key: 'today-quick-scripts',
        component: 'QuickScriptRow',
        props: {
          scripts: [
            'I want this to go better than the last conversation. I need 20 minutes first.',
            'I care about us. I do not want to keep making tonight worse.',
          ],
        },
      },
      {
        key: 'today-recheck',
        component: 'RecheckCard',
        props: {
          prompt: 'After the repair step, ask: “Did this lower temperature or raise it?”',
        },
      },
    ],
    pageRules: ['First screenful must answer what to do next.', 'No more than three major cards before first scroll on mobile.'],
  },

  todayCheckIn: {
    routeId: 'todayCheckIn',
    displayTitle: 'Today Check-In',
    shell: 'app',
    intent: 'Rapid state capture in 30–60 seconds.',
    canonical: true,
    hero: {
      title: 'How does the relationship feel today?',
      primaryCta: cta('See the Current State', '/today/state'),
      secondaryCta: cta('Go Straight to Repair', '/repair', 'ghost'),
    },
    sections: [
      { key: 'checkin-hero', component: 'HeroBlock', variant: 'compact' },
      {
        key: 'checkin-grid',
        component: 'CheckInGrid',
        props: {
          row1: ['Close / Neutral / Distant', 'Desired / Indifferent / Unwanted', 'Appreciated / Taken for granted', 'Calm / Irritated / Resentful'],
          row2: ['Pressured / Safe', 'Overwhelmed / Regulated', 'Touched out / Open to closeness', 'Alone / Supported'],
        },
      },
    ],
    pageRules: ['No essay field by default.', 'Primary CTA belongs in sticky action bar on mobile.'],
  },

  todayState: {
    routeId: 'todayState',
    displayTitle: 'Current State',
    shell: 'app',
    intent: 'Turn ambiguity into a clear, non-catastrophic classification.',
    canonical: true,
    hero: {
      title: 'Current relationship state',
      subtitle: 'This is a pattern snapshot, not a verdict.',
      primaryCta: cta('Open the First Repair Step', '/today'),
      secondaryCta: cta('See Why This State Appears', '/knowledge/how-drift-starts', 'secondary'),
    },
    sections: [
      { key: 'state-hero', component: 'HeroBlock', variant: 'compact' },
      {
        key: 'state-summary',
        component: 'StateSummaryCard',
        props: { showStateBadge: true, showHelperLine: true, showSubstateTags: true, showLastCheckIn: true },
      },
      {
        key: 'next-best-move',
        component: 'NextBestMoveCard',
        props: { requiredFields: ['action', 'time', 'tone', 'successCondition'] },
      },
      {
        key: 'state-explainer-cards',
        component: 'CardGroup',
        props: { cards: ['What this usually means', 'What makes it worse', 'What to do in the next 24 hours'] },
      },
    ],
    pageRules: ['No alarmist copy.', 'State colour is an accent, not the background.'],
  },

  repair: {
    routeId: 'repair',
    displayTitle: 'Repair',
    shell: 'app',
    intent: 'Solo-first repair entry that turns tension into one constructive action.',
    canonical: true,
    hero: {
      eyebrow: 'Continue from Today',
      title: 'Start one repair step now',
      subtitle: 'Choose the closest fit for tonight and run only the first step now.',
      primaryCta: cta('Start with damage stop', '/repair'),
      secondaryCta: cta('Back to Today', '/today', 'ghost'),
    },
    sections: [
      { key: 'repair-hero', component: 'HeroBlock', variant: 'compact' },
      { key: 'repair-search', component: 'SearchField', props: { placeholder: 'Search tonight’s problem (fight, distance, resentment, pressure)' } },
      {
        key: 'repair-filters',
        component: 'FilterChipRow',
        props: { chips: ['Drift', 'Resentment', 'Attraction & Desire', 'Life Pressure', 'External Pressure', 'Stay & Rebuild'] },
      },
      {
        key: 'suggested-for-state',
        component: 'SuggestedModulesRail',
        title: 'Best first options right now',
        props: {
          modules: [
            {
              title: '10-minute damage stop',
              fit: 'Use when both of you are activated and one more exchange could make tonight worse.',
              duration: '10 min',
              href: '/repair?module=after-the-fight',
              result: 'First step lowers temperature before you say more.',
            },
            {
              title: 'Distance reset',
              fit: 'Use when things feel cold but not explosive.',
              duration: '12 min',
              href: '/repair?module=distance-reset',
              result: 'First step gives you a calmer reconnection move to start solo.',
            },
            {
              title: 'Overwhelm decompression',
              fit: 'Use when stress is swallowing connection.',
              duration: '8 min',
              href: '/repair?module=overwhelm-decompression',
              result: 'First step reduces pressure before a harder conversation.',
            },
          ],
        },
      },
      {
        key: 'repair-categories',
        component: 'RepairCategoryGrid',
        props: { categories: ['Stop Damage', 'Restore Bond', 'Attraction & Desire', 'Life Pressure', 'External Pressure', 'Stay & Rebuild'] },
      },
      {
        key: 'repair-tools',
        component: 'ProductGrid',
        title: 'If you need more structure after tonight',
      },
    ],
    pageRules: ['Repair remains the commercial centre of the app.', 'Lead with state relevance before full browsing.'],
  },

  repairModule: {
    routeId: 'repairModule',
    displayTitle: 'Repair Module',
    shell: 'app',
    intent: 'Execute one repair protocol with minimal confusion.',
    canonical: true,
    sections: [
      {
        key: 'repair-module-hero',
        component: 'RepairModuleHero',
        props: {
          requiredFields: ['title', 'bestUsedWhen', 'notFor', 'resetLength'],
          primaryCta: 'Start the first step',
          secondaryCta: 'Save this module',
        },
      },
      {
        key: 'repair-panels',
        component: 'ExpandablePanelStack',
        props: {
          panels: ['What’s happening', 'What makes it worse', 'Do this first', 'Say this', 'Do this tonight', '7-day reset', 'Escalate if…'],
        },
      },
      { key: 'repair-tonight-checklist', component: 'ChecklistCard' },
      { key: 'repair-timeline', component: 'ResetTimeline' },
      { key: 'repair-linked-assets', component: 'CardGroup', props: { cards: ['Related perspective', 'Related template', 'Related reset'] } },
    ],
    pageRules: ['Use one sticky mobile action bar.', 'Labels must be plain-language.'],
  },

  guides: {
    routeId: 'guides',
    displayTitle: 'Perspectives',
    shell: 'app',
    intent: 'Offer parallel interpretation tracks without factionalising the experience.',
    canonical: true,
    hero: { title: 'Different immediate experiences. Shared repair goal.' },
    sections: [
      { key: 'perspectives-hero', component: 'HeroBlock', variant: 'compact' },
      {
        key: 'perspectives-grid',
        component: 'GuideIndexGrid',
        props: { cards: ['His Perspective', 'Her Perspective', 'Read Both Perspectives'] },
      },
      { key: 'bridge-cards', component: 'CardGroup', title: 'Where each side misreads the other' },
    ],
    pageRules: ['Do not present the guides as a conflict pair.', 'Bridge content should stay near the top.'],
  },

  guideDetail: {
    routeId: 'guideDetail',
    displayTitle: 'Perspective Detail',
    shell: 'app',
    intent: 'Deliver structured interpretation and route into repair.',
    canonical: true,
    sections: [
      {
        key: 'guide-hero',
        component: 'HeroBlock',
        props: {
          titleBySlug: {
            his: 'Being Desired Without Becoming Bitter',
            her: 'Protecting Desire Without Losing Yourself',
            both: 'Read Both Perspectives',
          },
        },
      },
      { key: 'guide-sections', component: 'GuideSectionCards' },
      { key: 'guide-actions', component: 'CardGroup', props: { cards: ['Run the linked repair', 'Save this guide', 'Open the matching template'] } },
    ],
    pageRules: ['Keep guide sections card-based.', 'Do not open with a prose wall.'],
  },

  knowledge: {
    routeId: 'knowledge',
    displayTitle: 'Knowledge',
    shell: 'app',
    intent: 'Provide system understanding without behaving like a generic blog.',
    canonical: true,
    hero: { title: 'Understand the system without getting lost in theory.' },
    sections: [
      { key: 'knowledge-hero', component: 'HeroBlock', variant: 'compact' },
      { key: 'knowledge-search', component: 'SearchField', props: { placeholder: 'Search topics or articles' } },
      {
        key: 'knowledge-topics',
        component: 'KnowledgeTopicGrid',
        props: {
          topics: ['How Drift Starts', 'System Decay & System Repair', 'Desire & Familiarity', 'Children & Family Stability', 'Life-Phase Pressure', 'Affair Dynamics'],
        },
      },
      { key: 'featured-articles', component: 'KnowledgeArticleCard', title: 'Featured articles' },
    ],
    pageRules: ['Treat Knowledge as a repository, not the home screen.', 'Every article must point toward action.'],
  },

  knowledgeArticle: {
    routeId: 'knowledgeArticle',
    displayTitle: 'Knowledge Article',
    shell: 'app',
    intent: 'Teach one idea, then hand the user a practical next branch.',
    canonical: true,
    sections: [
      { key: 'article-hero', component: 'HeroBlock', variant: 'compact' },
      { key: 'article-summary', component: 'CardGroup', props: { cards: ['What this means', 'What to watch for'] } },
      { key: 'article-sections', component: 'ArticleSection' },
      { key: 'article-actions', component: 'CardGroup', title: 'Use this now', props: { cards: ['Run the matching repair', 'Open the template', 'Save this guide'] } },
      { key: 'article-related-products', component: 'ProductGrid', title: 'Related tools' },
    ],
    pageRules: ['Constrain prose to reading width.', 'Use the addendum architecture: ArticleSection on detail pages.'],
  },

  progress: {
    routeId: 'progress',
    displayTitle: 'Progress',
    shell: 'app',
    intent: 'Make improvement visible so the product becomes sticky.',
    canonical: true,
    hero: { title: 'Is the system improving?' },
    sections: [
      { key: 'progress-hero', component: 'HeroBlock', variant: 'compact' },
      { key: 'progress-overview', component: 'ProgressOverview', props: { cards: ['State trend', 'Repair completion', 'Bond metrics', 'Attraction & Desire', 'Recovery speed'] } },
      { key: 'progress-recommendation', component: 'CardGroup', props: { cards: ['Suggested next reset'] } },
    ],
    pageRules: ['Progress should feel operational, not self-help-ish.', 'Use charts sparingly.'],
  },

  library: {
    routeId: 'library',
    displayTitle: 'Library',
    shell: 'app',
    intent: 'Make purchased items feel like owned tools, not forgotten downloads.',
    canonical: true,
    hero: { title: 'Your tools, resets, and saved items' },
    sections: [
      { key: 'library-hero', component: 'HeroBlock', variant: 'compact' },
      { key: 'library-grid', component: 'LibraryGrid', props: { groups: ['Purchased templates', 'Purchased guides', 'Purchased programs', 'Saved repair modules', 'Saved scripts'] } },
    ],
    pageRules: ['Show resume state.', 'Show last opened.', 'Show owned status clearly.'],
  },

  account: {
    routeId: 'account',
    displayTitle: 'Account',
    shell: 'app',
    intent: 'Account and subscription management.',
    canonical: true,
    sections: [{ key: 'account-hero', component: 'HeroBlock', variant: 'compact' }],
    pageRules: ['Detailed spec deferred; route remains canonical.'],
  },

  settings: {
    routeId: 'settings',
    displayTitle: 'Settings',
    shell: 'app',
    intent: 'Preference and privacy settings.',
    canonical: true,
    sections: [{ key: 'settings-hero', component: 'HeroBlock', variant: 'compact' }],
    pageRules: ['Detailed spec deferred; route remains canonical.'],
  },
};

export function getPageData(routeId: RouteId): PageConfig {
  return pageData[routeId];
}
