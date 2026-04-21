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
  const modules = suggested.modules ?? [];
  const leadModule = modules[0];
  const supportingModules = modules.slice(1);

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--repair" title={getRouteTitle('repair')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Continue from Today'}</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta pathway-primary-cta--repair" href={leadModule?.href ?? page.hero?.primaryCta?.href ?? '/repair'}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            Best first move tonight
          </p>
          <h2>{leadModule?.title ?? page.hero?.primaryCta?.label ?? 'Start with damage stop'}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">
            {leadModule?.result ?? 'Start with the step most likely to lower temperature before you do anything else.'}
          </p>
          {leadModule?.duration ? (
            <div className="pathway-inline-meta">
              <span className="pathway-meta-pill">{leadModule.duration}</span>
            </div>
          ) : null}
        </div>
        <span className="pathway-primary-cta__aside">
          <span className="pathway-action-label">Open first step</span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <div className="pathway-grid pathway-grid--duo pathway-grid--repair">
        <section className="pathway-card pathway-card--emphasis">
          <div className="pathway-section-head pathway-section-head--stacked">
            <div>
              <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
                <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
                Start here
              </p>
              <p className="pathway-section-intro">{leadModule?.fit ?? 'Pick the option most likely to calm the system before you say more.'}</p>
            </div>
          </div>

          {leadModule ? (
            <Link className="pathway-action-card pathway-card pathway-card--action pathway-card--subtle" href={leadModule.href}>
              <div className="pathway-section-head">
                <div>
                  <span className="pathway-badge">Recommended first</span>
                  <h2>{leadModule.title}</h2>
                </div>
                <span className="pathway-meta-pill">{leadModule.duration}</span>
              </div>
              <p>{leadModule.fit}</p>
              <div className="pathway-module-meta-row">
                <p className="pathway-helper-note">{leadModule.result}</p>
                <span className="pathway-action-label">
                  Open step
                  <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
                </span>
              </div>
            </Link>
          ) : null}
        </section>

        <section className="pathway-card pathway-card--quiet pathway-card--support">
          <div className="pathway-section-head pathway-section-head--stacked">
            <div>
              <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
                <Icon className="pathway-icon" name={semanticIconMap.state} />
                Other good fits tonight
              </p>
              <p className="pathway-section-intro">Use one of these when the recommended first move is close, but not quite right.</p>
            </div>
          </div>

          <div className="pathway-choice-stack">
            {supportingModules.map((module) => (
              <Link key={module.title} className="pathway-choice-link" href={module.href}>
                <div className="pathway-choice-link__content">
                  <p className="pathway-index-card__meta">Backup fit · {module.duration}</p>
                  <h2>{module.title}</h2>
                  <p className="pathway-choice-link__summary">{module.fit}</p>
                  <p className="pathway-helper-note">{module.result}</p>
                </div>
                <span className="pathway-choice-link__cta">
                  Open step
                  <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="pathway-grid pathway-grid--duo pathway-grid--repair">
        <section className="pathway-card pathway-card--quiet pathway-card--support">
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

        <section className="pathway-card pathway-card--quiet pathway-card--support" id="category-browse">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.caution} />
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
    </ScaffoldPanel>
  );
}
