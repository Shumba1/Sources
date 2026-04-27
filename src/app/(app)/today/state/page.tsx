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
import { getDefaultRepairModuleForState } from '@/lib/repair-modules';
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
  const repairModule = getDefaultRepairModuleForState(stateKey);
  const recap = [
    { label: 'Connection', value: valueLabels[connection] },
    { label: 'Temperature', value: valueLabels[tension] },
    { label: 'Capacity', value: valueLabels[capacity] },
  ];

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--state pathway-surface--directed" title={getRouteTitle('todayState')}>
      <div className="pathway-surface__intro pathway-surface__intro--compressed">
        <p className="scaffold-meta">Current snapshot</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta pathway-primary-cta--state pathway-primary-cta--dominant" href={`/repair/${repairModule.slug}?entry=state&state=${stateKey}`}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            Next move
          </p>
          <h2>{fixture.todayPageNextMove}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">
            One clear step is enough for tonight. You do not need to solve everything before bed.
          </p>
          <div className="pathway-inline-meta">
            <span className="pathway-meta-pill">{repairModule.title}</span>
            <span className="pathway-meta-pill pathway-meta-pill--muted">{repairModule.resetLength}</span>
          </div>
        </div>
        <span className="pathway-primary-cta__aside pathway-primary-cta__aside--button">
          Start repair step
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.forward} />
        </span>
      </Link>

      <section className="pathway-support-panel pathway-support-panel--with-accent" aria-label="Current state read">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.state} />
          What this means
        </p>
        <h2>{fixture.label}</h2>
        <p>{fixture.summary}</p>
        <p className="pathway-helper-note">Anti-escalation cue: {fixture.prevention}</p>
      </section>

      <section className="pathway-quiet-section pathway-quiet-section--script" aria-label="Quick script">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.script} />
          One sentence if you need it
        </p>
        <p className="pathway-script-quote">{fixture.quickScript}</p>
        <p className="pathway-helper-note">Watch-out: {fixture.caution}</p>
      </section>

      <details className="pathway-disclosure pathway-disclosure--separated">
        <summary>
          <span>
            <span className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.recheck} />
              What you told us
            </span>
            <strong>Open the snapshot inputs only if you need to check the read.</strong>
          </span>
          <Icon className="pathway-icon pathway-icon--medium" name={semanticIconMap.drillIn} />
        </summary>
        <div className="pathway-recap-grid pathway-recap-grid--quiet">
          {recap.map((item) => (
            <div key={item.label} className="pathway-kpi-card pathway-kpi-card--compact pathway-kpi-card--quiet">
              <p className="pathway-index-card__meta">{item.label}</p>
              <h2 className="pathway-kpi-card__value">{item.value}</h2>
            </div>
          ))}
        </div>
      </details>

      <div className="scaffold-actions scaffold-actions--secondary scaffold-actions--quiet">
        <Link className="pathway-secondary-link pathway-secondary-link--quiet" href="/today/check-in">
          Re-run check-in
          <Icon className="pathway-icon" name={semanticIconMap.recheck} />
        </Link>
      </div>
    </ScaffoldPanel>
  );
}
