// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { storeCategories } from '@/config/routes';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    '/',
    '/how-it-works',
    '/store',
    '/pricing',
    '/safety',
    ...storeCategories.map((category) => `/store/${category.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }));

  // TODO: add live product-detail URLs from the canonical product catalog/content layer.
  return staticRoutes;
}
