import type { Metadata } from "next";
import { en } from "@/lib/i18n/en";

const { thanks, founders } = en;

export const metadata: Metadata = {
  title: "Message Received — Adaptek",
  description: "Thank you for reaching out to Adaptek. We'll be in touch within one business day.",
  // Exclude from search engine indexing — thank-you pages should not appear
  // in search results and should not accumulate PageRank.
  robots: { index: false, follow: false },
};

/**
 * ThanksPage — shown after a successful contact form submission.
 * Confirms receipt, sets expectations for the follow-up, and
 * invites the visitor to connect on LinkedIn while they wait.
 * Excluded from search indexing (robots: noindex).
 */
export default function ThanksPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="py-24 md:py-32 bg-brand-offwhite min-h-screen"
    >
      <div className="container-content max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          {/* Confirmation mark */}
          <div
            aria-hidden="true"
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green-light border-2 border-brand-green text-brand-green text-2xl font-bold mb-6"
          >
            ✓
          </div>
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-wider mb-3">
            {thanks.eyebrow}
          </p>
          <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-charcoal mb-4">
            {thanks.headline}
          </h1>
          <p className="text-brand-charcoal-light text-lg leading-relaxed max-w-xl mx-auto">
            {thanks.subheadline}
          </p>
        </div>

        {/* What happens next */}
        <section aria-labelledby="next-steps-heading" className="mb-14">
          <h2
            id="next-steps-heading"
            className="font-sans font-semibold text-xl text-brand-charcoal text-center mb-8"
          >
            What happens next
          </h2>
          <ol className="space-y-4" role="list">
            {thanks.nextSteps.map((step) => (
              <li
                key={step.number}
                className="flex gap-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <span
                  aria-hidden="true"
                  className="font-sans font-extrabold text-2xl text-brand-orange shrink-0 leading-none mt-0.5"
                >
                  {step.number}
                </span>
                <div>
                  <p className="font-sans font-semibold text-brand-charcoal mb-1">
                    {step.title}
                  </p>
                  <p className="text-brand-charcoal-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Connect on LinkedIn */}
        <section
          aria-labelledby="connect-heading"
          className="bg-brand-charcoal rounded-2xl p-8 md:p-10 text-center mb-10"
        >
          <h2
            id="connect-heading"
            className="font-sans font-bold text-xl text-white mb-2"
          >
            {thanks.connectHeadline}
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            {thanks.connectSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {founders.members.map((member) => (
              <a
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl px-5 py-3 text-sm font-semibold font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                aria-label={`Connect with ${member.name} on LinkedIn`}
              >
                {/* LinkedIn icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0 text-brand-orange"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                {member.name}
              </a>
            ))}
          </div>
        </section>

        {/* Back home */}
        <div className="text-center">
          <a
            href="/"
            className="text-brand-orange font-medium text-sm hover:underline underline-offset-2"
          >
            {thanks.backHome}
          </a>
        </div>

      </div>
    </main>
  );
}
