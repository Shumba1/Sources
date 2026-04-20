import Link from 'next/link';

import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';

interface TodayStateProps {
  label: string;
  summary: string;
}

interface NextMoveProps {
  action: string;
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

      <section className="pathway-card">
        <p className="pathway-card__eyebrow">{stateSection?.title ?? 'Current state'}</p>
        <h2>{state.label ?? 'Strained but repairable'}</h2>
        <p>{state.summary ?? 'There is still enough goodwill to reduce damage and make tonight constructive.'}</p>
      </section>

      <section className="pathway-card pathway-card--emphasis">
        <p className="pathway-card__eyebrow">{nextMoveSection?.title ?? 'Next best move'}</p>
        <h2>{nextMove.action ?? 'Open Repair and run one short reset step.'}</h2>
        <ul>
          <li>Time: {nextMove.time ?? '10 minutes'}</li>
          <li>Success condition: {nextMove.success ?? 'Temperature drops and you avoid escalation.'}</li>
          <li>Watch-out: {nextMove.caution ?? 'Do not keep arguing before you run the step.'}</li>
        </ul>
      </section>

      <section className="pathway-card">
        <p className="pathway-card__eyebrow">What makes tonight worse</p>
        <ul>
          {(makeItWorse.bullets ?? []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="pathway-card">
        <p className="pathway-card__eyebrow">Use-if-needed scripts</p>
        <ul>
          {(scripts.scripts ?? []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="pathway-card pathway-card--compact">
        <p>{recheck.prompt ?? 'Recheck after one step: did this lower temperature?'}</p>
      </section>

      <div className="scaffold-actions">
        <Link href={page.hero?.primaryCta?.href ?? '/repair'}>{page.hero?.primaryCta?.label ?? 'Open Repair and Start'}</Link>
        {page.hero?.secondaryCta ? <Link href={page.hero.secondaryCta.href}>{page.hero.secondaryCta.label}</Link> : null}
      </div>
    </ScaffoldPanel>
  );
}
