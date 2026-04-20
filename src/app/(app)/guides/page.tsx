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
  kind?: 'action' | 'context';
}

interface SurfaceCardProps {
  cards: SurfaceCard[];
}

export default function GuidesPage() {
  const page = getPageData('guides');
  const pathsSection = page.sections.find((section) => section.key === 'perspective-paths');
  const bridgeSection = page.sections.find((section) => section.key === 'perspective-bridge');
  const nextSection = page.sections.find((section) => section.key === 'perspective-next-steps');

  const paths = (pathsSection?.props ?? {}) as Partial<SurfaceCardProps>;
  const bridges = (bridgeSection?.props ?? {}) as Partial<SurfaceCardProps>;
  const nextMoves = (nextSection?.props ?? {}) as Partial<SurfaceCardProps>;
  const primaryPath = paths.cards?.[0];

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--guides" title={getRouteTitle('guides')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Practical framing'}</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta" href={primaryPath?.href ?? page.hero?.primaryCta?.href ?? '/guides?view=both#perspective-paths'}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.perspective} />
            Perspective path
          </p>
          <h2>{primaryPath?.title ?? page.hero?.primaryCta?.label ?? 'Open Read Both Perspectives'}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">Start with one clear frame, then choose a practical move.</p>
        </div>
        <span className="pathway-primary-cta__aside">
          <span className="pathway-action-label">Open path</span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <section className="pathway-card pathway-card--emphasis" id="perspective-paths">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.perspective} />
          {pathsSection?.title ?? 'Choose a perspective path'}
        </p>
        <div className="pathway-index-grid">
          {(paths.cards ?? []).map((card) => (
            <Link key={card.title} className="pathway-index-card" href={card.href}>
              <h2>{card.title}</h2>
              <p>{card.summary}</p>
              <span className="pathway-action-label">
                Open path
                <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="pathway-card pathway-card--quiet" id="misread-patterns">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.bridge} />
          {bridgeSection?.title ?? 'Where each side often misreads the other'}
        </p>
        <div className="pathway-link-list">
          {(bridges.cards ?? []).map((card) => (
            <Link key={card.title} className="pathway-list-link" href={card.href}>
              <div>
                <h2>{card.title}</h2>
                <p>{card.summary}</p>
              </div>
              <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
            </Link>
          ))}
        </div>
      </section>

      <section className="pathway-card pathway-card--compact pathway-card--quiet">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
          {nextSection?.title ?? 'After framing, choose a practical move'}
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
