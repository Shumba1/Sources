import Link from 'next/link';

import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon } from '@/components/ui/icon';
import { getPageData } from '@/config/page-data';

interface ModeCard {
  title: string;
  body: string;
  active?: boolean;
  disabled?: boolean;
}

const nextSteps = [
  'Answer one fast solo-first check-in.',
  'See the current state without guesswork theatre.',
  'Open the next best repair move for tonight.',
];

export default function StartPage() {
  const page = getPageData('start');
  const modes = ((page.sections.find((section) => section.key === 'entry-mode')?.props?.cards ?? []) as ModeCard[]);
  const trustItems = ((page.sections.find((section) => section.key === 'privacy-and-friction')?.props?.items ?? []) as string[]);

  return (
    <ScaffoldPanel tone="marketing" className="marketing-surface marketing-surface--start" title={page.hero?.title ?? page.displayTitle}>
      <div className="marketing-surface__intro">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Start here'}</p>
        <p className="marketing-deck">{page.hero?.subtitle ?? page.intent}</p>
        <div className="marketing-cta-row">
          {page.hero?.primaryCta ? (
            <Link className="marketing-button marketing-button--primary" href={page.hero.primaryCta.href}>
              {page.hero.primaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>

      <section className="marketing-section">
        <div className="marketing-section__head">
          <p className="marketing-section__eyebrow">What you will do first</p>
          <h2 className="marketing-section__title">One fast route into the current state</h2>
        </div>
        <div className="marketing-step-grid">
          {nextSteps.map((step, index) => (
            <div key={step} className="marketing-step-card marketing-step-card--wide">
              <span className="marketing-step-badge">0{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="marketing-section marketing-section--split">
        <div className="marketing-panel marketing-panel--quiet">
          <p className="marketing-section__eyebrow">Mode</p>
          <div className="marketing-choice-stack">
            {modes.map((mode) => (
              <div key={mode.title} className={mode.active ? 'marketing-choice marketing-choice--active' : 'marketing-choice'}>
                <div>
                  <h3 className="marketing-choice__title">{mode.title}</h3>
                  <p className="marketing-choice__body">{mode.body}</p>
                </div>
                <span className="marketing-choice__status">{mode.disabled ? 'Later' : mode.active ? 'Default' : 'Available'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marketing-panel marketing-panel--quiet">
          <p className="marketing-section__eyebrow">Why people start here</p>
          <div className="marketing-list marketing-list--checks">
            {trustItems.map((item) => (
              <div key={item} className="marketing-list__item">
                <Icon className="marketing-list__icon" name="check-circle" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScaffoldPanel>
  );
}
