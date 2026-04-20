import Link from 'next/link';

import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

interface SuggestedModule {
  title: string;
  fit: string;
  duration: string;
}

interface SuggestedModulesProps {
  modules: SuggestedModule[];
}

export default function RepairPage() {
  const page = getPageData('repair');
  const suggestedSection = page.sections.find((section) => section.key === 'suggested-for-state');
  const categorySection = page.sections.find((section) => section.key === 'repair-categories');
  const suggested = (suggestedSection?.props ?? {}) as Partial<SuggestedModulesProps>;
  const categories = (categorySection?.props?.categories ?? []) as string[];

  return (
    <ScaffoldPanel title={getRouteTitle('repair')}>
      <p className="scaffold-meta">Member surface · /repair</p>
      <p>{page.hero?.subtitle ?? page.intent}</p>

      <section className="pathway-card pathway-card--emphasis">
        <p className="pathway-card__eyebrow">{suggestedSection?.title ?? 'Best first options'}</p>
        <ul className="pathway-module-list">
          {(suggested.modules ?? []).map((module) => (
            <li key={module.title}>
              <h2>{module.title}</h2>
              <p>{module.fit}</p>
              <p className="pathway-meta">{module.duration}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="pathway-card">
        <p className="pathway-card__eyebrow">Browse all repair categories</p>
        <div className="pathway-chip-row">
          {categories.map((category) => (
            <span key={category} className="pathway-chip">
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="pathway-card pathway-card--compact">
        <p>Solo-first note: start with one step you can do without waiting for your partner to cooperate tonight.</p>
      </section>

      <div className="scaffold-actions">
        <Link href={page.hero?.primaryCta?.href ?? '/repair'}>{page.hero?.primaryCta?.label ?? 'Start with Stop Damage'}</Link>
        {page.hero?.secondaryCta ? <Link href={page.hero.secondaryCta.href}>{page.hero.secondaryCta.label}</Link> : null}
      </div>
    </ScaffoldPanel>
  );
}
