import Link from 'next/link';

import { semanticIconMap } from '@/config/icon-map';
import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { fixtureByState, readValue, type StateFixtureKey } from '@/lib/check-in-state';
import { getDefaultRepairModuleForState } from '@/lib/repair-modules';
import { Icon } from '@/components/ui/icon';

interface TodayPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

const stateValues = ['steady', 'heatedButReachable', 'activatedAndFragile'] as const;

export default async function TodayPage({ searchParams }: TodayPageProps) {
  const page = getPageData('today');
  const params = searchParams ? await searchParams : {};
  const stateKey = readValue(params.state, stateValues, 'heatedButReachable') as StateFixtureKey;
  const fixture = fixtureByState[stateKey];
  const repairModule = getDefaultRepairModuleForState(stateKey);

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--today pathway-surface--directed" title={getRouteTitle('today')}>
      <div className="pathway-surface__intro pathway-surface__intro--compressed">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Tonight focus'}</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta pathway-primary-cta--today pathway-primary-cta--dominant" href={`/repair/${repairModule.slug}?entry=today&state=${stateKey}`}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            Do this next
          </p>
          <h2>{fixture.todayPageNextMove}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">
            One practical step now is worth more than another full conversation tonight.
          </p>
          <div className="pathway-inline-meta">
            <span className="pathway-meta-pill">{repairModule.title}</span>
            <span className="pathway-meta-pill pathway-meta-pill--muted">{repairModule.resetLength}</span>
          </div>
        </div>
        <span className="pathway-primary-cta__aside pathway-primary-cta__aside--button">
          Run the first step
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <section className="pathway-support-panel pathway-support-panel--with-accent" aria-label="Current state snapshot">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.state} />
          Current state
        </p>
        <h2>{fixture.label}</h2>
        <p>{fixture.summary}</p>
      </section>

      <section className="pathway-quiet-section pathway-quiet-section--script" aria-label="One sentence script">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.script} />
          Use this sentence if needed
        </p>
        <p className="pathway-script-quote">{fixture.quickScript}</p>
      </section>

      <details className="pathway-disclosure pathway-disclosure--separated">
        <summary>
          <span>
            <span className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.caution} />
              What makes tonight worse
            </span>
            <strong>Open only if you need the watch-outs before acting.</strong>
          </span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
        </summary>
        <ul className="pathway-bullet-list">
          {fixture.makeItWorse.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="pathway-helper-note">Watch-out: {fixture.caution}</p>
      </details>

      <div className="scaffold-actions scaffold-actions--secondary scaffold-actions--quiet">
        <Link className="pathway-secondary-link pathway-secondary-link--quiet" href="/today/check-in">
          Run check-in again
          <Icon className="pathway-icon" name={semanticIconMap.recheck} />
        </Link>
      </div>
    </ScaffoldPanel>
  );
}
