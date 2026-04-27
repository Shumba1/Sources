import type { RepairCategorySlug } from '@/config/theme';
import type { StateFixtureKey } from './check-in-state';

export type RepairModuleSlug = 'after-the-fight' | 'distance-reset' | 'overwhelm-decompression';

export interface RepairTimelineStep {
  label: string;
  detail: string;
}

export interface RepairModule {
  slug: RepairModuleSlug;
  title: string;
  categorySlug: RepairCategorySlug;
  stateFit: StateFixtureKey[];
  summary: string;
  bestUsedWhen: string;
  notFor: string;
  resetLength: string;
  doFirst: string;
  checklist: string[];
  timeline: RepairTimelineStep[];
  caution: string;
  script: string;
  successCondition: string;
  relatedPerspective: string;
}

export const repairModules: RepairModule[] = [
  {
    slug: 'after-the-fight',
    title: '10-minute damage stop',
    categorySlug: 'stop-damage',
    stateFit: ['heatedButReachable', 'activatedAndFragile'],
    summary: 'Use this when the temperature is high and one more exchange could turn a hard moment into a worse pattern.',
    bestUsedWhen: 'Both of you are activated, defensive, or close to saying something that will be harder to repair later.',
    notFor: 'Situations involving abuse, coercion, threats, or immediate physical danger. In those cases, prioritise safety and outside support.',
    resetLength: '10 minutes tonight',
    doFirst: 'Stop the next reactive move. Do not send the next text, make the next accusation, or force the full conversation tonight.',
    checklist: [
      'Take 90 seconds away from the exchange before sending or saying anything else.',
      'Name the immediate goal: lower temperature, not win the argument.',
      'Use one short sentence that protects the relationship without surrendering your concern.',
      'Return only when you can keep your voice, message, or posture non-punishing.',
      'End with a specific revisit window if the issue still needs a real conversation.',
    ],
    timeline: [
      { label: '0–2 min', detail: 'Pause the exchange and regulate your body before you explain anything.' },
      { label: '2–6 min', detail: 'Write or say the one-sentence repair script. Keep it bounded.' },
      { label: '6–10 min', detail: 'Choose the revisit window or close the loop for tonight.' },
      { label: 'Tomorrow', detail: 'Recheck whether the pause reduced damage or merely postponed the same fight.' },
    ],
    caution: 'Do not use the pause as punishment. A repair pause needs a return point, otherwise it becomes withdrawal.',
    script: 'I care about us and I do not want to make this worse. I am taking 20 minutes to reset, then I will come back calmer.',
    successCondition: 'The next exchange is shorter, calmer, and less damaging than the one you were about to have.',
    relatedPerspective: 'Why the first repair move is usually containment, not full resolution.',
  },
  {
    slug: 'distance-reset',
    title: 'Distance reset',
    categorySlug: 'restore-bond',
    stateFit: ['steady', 'heatedButReachable'],
    summary: 'Use this when things feel cold, polite, or disconnected, but the moment is not explosive.',
    bestUsedWhen: 'There is distance, low warmth, or avoidance, but enough goodwill remains for a small reconnection move.',
    notFor: 'Moments where either person is flooded, contemptuous, threatening to leave, or actively escalating.',
    resetLength: '12 minutes tonight',
    doFirst: 'Offer a small signal of goodwill before asking for analysis, reassurance, or a heavy conversation.',
    checklist: [
      'Choose one low-pressure contact point: tea, a walk, a kind sentence, or sitting nearby without interrogation.',
      'Do not open with “we need to talk”. Start with warmth before content.',
      'Name one thing you still value without asking for immediate reciprocity.',
      'Ask one practical question about tomorrow, not the whole relationship.',
      'Stop while the exchange is still clean rather than stretching it until it collapses.',
    ],
    timeline: [
      { label: '0–3 min', detail: 'Drop the performance pressure. Make the room easier to be in.' },
      { label: '3–8 min', detail: 'Use one warmth signal and one practical question.' },
      { label: '8–12 min', detail: 'Close the exchange before it becomes a relationship hearing.' },
      { label: '48 hours', detail: 'Look for one more small bid, not proof that everything is fixed.' },
    ],
    caution: 'Do not demand closeness as proof. Pressure turns distance into defence.',
    script: 'I know we have felt a bit far apart. I do not want to force a big talk tonight, but I would like to be a little kinder with each other.',
    successCondition: 'There is a small increase in ease, warmth, or cooperation without forcing a full debrief.',
    relatedPerspective: 'How small bids protect the bond before the bigger conversation is possible.',
  },
  {
    slug: 'overwhelm-decompression',
    title: 'Overwhelm decompression',
    categorySlug: 'overload-life-phase',
    stateFit: ['steady', 'heatedButReachable', 'activatedAndFragile'],
    summary: 'Use this when stress, logistics, money, parenting, work, or exhaustion is swallowing connection.',
    bestUsedWhen: 'The relationship problem is being amplified by load, fatigue, or practical pressure.',
    notFor: 'Situations where the main issue is betrayal, coercive control, safety risk, or repeated contempt.',
    resetLength: '8 minutes tonight',
    doFirst: 'Separate load from character. Treat the pressure as a system problem before you diagnose each other as the problem.',
    checklist: [
      'Name the load in neutral terms: tired, overloaded, stretched, under pressure.',
      'Remove one non-essential demand from tonight if possible.',
      'Pick one practical handoff, not a full fairness audit.',
      'Use one appreciation sentence before logistics if you can do it honestly.',
      'Schedule the real planning conversation when both of you have capacity.',
    ],
    timeline: [
      { label: '0–2 min', detail: 'Name the load without blaming a person.' },
      { label: '2–5 min', detail: 'Remove or postpone one pressure point from tonight.' },
      { label: '5–8 min', detail: 'Agree the next practical handoff or revisit window.' },
      { label: 'This week', detail: 'Check whether load is repeatedly masquerading as lack of love.' },
    ],
    caution: 'Do not turn exhaustion into a referendum on the relationship. Capacity first, meaning second.',
    script: 'I think we are both overloaded. I do not want to turn the pressure into a fight about us. Can we remove one thing from tonight and plan properly later?',
    successCondition: 'The pressure reduces enough that the relationship stops carrying the whole weight of the logistics.',
    relatedPerspective: 'Why overloaded systems misread fatigue as rejection.',
  },
];

export const repairModuleBySlug = Object.fromEntries(
  repairModules.map((module) => [module.slug, module]),
) as Record<RepairModuleSlug, RepairModule>;

export const defaultRepairSlugByState: Record<StateFixtureKey, RepairModuleSlug> = {
  steady: 'distance-reset',
  heatedButReachable: 'after-the-fight',
  activatedAndFragile: 'after-the-fight',
};

export function isRepairModuleSlug(slug: string): slug is RepairModuleSlug {
  return Object.hasOwn(repairModuleBySlug, slug);
}

export function getRepairModule(slug: string) {
  return isRepairModuleSlug(slug) ? repairModuleBySlug[slug] : null;
}

export function getDefaultRepairModuleForState(state: StateFixtureKey) {
  return repairModuleBySlug[defaultRepairSlugByState[state]];
}
