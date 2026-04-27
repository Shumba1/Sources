// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

import { routeSeoPolicy } from '@/config/seo';
import { routeTree, type RouteId } from '@/config/routes';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const implementedPublicRouteIds: RouteId[] = ['home', 'howItWorks'];

function findRoutePath(routeId: RouteId) {
  const stack = [...routeTree];

  while (stack.length > 0) {
    const route = stack.shift();

    if (!route) continue;
    if (route.id === routeId) return route.path;
    if (route.children) stack.push(...route.children);
  }

  return null;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return implementedPublicRouteIds
    .filter((routeId) => routeSeoPolicy[routeId].includeInSitemap)
    .map((routeId) => findRoutePath(routeId))
    .filter((path): path is string => Boolean(path))
    .map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
    }));
}
