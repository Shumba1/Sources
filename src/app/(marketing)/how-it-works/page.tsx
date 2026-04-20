import Link from 'next/link';

import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function HowItWorksPage() {
  const page = getPageData('howItWorks');
  const sectionPreview = page.sections.slice(0, 3);

  return (
    <ScaffoldPanel title={getRouteTitle('howItWorks')}>
      <p className="scaffold-meta">Marketing surface · /how-it-works</p>
      <p>{page.hero?.subtitle ?? page.intent}</p>
      <p>Config sections mapped: {page.sections.length}</p>
      <ul>
        {sectionPreview.map((section) => (
          <li key={section.key}>{section.component}</li>
        ))}
      </ul>
      <div className="scaffold-actions">
        <Link href={page.hero?.primaryCta?.href ?? '/start'}>{page.hero?.primaryCta?.label ?? 'Start the State Check'}</Link>
        {page.hero?.secondaryCta ? <Link href={page.hero.secondaryCta.href}>{page.hero.secondaryCta.label}</Link> : null}
      </div>
    </ScaffoldPanel>
  );
}
