import Link from 'next/link';

import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon, type IconName } from '@/components/ui/icon';
import { getPageData } from '@/config/page-data';

interface FeatureItem {
  title: string;
  body: string;
}

const pillarIcons: IconName[] = ['trophy', 'heart', 'users'];

export default function HomePage() {
  const page = getPageData('home');
  const valuePillars = ((page.sections.find((section) => section.key === 'value-pillars')?.props?.items ?? []) as FeatureItem[]);
  const steps = ((page.sections.find((section) => section.key === 'how-it-works-strip')?.props?.steps ?? []) as string[]);
  const repairLanes = ((page.sections.find((section) => section.key === 'featured-repair-categories')?.props?.cards ?? []) as string[]);
  const tools = ((page.sections.find((section) => section.key === 'featured-products')?.props?.items ?? []) as string[]);
  const trustItems = ((page.sections.find((section) => section.key === 'trust-strip')?.props?.items ?? []) as string[]);

  return (
    <ScaffoldPanel tone="marketing" className="marketing-surface" title={page.hero?.title ?? page.displayTitle}>
      <div className="marketing-surface__intro">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Relationship operating system'}</p>
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
          <p className="marketing-section__eyebrow">What success looks like</p>
          <h2 className="marketing-section__title">What the system gives you back</h2>
        </div>
        <div className="marketing-grid marketing-grid--three">
          {valuePillars.map((item, index) => (
            <article key={item.title} className="marketing-card marketing-card--accent">
              <Icon className="marketing-card__icon" name={pillarIcons[index] ?? 'trophy'} />
              <h3 className="marketing-card__title">{item.title}</h3>
              <p className="marketing-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="marketing-section marketing-section--split">
        <div className="marketing-panel marketing-panel--quiet">
          <p className="marketing-section__eyebrow">How it works</p>
          <div className="marketing-step-grid">
            {steps.map((step, index) => (
              <div key={step} className="marketing-step-card">
                <span className="marketing-step-badge">0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="marketing-panel marketing-panel--quiet">
          <p className="marketing-section__eyebrow">Where people usually enter</p>
          <div className="marketing-chip-cloud">
            {repairLanes.map((lane) => (
              <span key={lane} className="marketing-chip">{lane}</span>
            ))}
          </div>
          <div className="marketing-panel__divider" />
          <p className="marketing-section__eyebrow">Structured tools</p>
          <div className="marketing-list">
            {tools.map((tool) => (
              <div key={tool} className="marketing-list__item">
                <Icon className="marketing-list__icon" name="check-circle" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-section marketing-section--compact">
        <div className="marketing-section__head">
          <p className="marketing-section__eyebrow">Why it lands</p>
        </div>
        <div className="marketing-list marketing-list--checks">
          {trustItems.map((item) => (
            <div key={item} className="marketing-list__item">
              <Icon className="marketing-list__icon" name="check-circle" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </ScaffoldPanel>
  );
}
