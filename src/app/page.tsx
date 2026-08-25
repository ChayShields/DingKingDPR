"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { CheckIcon, WhatsAppIcon, SparkleIcon, ArrowIcon } from "@/components/icons";
import { WHATSAPP_HREF, SERVICE_AREA } from "@/lib/contact";

const services = [
  {
    name: "Hail Damage",
    description:
      "Multiple dents across a panel or the whole car, worked out one by one without a single panel being resprayed.",
  },
  {
    name: "Car Park Dings",
    description:
      "Door edges and panels caught by a neighbouring car door — the most common job we see, usually sorted same day.",
  },
  {
    name: "Minor Creases & Dents",
    description:
      "Shopping trolleys, low-speed knocks, sports balls — if the paint isn't cracked, it's very likely a PDR job.",
  },
];

const process = [
  {
    step: "01",
    title: "Send a photo",
    description:
      "WhatsApp us a photo of the damage and we'll give you an honest read on whether it's a PDR job and a rough price.",
  },
  {
    step: "02",
    title: "We map the dent",
    description:
      "On site, we use a reflection board to trace the dent's exact contour — the same technique in the photos below.",
  },
  {
    step: "03",
    title: "Worked out from behind",
    description:
      "Specialist tools massage the metal back to its original shape from behind the panel. No drilling, no filler.",
  },
  {
    step: "04",
    title: "Original finish, done",
    description:
      "Your factory paint never leaves the car, so there's no colour-match risk and no resale history of bodywork.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="spotlight relative overflow-hidden">
        <div className="bg-brushed pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent"
          >
            <SparkleIcon className="h-3.5 w-3.5" />
            Mobile paintless dent repair &middot; {SERVICE_AREA}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-chrome max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl"
          >
            The dent disappears. The reflection stays perfect.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-muted"
          >
            No paint. No fillers. We massage your panel back to its original
            shape from behind, so the factory finish never leaves the car.
            Hail damage, car park dings, and minor creases — fixed at your
            home or workplace.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Send us a photo for a quote
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:text-accent"
            >
              See the technique
              <ArrowIcon className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section id="work" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Our work: mapping a dent with a reflection board
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Before any metal gets worked, we hold a striped reflection
              board against the panel. Every bend in the lines is the dent's
              exact shape and depth — it's how we know precisely where to
              push from behind, without ever touching the paint.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <TiltCard className="aspect-[4/5]">
                <Image
                  src="/work/photo-1.png"
                  alt="Reflection board revealing a dent's contour on a car door panel during paintless dent repair"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <p className="text-sm font-medium text-white">
                    Wide angle — mapping the full panel
                  </p>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.1}>
              <TiltCard className="aspect-[4/5]">
                <Image
                  src="/work/photo-2.png"
                  alt="Close-up of the reflection board technique showing the exact contour of a car door dent"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <p className="text-sm font-medium text-white">
                    Close-up — the exact contour, before we push a single mm
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-sm text-muted">
              This particular job was a Nissan Leaf door panel — a sharp,
              small dent worked out from behind until the reflection ran
              clean and distortion-free again, with the original paint fully
              intact.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="services" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What we fix
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.name} delay={i * 0.1}>
                <TiltCard strength={8} glare={false} className="h-full">
                  <div className="p-8">
                    <h3 className="font-display text-xl font-semibold">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted">
                      {service.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              How it works
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <p className="font-display text-sm font-semibold text-accent">
                  {item.step}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface-2 p-10 sm:p-14">
              <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                    Got a dent? Send a photo.
                  </h2>
                  <p className="mt-4 max-w-xl text-muted">
                    We'll tell you straight away if it's a PDR job, roughly
                    what it'll cost, and come to you across {SERVICE_AREA}.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <motion.a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp us now
                  </motion.a>
                </div>
              </div>
              <ul className="mt-8 grid gap-3 border-t border-border pt-8 text-sm sm:grid-cols-3">
                {["No paint, ever", "Mobile to you", "Same-day quotes"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
