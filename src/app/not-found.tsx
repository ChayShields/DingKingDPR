import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "That page doesn't exist. Head back to Ding King PDR.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-display text-sm font-medium uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="font-display text-chrome mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        That page has gone missing.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you're looking for doesn't exist, or it's moved. Let's get
        you back to somewhere useful.
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
