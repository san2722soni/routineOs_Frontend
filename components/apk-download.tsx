import { Download } from 'lucide-react';

export function ApkDownload({ url, className = '' }: { url?: string; className?: string }) {
  const content = <>Download APK <Download size={17}/></>;
  return url
    ? <a href={url} className={`button ${className}`}>{content}</a>
    : <button type="button" disabled aria-label="Download APK — coming soon" title="APK download coming soon" className={`button ${className}`}>{content}<span className="apk-soon">Coming soon</span></button>;
}
