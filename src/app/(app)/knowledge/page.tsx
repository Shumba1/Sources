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

  const topics = (topicsSection?.props ?? {}) as Partial<TopicGridProps>;
  const readingPaths = (readingPathsSection?.props ?? {}) as Partial<SurfaceCardProps>;
  const featured = (featuredSection?.props ?? {}) as Partial<SurfaceCardProps>;
  const nextMoves = (nextMoveSection?.props ?? {}) as Partial<SurfaceCardProps>;
  const primaryTopic = topics.topics?.[0];

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--knowledge" title={getRouteTitle('knowledge')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Explanatory context'}</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta" href={primaryTopic?.href ?? page.hero?.primaryCta?.href ?? '/knowledge#knowledge-topics'}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.knowledge} />
            Core mechanism
          </p>
          <h2>{primaryTopic?.title ?? 'How drift starts'}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">Build context first, then apply one repair step with better precision.</p>
        </div>
        <span className="pathway-primary-cta__aside">
          <span className="pathway-action-label">Read topic</span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <section className="pathway-card pathway-card--emphasis" id="knowledge-topics">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.knowledge} />
          {topicsSection?.title ?? 'Core mechanisms'}
        </p>
        <div className="pathway-index-grid">
          {(topics.topics ?? []).map((topic) => (
            <Link key={topic.title} className="pathway-index-card" href={topic.href}>
              <h2>{topic.title}</h2>
              <p>{topic.summary}</p>
              <span className="pathway-action-label">
                Read topic
                <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="pathway-grid pathway-grid--duo">
        <section className="pathway-card pathway-card--quiet" id="reading-paths">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.state} />
            {readingPathsSection?.title ?? 'Read by moment'}
          </p>
          <div className="pathway-link-list">
            {(readingPaths.cards ?? []).map((path) => (
              <Link key={path.title} className="pathway-list-link" href={path.href}>
                <div>
                  <h2>{path.title}</h2>
                  <p>{path.summary}</p>
                </div>
                <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
              </Link>
            ))}
          </div>
        </section>

        <section className="pathway-card pathway-card--quiet" id="featured-knowledge">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.perspective} />
            {featuredSection?.title ?? 'Featured explanations'}
          </p>
          <div className="pathway-link-list">
            {(featured.cards ?? []).map((article) => (
              <Link key={article.title} className="pathway-list-link" href={article.href}>
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

      <section className="pathway-card pathway-card--compact pathway-card--quiet">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
          {nextMoveSection?.title ?? 'Turn understanding into action'}
        </p>
        <div className="pathway-chip-row">
          {(nextMoves.cards ?? []).map((card) => (
            <Link key={card.title} className="pathway-chip pathway-chip--interactive" href={card.href}>
              {card.title}
              <Icon className="pathway-icon pathway-icon--small" name={semanticIconMap.drillIn} />
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
