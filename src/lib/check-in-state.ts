export type ConnectionValue = 'close' | 'neutral' | 'distant';
export type TensionValue = 'calm' | 'uneasy' | 'heated';
export type CapacityValue = 'regulated' | 'strained' | 'overwhelmed';

export type CheckInValue = ConnectionValue | TensionValue | CapacityValue;

export type StateFixtureKey = 'steady' | 'heatedButReachable' | 'activatedAndFragile';

export interface StateFixture {
  label: string;
  summary: string;
  statePageNextMove: string;
  todayPageNextMove: string;
  nextHref: string;
  prevention: string;
  caution: string;
  quickScript: string;
  makeItWorse: string[];
}

export const fixtureByState: Record<StateFixtureKey, StateFixture> = {
  steady: {
    label: 'Connected with mild strain',
    summary: 'There is pressure, but goodwill is still active. Keep tonight short and practical so the tone stays stable.',
    statePageNextMove: 'Open Today and run the low-friction reset.',
    todayPageNextMove: 'Run the low-friction reset.',
    nextHref: '/today',
    prevention: 'Keep the next move simple; do not turn a manageable evening into a long debrief.',
    caution: 'Do not over-process when the temperature is already manageable.',
    quickScript: 'I want tonight to stay calm. Can we do one short reset and return tomorrow if we need more?',
    makeItWorse: ['Dragging this into a full post-mortem tonight', 'Piling on old receipts after a small miss'],
  },
  heatedButReachable: {
    label: 'Heated but reachable',
    summary: 'The system is strained, not broken. A calm first move can still lower pressure before more damage happens.',
    statePageNextMove: 'Open Today and start the first repair step now.',
    todayPageNextMove: 'Start the first repair step now.',
    nextHref: '/today',
    prevention: 'Use one short script before the next message if either of you is reactive.',
    caution: 'Do not send a blame wall in the next 30 minutes.',
    quickScript: 'I care about us and I do not want to make this worse. I am taking 20 minutes to reset, then I will come back calm.',
    makeItWorse: ['Sending a long reactive text chain', 'Demanding resolution while both of you are activated'],
  },
  activatedAndFragile: {
    label: 'Activated and fragile',
    summary: 'Escalation risk is high. Treat this as containment first, then repair once intensity drops.',
    statePageNextMove: 'Open Today and run the damage-stop entry point first.',
    todayPageNextMove: 'Run the damage-stop entry point first.',
    nextHref: '/today',
    prevention: 'Pause contact briefly, regulate, then return with one bounded sentence.',
    caution: 'No ultimatums, no scorekeeping, no late-night post-mortem tonight.',
    quickScript: 'I want to protect us, so I am stepping back for 30 minutes to cool down. I will come back and keep this respectful.',
    makeItWorse: ['Continuing while either person is flooded', 'Threats, ultimatums, or character attacks'],
  },
};

export const valueLabels: Record<CheckInValue, string> = {
  close: 'Close',
  neutral: 'Neutral',
  distant: 'Distant',
  calm: 'Calm',
  uneasy: 'Uneasy',
  heated: 'Heated',
  regulated: 'Regulated',
  strained: 'Strained',
  overwhelmed: 'Overwhelmed',
};

export function readValue<T extends string>(
  value: string | string[] | undefined,
  allowedValues: readonly T[],
  fallback: T,
): T {
  if (typeof value !== 'string') {
    return fallback;
  }

  return (allowedValues as readonly string[]).includes(value) ? (value as T) : fallback;
}

export function classifyState(
  connection: ConnectionValue,
  tension: TensionValue,
  capacity: CapacityValue,
): StateFixtureKey {
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

export function resolveStateFromCheckIn(
  connection: ConnectionValue,
  tension: TensionValue,
  capacity: CapacityValue,
): StateFixtureKey {
  return classifyState(connection, tension, capacity);
}