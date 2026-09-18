import Image from 'next/image';
import { Check, MapPin, BookOpen, Bell } from 'lucide-react';

export function Phone({ src, alt, priority = false, className = '', screen = 'today' }: {
  src: string | null; alt: string; priority?: boolean; className?: string; screen?: string;
}) {
  return <div className={`phone ${className}`}>
    {src ? <Image src={src} alt={alt} width={720} height={1600} sizes="(max-width: 700px) 72vw, 300px" priority={priority}/>
      : <div className="screen-illustration" role="img" aria-label={`Illustrated ${screen} example. ${alt}`}>
        <span className="illustration-label">ILLUSTRATED PREVIEW</span>
        {screen === 'reminders' ? <>
          <div className="illustration-heading"><MapPin size={19}/><strong>A little reminder.</strong></div>
          <div className="mini-map" aria-hidden="true"><div className="map-radius"/><MapPin className="map-pin" size={34}/><span className="map-place">Library</span></div>
          <div className="illustration-card"><Bell size={16}/><div><strong>You&apos;re at the library</strong><span>Pick up the reserved book.</span></div></div>
          <p>The task stays here<br/>until you tick it off.</p>
        </> : <>
          <div className="illustration-heading"><BookOpen size={20}/><strong>A clear next step.</strong></div>
          <span className="illustration-time">09:00 - 10:00 / STUDY</span>
          <h4>One lesson.<br/>One small win.</h4>
          <div className="illustration-card"><div><span>YOUR OUTPUT</span><strong>Finish lesson 3 and write five key ideas.</strong></div></div>
          <div className="illustration-card"><div><span>YOUR NOTES</span><strong>Keep a notebook nearby.</strong></div></div>
          <div className="illustration-card"><Check size={16}/><strong>2 lessons selected</strong></div>
        </>}
      </div>}
  </div>;
}
