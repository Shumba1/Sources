import Link from 'next/link';
import { pageData } from '@/config/page-data';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

export default function HomePage() {
  const home = pageData.home;

  return (
    <ScaffoldPanel title={home.hero?.title ?? 'Home'}>
      <p>{home.hero?.subtitle}</p>
      <div className="scaffold-actions">
        {home.hero?.primaryCta ? <Link href={home.hero.primaryCta.href}>{home.hero.primaryCta.label}</Link> : null}
        {home.hero?.secondaryCta ? <Link href={home.hero.secondaryCta.href}>{home.hero.secondaryCta.label}</Link> : null}
      </div>
    </ScaffoldPanel>
  );
}
