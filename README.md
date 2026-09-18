# RoutineOS landing page

A responsive dark product showcase for RoutineOS: the anti-productivity productivity app that helps people build reusable routines, lock a day, follow the next step and remember tasks when they arrive at a place.

<p align="center">
  <a href="https://github.com/san2722soni/RoutineOs/releases/download/v1.0.0/app-release.apk"><strong>Download the Android APK</strong></a>
  · <a href="https://github.com/san2722soni/RoutineOs">Mobile app repository</a>
</p>

The site explains the simple model: **Area** groups a priority, **Routine** gives it a reusable schedule, **Plan** prepares one specific day, and **Today** helps you execute it. It also showcases map-based location reminders, learning videos, backup and notification settings.

The downloadable guide is available at [`public/assets/guide/routineos-quick-guide.pdf`](public/assets/guide/routineos-quick-guide.pdf).

## Run

```sh
npm install
npm run dev
npm run build
npm start
```

## Deploy on Vercel

Import this `Frontend` folder as a Vercel project. The framework is detected as Next.js and the default build command is `npm run build`.

Add this environment variable in Vercel Project Settings:

```env
NEXT_PUBLIC_APP_DOWNLOAD_URL=https://github.com/san2722soni/RoutineOs/releases/download/v1.0.0/app-release.apk
```

Redeploy after changing the APK release or replacing screenshots. The APK buttons are visible even before this variable is configured, but remain disabled with a clear coming-soon label.

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

For local development, put the same variable in `.env.local` when you want the download buttons active. The current release URL is the GitHub asset above; future releases only require changing the version in this variable.

See [SCREENSHOTS.md](SCREENSHOTS.md) for all 16 filenames, capture instructions, APK setup and PDF regeneration.

The page is statically prerendered; navigation, splash, tour and parallax use client-side JavaScript. No signup service or fabricated store listing is configured. Rebuild after adding media or changing environment variables.
