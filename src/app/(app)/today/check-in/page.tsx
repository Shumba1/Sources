import Link from 'next/link';

import { semanticIconMap } from '@/config/icon-map';
import { getPageData } from '@/config/page-data';
import { getRouteTitle } from '@/config/routes';
import { ScaffoldPanel } from '@/components/shell/shell-primitives';
import { Icon } from '@/components/ui/icon';

interface CheckInGridProps {
  row1: string[];
  row2: string[];
}

interface CheckInField {
  key: string;
  label: string;
  options: string[];
}

const checkInFields: CheckInField[] = [
  { key: 'connection', label: 'Connection', options: ['close', 'neutral', 'distant'] },
  { key: 'tension', label: 'Temperature', options: ['calm', 'uneasy', 'heated'] },
  { key: 'capacity', label: 'Capacity', options: ['regulated', 'strained', 'overwhelmed'] },
];

const optionCopy: Record<string, { label: string; detail: string }> = {
  close: { label: 'Close', detail: 'Some warmth, access, or goodwill is still easy to feel.' },
  neutral: { label: 'Neutral', detail: 'Things are not warm, but they are not shut down either.' },
  distant: { label: 'Distant', detail: 'Contact feels thin, flat, or harder to reach than it should.' },
  calm: { label: 'Calm', detail: 'The temperature is manageable enough for one constructive step.' },
  uneasy: { label: 'Uneasy', detail: 'Pressure is present, but the loop is not fully escalated yet.' },
  heated: { label: 'Heated', detail: 'One more exchange could easily make tonight worse.' },
  regulated: { label: 'Regulated', detail: 'You have enough capacity to take one measured step.' },
  strained: { label: 'Strained', detail: 'You can still act, but the margin is thinner than you want.' },
  overwhelmed: { label: 'Overwhelmed', detail: 'The system needs less load before it can take more process.' },
};

function toPrompt(raw: string): string {
  return raw
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
    .join(' · ');
}

export default function TodayCheckInPage() {
  const page = getPageData('todayCheckIn');
  const grid = ((page.sections.find((section) => section.key === 'checkin-grid')?.props ?? {}) as Partial<CheckInGridProps>);
  const prompts = [...(grid.row1 ?? []), ...(grid.row2 ?? [])].slice(0, 4);

  return (
    <ScaffoldPanel className="pathway-surface pathway-surface--checkin" title={getRouteTitle('todayCheckIn')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">60-second check-in</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <section className="pathway-card pathway-card--quiet pathway-card--section">
        <div className="pathway-section-head pathway-section-head--stacked">
          <div>
            <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
              <Icon className="pathway-icon" name={semanticIconMap.state} />
              Quick prompt set
            </p>
            <p className="pathway-section-intro">Pick the closest fit. Do not overthink the wording tonight.</p>
          </div>
        </div>
        <ul className="pathway-plain-list pathway-plain-list--tight">
          {prompts.map((prompt) => (
            <li key={prompt}>{toPrompt(prompt)}</li>
          ))}
        </ul>
      </section>

      <form action="/today/state" className="pathway-form-stack">
        {checkInFields.map((field) => (
          <fieldset key={field.key} className="pathway-card pathway-card--quiet pathway-card--section pathway-fieldset">
            <legend className="pathway-card__eyebrow">{field.label}</legend>
            <div className="pathway-choice-grid">
              {field.options.map((option, index) => {
                const copy = optionCopy[option];
                return (
                  <label key={option} className="pathway-choice-card">
                    <input
                      className="pathway-choice-card__input"
                      defaultChecked={index === 1}
                      name={field.key}
                      type="radio"
                      value={option}
                    />
                    <span className="pathway-choice-card__body">
                      <span aria-hidden="true" className="pathway-choice-card__indicator" />
                      <span className="pathway-choice-card__content">
                        <span className="pathway-choice-card__title">{copy.label}</span>
                        <span className="pathway-choice-card__detail">{copy.detail}</span>
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}

        <div className="scaffold-actions">
          <button className="pathway-button pathway-button--primary pathway-button--block" type="submit">
            {page.hero?.primaryCta?.label ?? 'See the Current State'}
          </button>
          <Link className="pathway-secondary-link" href={page.hero?.secondaryCta?.href ?? '/repair'}>
            {page.hero?.secondaryCta?.label ?? 'Go Straight to Repair'}
            <Icon className="pathway-icon" name={semanticIconMap.drillIn} />
          </Link>
        </div>
      </form>
    </ScaffoldPanel>
  );
}
