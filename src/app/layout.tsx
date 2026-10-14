import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header, Footer, WhatsAppFloat, BackgroundOrbs } from "@/components/site-chrome";
import { CookieConsent } from "@/components/cookie-consent";
import { GoogleAnalytics } from "@/components/google-analytics";
import { EMAIL } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ding King PDR | Mobile Paintless Dent Repair",
    template: "%s | Ding King PDR",
  },
  description:
    "Ding King PDR removes dents, dings and creases across Suffolk, Norfolk and Essex with paintless dent repair — no paint, no fillers, original factory finish, mobile to your location.",
  alternates: {
    canonical: "/",
  },
  // Share card for WhatsApp, Facebook, X and LinkedIn. No page sets its own
  // openGraph, so every page inherits this (a page's own openGraph would
  // replace it, not merge). Title and description fall back to each page's.
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Ding King PDR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ding King PDR logo beside a paintless dent repair reflection board on a car panel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ding King PDR",
  description:
    "Mobile paintless dent repair (PDR) covering Suffolk, Norfolk and Essex — hail damage, car park dings, and minor creases fixed without paint or fillers.",
  telephone: "+447845863604",
  email: EMAIL,
  url: SITE_URL,
  areaServed: ["Suffolk", "Norfolk", "Essex"],
  image: `${SITE_URL}/brand/logo.png`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <BackgroundOrbs />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
