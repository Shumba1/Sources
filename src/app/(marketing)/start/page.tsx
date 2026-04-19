import Link from 'next/link';
import { pageData } from '@/config/page-data';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function StartPage() {
  return (
    <ScaffoldPanel title={pageData.start.hero?.title ?? 'Start'}>
      <p>{pageData.start.hero?.subtitle}</p>
      {pageData.start.hero?.primaryCta ? (
        <div className="scaffold-actions">
          <Link href={pageData.start.hero.primaryCta.href}>{pageData.start.hero.primaryCta.label}</Link>
        </div>
      ) : null}
    </ScaffoldPanel>
  );
}
