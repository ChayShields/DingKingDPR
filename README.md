This is a [Next.js](https://nextjs.org) project for Ding King PDR — mobile paintless dent repair across Suffolk, Norfolk & Essex.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

Push to GitHub and connect the repo on [Vercel](https://vercel.com) — Next.js is auto-detected, no environment variables are required.

## Link preview card

When a page is shared in WhatsApp, Facebook, X, LinkedIn or Slack, the card uses `public/og-image.jpg` (1200x630: the logo beside a reflection-board photo from `public/work/photo-1.png`). It is set once in the root `src/app/layout.tsx` (`openGraph.images` and `twitter`), and each page keeps its own title and description. No page sets its own `openGraph`; if one ever does, it replaces the root one, so it must carry the image too.
To change the picture, replace `public/og-image.jpg` with another 1200x630 JPEG. The Vercel project also needs the "Allow link preview bots" firewall rule, otherwise the share crawlers are challenged and no card appears.
