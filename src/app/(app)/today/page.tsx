import Link from 'next/link';

import { semanticIconMap } from '@/config/icon-map';
import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { fixtureByState, readValue, type StateFixtureKey } from '@/lib/check-in-state';
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

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--today" title={getRouteTitle('today')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">{page.hero?.eyebrow ?? 'Tonight focus'}</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta pathway-primary-cta--today" href={page.hero?.primaryCta?.href ?? '/repair'}>
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
            <span className="pathway-meta-pill">10 minutes tonight</span>
            <span className="pathway-meta-pill pathway-meta-pill--muted">Lower temperature first</span>
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
            Current state snapshot
          </p>
          <h2>{fixture.label}</h2>
          <p>{fixture.summary}</p>
        </section>

        <section className="pathway-card pathway-card--quiet pathway-card--caution">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.caution} />
            What makes tonight worse
          </p>
          <ul className="pathway-plain-list pathway-plain-list--tight">
            {fixture.makeItWorse.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="pathway-helper-note">Watch-out: {fixture.caution}</p>
        </section>
      </div>

      <div className="pathway-grid pathway-grid--duo">
        <section className="pathway-card pathway-card--quiet pathway-card--support">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.script} />
            Quick script
          </p>
          <p>{fixture.quickScript}</p>
        </section>

        <section className="pathway-card pathway-card--quiet pathway-card--support">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.recheck} />
            Quick recheck
          </p>
          <p>After one step, ask whether the temperature dropped or rose.</p>
          <Link className="pathway-secondary-link" href="/today/check-in">
            Run check-in again
            <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
          </Link>
        </section>
      </div>
    </ScaffoldPanel>
  );
}
