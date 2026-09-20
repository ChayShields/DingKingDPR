import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, PHONE_DISPLAY } from "@/lib/contact";
import { CookieSettingsButton } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy",
  description:
    "How Ding King PDR handles your information and the cookies used on this website.",
  alternates: { canonical: "/privacy-policy" },
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Who we are",
    body: (
      <p>
        Ding King PDR is a mobile paintless dent repair business covering
        Suffolk, Norfolk and Essex. You can reach us at{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-accent underline underline-offset-2 hover:text-foreground"
        >
          {EMAIL}
        </a>{" "}
        or on {PHONE_DISPLAY}.
      </p>
    ),
  },
  {
    heading: "What this website collects",
    body: (
      <>
        <p>
          This website has no forms, accounts or sign-up, so it does not
          collect your name, email address or phone number when you browse it.
        </p>
        <p>
          If you contact us by WhatsApp, email or phone, we receive whatever
          you choose to send us, such as your name, number, location and
          photos of the damage. We use it only to reply to you and to quote
          for and carry out the repair. WhatsApp and your email provider
          handle those messages under their own privacy policies.
        </p>
        <p>
          Our hosting provider (Vercel) processes technical information such
          as your IP address when your browser requests a page, so the site
          can be delivered and kept secure.
        </p>
      </>
    ),
  },
  {
    heading: "Analytics cookies (Google Analytics)",
    body: (
      <>
        <p>
          If you choose Accept on our cookie banner, we use Google Analytics to
          count visits and see which pages are useful. It sets two cookies in
          your browser, called _ga and _ga_ followed by an ID, which last up to
          2 years. They give your browser a random identifier (not your name or
          contact details) and send information such as the pages you view,
          your approximate location and your device type to Google. Google
          acts on our behalf to provide this service. We do not use it for
          advertising.
        </p>
        <p>
          If you choose Reject, or do not choose, Google Analytics is not
          loaded and no analytics cookies are set. The website works the same
          either way.
        </p>
        <p>
          You can change your choice at any time:{" "}
          <CookieSettingsButton className="text-accent underline underline-offset-2 hover:text-foreground" />
          . This reopens the banner and removes any analytics cookies already
          set.
        </p>
      </>
    ),
  },
  {
    heading: "Why we use your information",
    body: (
      <p>
        We use enquiry details to reply to you and carry out the work you ask
        for. We use analytics data, only with your consent, to understand
        which pages are useful so we can improve the site. We do not sell your
        information or use it for advertising.
      </p>
    ),
  },
  {
    heading: "How long we keep it",
    body: (
      <p>
        We keep enquiry messages for as long as needed to deal with your job
        and any follow-up, and for a reasonable time afterwards in case of
        questions about the work. Analytics data is kept by Google for the
        limited period set in our Google Analytics account.
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <p>
        You can ask us for a copy of the information we hold about you, ask us
        to correct it, or ask us to delete it where we no longer need it.
        Contact us using the details above. If you are unhappy with how we have
        used your information, you can complain to the Information
        Commissioner&apos;s Office at ico.org.uk.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20 sm:py-24">
      <nav aria-label="Breadcrumb" className="mb-10 text-sm text-muted">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Privacy &amp; Cookie Policy</span>
      </nav>

      <h1 className="font-display text-chrome text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy &amp; Cookie Policy
      </h1>
      <p className="mt-3 text-sm text-muted">Last updated 20 September 2026.</p>

      <div className="mt-10 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl font-semibold text-foreground">
              {section.heading}
            </h2>
            <div className="mt-3 flex flex-col gap-3 leading-relaxed text-muted">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
