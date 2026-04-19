// src/schemas/domain.ts
// Canonical domain contracts for Marriage OS V1.

import { z } from 'zod';
import { ctaSchema } from './ui';

export const relationshipStateSchema = z.enum([
  'stable',
  'drift',
  'resentment-building',
  'entrenched-resentment',
]);

export const substateSchema = z.enum([
  'pressure-loop',
  'overload',
  'one-sided-initiation',
  'quiet-drift',
  'external-pull',
  'family-atmosphere-risk',
  'autonomy-deficit',
  'desire-gap',
  'touched-out',
  'manager-mode',
]);

export const checkInGridPropsSchema = z.object({
  closeness: z.enum(['close', 'neutral', 'distant']).optional(),
  wantedness: z.enum(['desired', 'indifferent', 'unwanted']).optional(),
  appreciation: z.enum(['appreciated', 'taken-for-granted']).optional(),
  emotionalTone: z.enum(['calm', 'irritated', 'resentful']).optional(),
  pressure: z.enum(['pressured', 'safe']).optional(),
  regulation: z.enum(['overwhelmed', 'regulated']).optional(),
  touchOpenness: z.enum(['touched-out', 'open-to-closeness']).optional(),
  support: z.enum(['alone', 'supported']).optional(),
});

export const stateSummaryCardPropsSchema = z.object({
  state: relationshipStateSchema,
  stateLabel: z.string().min(1),
  summary: z.string().min(1),
  substateTags: z.array(substateSchema).default([]),
  lastCheckInAt: z.string().optional(),
  mainRisk: z.string().optional(),
});

export const nextBestMoveCardPropsSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  primaryCta: ctaSchema,
});

export const makeItWorseCardPropsSchema = z.object({
  title: z.string().default('Make It Worse'),
  items: z.array(z.string()).min(1),
});

export const quickScriptCardPropsSchema = z.object({
  title: z.string().min(1),
  script: z.string().min(1),
  copyLabel: z.string().default('Copy Script'),
  linkedModuleSlug: z.string().optional(),
});

export const protocolStepCardPropsSchema = z.object({
  step: z.number().int().positive(),
  label: z.string().min(1),
  body: z.string().min(1),
  cta: ctaSchema.optional(),
});

export const checklistItemSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  completed: z.boolean().default(false),
});

export const checklistCardPropsSchema = z.object({
  title: z.string().min(1),
  items: z.array(checklistItemSchema).min(1),
});

export const resetTimelineDaySchema = z.object({
  day: z.number().int().positive(),
  title: z.string().min(1),
  task: z.string().min(1),
  locked: z.boolean().default(false),
});

export const resetTimelinePropsSchema = z.object({
  title: z.string().min(1),
  days: z.array(resetTimelineDaySchema).min(1),
});

export const guideSectionCardPropsSchema = z.object({
  title: z.string().min(1),
  summary: z.string().optional(),
  bullets: z.array(z.string()).default([]),
  cta: ctaSchema.optional(),
});

export const knowledgeArticleCardPropsSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  topic: z.string().min(1),
  cta: ctaSchema.optional(),
});

export const articleSectionPropsSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
  kicker: z.string().optional(),
  callout: z.string().optional(),
  cta: ctaSchema.optional(),
});

export const productTypeSchema = z.enum([
  'script-pack',
  'checklist-pack',
  'reset-workbook',
  'conversation-template',
  'calendar-template',
  'guide',
  'reset-program',
  'bundle',
]);

export const productCardPropsSchema = z.object({
  slug: z.string().min(1),
  type: productTypeSchema,
  title: z.string().min(1),
  summary: z.string().min(1),
  price: z.string().min(1),
  badge: z.string().optional(),
  cta: ctaSchema,
});

export const templatePreviewCardPropsSchema = z.object({
  title: z.string().min(1),
  items: z.array(z.string()).min(1),
});

export const bundleCardPropsSchema = z.object({
  title: z.string().min(1),
  includes: z.array(z.string()).min(1),
  originalPrice: z.string().min(1),
  bundlePrice: z.string().min(1),
  cta: ctaSchema,
});

export const libraryItemCardPropsSchema = z.object({
  title: z.string().min(1),
  type: productTypeSchema,
  href: z.string().min(1),
  status: z.enum(['owned', 'saved', 'in-progress']).default('owned'),
});

export const repairModuleSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  category: z.enum([
    'stop-damage',
    'restore-bond',
    'repair-desire',
    'overload-life-phase',
    'threats-to-system',
    'stay-and-rebuild',
  ]),
  shortDescription: z.string().min(1),
  stateTags: z.array(relationshipStateSchema).default([]),
  substateTags: z.array(substateSchema).default([]),
  whatsHappening: z.array(z.string()).min(1),
  whatMakesItWorse: z.array(z.string()).min(1),
  doThisFirst: z.object({ title: z.string().min(1), body: z.string().min(1) }),
  sayThis: z.object({ title: z.string().default('Say This'), script: z.string().min(1) }),
  doThisTonight: z.array(z.string()).min(1),
  resetPlan: z.array(resetTimelineDaySchema).min(1),
  escalateIf: z.array(z.string()).min(1),
  linkedGuideSlugs: z.array(z.string()).default([]),
  linkedProductSlugs: z.array(z.string()).default([]),
  free: z.boolean().default(true),
});

export const guideSchema = z.object({
  slug: z.string().min(1),
  audience: z.enum(['his', 'hers', 'both']),
  title: z.string().min(1),
  heroStatement: z.string().min(1),
  sections: z.array(z.object({ title: z.string().min(1), summary: z.string().optional(), bullets: z.array(z.string()).default([]) })).min(1),
  linkedRepairModuleSlugs: z.array(z.string()).default([]),
  paid: z.boolean().default(false),
});

export const knowledgeArticleSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  topic: z.string().min(1),
  sections: z.array(z.object({ heading: z.string().min(1), body: z.string().min(1) })).min(1),
  linkedRepairModuleSlugs: z.array(z.string()).default([]),
  linkedProductSlug: z.string().optional(),
});

export type CheckInGridProps = z.infer<typeof checkInGridPropsSchema>;
export type StateSummaryCardProps = z.infer<typeof stateSummaryCardPropsSchema>;
export type NextBestMoveCardProps = z.infer<typeof nextBestMoveCardPropsSchema>;
export type MakeItWorseCardProps = z.infer<typeof makeItWorseCardPropsSchema>;
export type QuickScriptCardProps = z.infer<typeof quickScriptCardPropsSchema>;
export type ProtocolStepCardProps = z.infer<typeof protocolStepCardPropsSchema>;
export type ChecklistCardProps = z.infer<typeof checklistCardPropsSchema>;
export type ResetTimelineProps = z.infer<typeof resetTimelinePropsSchema>;
export type GuideSectionCardProps = z.infer<typeof guideSectionCardPropsSchema>;
export type KnowledgeArticleCardProps = z.infer<typeof knowledgeArticleCardPropsSchema>;
export type ArticleSectionProps = z.infer<typeof articleSectionPropsSchema>;
export type ProductCardProps = z.infer<typeof productCardPropsSchema>;
export type TemplatePreviewCardProps = z.infer<typeof templatePreviewCardPropsSchema>;
export type BundleCardProps = z.infer<typeof bundleCardPropsSchema>;
export type LibraryItemCardProps = z.infer<typeof libraryItemCardPropsSchema>;

export type RepairModule = z.infer<typeof repairModuleSchema>;
export type Guide = z.infer<typeof guideSchema>;
export type KnowledgeArticle = z.infer<typeof knowledgeArticleSchema>;
