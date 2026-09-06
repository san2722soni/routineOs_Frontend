import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'RoutineOS — Stop replanning. Start executing.',
  description: 'The anti-productivity productivity app. Build reusable routines, lock the day, and remember what matters when you arrive. No streak guilt.',
  openGraph: { title: 'RoutineOS — A routine for life.', description: 'Stop replanning. Start executing. Your day, with direction.', type: 'website' },
  icons: { icon: '/routineos-mark.svg' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
