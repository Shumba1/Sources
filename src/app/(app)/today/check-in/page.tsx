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
    <ScaffoldPanel className="pathway-surface" title={getRouteTitle('todayCheckIn')}>
      <div className="pathway-surface__intro">
        <p className="scaffold-meta">60-second check-in</p>
        <p className="pathway-deck">{page.hero?.subtitle ?? page.intent}</p>
      </div>

      <section className="pathway-card pathway-card--quiet pathway-card--section">
        <p className="pathway-card__eyebrow pathway-eyebrow-with-icon">
          <Icon className="pathway-icon" name={semanticIconMap.state} />
          Quick prompt set
        </p>
        <ul className="pathway-plain-list pathway-plain-list--tight">
          {prompts.map((prompt) => (
            <li key={prompt}>{toPrompt(prompt)}</li>
          ))}
        </ul>
      </section>

      <form action="/today/state" className="pathway-form-stack">
        <div className="pathway-grid pathway-grid--duo">
          {checkInFields.map((field) => (
            <fieldset key={field.key} className="pathway-card pathway-card--quiet pathway-fieldset">
              <legend className="pathway-card__eyebrow">{field.label}</legend>
              <div className="pathway-chip-row pathway-chip-row--spacious">
                {field.options.map((option) => (
                  <label key={option} className="pathway-chip pathway-chip--interactive pathway-chip--choice">
                    <input
                      defaultChecked={option === field.options[1]}
                      name={field.key}
                      type="radio"
                      value={option}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="scaffold-actions">
          <button className="pathway-button pathway-button--primary" type="submit">
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
