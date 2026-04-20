import Link from 'next/link';

import { getPageData } from '@/config/page-data';
import type { RouteId } from '@/config/routes';
import { getRouteNode, getRouteTitle } from '@/config/routes';

import { ScaffoldPanel } from './shell-primitives';

const MAX_VISIBLE_SECTIONS = 3;

export function TopLevelRouteScaffold({ routeId }: { routeId: RouteId }) {
  const route = getRouteNode(routeId);
  const page = getPageData(routeId);

  const title = route?.title ?? getRouteTitle(routeId);
  const summary = page.hero?.subtitle ?? page.intent;
  const sectionCount = page.sections.length;
  const sectionPreview = page.sections.slice(0, MAX_VISIBLE_SECTIONS).map((section) => section.component);
  const fallbackAction = route?.shell === 'marketing' ? '/start' : '/today';
  const primaryAction = page.hero?.primaryCta ?? {
    label: route?.shell === 'marketing' ? 'Start the Solo Check-In' : 'Open Today',
    href: fallbackAction,
    variant: 'primary' as const,
  };

  return (
    <ScaffoldPanel title={title}>
      <p className="scaffold-meta">
        {route?.shell === 'marketing' ? 'Marketing surface' : 'Member surface'} · {route?.path ?? 'unknown route'}
      </p>
      <p>{summary}</p>
      <p className="scaffold-section-count">
        Config sections mapped: {sectionCount}
      </p>
      {sectionPreview.length > 0 ? (
        <ul className="scaffold-section-preview" aria-label="Top-level section preview">
          {sectionPreview.map((componentName) => (
            <li key={componentName}>{componentName}</li>
          ))}
        </ul>
      ) : null}
      <div className="scaffold-actions">
        <Link href={primaryAction.href}>{primaryAction.label}</Link>
        {page.hero?.secondaryCta ? <Link href={page.hero.secondaryCta.href}>{page.hero.secondaryCta.label}</Link> : null}
      </div>
    </ScaffoldPanel>
  );
}
