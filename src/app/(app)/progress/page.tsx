import Link from 'next/link';

import { semanticIconMap } from '@/config/icon-map';
import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon } from '@/components/ui/icon';

interface ProgressCard {
  title: string;
  value: string;
  summary: string;
}

interface ProgressOverviewProps {
  cards: ProgressCard[];
}

interface RecommendationCardProps {
  title: string;
  summary: string;
  href: string;
}

export default function ProgressPage() {
  const page = getPageData('progress');
  const overviewSection = page.sections.find((section) => section.key === 'progress-overview');
  const recommendationSection = page.sections.find((section) => section.key === 'progress-recommendation');

  const overview = ((overviewSection?.props ?? {}) as Partial<ProgressOverviewProps>).cards ?? [];
  const recommendation = (recommendationSection?.props ?? {}) as Partial<RecommendationCardProps>;

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--progress" title={getRouteTitle('progress')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">Operational view</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta pathway-primary-cta--knowledge" href={page.hero?.primaryCta?.href ?? '/today/check-in'}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.recheck} />
            Best next signal
          </p>
          <h2>{page.hero?.primaryCta?.label ?? 'Run a fresh check-in'}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">
            Progress gets cleaner when the next check-in is recent and honest.
          </p>
        </div>
        <span className="pathway-primary-cta__aside">
          <span className="pathway-action-label">Refresh state</span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <section className="pathway-card pathway-card--quiet pathway-card--section">
        <div className="pathway-section-head pathway-section-head--stacked">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.state} />
              Snapshot that matters
            </p>
            <p className="pathway-section-intro">This is not a dashboard for its own sake. It should tell you whether the system is calming, stalling, or heating back up.</p>
          </div>
        </div>
        <div className="pathway-kpi-grid">
          {overview.map((card, index) => (
            <article key={card.title} className={`pathway-kpi-card${index === 0 ? ' pathway-kpi-card--lead' : ''}`}>
              <p className="pathway-index-card__meta">{card.title}</p>
              <h2 className="pathway-kpi-card__value">{card.value}</h2>
              <p>{card.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pathway-card pathway-card--quiet pathway-card--section">
        <div>
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            Suggested next reset
          </p>
          <p className="pathway-section-intro">When progress is mixed, keep the next move simple and measurable.</p>
        </div>

        <Link className="pathway-action-card pathway-card pathway-card--action pathway-card--subtle" href={recommendation.href ?? '/repair'}>
          <div className="pathway-section-head">
            <div>
              <span className="pathway-badge">Recommended</span>
              <h2>{recommendation.title ?? 'Run one repair step before the next big conversation.'}</h2>
            </div>
          </div>
          <p>{recommendation.summary ?? 'Use one bounded reset now so the next check-in tells you something real.'}</p>
          <span className="pathway-action-label">
            Open the next move
            <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
          </span>
        </Link>
      </section>
    </ScaffoldPanel>
  );
}
