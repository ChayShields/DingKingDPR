# Ding King PDR website

The website for **Ding King PDR**, a mobile paintless dent repair (PDR) business covering Suffolk, Norfolk and Essex. Live at https://www.dingkingpdr.co.uk (the bare domain redirects to `www`).

Built by Buildory ("Designed and developed by Chay Shields at Buildory" is in the footer).

## What it is

A small, fast, fully static marketing site. Visitors get in touch by **WhatsApp** or **email**; there is no contact form, no database and no server-side code beyond one tiny script route.

| Page | Path | What it is |
|---|---|---|
| Home | `/` | The pitch, why people choose Ding King, common questions, and a get-in-touch section |
| Our work | `/our-work` | How a dent is mapped with a reflection board, what is fixed, and how it works |
| Privacy & cookie policy | `/privacy-policy` | UK GDPR privacy and cookie wording |
| Thank you | `/thank-you` | A confirmation page. Nothing links to it today (there is no form), and it is not in the sitemap |
| Not found | any bad URL | Custom 404 |

## Stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS 4**, the `motion` library for animation.
- Hosted on **Vercel** (project `ding-king-dpr-kiww`). Every page is prerendered and served from the CDN.
- No environment variables are needed to build or run it.

> This version of Next.js has breaking changes from older releases. Before changing framework-level code, read the guides in `node_modules/next/dist/docs/` (see `AGENTS.md`).

## Running it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks)
npm run lint
```

## Where things live

```
src/app/
  layout.tsx          Root layout: fonts, site-wide metadata, share card, JSON-LD, analytics
  page.tsx            Home
  our-work/page.tsx   Our work
  privacy-policy/     Privacy & cookie policy
  thank-you/          Thank-you page
  not-found.tsx       404
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml (home, our work, privacy policy)
  api/ga-config/      Serves the one-line Google Analytics config as a script
src/components/       site-chrome (header/footer), cookie-consent, google-analytics, motion helpers
src/lib/
  contact.ts          Phone, WhatsApp link, email, service area (edit contact details here)
  site.ts             SITE_URL, the primary host (https://www.dingkingpdr.co.uk)
  analytics.ts        The public GA4 measurement ID
public/brand/         Logo files
public/work/          Work photos
public/og-image.jpg   The link preview (share) card
reference/            The client's own wording document, kept as source material
```

## Common changes

- **Phone number, WhatsApp message, email, service area:** `src/lib/contact.ts`. The structured data in `src/app/layout.tsx` (`localBusinessJsonLd`) repeats the phone number and area, so update both.
- **Page wording:** the page files above. Keep exactly one `h1` per page and a sensible heading order.
- **Domain/host:** `SITE_URL` in `src/lib/site.ts`. Canonical links, `og:url`, the sitemap and the schema all use it. If the primary host ever changes, change it there and check the sitemap and canonicals afterwards.
- **A new page:** create `src/app/<name>/page.tsx` with its own `title`, `description` and `alternates.canonical`, then add it to `src/app/sitemap.ts`.

## SEO

- Per-page title and description, a canonical link on every page, `robots.txt` and `sitemap.xml` (Next.js conventions, not static files).
- `LocalBusiness` JSON-LD in the root layout (name, phone, email, area served, logo).
- A real favicon (`src/app/icon.png`), the logo and work photos with descriptive `alt` text.

## Link preview (share) card

When a page is shared in WhatsApp, Facebook, X, LinkedIn or Slack, the card uses `public/og-image.jpg` (1200x630: the logo beside a reflection-board photo from `public/work/photo-1.png`). It is set once in the root `src/app/layout.tsx` (`openGraph.images` and `twitter`), and each page keeps its own title and description.

- No page sets its own `openGraph`. If one ever does, it **replaces** the root one rather than merging, so it must carry the image, site name and locale too.
- To change the picture, replace `public/og-image.jpg` with another 1200x630 JPEG (keep it well under 200 KB).
- The Vercel project must also have the **"Allow link preview bots"** firewall rule, otherwise the share crawlers are challenged and no card appears. Test with `curl -A "WhatsApp/2.24.1 A" https://www.dingkingpdr.co.uk/` (expect 200).

## Analytics and cookies

- **Google Analytics 4** (measurement ID in `src/lib/analytics.ts`; it is public, so it is in code, not an environment variable).
- A **consent banner** (`src/components/cookie-consent.tsx`) blocks Google's script until the visitor accepts analytics. The choice is stored in `localStorage` under `ding-king-cookie-consent`, and withdrawing consent removes the analytics cookies. If site data is blocked in the browser the site still works.
- The GA config is served from `/api/ga-config` as an external script so the site's CSP needs no inline script for it. Nothing from the request is ever put in that response.

## Security

- **Security headers** are set in `next.config.ts`: a fixed Content-Security-Policy (the only third-party script is Google's `gtag.js`, loaded after consent), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, a strict referrer policy and a locked-down permissions policy. If a new third-party script, font or image host is added, the CSP in `next.config.ts` must be updated or the browser will block it.
- **Vercel Firewall:** Bot Protection is on **Challenge**, so scripts that are not browsers get a 429. Two bypass rules exist for that: "Allow Buildory tools" (a secret header used by Buildory's own checking scripts) and "Allow link preview bots" (see above).

## Deploying

Pull requests are merged into `main` and Vercel deploys `main` to production. Before merging a change: `npm run build` and `npm run lint` should both pass, and the page should have been looked at on a phone-sized screen.
