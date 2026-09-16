import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks for Reaching Out",
  description:
    "We've got your message. Ding King PDR replies fast, every time.",
};

export default function ThankYou() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Thank You</span>
      </nav>
      <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
        Message sent
      </p>
      <h1 className="font-display text-chrome mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Thanks, we&apos;ve got it.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Your email client should have opened with your message ready to
        send. We reply fast, every time.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
      >
        Back to Ding King PDR
      </Link>
    </main>
  );
}
