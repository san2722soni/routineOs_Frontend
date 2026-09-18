'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ApkDownload } from './apk-download';
const links = [['How it works', '#how-it-works'], ['Inside the app', '#product'], ['Quick start', '#learn']];
export function SiteHeader({ downloadUrl }: { downloadUrl?: string }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell nav-row">
    <a href="#top" aria-label="RoutineOS home" className="wordmark"><span className="brand-icon">r.</span>routine<span className="wordmark-os">OS</span></a>
    <nav aria-label="Main navigation" className="desktop-nav">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <ApkDownload url={downloadUrl} className="button-small nav-cta"/>
    <Button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</Button>
  </div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}</header>;
}
