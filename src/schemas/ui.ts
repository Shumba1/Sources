// src/schemas/ui.ts
// Canonical UI prop contracts for Marriage OS V1.

import { z } from 'zod';

export const navItemSchema = z.enum(['today', 'repair', 'guides', 'knowledge', 'progress']);
export const shellTypeSchema = z.enum(['marketing', 'app']);
export const accessTypeSchema = z.enum(['public', 'member']);

export const ctaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z.enum(['primary', 'secondary', 'ghost', 'link']).default('primary'),
  icon: z.string().optional(),
  external: z.boolean().default(false),
  disabled: z.boolean().default(false),
});

export const topBarActionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  icon: z.string().optional(),
  href: z.string().optional(),
  onClickKey: z.string().optional(),
});

export const appShellPropsSchema = z.object({
  title: z.string().min(1),
  activeNavItem: navItemSchema.optional(),
  showTopBar: z.boolean().default(true),
  showBottomNav: z.boolean().default(true),
  showSideNav: z.boolean().default(true),
  showRightRail: z.boolean().default(false),
  topBarActions: z.array(topBarActionSchema).default([]),
  rightRailSlotKey: z.string().optional(),
  floatingAction: ctaSchema.optional(),
});

export const marketingShellPropsSchema = z.object({
  showHeader: z.boolean().default(true),
  showFooter: z.boolean().default(true),
  stickyCta: ctaSchema.optional(),
});

export const pageSectionPropsSchema = z.object({
  id: z.string().optional(),
  variant: z.enum(['hero', 'standard', 'compact', 'emphasis', 'muted']).default('standard'),
  padded: z.boolean().default(true),
  constrained: z.boolean().default(true),
  background: z.enum(['default', 'muted', 'accent', 'warning']).default('default'),
});

export const heroBlockPropsSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  primaryCta: ctaSchema.optional(),
  secondaryCta: ctaSchema.optional(),
  tertiaryLinks: z.array(ctaSchema).default([]),
  heroCardKeys: z.array(z.string()).default([]),
});

export const cardPropsSchema = z.object({
  id: z.string().min(1),
  title: z.string().optional(),
  body: z.string().optional(),
  variant: z.enum(['default', 'emphasis', 'state', 'product', 'protocol', 'article', 'muted']).default('default'),
  badge: z.string().optional(),
  cta: ctaSchema.optional(),
  footerText: z.string().optional(),
});

export const stateBadgePropsSchema = z.object({
  state: z.enum(['stable', 'drift', 'resentment-building', 'entrenched-resentment']),
  label: z.string().min(1),
});

export const substateTagPropsSchema = z.object({
  label: z.string().min(1),
});

export const searchFieldPropsSchema = z.object({
  name: z.string().min(1),
  placeholder: z.string().min(1),
  defaultValue: z.string().optional(),
});

export const filterChipPropsSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  selected: z.boolean().default(false),
});

export const expandablePanelPropsSchema = z.object({
  title: z.string().min(1),
  defaultOpen: z.boolean().default(false),
  body: z.string().optional(),
  items: z.array(z.string()).default([]),
});

export const progressMeterPropsSchema = z.object({
  label: z.string().min(1),
  value: z.number().min(0).max(100),
  helperText: z.string().optional(),
});

export const emptyStatePropsSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  cta: ctaSchema.optional(),
});

export type AppShellProps = z.infer<typeof appShellPropsSchema>;
export type MarketingShellProps = z.infer<typeof marketingShellPropsSchema>;
export type PageSectionProps = z.infer<typeof pageSectionPropsSchema>;
export type HeroBlockProps = z.infer<typeof heroBlockPropsSchema>;
export type CardProps = z.infer<typeof cardPropsSchema>;
export type StateBadgeProps = z.infer<typeof stateBadgePropsSchema>;
export type SubstateTagProps = z.infer<typeof substateTagPropsSchema>;
export type SearchFieldProps = z.infer<typeof searchFieldPropsSchema>;
export type FilterChipProps = z.infer<typeof filterChipPropsSchema>;
export type ExpandablePanelProps = z.infer<typeof expandablePanelPropsSchema>;
export type ProgressMeterProps = z.infer<typeof progressMeterPropsSchema>;
export type EmptyStateProps = z.infer<typeof emptyStatePropsSchema>;
export type CTA = z.infer<typeof ctaSchema>;
