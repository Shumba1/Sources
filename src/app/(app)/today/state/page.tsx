import Link from 'next/link';

import { semanticIconMap } from '@/config/icon-map';
import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import {
  fixtureByState,
  readValue,
  resolveStateFromCheckIn,
  valueLabels,
  type CapacityValue,
  type ConnectionValue,
  type TensionValue,
} from '@/lib/check-in-state';
import { Icon } from '@/components/ui/icon';

const connectionValues = ['close', 'neutral', 'distant'] as const;
const tensionValues = ['calm', 'uneasy', 'heated'] as const;
const capacityValues = ['regulated', 'strained', 'overwhelmed'] as const;

interface TodayStatePageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function TodayStatePage({ searchParams }: TodayStatePageProps) {
  const page = getPageData('todayState');
  const params = searchParams ? await searchParams : {};

  const connection = readValue(params.connection, connectionValues, 'neutral') as ConnectionValue;
  const tension = readValue(params.tension, tensionValues, 'uneasy') as TensionValue;
  const capacity = readValue(params.capacity, capacityValues, 'strained') as CapacityValue;

  const stateKey = resolveStateFromCheckIn(connection, tension, capacity);
  const fixture = fixtureByState[stateKey];
  const recap = [
    { label: 'Connection', value: valueLabels[connection] },
    { label: 'Temperature', value: valueLabels[tension] },
    { label: 'Capacity', value: valueLabels[capacity] },
  ];

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--state" title={getRouteTitle('todayState')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">Current snapshot</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta pathway-primary-cta--state" href={`${fixture.nextHref}?state=${stateKey}`}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            Next move
          </p>
          <h2>{fixture.todayPageNextMove}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">
            One clear step is enough for tonight. You do not need to solve everything before bed.
          </p>
        </div>
        <span className="pathway-primary-cta__aside">
          <span className="pathway-action-label">Open Today</span>
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

        <section className="pathway-card pathway-card--quiet pathway-card--support">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.caution} />
            Anti-escalation cue
          </p>
          <p>{fixture.prevention}</p>
          <p className="pathway-helper-note">Watch-out: {fixture.caution}</p>
        </section>
      </div>

      <section className="pathway-card pathway-card--quiet pathway-card--section">
        <div className="pathway-section-head pathway-section-head--stacked">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.script} />
              Quick script
            </p>
            <p className="pathway-section-intro">Use this if you need one sentence before the next exchange.</p>
          </div>
        </div>
        <p>{fixture.quickScript}</p>
      </section>

      <section className="pathway-card pathway-card--quiet pathway-card--section">
        <div className="pathway-section-head pathway-section-head--stacked">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.recheck} />
              What you told us
            </p>
            <p className="pathway-section-intro">This is a local fixture read, not a verdict. It is enough to point you toward the next move tonight.</p>
          </div>
        </div>
        <div className="pathway-recap-grid">
          {recap.map((item) => (
            <div key={item.label} className="pathway-kpi-card pathway-kpi-card--compact">
              <p className="pathway-index-card__meta">{item.label}</p>
              <h2 className="pathway-kpi-card__value">{item.value}</h2>
            </div>
          ))}
        </div>
      </section>

      <div className="scaffold-actions scaffold-actions--secondary">
        <Link className="pathway-secondary-link" href="/today/check-in">
          Re-run check-in
          <Icon className="pathway-icon" name={semanticIconMap.recheck} />
        </Link>
      </div>
    </ScaffoldPanel>
  );
}
