// src/lib/render-page-sections.tsx
// Async page-section renderer with explicit ArticleSection support.

import React, { Fragment, type ReactNode } from 'react';

import type { RouteId } from '@/config/routes';
import type { RuntimeSectionComponentRegistry } from '@/config/runtime-component-registry';

export type PageSectionData = {
  key?: string;
  id?: string;
  component: string;
  title?: string;
  description?: string;
  props?: Record<string, unknown>;
};

export type PageMeta = {
  routeId: RouteId;
  sections: PageSectionData[];
};

export type SectionResolvers = {
  knowledgeArticles?: (args: { routeId: RouteId; section: PageSectionData }) => Array<Record<string, unknown>> | Promise<Array<Record<string, unknown>>>;
  articleSections?: (args: { routeId: RouteId; section: PageSectionData }) => Array<Record<string, unknown>> | Promise<Array<Record<string, unknown>>>;
  productCollection?: (args: { routeId: RouteId; section: PageSectionData; collection: string }) => Array<Record<string, unknown>> | Promise<Array<Record<string, unknown>>>;
};

function asRecordArray(input: unknown): Array<Record<string, unknown>> {
  if (!Array.isArray(input)) return [];
  return input.filter((item): item is Record<string, unknown> => typeof item === 'object' && item !== null);
}

async function renderArticleSections(
  routeId: RouteId,
  section: PageSectionData,
  registry: RuntimeSectionComponentRegistry,
  resolvers?: SectionResolvers,
): Promise<ReactNode> {
  const ArticleSection = registry.ArticleSection;
  const items =
    (await resolvers?.articleSections?.({ routeId, section })) ??
    asRecordArray(section.props?.items);

  return items.map((item, index) => (
    <ArticleSection
      key={`${section.key ?? section.id ?? 'section'}-article-${index}`}
      heading={String(item.heading ?? '')}
      body={String(item.body ?? '')}
      kicker={typeof item.kicker === 'string' ? item.kicker : undefined}
      callout={typeof item.callout === 'string' ? item.callout : undefined}
      cta={
        item.cta && typeof item.cta === 'object'
          ? (item.cta as { label: string; href: string; variant?: 'primary' | 'secondary' | 'ghost' | 'link' })
          : undefined
      }
    />
  ));
}

export async function renderPageSections(
  page: PageMeta,
  opts: {
    registry: RuntimeSectionComponentRegistry;
    resolvers?: SectionResolvers;
  },
): Promise<ReactNode> {
  const { registry, resolvers } = opts;

  const rendered = await Promise.all(
    page.sections.map(async (section) => {
      switch (section.component) {
        case 'ArticleSection':
          return <Fragment key={section.key ?? section.id}>{await renderArticleSections(page.routeId, section, registry, resolvers)}</Fragment>;
        default:
          return null;
      }
    }),
  );

  return <>{rendered}</>;
}
