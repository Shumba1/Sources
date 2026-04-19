// src/lib/section-resolvers.ts
// Split knowledge index resolvers from detail-page article-section resolvers.

import type { RouteId } from '@/config/routes';

export type ResolverCta = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
};

export type SectionResolverArgs = {
  routeId: RouteId;
  section: { props?: Record<string, unknown> };
};

// These functions are intentionally skeletal and assume project-specific data loaders.
// Replace with the real `getKnowledgeArticle()`, `listKnowledgeArticles()`, and `repairHref()` functions.
async function listKnowledgeArticles() {
  return [] as Array<{ slug: string; title: string; summary: string; topic: string }>;
}

async function getKnowledgeArticle() {
  return null as null | {
    sections: Array<{ heading: string; body: string }>;
    linkedRepairModuleSlugs?: string[];
  };
}

function repairHref(slug: string): string {
  return `/repair/${slug}`;
}

async function resolveKnowledgeArticles() {
  const items = await listKnowledgeArticles();
  return items.map((article) => ({
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    topic: article.topic,
  }));
}

async function resolveArticleSections(): Promise<Array<{ heading: string; body: string; cta?: ResolverCta }>> {
  const article = await getKnowledgeArticle();
  if (!article) return [];

  const linkedRepairSlug = article.linkedRepairModuleSlugs?.[0];

  return article.sections.map((section, index) => ({
    heading: section.heading,
    body: section.body,
    cta:
      index === article.sections.length - 1 && linkedRepairSlug
        ? {
            label: 'Run the matching repair',
            href: repairHref(linkedRepairSlug),
            variant: 'secondary',
          }
        : undefined,
  }));
}

export function buildSectionResolvers() {
  return {
    knowledgeArticles: async (_args: SectionResolverArgs) => resolveKnowledgeArticles(),
    articleSections: async (_args: SectionResolverArgs) => resolveArticleSections(),
  };
}
