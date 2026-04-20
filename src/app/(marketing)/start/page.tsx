import Link from 'next/link';

import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function StartPage() {
  const page = getPageData('start');
  const sectionPreview = page.sections.slice(0, 3);

  return (
    <ScaffoldPanel title={getRouteTitle('start')}>
      <p className="scaffold-meta">Marketing surface · /start</p>
      <p>{page.hero?.subtitle ?? page.intent}</p>
      <p>Config sections mapped: {page.sections.length}</p>
      <ul>
        {sectionPreview.map((section) => (
          <li key={section.key}>{section.component}</li>
        ))}
      </ul>
      <div className="scaffold-actions">
        {page.hero?.primaryCta ? <Link href={page.hero.primaryCta.href}>{page.hero.primaryCta.label}</Link> : null}
      </div>
    </ScaffoldPanel>
  );
}
