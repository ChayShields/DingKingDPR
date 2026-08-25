"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { CheckIcon, WhatsAppIcon, MailIcon } from "@/components/icons";
import { WHATSAPP_HREF, EMAIL, EMAIL_HREF, SERVICE_AREA, PHONE_DISPLAY } from "@/lib/contact";

const guarantees = [
  {
    title: "Paint never leaves the car",
    description:
      "PDR reshapes the metal from behind the panel. Your original factory finish stays exactly as it was — no resprays, no colour-match risk.",
  },
  {
    title: "Mobile to your location",
    description:
      "We come to your home or workplace across Suffolk, Norfolk and Essex — no dropping the car off and no courtesy car needed.",
  },
  {
    title: "Straight answers",
    description:
      "If a dent isn't a good PDR candidate — paint cracked, edge crease too sharp — we'll tell you honestly instead of taking the job anyway.",
  },
];

const faqs = [
  {
    q: "What is paintless dent repair?",
    a: "A technique that massages dented metal back to its original shape from behind or beside the panel, using specialist rods and tools — without cutting, drilling, filling or repainting.",
  },
  {
    q: "Will every dent qualify?",
    a: "Most hail damage, door dings and minor creases do. If the paint is cracked or the metal has been stretched too far, a small filler or paint step may be needed alongside PDR — we'll always tell you upfront.",
  },
  {
    q: "Does PDR affect resale value?",
    a: "The opposite — because the original paint is untouched, there's no bodywork history to disclose, unlike after a respray.",
  },
  {
    q: "How much does it cost?",
    a: "Send a photo over WhatsApp and we'll give you a straight price before we come out. PDR is almost always cheaper than a bodyshop respray.",
  },
  {
    q: "How long does a repair take?",
    a: "Most single dents are finished within an hour or two, on site, while you get on with your day.",
  },
  {
    q: "Do you work on electric vehicles?",
    a: "Yes — PDR works on any metal panel, EV or otherwise. Aluminium panels need a slightly different touch, which we're experienced with.",
  },
];

function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `New enquiry from ${name || "the website"}`;
    const body = `Name: ${name}\nContact: ${contactInfo}\n\n${message}`;
    window.location.href = `${EMAIL_HREF}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    router.push("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
      <input
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent sm:col-span-1"
      />
      <input
        required
        placeholder="Email or phone"
        value={contactInfo}
        onChange={(e) => setContactInfo(e.target.value)}
        className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent sm:col-span-1"
      />
      <textarea
        required
        placeholder="Tell us about the damage — car, panel, roughly how big"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent sm:col-span-2"
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground sm:col-span-2 sm:w-fit"
      >
        Send enquiry
      </motion.button>
    </form>
  );
}

export default function AboutContact() {
  return (
    <main className="flex-1">
      <section className="spotlight relative overflow-hidden border-b border-border">
        <div className="bg-brushed pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
          >
            About &amp; contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-chrome max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Suffolk, Norfolk &amp; Essex's mobile dent specialists.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-muted"
          >
            At Ding King PDR we specialise in paintless dent repair —
            removing dents, dings and creases from your vehicle's bodywork
            using advanced techniques, all without paint or fillers.
            Whether it's hail damage, a car park ding, or a minor panel dent,
            we restore your car's original finish, quickly and cost
            effectively, wherever you are.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Why people choose us
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {guarantees.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.1}>
                <TiltCard strength={8} glare={false} className="h-full">
                  <div className="p-6">
                    <h3 className="font-semibold">{g.title}</h3>
                    <p className="mt-2 text-sm text-muted">{g.description}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Questions people actually ask
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <details className="group rounded-xl border border-border bg-surface-2 px-6 py-4 open:border-accent/50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                    {item.q}
                    <span className="shrink-0 text-accent transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface-2 p-10 sm:p-14">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Get your dent looked at
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                Fill in the form, WhatsApp a photo, or email us directly —
                whatever's easiest. We cover {SERVICE_AREA} and reply fast.
              </p>
              <ContactForm />
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-6 text-sm text-muted">
                <span>Prefer not to fill out a form?</span>
                <motion.a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </motion.a>
                <motion.a
                  href={EMAIL_HREF}
                  whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:text-accent"
                >
                  <MailIcon className="h-4 w-4" />
                  Email us
                </motion.a>
              </div>
              <ul className="mt-8 grid gap-3 border-t border-border pt-6 text-sm sm:grid-cols-3">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
                  {PHONE_DISPLAY} (WhatsApp)
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
                  {EMAIL}
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
                  Covering {SERVICE_AREA}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
