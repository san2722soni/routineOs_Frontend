# Screenshot and media checklist

Save **16 portrait PNG screenshots** under `public/assets/`, using the exact paths below.
Use the same phone, dark theme and default text size. Take normal screen captures, not long
stitched screenshots. Scroll only for the requested second views. Close keyboards and drawers
unless a drawer is requested. Use realistic demo data; avoid personal email, home addresses or OTPs.

| File under public/assets/ | What to capture |
| --- | --- |
| today/today_1.png | Top: current activity and first numbered timeline blocks. |
| today/today_2.png | Scroll: completed, skipped and upcoming timeline blocks. |
| today/today_3.png | Activity details: output, useful notes and two selected videos. |
| plan/plan_1.png | Top: target day, selected routine and expanded activity. |
| plan/plan_2.png | Scroll: chosen lessons, output, notes and Finalize Block. |
| library/library_1.png | Routines tab: two routines, weekdays and activity counts. |
| library/library_2.png | Areas tab: 4-6 named, color-coded areas. |
| library/library_3.png | Videos tab: playlist and long video, ideally in the same area. |
| library/library_4.png | Expanded course: lesson/chunk names and durations. |
| routine/routine_1.png | Editor: name, weekdays, Copy option and a timed activity. |
| reminders/reminders_1.png | Locations tab: 2-3 saved public places. |
| reminders/reminders_2.png | Add Location map: public place pin, radius, name and Save. |
| reminders/reminders_3.png | Tasks at Library/Supermarket, one unfinished and one completed. |
| settings/settings_1.png | Top: demo profile, theme and notification preferences. |
| settings/settings_2.png | Lower: location setup or backup status and auto-backup description. |
| welcome/welcome_1.png | Email sign-in before entering private information. |

The site prefers these files, then existing `public/images` screenshots, then a labeled illustration.
After adding images, rebuild/redeploy the website. Regenerate the PDF with `npm run guide`.
The eight-page PDF uses 14 screenshots, with dedicated Areas, Routines and Videos pages.
Its screenshot pairs and examples are configured in `content/guide.json`.

## APK download

- Set `NEXT_PUBLIC_APP_DOWNLOAD_URL` to your APK/Drive/Supabase download link. Until supplied,
  the site honestly says the download link is coming soon; the guide is already downloadable.
- Rebuild/redeploy after changing media or environment variables.

No tutorial recording is needed: the screen tour and downloadable guide explain the setup.

## Local development

`npm install`, then `npm run dev`. Check with `npm run lint` and `npm run build`.
Guide generation needs Python with `reportlab` and `Pillow` installed:
`python -m pip install reportlab Pillow`, then `npm run guide`.
The generated PDF is committed at `public/assets/guide/routineos-quick-guide.pdf`;
hosting does not need Python. Website copy lives in `content/screens.json`; guide copy in `content/guide.json`.

The PDF downloads from your deployed site's `/assets/guide/routineos-quick-guide.pdf` path.
Push the generated PDF with your code and redeploy. No Drive URL is required for the guide.
The APK button separately uses `NEXT_PUBLIC_APP_DOWNLOAD_URL`.
