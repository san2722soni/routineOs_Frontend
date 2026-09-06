'use client';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
const links = [['The philosophy', '#philosophy'], ['Inside the app', '#product'], ['For real life', '#life']];
export function SiteHeader({ downloadUrl }: { downloadUrl?: string }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell nav-row">
    <a href="#top" aria-label="RoutineOS home" className="wordmark"><span className="brand-icon">r.</span>routine<span className="wordmark-os">OS</span></a>
    <nav aria-label="Main navigation" className="desktop-nav">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <a className="button button-small nav-cta" href={downloadUrl || '#product'}>{downloadUrl ? 'Get the app' : 'Meet your new routine'}<ArrowUpRight size={15}/></a>
    <Button className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</Button>
  </div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}</header>;
}
