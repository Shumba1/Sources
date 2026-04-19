// src/config/seo.ts
// Canonical technical SEO and page-schema policy for Marriage OS.

import type { RouteId } from './routes';

export type IndexPolicy = 'index' | 'noindex-follow' | 'noindex-nofollow' | 'private';
export type SchemaProfile =
  | 'organization-home'
  | 'website-home'
  | 'webpage'
  | 'collection-page'
  | 'breadcrumb-list'
  | 'product-offer'
  | 'none';

export interface RouteSeoPolicy {
  indexPolicy: IndexPolicy;
  includeInSitemap: boolean;
  canonicalPath: string | null;
  schemaProfiles: SchemaProfile[];
}

export const routeSeoPolicy: Record<RouteId, RouteSeoPolicy> = {
  home: { indexPolicy: 'index', includeInSitemap: true, canonicalPath: '/', schemaProfiles: ['organization-home', 'website-home'] },
  howItWorks: { indexPolicy: 'index', includeInSitemap: true, canonicalPath: '/how-it-works', schemaProfiles: ['webpage'] },
  start: { indexPolicy: 'noindex-follow', includeInSitemap: false, canonicalPath: '/start', schemaProfiles: ['none'] },
  store: { indexPolicy: 'index', includeInSitemap: true, canonicalPath: '/store', schemaProfiles: ['collection-page'] },
  storeCategory: { indexPolicy: 'index', includeInSitemap: true, canonicalPath: null, schemaProfiles: ['collection-page', 'breadcrumb-list'] },
  productDetail: { indexPolicy: 'index', includeInSitemap: true, canonicalPath: null, schemaProfiles: ['product-offer', 'breadcrumb-list'] },
  pricing: { indexPolicy: 'index', includeInSitemap: true, canonicalPath: '/pricing', schemaProfiles: ['webpage'] },
  safety: { indexPolicy: 'index', includeInSitemap: true, canonicalPath: '/safety', schemaProfiles: ['webpage'] },
  login: { indexPolicy: 'noindex-nofollow', includeInSitemap: false, canonicalPath: '/login', schemaProfiles: ['none'] },
  signup: { indexPolicy: 'noindex-nofollow', includeInSitemap: false, canonicalPath: '/sign-up', schemaProfiles: ['none'] },
  today: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  todayCheckIn: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  todayState: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  repair: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  repairModule: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  guides: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  guideDetail: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  knowledge: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  knowledgeArticle: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  progress: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  library: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  account: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
  settings: { indexPolicy: 'private', includeInSitemap: false, canonicalPath: null, schemaProfiles: ['none'] },
};

export function toRobots(indexPolicy: IndexPolicy) {
  switch (indexPolicy) {
    case 'index':
      return { index: true, follow: true };
    case 'noindex-follow':
      return { index: false, follow: true };
    case 'noindex-nofollow':
    case 'private':
      return { index: false, follow: false };
  }
}
