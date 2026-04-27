import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon } from '@/components/ui/icon';
import { semanticIconMap } from '@/config/icon-map';
import { getRouteTitle } from '@/config/routes';
import { getRepairModule, repairModules } from '@/lib/repair-modules';

interface RepairModulePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return repairModules.map((repairModule) => ({ slug: repairModule.slug }));
}

export default async function RepairModulePage({ params }: RepairModulePageProps) {
  const { slug } = await params;
  const repairModule = getRepairModule(slug);

  if (!repairModule) {
    notFound();
  }

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--repair pathway-surface--repair-module pathway-surface--directed" title={repairModule.title}>
      <div className="pathway-surface__intro pathway-surface__intro--compressed">
        <p className="scaffold-meta">{getRouteTitle('repairModule')}</p>
        <p className="pathway-deck">{repairModule.summary}</p>
      </div>

      <section className="pathway-primary-cta pathway-primary-cta--repair pathway-primary-cta--module pathway-primary-cta--dominant" id="first-step" aria-label="Repair module first step">
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            Do this first
          </p>
          <h2>{repairModule.doFirst}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">Success condition: {repairModule.successCondition}</p>
          <div className="pathway-inline-meta">
            <span className="pathway-meta-pill">{repairModule.resetLength}</span>
            <span className="pathway-meta-pill pathway-meta-pill--muted">Solo-first</span>
          </div>
        </div>
        <Link className="pathway-primary-cta__aside pathway-primary-cta__aside--button" href="#tonight-checklist">
          Use checklist
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </Link>
      </section>

      <section className="pathway-support-panel pathway-support-panel--with-accent" aria-label="Use conditions">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.state} />
          Use conditions
        </p>
        <div className="pathway-definition-list">
          <article className="pathway-definition-card">
            <span className="pathway-definition-card__label">Best used when</span>
            <p>{repairModule.bestUsedWhen}</p>
          </article>
          <article className="pathway-definition-card pathway-definition-card--caution">
            <span className="pathway-definition-card__label">Not for</span>
            <p>{repairModule.notFor}</p>
          </article>
        </div>
      </section>

      <section className="pathway-card pathway-card--emphasis pathway-card--section pathway-card--primary-sequence" id="tonight-checklist" aria-label="Tonight checklist">
        <div className="pathway-section-head pathway-section-head--stacked">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
              Tonight checklist
            </p>
            <p className="pathway-section-intro">Run these in order. Stop before it turns into a full relationship hearing.</p>
          </div>
        </div>
        <ol className="pathway-numbered-steps">
          {repairModule.checklist.map((item, index) => (
            <li key={item}>
              <span className="pathway-numbered-steps__index">{index + 1}</span>
              <span className="pathway-numbered-steps__text">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="pathway-quiet-section pathway-quiet-section--script" aria-label="Quick script">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.script} />
          Quick script
        </p>
        <p className="pathway-script-quote">{repairModule.script}</p>
        <p className="pathway-helper-note">Watch-out: {repairModule.caution}</p>
      </section>

      <details className="pathway-disclosure pathway-disclosure--separated">
        <summary>
          <span>
            <span className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.recheck} />
              Reset timeline
            </span>
            <strong>Open the timing guide if you need pacing.</strong>
          </span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
        </summary>
        <div className="pathway-timeline pathway-timeline--structured">
          {repairModule.timeline.map((step) => (
            <div key={step.label} className="pathway-timeline__item">
              <p className="pathway-index-card__meta">{step.label}</p>
              <p>{step.detail}</p>
            </div>
          ))}
        </div>
      </details>

      <section className="pathway-inline-cue pathway-inline-cue--panel pathway-inline-cue--compact" aria-label="Related perspective">
        <Icon className="pathway-icon" name={semanticIconMap.perspective} />
        <span>{repairModule.relatedPerspective}</span>
      </section>

      <div className="scaffold-actions scaffold-actions--secondary scaffold-actions--quiet">
        <Link href="/repair" className="pathway-secondary-link pathway-secondary-link--quiet">
          Back to Repair
          <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
        </Link>
      </div>
    </ScaffoldPanel>
  );
}
