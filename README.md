# Shayze

Premium VIP transportation across the Hawaiian Islands — luxury booking website, installable as a PWA on any phone, and packaged as a native Android app via Capacitor.

> Midnight black. Champagne gold. Ivory white. Built mobile-first.

## Tech stack

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** icons
- **vite-plugin-pwa** (Workbox) — installable, offline-capable
- **Capacitor 8** — native Android wrapper (iOS-ready)
- **Vercel** — production hosting

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
```

`npm run dev` uses `--host`, so the URL Vite prints under "Network" is reachable from any phone on the same Wi-Fi.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start Vite dev server with hot reload, exposed on LAN |
| `npm run build` | Type-check (`tsc -b`) and produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally for sanity checks |
| `npm run android` | `cap sync android && cap open android` — push the latest web build into the Android wrapper and open in Android Studio |
| `npm run ios` | Same for iOS (requires macOS + Xcode) |

## Testing on a phone

Four levels of fidelity, easiest first:

### 1. Browser on the same Wi-Fi (no install)

Run `npm run dev`, then open the `Network` URL on your phone. Best for iterating.

### 2. Install as a PWA (looks native, no app store)

After deploying to Vercel (or any HTTPS host), visit the site on the phone:

- **Android Chrome** — menu → "Install app"
- **iOS Safari** — share → "Add to Home Screen"

Launches fullscreen with the Shayze icon, dark theme, splash, and offline cache for fonts and Unsplash images. **This is the cleanest way to ship to iOS without owning a Mac.**

### 3. Android APK via Capacitor

Requires JDK 17 and Android Studio.

```bash
npm run build
npx cap sync android
npm run android        # opens Android Studio — click ▶ to install on connected device
```

Or build a sideloadable APK from the command line:

```bash
cd android
./gradlew assembleDebug    # Windows: gradlew.bat assembleDebug
# output: android/app/build/outputs/apk/debug/app-debug.apk
```

### 4. iOS native (requires macOS)

```bash
npm install @capacitor/ios
npx cap add ios
npm run ios            # opens Xcode
```

## Deploying to Vercel

The repo includes a [`vercel.json`](./vercel.json) with the Vite preset, SPA rewrites, asset cache headers, and the correct content type for `manifest.webmanifest`.

**Option A — CLI:**
```bash
npm i -g vercel
vercel              # first time: log in, accept defaults
vercel --prod       # promote to production
```

**Option B — GitHub integration:**
Push to GitHub, then on [vercel.com/new](https://vercel.com/new), import the repo and click Deploy. Every push to `main` ships to prod; every PR gets a preview URL.

The PWA needs HTTPS to be installable on iOS, which Vercel provides automatically.

## Project structure

```
shayze/
├── src/
│   ├── app/App.tsx          # The full Shayze landing page
│   ├── styles/index.css     # Tailwind entry + Playfair/Inter fonts
│   └── main.tsx             # React entry; wires StatusBar + SplashScreen on native
├── public/                  # PWA icons, favicon, apple-touch-icon
├── android/                 # Capacitor Android project (commit; build outputs gitignored)
├── vite.config.ts           # Vite + PWA plugin (manifest, runtime caching)
├── capacitor.config.ts      # appId: com.shayze.app, webDir: dist
├── vercel.json              # Vite preset + SPA rewrites + cache headers
└── tsconfig*.json
```

## Brand reference

| Token | Value |
|---|---|
| Background | `#0A0A0A` (midnight black) |
| Accent / CTA | `#C9A84C` (champagne gold) |
| Text | `#F5F0E8` (ivory) |
| Heading font | Playfair Display |
| Body font | Inter |

## Sections

1. **Hero** — full-bleed Hawaii sunset backdrop, CTA scrolls to booking
2. **Services** — 6-card grid: airport transfers, island tours, corporate, weddings, yacht/resort, 24/7
3. **Booking** — pickup/dropoff, date/time, vehicle type, passengers, "Reserve Now"
4. **Fleet** — sedan / SUV / Sprinter / limo cards; "Select" prefills the booking form
5. **Why Choose Shayze** — chauffeurs, availability, licensing
6. **Testimonials** — 3 client quotes with star ratings
7. **Footer** — services, company, contact, social, "Licensed & Insured | Serving All Hawaiian Islands"

## License

Proprietary. All rights reserved.
