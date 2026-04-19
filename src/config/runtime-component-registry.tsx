// src/config/runtime-component-registry.tsx
// Runtime registry for page-data/component-registry driven rendering.

import type React from 'react';

import ArticleSection, {
  type ArticleSectionProps,
} from '@/components/domain/knowledge/article-section';

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

type GenericRuntimeProps = Record<string, unknown>;

export type RuntimeComponentPropsByKey = {
  PageSection: GenericRuntimeProps;
  ContentColumn: GenericRuntimeProps;
  HeroBlock: GenericRuntimeProps;
  Card: GenericRuntimeProps;
  StateSummaryCard: GenericRuntimeProps;
  NextBestMoveCard: GenericRuntimeProps;
  MakeItWorseCard: GenericRuntimeProps;
  QuickScriptCard: GenericRuntimeProps;
  CheckInGrid: GenericRuntimeProps;
  SearchField: GenericRuntimeProps;
  FilterChip: GenericRuntimeProps;
  ExpandablePanel: GenericRuntimeProps;
  ProgressMeter: GenericRuntimeProps;
  ProductCard: GenericRuntimeProps;
  BundleCard: GenericRuntimeProps;
  LibraryItemCard: GenericRuntimeProps;
  GuideSectionCard: GenericRuntimeProps;
  KnowledgeArticleCard: GenericRuntimeProps;
  ArticleSection: ArticleSectionProps;
  ChecklistCard: GenericRuntimeProps;
  ResetTimeline: GenericRuntimeProps;
  EmptyState: GenericRuntimeProps;
};

export type RuntimeSectionComponentRegistry = {
  [K in RuntimeComponentKey]: React.ComponentType<RuntimeComponentPropsByKey[K]>;
};

// Placeholder shape to be filled with actual imports in repo.
export const runtimeComponentRegistry: Partial<RuntimeSectionComponentRegistry> = {
  ArticleSection,
};
