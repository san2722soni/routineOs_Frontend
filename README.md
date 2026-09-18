# RoutineOS website

A dark product showcase built with Next.js 15, React 18, Tailwind CSS and Motion. Local Satoshi / Space Grotesk fonts, subtle grids, scroll parallax, responsive navigation and an interactive six-screen tour.

## Run

```sh
npm install
npm run dev
npm run build
npm start
```

## Edit

- `app/page.tsx`: benefits, simple workflow, screen tour, location reminders, downloads and FAQ.
- `content/screens.json`: website tour copy and screenshot paths.
- `content/guide.json`: illustrated guide explanations, examples and screenshot pairs.
- `components/screen-tour.tsx`: keyboard-accessible screen and screenshot selectors.
- `components/startup-splash.tsx`: app illustration and typing intro; skippable, once per session.
- `lib/media.ts`: screenshot fallbacks and optional media detection at build time.
- `app/globals.css`: visual system and responsive layouts.
- `components/parallax.tsx`: scroll motion, with reduced-motion support.
- `components/site-header.tsx`: desktop/mobile navigation.
- `components/phone.tsx`: screenshot frame.
- `public/assets/`: new screen captures and downloadable guide.
- `public/images/`: existing app screenshot fallbacks.
- `scripts/build-guide.py`: regenerate the eight-page PDF with `npm run guide`.
- `public/legal/`: privacy and terms copied from the existing legal site.

Download APK buttons stay visible but disabled with a coming-soon state until a download destination is provided. Set `NEXT_PUBLIC_APP_DOWNLOAD_URL` in `.env.local` when your APK URL is ready, then rebuild.

See [SCREENSHOTS.md](SCREENSHOTS.md) for all 16 filenames, capture instructions, APK setup and PDF regeneration.

No signup service or invented store link is configured. The page is statically prerendered; navigation, splash, tour and parallax use client-side JavaScript. Rebuild after adding media or changing environment variables.
