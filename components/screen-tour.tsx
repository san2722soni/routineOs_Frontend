'use client';
import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowRight, Check, CheckCircle2, Layers3, CalendarDays, MapPin, SlidersHorizontal, LogIn } from 'lucide-react';
import type { TourScreen } from '../lib/media';
import { Phone } from './phone';

const icons = { today: CheckCircle2, plan: CalendarDays, library: Layers3, reminders: MapPin, settings: SlidersHorizontal, welcome: LogIn };

export function ScreenTour({ screens }: { screens: TourScreen[] }) {
  const [active, setActive] = useState(0);
  const [captureIndex, setCaptureIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const screen = screens[active];
  const capture = screen.captures[captureIndex] ?? screen.captures[0];
  const chooseTab = (index: number) => { setActive(index); setCaptureIndex(0); };
  const onTabKey = (event: KeyboardEvent, index: number) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % screens.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + screens.length) % screens.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = screens.length - 1;
    else return;
    event.preventDefault(); chooseTab(next); tabs.current[next]?.focus();
  };
  return <div className="screen-tour">
    <div className="tour-tabs" role="tablist" aria-label="Explore the app screens">
      {screens.map((item, index) => {
        const Icon = icons[item.id as keyof typeof icons];
        return <button key={item.id} ref={node => { tabs.current[index] = node; }} type="button" role="tab"
          id={`tab-${item.id}`} aria-controls={`panel-${item.id}`} aria-selected={active === index}
          tabIndex={active === index ? 0 : -1} onKeyDown={event => onTabKey(event, index)} onClick={() => chooseTab(index)}>
          <Icon size={16}/>{item.label}
        </button>;
      })}
    </div>
    <div id={`panel-${screen.id}`} role="tabpanel" aria-labelledby={`tab-${screen.id}`} tabIndex={0} className="tour-panel" key={screen.id}>
      <div className="tour-copy">
        <span className="feature-number">{screen.eyebrow}</span>
        <h3>{screen.headline}</h3><p>{screen.description}</p>
        <ul className="benefit-list">{screen.benefits.map(benefit => <li key={benefit}><Check size={16}/><span>{benefit}</span></li>)}</ul>
        <div className="tour-how"><span className="micro-label">HERE&apos;S ALL YOU DO</span>
          <ol>{screen.steps.map(step => <li key={step}>{step}</li>)}</ol>
        </div>
        <details className="feature-details"><summary>Everything in {screen.label}<ArrowRight size={15}/></summary>
          <ul>{screen.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
        </details>
      </div>
      <div className="tour-visual">
        <div className="tour-phone-stage"><div className="feature-circle"/><Phone src={capture.src} alt={capture.alt} screen={screen.id}/></div>
        <div className="capture-navigation" aria-label={`${screen.label} screenshots`}>
          {screen.captures.map((shot, index) => <button type="button" key={shot.path} aria-pressed={index === captureIndex}
            aria-label={`Show ${shot.label}`} onClick={() => setCaptureIndex(index)}>{String(index + 1).padStart(2, '0')}</button>)}
        </div>
        <p className="capture-caption" aria-live="polite">{capture.label}{!capture.src && <span> · Illustrated example</span>}</p>
      </div>
    </div>
  </div>;
}
