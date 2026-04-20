import Link from 'next/link';

import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function TodayPage() {
  const page = getPageData('today');
  const sectionPreview = page.sections.slice(0, 3);

  return (
    <ScaffoldPanel title={getRouteTitle('today')}>
      <p className="scaffold-meta">Member surface · /today</p>
      <p>{page.hero?.subtitle ?? page.intent}</p>
      <p>Config sections mapped: {page.sections.length}</p>
      <ul>
        {sectionPreview.map((section) => (
          <li key={section.key}>{section.component}</li>
        ))}
      </ul>
      <div className="scaffold-actions">
        <Link href={page.hero?.primaryCta?.href ?? '/repair'}>{page.hero?.primaryCta?.label ?? 'Open Repair'}</Link>
      </div>
    </ScaffoldPanel>
  );
}
