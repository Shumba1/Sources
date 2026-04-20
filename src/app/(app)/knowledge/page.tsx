import Link from 'next/link';

import { semanticIconMap } from '@/config/icon-map';
import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon } from '@/components/ui/icon';

interface SurfaceCard {
  title: string;
  summary?: string;
  href: string;
}

interface SurfaceCardProps {
  cards: SurfaceCard[];
}

interface TopicGridProps {
  topics: SurfaceCard[];
}

export default function KnowledgePage() {
  const page = getPageData('knowledge');
  const topicsSection = page.sections.find((section) => section.key === 'knowledge-topics');
  const readingPathsSection = page.sections.find((section) => section.key === 'knowledge-reading-paths');
  const featuredSection = page.sections.find((section) => section.key === 'featured-articles');
  const nextMoveSection = page.sections.find((section) => section.key === 'knowledge-next-move');

  const topics = ((topicsSection?.props ?? {}) as Partial<TopicGridProps>).topics ?? [];
  const readingPaths = ((readingPathsSection?.props ?? {}) as Partial<SurfaceCardProps>).cards ?? [];
  const featured = ((featuredSection?.props ?? {}) as Partial<SurfaceCardProps>).cards ?? [];
  const nextMoves = ((nextMoveSection?.props ?? {}) as Partial<SurfaceCardProps>).cards ?? [];
  const leadTopics = topics.slice(0, 3);
  const supportingTopics = topics.slice(3);
  const primaryTopic = leadTopics[0] ?? topics[0];

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--knowledge pathway-surface--editorial" title={getRouteTitle('knowledge')}>
      <div className="pathway-surface__intro pathway-surface__intro--editorial">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Explanatory context'}</p>
        <p className="pathway-deck pathway-deck--editorial">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta pathway-primary-cta--knowledge" href={primaryTopic?.href ?? page.hero?.primaryCta?.href ?? '/knowledge#knowledge-topics'}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.knowledge} />
            Best first topic
          </p>
          <h2>{primaryTopic?.title ?? page.hero?.primaryCta?.label ?? 'Start with drift'}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">
            Build context first, then move back into repair with more precision.
          </p>
        </div>
        <span className="pathway-primary-cta__aside">
          <span className="pathway-action-label">Read topic</span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <section className="pathway-card pathway-card--quiet pathway-card--section" id="knowledge-topics">
        <div className="pathway-section-head pathway-section-head--stacked">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.knowledge} />
              {topicsSection?.title ?? 'Core mechanisms'}
            </p>
            <p className="pathway-section-intro">Start with one mechanism. You do not need the whole system at once.</p>
          </div>
        </div>
        <div className="pathway-index-grid pathway-index-grid--editorial">
          {leadTopics.map((topic) => (
            <Link key={topic.title} className="pathway-index-card pathway-index-card--knowledge" href={topic.href}>
              <p className="pathway-index-card__meta">Core topic</p>
              <h2>{topic.title}</h2>
              <p>{topic.summary}</p>
              <span className="pathway-index-card__cta">
                Read topic
                <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
              </span>
            </Link>
          ))}
        </div>
        {supportingTopics.length ? (
          <div className="pathway-chip-row pathway-chip-row--spacious">
            {supportingTopics.map((topic) => (
              <Link key={topic.title} className="pathway-chip pathway-chip--interactive pathway-chip--knowledge" href={topic.href}>
                {topic.title}
                <Icon className="pathway-icon pathway-icon--small" name={semanticIconMap.drillIn} />
              </Link>
            ))}
          </div>
        ) : null}
      </section>

      <div className="pathway-grid pathway-grid--duo pathway-grid--editorial">
        <section className="pathway-card pathway-card--quiet pathway-card--section" id="reading-paths">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.state} />
              {readingPathsSection?.title ?? 'Read by moment'}
            </p>
            <p className="pathway-section-intro">Choose the reading path that matches the moment you are in.</p>
          </div>
          <div className="pathway-link-list">
            {readingPaths.map((path) => (
              <Link key={path.title} className="pathway-list-link pathway-list-link--editorial" href={path.href}>
                <div>
                  <h2>{path.title}</h2>
                  <p>{path.summary}</p>
                </div>
                <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
              </Link>
            ))}
          </div>
        </section>

        <section className="pathway-card pathway-card--quiet pathway-card--section" id="featured-knowledge">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.perspective} />
              {featuredSection?.title ?? 'Featured explanations'}
            </p>
            <p className="pathway-section-intro">Shorter explanations for the idea you need to name before you react.</p>
          </div>
          <div className="pathway-link-list">
            {featured.map((article) => (
              <Link key={article.title} className="pathway-list-link pathway-list-link--editorial" href={article.href}>
                <div>
                  <h2>{article.title}</h2>
                  <p>{article.summary}</p>
                </div>
                <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="pathway-card pathway-card--quiet pathway-card--section">
        <div>
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            {nextMoveSection?.title ?? 'Turn understanding into action'}
          </p>
          <p className="pathway-section-intro">When one idea is clear enough, move back into the next constructive step.</p>
        </div>
        <div className="pathway-choice-stack">
          {nextMoves.map((card) => (
            <Link key={card.title} className="pathway-choice-link" href={card.href}>
              <div>
                <p className="pathway-index-card__meta">Action next</p>
                <h2>{card.title}</h2>
              </div>
              <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
            </Link>
          ))}
        </div>
        {page.hero?.secondaryCta ? (
          <Link className="pathway-secondary-link" href={page.hero.secondaryCta.href}>
            {page.hero.secondaryCta.label}
            <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
          </Link>
        ) : null}
      </section>
    </ScaffoldPanel>
  );
}
