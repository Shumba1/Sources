// src/config/runtime-component-registry.tsx
// Runtime registry for page-data/component-registry driven rendering.

import type React from 'react';

// These imports are illustrative and assume the surrounding repo structure
// described in the code samples.
import ArticleSection from '@/components/domain/knowledge/article-section';

export type RuntimeComponentKey =
  | 'PageSection'
  | 'ContentColumn'
  | 'HeroBlock'
  | 'Card'
  | 'StateSummaryCard'
  | 'NextBestMoveCard'
  | 'MakeItWorseCard'
  | 'QuickScriptCard'
  | 'CheckInGrid'
  | 'SearchField'
  | 'FilterChip'
  | 'ExpandablePanel'
  | 'ProgressMeter'
  | 'ProductCard'
  | 'BundleCard'
  | 'LibraryItemCard'
  | 'GuideSectionCard'
  | 'KnowledgeArticleCard'
  | 'ArticleSection'
  | 'ChecklistCard'
  | 'ResetTimeline'
  | 'EmptyState';

export type RuntimeSectionComponentRegistry = Record<RuntimeComponentKey, React.ComponentType<any>>;

// Placeholder shape to be filled with actual imports in repo.
export const runtimeComponentRegistry = {
  ArticleSection,
} as Partial<RuntimeSectionComponentRegistry>;
