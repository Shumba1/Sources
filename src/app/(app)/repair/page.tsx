import Link from 'next/link';

import { semanticIconMap } from '@/config/icon-map';
import { getPageData } from '@/config/page-data';
import { getRouteTitle, repairCategories } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon } from '@/components/ui/icon';

interface SuggestedModule {
  title: string;
  fit: string;
  duration: string;
  href: string;
  result: string;
}

interface SuggestedModulesProps {
  modules: SuggestedModule[];
}

export default function RepairPage() {
  const page = getPageData('repair');
  const suggestedSection = page.sections.find((section) => section.key === 'suggested-for-state');
  const suggested = (suggestedSection?.props ?? {}) as Partial<SuggestedModulesProps>;
  const primaryModule = suggested.modules?.[0];

  return (
    <ScaffoldPanel title={getRouteTitle('repair')}>
      <p className="scaffold-meta">Member surface · /repair</p>
      <p>{page.hero?.subtitle ?? page.intent}</p>

      <Link className="pathway-primary-cta" href={primaryModule?.href ?? '/repair'}>
        <span className="pathway-primary-cta__label">{primaryModule?.title ?? page.hero?.primaryCta?.label ?? 'Start with Stop Damage'}</span>
        <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
      </Link>
      <p className="pathway-helper-note">First move because it lowers temperature before deeper conversation.</p>

      <section className="pathway-card pathway-card--emphasis">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
          {suggestedSection?.title ?? 'Best first options'}
        </p>
        <ul className="pathway-module-list">
          {(suggested.modules ?? []).map((module) => (
            <li key={module.title}>
              <Link className="pathway-module-link" href={module.href}>
                <h2>{module.title}</h2>
                <p>{module.fit}</p>
                <p className="pathway-helper-note">{module.result}</p>
                <div className="pathway-module-meta-row">
                  <p className="pathway-meta">{module.duration}</p>
                  <span className="pathway-action-label">
                    Open first step
                    <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="pathway-card">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.category} />
          Browse all repair categories
        </p>
        <div className="pathway-chip-row">
          {repairCategories.map((category) => (
            <Link key={category.slug} className="pathway-chip pathway-chip--interactive" href={`/repair?category=${category.slug}#category-browse`}>
              {category.label}
              <Icon className="pathway-icon pathway-icon--small" name={semanticIconMap.drillIn} />
            </Link>
          ))}
        </div>
      </section>

      <section className="pathway-card pathway-card--compact" id="category-browse">
        <p>Solo-first note: start with one step you can do without waiting for your partner to cooperate tonight.</p>
      </section>

      <div className="scaffold-actions scaffold-actions--secondary">
        {page.hero?.secondaryCta ? <Link href={page.hero.secondaryCta.href}>{page.hero.secondaryCta.label}</Link> : null}
      </div>
    </ScaffoldPanel>
  );
}
