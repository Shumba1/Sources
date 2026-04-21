import Link from 'next/link';

import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon } from '@/components/ui/icon';
import { getPageData } from '@/config/page-data';

interface ComparisonGroup {
  left?: string[];
  right?: string[];
}

export default function HowItWorksPage() {
  const page = getPageData('howItWorks');
  const steps = ((page.sections.find((section) => section.key === 'four-step-flow')?.props?.steps ?? []) as string[]);
  const comparison = ((page.sections.find((section) => section.key === 'what-it-is-vs-isnt')?.props ?? {}) as ComparisonGroup);
  const previewCards = ((page.sections.find((section) => section.key === 'screen-preview-strip')?.props?.cards ?? []) as string[]);

  return (
    <ScaffoldPanel tone="marketing" className="marketing-surface" title={page.hero?.title ?? page.displayTitle}>
      <div className="marketing-surface__intro">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Fast explanation'}</p>
        <p className="marketing-deck">{page.hero?.subtitle ?? page.intent}</p>
        <div className="marketing-cta-row">
          {page.hero?.primaryCta ? (
            <Link className="marketing-button marketing-button--primary" href={page.hero.primaryCta.href}>
              {page.hero.primaryCta.label}
            </Link>
          ) : null}
          {page.hero?.secondaryCta ? (
            <Link className="marketing-button marketing-button--secondary" href={page.hero.secondaryCta.href}>
              {page.hero.secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>

      <section className="marketing-section">
        <div className="marketing-section__head">
          <p className="marketing-section__eyebrow">How the flow works</p>
          <h2 className="marketing-section__title">One calm sequence, not a theory dump</h2>
        </div>
        <div className="marketing-step-grid marketing-step-grid--wide">
          {steps.map((step, index) => (
            <div key={step} className="marketing-step-card marketing-step-card--wide">
              <span className="marketing-step-badge">0{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="marketing-section marketing-section--split">
        <div className="marketing-panel marketing-panel--quiet">
          <p className="marketing-section__eyebrow">What this is</p>
          <div className="marketing-list marketing-list--checks">
            {(comparison.left ?? []).map((item) => (
              <div key={item} className="marketing-list__item">
                <Icon className="marketing-list__icon" name="check-circle" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="marketing-panel marketing-panel--quiet marketing-panel--soft-danger">
          <p className="marketing-section__eyebrow">What this is not</p>
          <div className="marketing-list">
            {(comparison.right ?? []).map((item) => (
              <div key={item} className="marketing-list__item">
                <Icon className="marketing-list__icon" name="triangle-alert" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section">
        <div className="marketing-section__head">
          <p className="marketing-section__eyebrow">What you will see</p>
        </div>
        <div className="marketing-grid marketing-grid--four">
          {previewCards.map((card) => (
            <article key={card} className="marketing-card">
              <Icon className="marketing-card__icon" name="compass" />
              <h3 className="marketing-card__title">{card}</h3>
              <p className="marketing-card__body">A tight, actionable surface built to keep the user moving.</p>
            </article>
          ))}
        </div>
      </section>
    </ScaffoldPanel>
  );
}
