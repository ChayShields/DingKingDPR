import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header, Footer, WhatsAppFloat, BackgroundOrbs } from "@/components/site-chrome";

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
  title: {
    default: "Ding King PDR | Mobile Paintless Dent Repair",
    template: "%s | Ding King PDR",
  },
  description:
    "Ding King PDR removes dents, dings and creases across Suffolk, Norfolk and Essex with paintless dent repair — no paint, no fillers, original factory finish, mobile to your location.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <BackgroundOrbs />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
