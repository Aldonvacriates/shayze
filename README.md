# Shayze

Concept site, not a launched client site: a mobile-first luxury transportation booking PWA for Hawaii, also packaged as an Android app with Capacitor from the same React + TypeScript codebase.

**Live demo:** [shayze.vercel.app](https://shayze.vercel.app). The deployed build has no booking endpoint configured, so the `/book` form runs in demo mode and does not send submissions anywhere.

**About the content:** everything on the site is illustrative. The phone number (`+1 (808) 555-1234`), the `info@shayze.com` address, the three named testimonials, the About page stats, the "Licensed & Insured" and regulatory-compliance lines, the flight-tracking and on-time-guarantee copy, and the social links (`href="#"`) are placeholders. Vehicle and hero photos are loaded from Unsplash.

## Features

- Seven routed pages with React Router: Home, About, Services, Fleet, Book, Contact and a branded 404
- Booking form (pickup, drop-off, date, time, vehicle type, passengers) with loading, error and success states
- "Select" on a fleet card opens the booking form with that vehicle preselected
- Installable PWA: web manifest, app icons, service worker with precaching and runtime caching for fonts and images
- Android app via Capacitor 8, with native status bar and splash screen handling
- Vercel config with SPA rewrites and cache headers

## Tech stack

- Vite 5, React 18, TypeScript
- React Router 6
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- lucide-react icons
- vite-plugin-pwa (Workbox)
- Capacitor 8 (Android project committed in `android/`)
- Vercel hosting

## How it works

- **Configurable booking endpoint** (`src/lib/booking.ts`). `submitBooking()` POSTs JSON to whatever URL is in `VITE_BOOKING_ENDPOINT` and returns a typed `BookingResult` union (`{ ok: true, mode: 'submitted' | 'local-only' }` or `{ ok: false, error }`). When the variable is unset it logs the payload and returns `local-only`, which `src/pages/Book.tsx` uses to show a demo-mode notice on the success screen. Any service that accepts `POST application/json` works (for example a Formspree form).
- **Fleet-to-booking handoff through router state.** `src/pages/Fleet.tsx` calls `navigate('/book', { state: { vehicleType } })`, and `Book.tsx` reads it with `useLocation()` to prefill the vehicle select. No global store or query string needed.
- **PWA plus static hosting config** (`vite.config.ts`, `vercel.json`). The PWA plugin uses `registerType: 'autoUpdate'`, precaches built assets, and adds `CacheFirst` runtime caches for Unsplash images and Google Fonts. `vercel.json` rewrites non-asset paths to `index.html` for client-side routing, serves `sw.js` with `max-age=0, must-revalidate` so updates are picked up, and sets the `application/manifest+json` content type for the manifest.
- **One codebase, web and native** (`src/main.tsx`, `capacitor.config.ts`). Native-only calls (status bar style, hiding the splash screen) run behind `Capacitor.isNativePlatform()`, so the same bundle works in the browser and inside the Android shell.

## Getting started

### Prerequisites

- Node.js 22 or newer (required by `@capacitor/cli` 8; the web app alone runs on Vite 5)
- For the Android build: Android Studio and JDK 21 (`android/app/capacitor.build.gradle` targets Java 21)

### Install and run

```bash
npm install
npm run dev          # http://localhost:5173, also exposed on your LAN (--host)
```

### Environment variables

Copy `.env.example` to `.env`. It has one variable:

| Variable | Purpose |
|---|---|
| `VITE_BOOKING_ENDPOINT` | URL the booking form POSTs to. Leave blank for demo mode. |

`VITE_` variables are inlined at build time, so on Vercel set it under Project Settings > Environment Variables and redeploy.

Payload sent to the endpoint:

```json
{
  "pickup": "Honolulu Airport",
  "dropoff": "Four Seasons Maui",
  "date": "2026-06-12",
  "time": "14:30",
  "vehicleType": "suv",
  "passengers": "4",
  "_subject": "New Shayze reservation: Honolulu Airport → Four Seasons Maui"
}
```

### Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Vite dev server with hot reload, exposed on LAN |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run android` | `cap sync android && cap open android` (opens Android Studio) |
| `npm run ios` | `cap sync ios && cap open ios` (only works after adding iOS, see below) |

### Tests

There is no automated test suite yet. `npm run build` runs the TypeScript type check. The only tests under `android/` are the default Capacitor template tests.

### Android build

```bash
npm run build
npx cap sync android
npm run android               # opens Android Studio; run on a device or emulator from there
```

Or build a debug APK from the command line:

```bash
cd android
./gradlew assembleDebug       # Windows: gradlew.bat assembleDebug
# output: android/app/build/outputs/apk/debug/app-debug.apk
```

### iOS

iOS is not set up in this repo (no `ios/` directory, and `@capacitor/ios` is not a dependency). On macOS with Xcode it can be added with `npm install @capacitor/ios && npx cap add ios`, then `npm run ios`. Without a Mac, the PWA can be installed on iPhone from Safari with Share > Add to Home Screen.

### Deploying

`vercel.json` sets the Vite framework preset, build command, output directory, rewrites and headers. Deploy with the Vercel CLI (`vercel`, then `vercel --prod`) or by importing the repo at [vercel.com/new](https://vercel.com/new). The PWA needs HTTPS to be installable, which Vercel provides.

## Project structure

```
shayze/
├── src/
│   ├── app/App.tsx          # Route definitions
│   ├── components/          # Layout, Header, Footer
│   ├── pages/               # Home, About, Services, Fleet, Book, Contact, NotFound
│   ├── lib/booking.ts       # Booking submission helper (env-driven)
│   ├── styles/index.css     # Tailwind entry, fonts, safe-area padding
│   └── main.tsx             # React entry, BrowserRouter, native status bar / splash
├── public/                  # PWA icons, favicon, apple-touch-icon
├── android/                 # Capacitor Android project (build outputs gitignored)
├── .env.example             # VITE_BOOKING_ENDPOINT
├── vite.config.ts           # Vite + PWA plugin (manifest, runtime caching)
├── capacitor.config.ts      # appId com.shayze.app, webDir dist
└── vercel.json              # Vite preset, SPA rewrites, cache headers
```

## What I'd improve next

- Add Vitest tests for `submitBooking()` covering the demo, success and error paths
- Move the hard-coded brand colors (`#0A0A0A`, `#C9A84C`, `#F5F0E8`) and inline font styles into Tailwind v4 `@theme` tokens
- Connect a real booking endpoint and add basic form validation and spam protection
- Add the iOS project

## Authors

- [Aldonvacriates](https://github.com/Aldonvacriates)
- [BartuClskn](https://github.com/BartuClskn)

## License

No license file is included. All rights reserved.
