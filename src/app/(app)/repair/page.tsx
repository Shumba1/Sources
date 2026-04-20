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
    <ScaffoldPanel className="pathway-surface pathway-surface--repair" title={getRouteTitle('repair')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Continue from Today'}</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta" href={primaryModule?.href ?? page.hero?.primaryCta?.href ?? '/repair'}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            Best first move tonight
          </p>
          <h2>{primaryModule?.title ?? page.hero?.primaryCta?.label ?? 'Start with damage stop'}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">
            {primaryModule?.result ?? 'Start with the step most likely to lower temperature before you do anything else.'}
          </p>
        </div>
        <span className="pathway-primary-cta__aside">
          <span className="pathway-action-label">Open first step</span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <div className="pathway-grid pathway-grid--duo pathway-grid--repair">
        <section className="pathway-card pathway-card--emphasis">
          <div className="pathway-section-head">
            <div>
              <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
                <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
                {suggestedSection?.title ?? 'Best first options right now'}
              </p>
              <p className="pathway-helper-note">Pick one. Run the first step only.</p>
            </div>
          </div>
          <ul className="pathway-module-list">
            {(suggested.modules ?? []).map((module, index) => (
              <li key={module.title}>
                <Link className="pathway-module-link" href={module.href}>
                  <div className="pathway-module-top">
                    <div>
                      {index === 0 ? <span className="pathway-badge">Recommended first</span> : null}
                      <h2>{module.title}</h2>
                    </div>
                    <span className="pathway-meta-pill">{module.duration}</span>
                  </div>
                  <p>{module.fit}</p>
                  <div className="pathway-module-meta-row">
                    <p className="pathway-helper-note">{module.result}</p>
                    <span className="pathway-action-label">
                      Open step
                      <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="pathway-column">
          <section className="pathway-card pathway-card--quiet">
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.category} />
              Browse repair categories
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

          <section className="pathway-card pathway-card--compact pathway-card--quiet" id="category-browse">
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.state} />
              Solo-first note
            </p>
            <p>Start with one step you can do without waiting for your partner to cooperate tonight.</p>
            {page.hero?.secondaryCta ? (
              <Link className="pathway-secondary-link" href={page.hero.secondaryCta.href}>
                {page.hero.secondaryCta.label}
                <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
              </Link>
            ) : null}
          </section>
        </div>
      </div>
    </ScaffoldPanel>
  );
}
