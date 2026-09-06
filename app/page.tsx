import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Bell, Check, CheckCheck, Dumbbell, GraduationCap, Layers3, LockKeyhole, MapPin, Moon, Play, Radio, Sparkles, WifiOff, X } from 'lucide-react';
import { Parallax } from '../components/parallax';
import { Phone } from '../components/phone';
import { SiteHeader } from '../components/site-header';

const downloadUrl = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL;
const audiences = [
  { icon: GraduationCap, label: 'CAMPUS MODE', title: 'Less timetable.\nMore actual studying.', text: 'Keep lectures, deep work and your next study video together. Arrive at the library. Remember what you came to do.', tag: 'For the semester you actually finish.' },
  { icon: Dumbbell, label: 'TRAINING MODE', title: 'Make room for reps.\nAnd recovery.', text: 'Build training into your routine. An 18-hour planning cap leaves at least six hours unplanned. Rest belongs in your system, too.', tag: 'Consistency includes taking a breath.' },
  { icon: MapPin, label: 'REAL LIFE MODE', title: 'Your brain has\nenough tabs open.', text: 'Milk at the supermarket. A book at the library. Save a place, attach a reminder, and let arriving bring it back to you.', tag: 'Remember where it matters.' },
];
const differences = [
  ['An endless list of things you should do', 'A finite day you can actually follow'],
  ['Rebuilding the same plan every morning', 'Reusable routines. Decide once, repeat.'],
  ['A broken streak feels like starting over', 'An honest record. Every day is a fresh day.'],
  ['Reminders that only know what time it is', 'Reminders that know you reached a place'],
];
export default function HomePage() {
  return <main id="top">
    <a className="skip-link" href="#philosophy">Skip to content</a>
    <SiteHeader downloadUrl={downloadUrl}/>
    <section className="hero grid-surface">
      <div className="hero-orbit" aria-hidden="true"/>
      <div className="shell hero-layout">
        <div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> A LITTLE STRUCTURE. A LOT MORE LIFE.</div>
          <h1>Stop<br/><span className="muted-word">replanning.</span><br/>Start <span className="accent">executing.</span></h1>
          <p>The anti-productivity productivity app.<br/>Build your routine. Lock the day. Get on with living it.</p>
          <div className="hero-actions"><a href={downloadUrl || '#product'} className="button">{downloadUrl ? 'Get RoutineOS' : 'Explore RoutineOS'}<ArrowUpRight size={18}/></a><a className="text-link" href="#philosophy">Find your rhythm <ArrowDown size={16}/></a></div>
          <div className="hero-principles"><span><Check size={13}/> No streak guilt</span><span><Check size={13}/> Local first</span><span><Check size={13}/> Real life ready</span></div>
        </div>
        <div className="hero-product"><div className="orbit-label orbit-label-top">YOUR DAY. WITH DIRECTION.</div>
          <Parallax distance={75} className="hero-back-phone"><Phone src="plan.jpg" alt="RoutineOS Plan screen with a prepared daily routine"/></Parallax>
          <Parallax distance={-40} className="hero-main-phone"><Phone src="today_up.jpg" alt="RoutineOS Today screen showing the day's activities and current progress" priority/></Parallax>
          <Parallax distance={25} className="floating-note"><div className="note-icon"><LockKeyhole size={17}/></div><div><strong>Decided last night.</strong><span>Doing it today.</span></div><CheckCheck size={18}/></Parallax>
          <span className="product-coordinate">01 / THE EXECUTION LAYER</span>
        </div>
      </div>
      <div className="shell hero-bottom"><span>DESIGNED FOR YOUR LIFE, NOT YOUR STREAK.</span><a href="#philosophy">SCROLL TO BREAK THE LOOP <ArrowDownRight size={17}/></a></div>
    </section>
    <div className="statement-strip"><span>BUILD THE ROUTINE</span><Sparkles/><span>LOCK THE DAY</span><Sparkles/><span>LIVE YOUR LIFE</span><Sparkles/><span className="strip-extra">REPEAT, WITHOUT THE GUILT</span></div>
    <section id="philosophy" className="shell section philosophy">
      <div className="section-meta"><span>01 / THE PHILOSOPHY</span><span>LESS FRICTION. MORE FOLLOW-THROUGH.</span></div>
      <div className="philosophy-grid"><h2>You don’t need<br/>a better to-do list.<br/><span className="muted-word">You need to stop<br/>rewriting it.</span></h2><div className="manifesto"><span className="asterisk" aria-hidden="true">✳</span><p>You know the loop. Download an app. Build the perfect system. Spend more time planning your life than living it.</p><p>RoutineOS closes that loop. Give tomorrow a shape tonight. When today arrives, the decisions are already made.</p><p className="manifesto-end">A little less “what should I do?”<br/>A lot more <span>“let’s do this.”</span></p></div></div>
      <div className="workflow">{[{icon: Layers3, n: '01', title: 'Build it once.', text: 'Your study blocks, training, work and downtime. Make a routine that fits your actual life.'}, {icon: LockKeyhole, n: '02', title: 'Lock it in.', text: 'Pick your videos. Write the goal. Give tomorrow a clear beginning and an end.'}, {icon: Play, n: '03', title: 'Show up.', text: 'Follow the day as it happens. Mark what you did. Leave the guilt out of it.'}].map(({icon: Icon,n,title,text}) => <article key={n}><div className="workflow-top"><Icon size={24}/><span>{n}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section id="product" className="product-section grid-surface">
      <div className="shell section"><div className="section-meta"><span>02 / LESS APP. MORE ACTION.</span><span>ACTUAL SCREENS. ACTUAL PURPOSE.</span></div><h2>Everything has a place.<br/><span className="muted-word">Including you.</span></h2>
        <div className="feature-stage"><div className="feature-copy"><span className="feature-number">01 — TODAY</span><h3>Your day.<br/>Already decided.</h3><p>Open the app and see what matters now. A live timeline, your current block, and an honest view of what got done.</p><ul><li><Radio/> Follows the clock, not your last tap</li><li><CheckCheck/> Done, skipped, and a fresh start tomorrow</li><li><Moon/> Progress without the streak pressure</li></ul><span className="hand-note">Less negotiating with yourself. ↗</span></div><div className="feature-visual today-visual"><div className="feature-circle"/><Parallax distance={55}><Phone src="today_up.jpg" alt="Today: live activity blocks and completion progress"/></Parallax><span className="visual-tag"><span className="live-dot"/> THIS IS YOUR NOW</span></div></div>
        <div className="feature-stage reverse"><div className="feature-copy"><span className="feature-number">02 — PLAN</span><h3>Tomorrow called.<br/>You’ve got a plan.</h3><p>Start from a routine. Choose the videos you’ll work through. Add a goal and your notes. Then lock it in and close the app.</p><ul><li><LockKeyhole/> Structure that stays put</li><li><Play/> Your learning, attached to the block</li><li><Moon/> Up to 18 planned hours. Leave room for life.</li></ul></div><div className="feature-visual plan-visual"><div className="feature-circle"/><Parallax distance={-45}><Phone src="plan.jpg" alt="Plan: prepare tomorrow using a reusable routine"/></Parallax><span className="visual-tag"><LockKeyhole size={14}/> FUTURE YOU SAYS THANKS</span></div></div>
        <div className="small-showcases"><article><div className="small-shot"><Parallax distance={30}><Phone src="library_routine.jpg" alt="Library: reusable routines"/></Parallax></div><span className="feature-number">03 — LIBRARY</span><h3>Your system, on repeat.</h3><p>Routines, areas and video lists. Build once and keep the parts that work.</p></article><article><div className="small-shot"><Parallax distance={-25}><Phone src="today_down.jpg" alt="Today: completed activities and daily progress"/></Parallax></div><span className="feature-number">04 — REMINDERS</span><h3>See what actually happened.</h3><p>Save a location and what you need to do there. It stays on your list until it’s done.</p></article><article><div className="small-shot"><Parallax distance={35}><Phone src="settings.jpg" alt="Settings: profile, appearance and reminders"/></Parallax></div><span className="feature-number">05 — YOUR PREFERENCES</span><h3>Make yourself at home.</h3><p>Your theme, your notifications, your backup. A system you can make your own.</p></article></div>
      </div>
    </section>
    <section className="shell section screen-gallery" aria-labelledby="gallery-title">
      <div className="section-meta"><span>INSIDE YOUR EVERYDAY SYSTEM</span><span>SCROLL THROUGH THE DETAILS</span></div>
      <h2 id="gallery-title">Your routine.<br/><span className="muted-word">Down to the little things.</span></h2>
      <p className="gallery-intro">From your first sign-in to the videos in your next block. Everything belongs to the same simple system.</p>
      <div className="screen-rail" tabIndex={0} role="region" aria-label="App screenshot gallery; scroll horizontally for all six screens">
        {[
          ['sgin_in.jpg', '01 / GET STARTED', 'A place to begin.'],
          ['libraryr_area.jpg', '02 / YOUR AREAS', 'Give your priorities a home.'],
          ['edit_routine.jpg', '03 / ROUTINE EDITOR', 'Build a day that fits.'],
          ['library_videos.jpg', '04 / VIDEO LIBRARY', 'Keep your learning together.'],
          ['library_videos_list.jpg', '05 / YOUR NEXT LESSON', 'Pick up where you left off.'],
          ['settings_down.jpg', '06 / MORE PREFERENCES', 'The details, your way.'],
        ].map(([src, label, caption]) => <figure key={src}><div className="gallery-phone"><Phone src={src} alt={caption}/></div><figcaption><span className="feature-number">{label}</span><h3>{caption}</h3></figcaption></figure>)}
      </div>
    </section>
    <section id="life" className="shell section"><div className="section-meta"><span>03 / BUILT FOR THE IN-BETWEEN</span><span>YOU ARE MORE THAN YOUR TASK LIST.</span></div><h2>For the semester.<br/>The next set.<br/><span className="accent">And everything after.</span></h2><div className="audience-grid">{audiences.map(({icon: Icon,label,title,text,tag}) => <article key={label}><Icon size={28}/><span className="audience-label">{label}</span><h3>{title}</h3><p>{text}</p><span className="audience-tag">{tag}</span></article>)}</div></section>
    <section className="difference-section"><div className="shell section"><div className="section-meta"><span>04 / A DIFFERENT KIND OF PRODUCTIVITY</span></div><div className="comparison-heading"><h2>Less managing tasks.<br/><span className="muted-word">More doing your thing.</span></h2><p>A different philosophy for the days<br/>that don’t go perfectly. So, most days.</p></div><div className="comparison"><div className="comparison-labels"><span>THE TO-DO LIST LOOP</span><span className="accent">THE ROUTINEOS WAY ↗</span></div>{differences.map(([before,after]) => <div className="comparison-row" key={before}><span><X size={16}/>{before}</span><span><Check size={16}/>{after}</span></div>)}</div><div className="offline-note"><WifiOff size={20}/><p><strong>Life doesn’t wait for Wi-Fi.</strong> Your routine and saved reminders live on your phone. Cloud backup happens when you reconnect.</p></div></div></section>
    <section className="shell section faq-section"><div><span className="feature-number">A FEW THINGS, BEFORE YOU GO</span><h2>Good questions.</h2></div><div className="faq-list">{[
      ['What happens if I miss a block?', 'It becomes part of an honest record. Mark it done if you finished, or leave it skipped. There is no streak to protect and no need to restart your entire system.'],
      ['Can I change a locked plan?', 'Prepare your goals, notes and video choices before you lock the plan. The locked structure stays fixed so Today can focus on execution. Edit reusable routines in Library for future days.'],
      ['Do place reminders work offline?', 'Saved places and tasks are stored on your phone, and arrival alerts are local notifications. Searching for a new place needs a connection. Arrival detection depends on your phone’s location services, background permission and battery settings; offline detection can be less reliable.'],
      ['Why an 18-hour planning cap?', 'Because filling every minute is not the goal. RoutineOS caps planned blocks at 18 hours, leaving room outside the schedule. Choose more rest whenever you need it.'],
    ].map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    <section className="final-cta grid-surface"><div className="shell"><span className="eyebrow"><span className="live-dot"/> YOUR NEXT DAY STARTS HERE</span><h2>A routine for life.<br/><span className="accent">Not a life of routines.</span></h2><p>Decide what matters. Give it a place. Go live it.</p><a href={downloadUrl || '#product'} className="button">{downloadUrl ? 'Get RoutineOS' : 'Take a look inside'}<ArrowUpRight size={19}/></a><span className="cta-footnote">LESS GUILT. MORE FOLLOW-THROUGH.</span></div></section>
    <footer className="shell footer"><a href="#top" className="wordmark"><span className="brand-icon">r.</span>routine<span className="wordmark-os">OS</span></a><span>Built for imperfect people with good intentions.</span><div><a href="/legal/privacy.html">Privacy</a><a href="/legal/terms.html">Terms</a><a href="#top" aria-label="Back to top"><ArrowUpRight size={18}/></a></div></footer>
  </main>;
}
