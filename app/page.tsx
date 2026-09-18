import { ArrowDown, ArrowUpRight, Bell, BookOpen, Check, CheckCheck, Download, Layers3, LockKeyhole, MapPin, Sparkles, WifiOff } from 'lucide-react';
import { Parallax } from '../components/parallax';
import { Phone } from '../components/phone';
import { ScreenTour } from '../components/screen-tour';
import { SiteHeader } from '../components/site-header';
import { StartupSplash } from '../components/startup-splash';
import { getTourScreens, publicUrl } from '../lib/media';
import { ApkDownload } from '../components/apk-download';

const guideUrl = '/assets/guide/routineos-quick-guide.pdf';
const faqs = [
  ['Do I need to be good at planning?', 'No. Start with one area, like Study, and a routine with two or three activities. An area is just a label; a routine is a reusable schedule. Plan adds the specific goal for a day, and Today helps you follow it. Add more when it becomes useful.'],
  ['Can I plan today, or only tomorrow?', 'Both. If today has no finalized plan, Plan prepares today. Once today is planned, it prepares tomorrow. The app picks a routine for that weekday, and you can choose a different one before finalizing.'],
  ['What happens if my day does not go to plan?', 'Mark what you finished, leave a missed activity skipped, and undo a mark if you need to. There is no streak to lose. A locked plan stays fixed; edit your reusable routine for future days. The 18-hour planning cap leaves some time outside the schedule, but you choose how much rest to make room for.'],
  ['Will reminders work with the app closed or offline?', 'Saved plans, places and tasks stay on your phone. Block start/end push alerts need internet and a synced locked plan. Arrival reminders need location access, including background access. They use push online with a local fallback if queuing fails; repeat reminders are local. Android can delay detection or repeats, especially offline or under battery restrictions. Keep the app in the background for reliability, and reopen it after Force stop.'],
  ['Will it remind me again if a place task is unfinished?', 'The task stays attached to its place until you complete it. While the phone considers you inside the saved radius, it requests a repeat roughly every two minutes. Android may delay this; it is not an exact timer. Completion or a detected exit stops the repeats.'],
  ['How do backup and changing phones work?', 'Changes save locally first. Automatic backup runs every five minutes while you are online and the app is active, and catches up when you return. Back Up Now is in Settings. Sign in to restore backed-up data. One device is active per account, so signing in on another phone signs out the previous one. Back up before uninstalling.'],
  ['What do I need to get started?', 'An Android phone (Android 7 or later), your own email account, and internet for sign-in and setup. YouTube imports, place search, cloud backup and push alerts also need a connection. Phone settings affect notification delivery. This is an Android beta; iPhone is not currently offered.'],
];

export default function HomePage() {
  const screens = getTourScreens();
  const today = screens.find(screen => screen.id === 'today')!.captures[0];
  const plan = screens.find(screen => screen.id === 'plan')!.captures[0];
  const map = screens.find(screen => screen.id === 'reminders')!.captures[1];
  const downloadUrl = publicUrl(process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL);

  return <>
    <StartupSplash/>
    <div id="site-content">
      <a className="skip-link" href="#how-it-works">Skip to content</a>
      <SiteHeader downloadUrl={downloadUrl}/>
      <main id="top">
        <section className="hero grid-surface" aria-labelledby="hero-title">
          <div className="hero-orbit" aria-hidden="true"/>
          <div className="shell hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="live-dot"/> A LITTLE STRUCTURE. A LOT MORE LIFE.</div>
              <h1 id="hero-title">Stop<br/><span className="muted-word">replanning.</span><br/>Start <span className="accent">executing.</span></h1>
              <p>Your study, work, training and everyday errands.<br/>One reusable routine. A clear next step. A reminder when you get there.</p>
              <div className="hero-actions">
                <ApkDownload url={downloadUrl}/>
                <a className="text-link" href={guideUrl} download>Get the quick guide <Download size={15}/></a>
              </div>
              <div className="hero-principles"><span><Check size={13}/> No streak guilt</span><span><Check size={13}/> Local first</span><span><Check size={13}/> Android beta</span></div>
            </div>
            <div className="hero-product">
              <div className="orbit-label">YOUR DAY. WITH DIRECTION.</div>
              <Parallax distance={45} className="hero-back-phone"><Phone src={plan.src} alt={plan.alt}/></Parallax>
              <Parallax distance={-25} className="hero-main-phone"><Phone src={today.src} alt={today.alt} priority/></Parallax>
              <Parallax distance={18} className="floating-note"><div className="note-icon"><LockKeyhole size={17}/></div><div><strong>Decided once.</strong><span>Ready when you are.</span></div><CheckCheck size={18}/></Parallax>
              <span className="product-coordinate">A ROUTINE FOR LIFE.</span>
            </div>
          </div>
          <div className="shell hero-bottom"><span>FOR IMPERFECT DAYS AND GOOD INTENTIONS.</span><a href="#how-it-works">FIND YOUR RHYTHM <ArrowDown size={15}/></a></div>
        </section>

        <div className="statement-strip" aria-hidden="true"><span>BUILD THE ROUTINE</span><Sparkles size={15}/><span>LOCK THE DAY</span><Sparkles size={15}/><span>LIVE YOUR LIFE</span></div>

        <section id="how-it-works" className="shell section" aria-labelledby="how-title">
          <div className="section-meta"><span>01 / MAKE IT SIMPLE</span><span>STUDY. TRAINING. WORK. LIFE.</span></div>
          <div className="section-heading"><h2 id="how-title">Less mental juggling.<br/><span className="muted-word">More following through.</span></h2><p>You already know what matters. RoutineOS helps you stop rebuilding the same plan, find the next lesson, and remember the errand at the right place.</p></div>
          <div className="vocabulary-grid">
            {[
              ['01', 'Area', 'A part of your life.', 'Study', 'Give related activities one name and color.'],
              ['02', 'Routine', 'A schedule you can reuse.', 'My weekday', 'Add activities and times. Pick the weekdays it fits.'],
              ['03', 'Plan', 'One specific day.', 'Tuesday: finish lesson 3', 'Choose videos, add an output and notes, then finalize.'],
              ['04', 'Today', 'The day you actually do.', '9:00: study time', 'Follow the timeline. Tick things off. Keep going.'],
            ].map(([number, title, meaning, example, detail]) => <article key={number}><span className="step-number">{number}</span><h3>{title}</h3><p className="term-meaning">{meaning}</p><span className="example-chip">{example}</span><p>{detail}</p></article>)}
          </div>
          <p className="start-small"><Sparkles size={16}/><span>Start with <strong>one area and three activities.</strong> You can build the rest as you go.</span></p>
        </section>

        <section id="product" className="product-section grid-surface" aria-labelledby="tour-title">
          <div className="shell section">
            <div className="section-meta"><span>02 / TAKE A LOOK INSIDE</span><span>EVERY SCREEN. ONE SIMPLE SYSTEM.</span></div>
            <div className="section-heading"><h2 id="tour-title">Everything has a place.<br/><span className="muted-word">Including your next step.</span></h2><p>Choose a screen to see what it does for you. The small numbered buttons show the details inside each screen.</p></div>
            <ScreenTour screens={screens}/>
          </div>
        </section>

        <section id="places" className="shell section location-section" aria-labelledby="places-title">
          <div className="location-copy"><span className="feature-number">03 / A REMINDER WITH A PLACE</span><h2 id="places-title">The right nudge.<br/><span className="accent">Right where you need it.</span></h2>
            <p>You get to the supermarket and forget the one thing you came for. Give that thought a place before you leave.</p>
            <ol className="location-steps"><li><MapPin size={18}/><span><strong>Find it.</strong> Search, tap the map or use your position.</span></li><li><Layers3 size={18}/><span><strong>Save it.</strong> Pick a radius. Add “buy milk.”</span></li><li><Bell size={18}/><span><strong>Remember it.</strong> Get an arrival nudge; tick it off when done.</span></li></ol>
            <p className="small-print">Allow background location and notifications in Settings. Android and battery settings can affect timing.</p>
          </div>
          <div className="location-visual"><div className="location-ring"/><Phone src={map.src} alt={map.alt} screen="reminders"/><div className="place-note"><span className="live-dot"/> SAVE THE PLACE. LET GO OF THE MENTAL NOTE.</div></div>
        </section>

        <section id="learn" className="learn-section" aria-labelledby="learn-title">
          <div className="shell section">
            <div className="section-meta"><span>04 / YOUR FIRST DAY STARTS HERE</span><span>YOUR PACE. YOUR FIRST STEP.</span></div>
            <div className="learn-grid"><div className="learn-copy"><h2 id="learn-title">You don&apos;t need<br/><span className="muted-word">a perfect system.</span></h2><p>Start with one area and a few activities. The screenshots show you around; the short guide walks you from your first routine to your first locked day.</p>
              <div className="download-actions"><ApkDownload url={downloadUrl}/></div>
            </div>
              <div className="guide-card"><BookOpen size={24}/><div><h3>Keep a little help handy.</h3><p>A short, illustrated guide. Every screen, explained in plain language.</p><a href={guideUrl} download className="text-link">Download the PDF guide <Download size={15}/></a></div></div>
            </div>
          </div>
        </section>

        <section className="shell section faq-section" aria-labelledby="faq-title"><div><span className="feature-number">THE EVERYDAY QUESTIONS</span><h2 id="faq-title">Good questions.</h2><div className="offline-note"><WifiOff size={21}/><p>Your saved day stays with you.<br/>Even when the signal doesn&apos;t.</p></div></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

        <section className="final-cta grid-surface"><div className="shell"><span className="eyebrow">A LITTLE LESS “WHAT SHOULD I DO?”</span><h2>A routine for life.<br/><span className="accent">Not a life of routines.</span></h2><p>Make a small plan. Give it a real day. See how it feels.</p><div className="final-actions"><ApkDownload url={downloadUrl}/><a href={guideUrl} download className="text-link">Download guide <Download size={15}/></a></div></div></section>
      </main>
      <footer className="shell footer"><a href="#top" className="wordmark"><span className="brand-icon">r.</span>routine<span className="wordmark-os">OS</span></a><span>Built for imperfect people with good intentions.</span><div><a href="/legal/privacy.html">Privacy</a><a href="/legal/terms.html">Terms</a><a href={guideUrl} download>Guide</a><a href="#top" aria-label="Back to top"><ArrowUpRight size={17}/></a></div></footer>
    </div>
  </>;
}
