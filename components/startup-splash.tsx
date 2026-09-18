'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const message = 'Own the day before it owns you.';

export function StartupSplash() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [leaving, setLeaving] = useState(false);
  const skip = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try { if (sessionStorage.getItem('routineos-intro-seen')) return; } catch { /* Storage is optional. */ }
    setVisible(true);
  }, []);
  useEffect(() => {
    if (!visible) return;
    const content = document.getElementById('site-content');
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    content?.setAttribute('inert', ''); document.body.style.overflow = 'hidden';
    skip.current?.focus({ preventScroll:true });
    let index = 0;
    let typing: ReturnType<typeof setInterval>;
    const start = setTimeout(() => { typing = setInterval(() => {
      setText(message.slice(0, ++index));
      if (index >= message.length) clearInterval(typing);
    }, 42); }, 500);
    const fade = setTimeout(() => setLeaving(true), 500 + message.length * 42 + 650);
    const end = setTimeout(() => setVisible(false), 500 + message.length * 42 + 1100);
    return () => {
      clearTimeout(start); clearTimeout(fade); clearTimeout(end); clearInterval(typing);
      content?.removeAttribute('inert'); document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll:true });
      try { sessionStorage.setItem('routineos-intro-seen', '1'); } catch { /* Storage is optional. */ }
    };
  }, [visible]);
  if (!visible) return null;
  return <div className={`startup-splash${leaving ? ' splash-leaving' : ''}`} role="dialog" aria-modal="true" aria-label="Welcome to RoutineOS" onKeyDown={event => {
    if (event.key === 'Escape') setVisible(false);
    if (event.key === 'Tab') { event.preventDefault(); skip.current?.focus(); }
  }}>
    <div className="splash-content"><Image src="/assets/brand/confident.svg" alt="" width={220} height={205} priority/>
      <p aria-label={message}><span aria-hidden="true">{text}</span></p><span className="splash-cursor" aria-hidden="true"/>
    </div>
  </div>;
}
