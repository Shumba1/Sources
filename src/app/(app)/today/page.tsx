import Link from 'next/link';

import { semanticIconMap } from '@/config/icon-map';
import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon } from '@/components/ui/icon';

interface TodayStateProps {
  label: string;
  summary: string;
}

interface NextMoveProps {
  action: string;
  href: string;
  time: string;
  success: string;
  caution: string;
}

interface BulletsProps {
  bullets: string[];
}

interface ScriptsProps {
  scripts: string[];
}

interface RecheckProps {
  prompt: string;
}

export default function TodayPage() {
  const page = getPageData('today');
  const stateSection = page.sections.find((section) => section.key === 'today-current-state');
  const nextMoveSection = page.sections.find((section) => section.key === 'today-next-best-move');
  const makeItWorseSection = page.sections.find((section) => section.key === 'today-make-it-worse');
  const scriptsSection = page.sections.find((section) => section.key === 'today-quick-scripts');
  const recheckSection = page.sections.find((section) => section.key === 'today-recheck');

  const state = (stateSection?.props ?? {}) as Partial<TodayStateProps>;
  const nextMove = (nextMoveSection?.props ?? {}) as Partial<NextMoveProps>;
  const makeItWorse = (makeItWorseSection?.props ?? {}) as Partial<BulletsProps>;
  const scripts = (scriptsSection?.props ?? {}) as Partial<ScriptsProps>;
  const recheck = (recheckSection?.props ?? {}) as Partial<RecheckProps>;

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--today" title={getRouteTitle('today')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Tonight focus'}</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta pathway-primary-cta--today" href={nextMove.href ?? page.hero?.primaryCta?.href ?? '/repair'}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            Do this next
          </p>
          <h2>{nextMove.action ?? 'Start the 10-minute damage stop.'}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">
            One practical step now is worth more than another full conversation tonight.
          </p>
          <div className="pathway-inline-meta">
            <span className="pathway-meta-pill">{nextMove.time ?? '10 minutes tonight'}</span>
            <span className="pathway-meta-pill pathway-meta-pill--muted">{nextMove.success ?? 'Lower temperature first'}</span>
          </div>
        </div>
        <span className="pathway-primary-cta__aside">
          <span className="pathway-action-label">Run the step</span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <div className="pathway-grid pathway-grid--duo">
        <section className="pathway-card pathway-card--state">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.state} />
            {stateSection?.title ?? 'What this moment most likely is'}
          </p>
          <h2>{state.label ?? 'Heated but reachable'}</h2>
          <p>{state.summary ?? 'Things are strained, but still reachable. Protect what is still working and avoid one more damaging move tonight.'}</p>
        </section>

        <section className="pathway-card pathway-card--quiet pathway-card--caution">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.caution} />
            What makes tonight worse
          </p>
          <ul className="pathway-plain-list pathway-plain-list--tight">
            {(makeItWorse.bullets ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="pathway-helper-note">Watch-out: {nextMove.caution ?? 'Do not send one more reactive message first.'}</p>
        </section>
      </div>

      <div className="pathway-grid pathway-grid--duo">
        <section className="pathway-card pathway-card--quiet pathway-card--support">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.script} />
            Use if needed
          </p>
          <ul className="pathway-script-list">
            {(scripts.scripts ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="pathway-card pathway-card--quiet pathway-card--support">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.recheck} />
            Quick recheck
          </p>
          <p>{recheck.prompt ?? 'After one step, ask whether the temperature dropped or rose.'}</p>
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
