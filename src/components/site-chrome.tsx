"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { WhatsAppIcon, MailIcon } from "@/components/icons";
import { WHATSAPP_HREF, EMAIL_HREF, PHONE_DISPLAY } from "@/lib/contact";

const NAV_LINKS = [
  { href: "/", label: "Our Work" },
  { href: "/about", label: "About & Contact" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`font-display text-lg font-bold tracking-tight ${className ?? ""}`}>
      <span className="text-chrome">Ding King</span>{" "}
      <span className="text-accent">PDR</span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-foreground"
                  : "transition hover:text-foreground"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <motion.a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground sm:flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp us
        </motion.a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border sm:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 bg-foreground transition ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[1.5px] w-4 bg-foreground transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[1.5px] w-4 bg-foreground transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border sm:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-muted hover:bg-surface-2 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 rounded-lg bg-accent px-3 py-2 font-semibold text-accent-foreground"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <Logo /> &mdash; mobile paintless dent repair.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <span>{PHONE_DISPLAY}</span>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-foreground"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={EMAIL_HREF}
            className="flex items-center gap-2 transition hover:text-foreground"
          >
            <MailIcon className="h-4 w-4" />
            Email us
          </a>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <>
      <motion.a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/50 sm:flex"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50" />
        <WhatsAppIcon className="h-7 w-7" />
      </motion.a>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-semibold text-white sm:hidden"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Chat with us on WhatsApp
      </a>
    </>
  );
}

export function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full opacity-25 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, -24, 0], x: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-15%] top-[20%] h-[460px] w-[460px] rounded-full opacity-20 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent-2), transparent 70%)" }}
      />
    </div>
  );
}
