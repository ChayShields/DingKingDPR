"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { EMAIL_HREF } from "@/lib/contact";

export function ContactForm() {
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
