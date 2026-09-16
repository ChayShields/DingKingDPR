import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { MotionLink } from "@/components/motion-link";
import { CheckIcon, WhatsAppIcon, MailIcon } from "@/components/icons";
import { WHATSAPP_HREF, EMAIL, EMAIL_HREF, SERVICE_AREA, PHONE_DISPLAY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About & Contact | Ding King PDR",
  description:
    "Get in touch with Ding King PDR for mobile paintless dent repair across Suffolk, Norfolk and Essex — WhatsApp a photo or email us for a straight quote.",
  alternates: {
    canonical: "/",
  },
};

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

export default function Home() {
  return (
    <main className="flex-1">
      <section className="spotlight relative overflow-hidden border-b border-border">
        <div className="bg-brushed pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              About &amp; contact
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-chrome max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Suffolk, Norfolk &amp; Essex&apos;s mobile dent specialists.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              At Ding King PDR we specialise in paintless dent repair —
              removing dents, dings and creases from your vehicle&apos;s bodywork
              using advanced techniques, all without paint or fillers.
              Whether it&apos;s hail damage, a car park ding, or a minor panel dent,
              we restore your car&apos;s original finish, quickly and cost
              effectively, wherever you are.
            </p>
          </Reveal>
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
                WhatsApp a photo, or email us directly — whatever&apos;s easiest.
                We cover {SERVICE_AREA} and reply fast.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MotionLink
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </MotionLink>
                <MotionLink
                  href={EMAIL_HREF}
                  whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
                  className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:text-accent"
                >
                  <MailIcon className="h-4 w-4" />
                  Email us
                </MotionLink>
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
