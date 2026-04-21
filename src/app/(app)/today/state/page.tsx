import Link from 'next/link';

import { semanticIconMap } from '@/config/icon-map';
import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon } from '@/components/ui/icon';

type CheckInValue = 'close' | 'neutral' | 'distant' | 'calm' | 'uneasy' | 'heated' | 'regulated' | 'strained' | 'overwhelmed';

type StateFixtureKey = 'steady' | 'heatedButReachable' | 'activatedAndFragile';

interface StateFixture {
  label: string;
  summary: string;
  nextMove: string;
  nextHref: string;
  prevention: string;
  caution: string;
}

const fixtureByState: Record<StateFixtureKey, StateFixture> = {
  steady: {
    label: 'Connected with mild strain',
    summary: 'There is tension, but goodwill is active. Keep tonight short and practical so the tone stays stable.',
    nextMove: 'Open Today and run the low-friction reset.',
    nextHref: '/today',
    prevention: 'Keep the check-in short; avoid reopening old fights tonight.',
    caution: 'Don’t over-process when the temperature is already manageable.',
  },
  heatedButReachable: {
    label: 'Heated but reachable',
    summary: 'The system is strained, not broken. A calm first move can still lower pressure before more damage happens.',
    nextMove: 'Open Today and start the first repair step now.',
    nextHref: '/today',
    prevention: 'Use one short script before the next message if either of you is reactive.',
    caution: 'Do not send a blame wall in the next 30 minutes.',
  },
  activatedAndFragile: {
    label: 'Activated and fragile',
    summary: 'Escalation risk is high. Treat this as containment first, then repair once intensity drops.',
    nextMove: 'Open Today and run the damage-stop entry point first.',
    nextHref: '/today',
    prevention: 'Pause contact briefly, regulate, then return with one bounded sentence.',
    caution: 'No ultimatums, no scorekeeping, no late-night post-mortem tonight.',
  },
};

function readValue(
  value: string | string[] | undefined,
  fallback: CheckInValue,
): CheckInValue {
  if (typeof value !== 'string') {
    return fallback;
  }

  return value as CheckInValue;
}

function classifyState(connection: CheckInValue, tension: CheckInValue, capacity: CheckInValue): StateFixtureKey {
  const highHeat = tension === 'heated';
  const lowConnection = connection === 'distant';
  const lowCapacity = capacity === 'overwhelmed';

  if ((highHeat && lowConnection) || (highHeat && lowCapacity)) {
    return 'activatedAndFragile';
  }

  if (highHeat || tension === 'uneasy' || connection === 'neutral' || capacity === 'strained') {
    return 'heatedButReachable';
  }

  return 'steady';
}

interface TodayStatePageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function TodayStatePage({ searchParams }: TodayStatePageProps) {
  const page = getPageData('todayState');
  const params = searchParams ? await searchParams : {};

  const connection = readValue(params.connection, 'neutral');
  const tension = readValue(params.tension, 'uneasy');
  const capacity = readValue(params.capacity, 'strained');

  const fixture = fixtureByState[classifyState(connection, tension, capacity)];

  return (
    <ScaffoldPanel className="pathway-surface" title={getRouteTitle('todayState')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">Local fixture result</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <Link className="pathway-primary-cta" href={fixture.nextHref}>
        <div className="pathway-primary-cta__content">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.nextAction} />
            Next move
          </p>
          <h2>{fixture.nextMove}</h2>
          <p className="pathway-helper-note pathway-helper-note--contrast">One clear step keeps this from turning into another loop.</p>
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

        <section className="pathway-card pathway-card--quiet">
          <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
            <Icon className="pathway-icon" name={semanticIconMap.caution} />
            Anti-escalation cue
          </p>
          <p>{fixture.prevention}</p>
          <p className="pathway-helper-note">Watch-out: {fixture.caution}</p>
        </section>
      </div>

      <div className="scaffold-actions scaffold-actions--secondary">
        <Link className="pathway-secondary-link" href="/today/check-in">
          Re-run check-in
          <Icon className="pathway-icon" name={semanticIconMap.recheck} />
        </Link>
      </div>
    </ScaffoldPanel>
  );
}
