import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement — Adaptek",
  description:
    "Adaptek's commitment to web accessibility. Learn about our WCAG 2.2 AA conformance and how to report accessibility barriers.",
};

export default function AccessibilityPage() {
  const lastUpdated = "April 19, 2026";

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="py-16 md:py-24 bg-brand-offwhite min-h-screen"
    >
      <div className="container-content max-w-3xl mx-auto">
        {/* Page header */}
        <header className="mb-10">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Accessibility
          </p>
          <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-charcoal mb-4">
            Accessibility Statement
          </h1>
          <p className="text-brand-charcoal-light text-sm">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* Commitment callout */}
        <div className="bg-brand-green-light border border-brand-green/30 rounded-2xl p-6 mb-10">
          <p className="text-brand-charcoal font-medium leading-relaxed">
            Accessibility is not a compliance checkbox for us — it is the core of what we do.
            Adaptek was founded on the principle that technology must work for everyone, including
            the{" "}
            <strong>1.3 billion people worldwide living with a disability</strong>. We hold ourselves
            to the same standard we help our clients achieve.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-brand-charcoal-light leading-relaxed">

          <section aria-labelledby="conformance-heading">
            <h2
              id="conformance-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              Our Conformance Goal
            </h2>
            <p>
              We aim for this website to conform to{" "}
              <strong className="text-brand-charcoal">
                Web Content Accessibility Guidelines (WCAG) 2.2, Level AA
              </strong>
              . These guidelines explain how to make web content more accessible to people with
              disabilities, including those who use screen readers, switch controls, voice
              navigation, magnification tools, or keyboard-only navigation.
            </p>
          </section>

          <section aria-labelledby="measures-heading">
            <h2
              id="measures-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              Measures We Have Taken
            </h2>
            <p>This website was designed and built with the following in place:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong className="text-brand-charcoal">Semantic HTML landmarks</strong> — every
                page uses <code className="text-brand-orange text-xs bg-gray-100 px-1 py-0.5 rounded">&lt;main&gt;</code>,{" "}
                <code className="text-brand-orange text-xs bg-gray-100 px-1 py-0.5 rounded">&lt;nav&gt;</code>,{" "}
                <code className="text-brand-orange text-xs bg-gray-100 px-1 py-0.5 rounded">&lt;section&gt;</code>, and{" "}
                <code className="text-brand-orange text-xs bg-gray-100 px-1 py-0.5 rounded">&lt;footer&gt;</code> elements for
                screen reader navigation.
              </li>
              <li>
                <strong className="text-brand-charcoal">ARIA labels and descriptions</strong> — all
                interactive elements and meaningful images have descriptive labels. Decorative
                elements are marked <code className="text-brand-orange text-xs bg-gray-100 px-1 py-0.5 rounded">aria-hidden="true"</code>.
              </li>
              <li>
                <strong className="text-brand-charcoal">Keyboard navigation</strong> — all
                interactive elements (links, buttons, form fields) are fully operable via keyboard.
                A visible skip-to-main-content link appears on focus.
              </li>
              <li>
                <strong className="text-brand-charcoal">Visible focus indicators</strong> — focus
                rings are visible on all interactive elements, using a high-contrast orange ring
                that meets WCAG 2.2 focus appearance requirements.
              </li>
              <li>
                <strong className="text-brand-charcoal">Color contrast</strong> — body text and
                interactive elements use color combinations that meet or exceed a 4.5:1 contrast
                ratio against their backgrounds.
              </li>
              <li>
                <strong className="text-brand-charcoal">Responsive design</strong> — the layout
                adapts from mobile to desktop without horizontal scrolling or loss of content at any
                viewport width.
              </li>
              <li>
                <strong className="text-brand-charcoal">Form accessibility</strong> — all form
                fields have associated{" "}
                <code className="text-brand-orange text-xs bg-gray-100 px-1 py-0.5 rounded">&lt;label&gt;</code> elements, required
                fields are marked both visually and programmatically, and inline error messages use{" "}
                <code className="text-brand-orange text-xs bg-gray-100 px-1 py-0.5 rounded">role="alert"</code> for screen reader
                announcement.
              </li>
              <li>
                <strong className="text-brand-charcoal">Plain language</strong> — content is written
                at a reading level accessible to a broad audience, avoiding unnecessary jargon.
              </li>
            </ul>
          </section>

          <section aria-labelledby="known-issues-heading">
            <h2
              id="known-issues-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              Known Limitations
            </h2>
            <p>
              We are a small founding team and this website is actively evolving. Areas we are
              actively monitoring and improving include:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong className="text-brand-charcoal">Founder photos</strong> — portrait images
                currently use descriptive alt text; we are reviewing whether additional context
                improves the experience for screen reader users.
              </li>
              <li>
                <strong className="text-brand-charcoal">Complex comparison table</strong> — the
                competitive comparison table uses proper{" "}
                <code className="text-brand-orange text-xs bg-gray-100 px-1 py-0.5 rounded">scope</code> attributes, but we plan to
                add a plain-language summary for users who prefer not to navigate tabular data.
              </li>
            </ul>
            <p className="mt-3">
              If you encounter a barrier not listed here, please tell us (see below). We treat every
              accessibility report as a priority bug.
            </p>
          </section>

          <section aria-labelledby="report-heading">
            <h2
              id="report-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              Report an Accessibility Barrier
            </h2>
            <p>
              We want to hear from you. If you experience difficulty accessing any part of this
              website — or if assistive technology is not working as expected — please contact us:
            </p>
            <div className="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-2">
              <p className="text-brand-charcoal font-medium">Adaptek Accessibility Contact</p>
              <p>
                <a
                  href="mailto:info@adaptek.ai"
                  className="text-brand-orange underline underline-offset-2 hover:text-brand-charcoal transition-colors"
                >
                  info@adaptek.ai
                </a>
              </p>
              <p className="text-sm">
                Please include: the page URL, a description of the barrier, and the assistive
                technology or browser you are using. We will respond within two business days and
                work toward a solution within 10 business days.
              </p>
            </div>
          </section>

          <section aria-labelledby="tools-heading">
            <h2
              id="tools-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              Testing Approach
            </h2>
            <p>
              This website has been evaluated using a combination of automated tools and manual
              review:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Keyboard-only navigation testing</li>
              <li>
                Screen reader testing with VoiceOver (macOS / iOS) and NVDA (Windows)
              </li>
              <li>Color contrast verification against WCAG 2.2 Level AA thresholds</li>
              <li>HTML semantic structure review</li>
              <li>Zoom and text-resize testing up to 200%</li>
            </ul>
          </section>

          <section aria-labelledby="standards-heading">
            <h2
              id="standards-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              Standards and References
            </h2>
            <p>
              This statement references the following standards and guidance:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <a
                  href="https://www.w3.org/TR/WCAG22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange underline underline-offset-2 hover:text-brand-charcoal transition-colors"
                >
                  Web Content Accessibility Guidelines (WCAG) 2.2
                </a>{" "}
                — W3C Recommendation
              </li>
              <li>
                <a
                  href="https://www.w3.org/WAI/standards-guidelines/aria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange underline underline-offset-2 hover:text-brand-charcoal transition-colors"
                >
                  Accessible Rich Internet Applications (ARIA) specification
                </a>{" "}
                — W3C
              </li>
              <li>
                Section 508 of the Rehabilitation Act (U.S. federal accessibility standard)
              </li>
            </ul>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/"
            className="text-brand-orange font-medium text-sm hover:underline underline-offset-2"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  );
}
