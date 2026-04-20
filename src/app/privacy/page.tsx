import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Adaptek",
  description:
    "Learn how Adaptek collects, uses, and protects information submitted through our website and contact forms.",
};

export default function PrivacyPage() {
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
            Legal
          </p>
          <h1 className="font-sans font-bold text-3xl md:text-4xl text-brand-charcoal mb-4">
            Privacy Policy
          </h1>
          <p className="text-brand-charcoal-light text-sm">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-8 text-brand-charcoal-light leading-relaxed">

          <section aria-labelledby="intro-heading">
            <p className="text-base text-brand-charcoal">
              Adaptek LLC (&ldquo;Adaptek,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy.
              This Privacy Policy describes the limited information we collect through this website (
              <strong className="text-brand-charcoal">adaptek.ai</strong>) and how we use it. We do not
              sell, rent, or trade your personal information.
            </p>
          </section>

          <section aria-labelledby="collection-heading">
            <h2
              id="collection-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              1. Information We Collect
            </h2>
            <p>
              We collect information only when you voluntarily provide it — primarily through our
              contact form. This may include:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>First and last name</li>
              <li>Work email address</li>
              <li>Company name and job title</li>
              <li>A description of your AI or accessibility challenge</li>
            </ul>
            <p className="mt-3">
              We do not collect financial information, government IDs, or health records through this
              website. We do not use tracking pixels, third-party ad networks, or behavioral
              profiling tools.
            </p>
          </section>

          <section aria-labelledby="use-heading">
            <h2
              id="use-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              2. How We Use Your Information
            </h2>
            <p>Information submitted through our contact form is used solely to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Respond to your inquiry within one business day</li>
              <li>Understand your organization&rsquo;s needs and determine whether we can help</li>
              <li>Schedule an introductory call if appropriate</li>
            </ul>
            <p className="mt-3">
              We will not add you to a marketing mailing list without your explicit consent.
            </p>
          </section>

          <section aria-labelledby="third-parties-heading">
            <h2
              id="third-parties-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              3. Third-Party Services
            </h2>
            <p>
              Our contact form is processed by{" "}
              <strong className="text-brand-charcoal">Formspree</strong> (formspree.io), a secure
              form backend service. Form submissions are transmitted to Formspree&rsquo;s servers and
              then forwarded to our team&rsquo;s email inbox. Please review{" "}
              <a
                href="https://formspree.io/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange underline underline-offset-2 hover:text-brand-charcoal transition-colors"
              >
                Formspree&rsquo;s Privacy Policy
              </a>{" "}
              for details on how they handle submitted data.
            </p>
            <p className="mt-3">
              This website is hosted on{" "}
              <strong className="text-brand-charcoal">Firebase Hosting</strong> (Google LLC). Firebase
              may collect standard server-side access logs (IP address, browser type, page
              requested, timestamp) for security and reliability purposes. See{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange underline underline-offset-2 hover:text-brand-charcoal transition-colors"
              >
                Google&rsquo;s Firebase Privacy information
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="cookies-heading">
            <h2
              id="cookies-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              4. Cookies and Tracking
            </h2>
            <p>
              This website does not use cookies for analytics, advertising, or user tracking. We do
              not deploy Google Analytics, Meta Pixel, or any similar tracking tools. If any
              session or functional cookies are set by the hosting infrastructure, they are strictly
              technical in nature and contain no personal information.
            </p>
          </section>

          <section aria-labelledby="retention-heading">
            <h2
              id="retention-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              5. Data Retention
            </h2>
            <p>
              Contact form submissions are retained in our email inbox for as long as necessary to
              respond to and fulfill the associated business inquiry. If you would like your
              information removed, please email us at{" "}
              <a
                href="mailto:rafael.adames@adaptek.ai"
                className="text-brand-orange underline underline-offset-2 hover:text-brand-charcoal transition-colors"
              >
                rafael.adames@adaptek.ai
              </a>{" "}
              and we will delete it promptly.
            </p>
          </section>

          <section aria-labelledby="rights-heading">
            <h2
              id="rights-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              6. Your Rights
            </h2>
            <p>
              Depending on your location, you may have rights under applicable privacy law (such as
              GDPR or CCPA) to access, correct, or request deletion of personal information we hold
              about you. To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:rafael.adames@adaptek.ai"
                className="text-brand-orange underline underline-offset-2 hover:text-brand-charcoal transition-colors"
              >
                rafael.adames@adaptek.ai
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section aria-labelledby="children-heading">
            <h2
              id="children-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              7. Children&rsquo;s Privacy
            </h2>
            <p>
              This website is intended for business professionals and is not directed at children
              under 13. We do not knowingly collect information from children.
            </p>
          </section>

          <section aria-labelledby="changes-heading">
            <h2
              id="changes-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy as our services evolve. If we make material changes,
              we will update the &ldquo;Last updated&rdquo; date at the top of this page. Continued use
              of this website after changes are posted constitutes acceptance of the revised policy.
            </p>
          </section>

          <section aria-labelledby="contact-heading">
            <h2
              id="contact-heading"
              className="font-sans font-semibold text-xl text-brand-charcoal mb-3"
            >
              9. Contact Us
            </h2>
            <p>
              Questions about this Privacy Policy? Reach us at:
            </p>
            <address className="not-italic mt-3 text-brand-charcoal">
              <strong>Adaptek LLC</strong>
              <br />
              <a
                href="mailto:rafael.adames@adaptek.ai"
                className="text-brand-orange underline underline-offset-2 hover:text-brand-charcoal transition-colors"
              >
                rafael.adames@adaptek.ai
              </a>
            </address>
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
