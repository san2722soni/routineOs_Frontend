# RoutineOS website

A dark product showcase built with Next.js 14, React 18, Tailwind CSS and Motion. Local Satoshi / Space Grotesk fonts, subtle grids, scroll parallax, responsive navigation and the real screenshots in `public/images/`.

## Run

```sh
npm install
npm run dev
npm run build
npm start
```

## Edit

- `app/page.tsx`: philosophy, feature showcase, audience sections, comparison and FAQ.
- `app/globals.css`: visual system and responsive layouts.
- `components/parallax.tsx`: scroll motion, with reduced-motion support.
- `components/site-header.tsx`: desktop/mobile navigation.
- `components/phone.tsx`: screenshot frame.
- `public/images/`: actual app screenshots.
- `public/legal/`: privacy and terms copied from the existing legal site.

The main buttons lead to the product showcase until a download destination is provided. Set `NEXT_PUBLIC_APP_DOWNLOAD_URL` in `.env.local` when an APK or store URL is ready, then rebuild.

No signup service or invented store link is configured. The page is statically prerendered; only navigation and parallax require client-side JavaScript.
