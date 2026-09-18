import { existsSync } from 'node:fs';
import path from 'node:path';
import screenContent from '../content/screens.json';

export type ScreenCapture = {
  path: string; label: string; alt: string; capture: string;
  fallback?: string; src: string | null;
};
export type TourScreen = Omit<(typeof screenContent)[number], 'captures'> & { captures: ScreenCapture[] };

export function publicFileExists(file: string) {
  return existsSync(path.join(process.cwd(), 'public', file));
}

export function getTourScreens(): TourScreen[] {
  return screenContent.map(screen => ({
    ...screen,
    captures: screen.captures.map(capture => {
      const preferred = `/assets/${capture.path}`;
      const fallback = 'fallback' in capture && capture.fallback ? `/images/${capture.fallback}` : null;
      return { ...capture, src: publicFileExists(preferred) ? preferred : fallback && publicFileExists(fallback) ? fallback : null };
    }),
  }));
}

export function publicUrl(value?: string) {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value.trim());
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : undefined;
  } catch { return undefined; }
}
