import Link from 'next/link';

import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon } from '@/components/ui/icon';
import { semanticIconMap } from '@/config/icon-map';
import { getPageData } from '@/config/page-data';
import { getRouteTitle, repairCategories } from '@/config/routes';
import { getDefaultRepairModuleForState, repairModules } from '@/lib/repair-modules';
import { readValue, type StateFixtureKey } from '@/lib/check-in-state';

const stateValues = ['steady', 'heatedButReachable', 'activatedAndFragile'] as const;

interface RepairPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function RepairPage({ searchParams }: RepairPageProps) {
  const page = getPageData('repair');
  const params = searchParams ? await searchParams : {};
  const stateKey = readValue(params.state, stateValues, 'heatedButReachable') as StateFixtureKey;
  const leadModule = getDefaultRepairModuleForState(stateKey);
  const supportingModules = repairModules.filter((module) => module.slug !== leadModule.slug);

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--repair pathway-surface--directed" title={getRouteTitle('repair')}>
      <div className="pathway-surface__intro pathway-surface__intro--compressed">
        <p className="scaffold-meta">Continue from Today</p>
        <p className="pathway-deck">Choose one first move. Do not turn tonight into a full relationship trial.</p>
      </div>

      <Link className="pathway-primary-cta pathway-primary-cta--repair pathway-primary-cta--dominant" href={`/repair/${leadModule.slug}?entry=repair-index&state=${stateKey}`}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            Recommended first
          </p>
          <h2>Start {leadModule.title.toLowerCase()}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">{leadModule.summary}</p>
          <div className="pathway-inline-meta" aria-label="Repair module details">
            <span className="pathway-meta-pill">{leadModule.resetLength}</span>
            <span className="pathway-meta-pill pathway-meta-pill--muted">Solo-first</span>
          </div>
        </div>
        <span className="pathway-primary-cta__aside pathway-primary-cta__aside--button">
          Start repair step
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <section className="pathway-support-panel pathway-support-panel--with-accent" aria-label="Why this repair step">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.state} />
          Why this one
        </p>
        <h2 className="pathway-section-title">{leadModule.bestUsedWhen}</h2>
        <p className="pathway-helper-note">Success looks like this: {leadModule.successCondition}</p>
      </section>

      <details className="pathway-disclosure pathway-disclosure--separated">
        <summary>
          <span>
            <span className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.recheck} />
              Other options
            </span>
            <strong>Use these only if the recommended first move is not the right fit.</strong>
          </span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
        </summary>
        <div className="pathway-option-stack">
          {supportingModules.map((module) => (
            <Link key={module.slug} className="pathway-option-row" href={`/repair/${module.slug}?entry=repair-index&state=${stateKey}`}>
              <span className="pathway-option-row__body">
                <span className="pathway-option-row__meta">{module.resetLength}</span>
                <strong className="pathway-option-row__title">{module.title}</strong>
                <span className="pathway-option-row__summary">{module.summary}</span>
              </span>
              <span className="pathway-option-row__action">
                Start
                <Icon className="pathway-icon" name={semanticIconMap.forward} />
              </span>
            </Link>
          ))}
        </div>
      </details>

      <section className="pathway-quiet-section" id="category-browse" aria-label="Repair categories">
        <div className="pathway-section-head pathway-section-head--stacked">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.category} />
              Browse later
            </p>
            <p className="pathway-section-intro">Categories are for orientation. Tonight still needs one practical step.</p>
          </div>
        </div>
        <div className="pathway-chip-row pathway-chip-row--quiet">
          {repairCategories.map((category) => (
            <Link key={category.slug} className="pathway-chip pathway-chip--quiet-link" href={`/repair?category=${category.slug}#category-browse`}>
              {category.label}
            </Link>
          ))}
        </div>
      </section>

      <p className="pathway-inline-cue pathway-inline-cue--compact">
        <Icon className="pathway-icon" name={semanticIconMap.caution} />
        Start with the step you can do without waiting for your partner to cooperate tonight.
        {page.hero?.secondaryCta ? (
          <Link href={page.hero.secondaryCta.href}>Back to Today</Link>
        ) : null}
      </p>
    </ScaffoldPanel>
  );
}
