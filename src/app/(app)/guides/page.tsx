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

function getPerspectiveMeta(title: string): string {
  if (/his/i.test(title)) return 'His lens';
  if (/her/i.test(title)) return 'Her lens';
  return 'Shared lens';
}

export default function GuidesPage() {
  const page = getPageData('guides');
  const pathsSection = page.sections.find((section) => section.key === 'perspective-paths');
  const bridgeSection = page.sections.find((section) => section.key === 'perspective-bridge');
  const nextSection = page.sections.find((section) => section.key === 'perspective-next-steps');

  const paths = ((pathsSection?.props ?? {}) as Partial<SurfaceCardProps>).cards ?? [];
  const bridges = ((bridgeSection?.props ?? {}) as Partial<SurfaceCardProps>).cards ?? [];
  const nextMoves = ((nextSection?.props ?? {}) as Partial<SurfaceCardProps>).cards ?? [];
  const primaryPath = paths[2] ?? paths[0];

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--guides pathway-surface--editorial" title={getRouteTitle('guides')}>
      <div className="pathway-surface__intro pathway-surface__intro--editorial">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Practical framing'}</p>
        <p className="pathway-deck pathway-deck--editorial">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta pathway-primary-cta--editorial" href={primaryPath?.href ?? page.hero?.primaryCta?.href ?? '/guides?view=both#perspective-paths'}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.perspective} />
            Best first frame
          </p>
          <h2>{primaryPath?.title ?? page.hero?.primaryCta?.label ?? 'Start with both perspectives'}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">
            Use one shared frame before you decide what to do next.
          </p>
        </div>
        <span className="pathway-primary-cta__aside">
          <span className="pathway-action-label">Open frame</span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <section className="pathway-card pathway-card--quiet pathway-card--section" id="perspective-paths">
        <div className="pathway-section-head pathway-section-head--stacked">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.perspective} />
              {pathsSection?.title ?? 'Choose a perspective path'}
            </p>
            <p className="pathway-section-intro">Choose the lens that best matches the tension you are trying to name.</p>
          </div>
        </div>
        <div className="pathway-index-grid pathway-index-grid--editorial">
          {paths.map((card) => (
            <Link key={card.title} className="pathway-index-card pathway-index-card--editorial" href={card.href}>
              <p className="pathway-index-card__meta">{getPerspectiveMeta(card.title)}</p>
              <h2>{card.title}</h2>
              <p>{card.summary}</p>
              <span className="pathway-index-card__cta">
                Open frame
                <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="pathway-grid pathway-grid--duo pathway-grid--editorial">
        <section className="pathway-card pathway-card--quiet pathway-card--section" id="misread-patterns">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.bridge} />
              {bridgeSection?.title ?? 'Where each side often misreads the other'}
            </p>
            <p className="pathway-section-intro">Use these when the loop matters more than who is right.</p>
          </div>
          <div className="pathway-link-list">
            {bridges.map((card) => (
              <Link key={card.title} className="pathway-list-link pathway-list-link--editorial" href={card.href}>
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.summary}</p>
                </div>
                <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
              </Link>
            ))}
          </div>
        </section>

        <section className="pathway-card pathway-card--quiet pathway-card--section">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
              {nextSection?.title ?? 'After framing, choose a practical move'}
            </p>
            <p className="pathway-section-intro">Once the loop is clearer, take one bounded next step.</p>
          </div>
          <div className="pathway-choice-stack">
            {nextMoves.map((card) => (
              <Link key={card.title} className="pathway-choice-link" href={card.href}>
                <div>
                  <p className="pathway-index-card__meta">{card.kind === 'context' ? 'Context next' : 'Action next'}</p>
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
      </div>
    </ScaffoldPanel>
  );
}
