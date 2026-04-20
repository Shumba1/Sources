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
    <ScaffoldPanel title={getRouteTitle('today')}>
      <p className="scaffold-meta">Member surface · /today</p>
      <p>{page.hero?.subtitle ?? page.intent}</p>

      <Link className="pathway-primary-cta" href={page.hero?.primaryCta?.href ?? '/repair'}>
        <span className="pathway-primary-cta__label">{page.hero?.primaryCta?.label ?? 'Open Repair and Start'}</span>
        <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
      </Link>

      <section className="pathway-card pathway-card--state">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.state} />
          {stateSection?.title ?? 'Current state'}
        </p>
        <h2>{state.label ?? 'Strained but repairable'}</h2>
        <p>{state.summary ?? 'There is still enough goodwill to reduce damage and make tonight constructive.'}</p>
      </section>

      <Link className="pathway-card pathway-card--emphasis pathway-action-card" href={nextMove.href ?? '/repair'}>
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
          {nextMoveSection?.title ?? 'Next best move'}
        </p>
        <h2>{nextMove.action ?? 'Open Repair and run one short reset step.'}</h2>
        <p className="pathway-helper-note">Tap to open Repair with the recommended first step.</p>
        <ul>
          <li>Time: {nextMove.time ?? '10 minutes'}</li>
          <li>Success condition: {nextMove.success ?? 'Temperature drops and you avoid escalation.'}</li>
          <li>Watch-out: {nextMove.caution ?? 'Do not keep arguing before you run the step.'}</li>
        </ul>
        <span className="pathway-action-label">
          Start this now
          <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
        </span>
      </Link>

      <section className="pathway-card">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.caution} />
          What makes tonight worse
        </p>
        <ul>
          {(makeItWorse.bullets ?? []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="pathway-card">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.script} />
          Use-if-needed scripts
        </p>
        <ul>
          {(scripts.scripts ?? []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="pathway-card pathway-card--compact">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.recheck} />
          Quick recheck
        </p>
        <p>{recheck.prompt ?? 'Recheck after one step: did this lower temperature?'}</p>
      </section>

      <div className="scaffold-actions scaffold-actions--secondary">
        {page.hero?.secondaryCta ? <Link href={page.hero.secondaryCta.href}>{page.hero.secondaryCta.label}</Link> : null}
      </div>
    </ScaffoldPanel>
  );
}
