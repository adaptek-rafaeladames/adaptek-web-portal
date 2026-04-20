import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { en } from "@/lib/i18n/en";

const { disabilitySpotlight } = en;

/**
 * DisabilitySpotlightSection — V3 primary beachhead spotlight.
 * Introduces Adaptek's disability-informed lens with stats,
 * 3 use cases, and Vanessa's quote.
 */
export function DisabilitySpotlightSection() {
  return (
    <section
      id="disability"
      aria-labelledby="disability-heading"
      className="py-section bg-brand-offwhite"
    >
      <div className="container-content">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="orange" className="mb-4">
            {disabilitySpotlight.sectionLabel}
          </Badge>
          <h2
            id="disability-heading"
            className="font-sans font-bold text-3xl md:text-4xl text-brand-charcoal mb-4"
          >
            {disabilitySpotlight.headline}
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            {disabilitySpotlight.intro}
          </p>
        </div>

        {/* Section illustration */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/images/img-human-centered.png"
              alt="Paper-cut illustration of diverse people — including a person in a wheelchair and a person with a cane — surrounding an AI brain connected by glowing circuit lines, representing human-centered and disability-informed AI design"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Stats bar */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14"
          role="list"
          aria-label="Disability and AI accessibility statistics"
        >
          {disabilitySpotlight.stats.map((stat, i) => (
            <li
              key={i}
              className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <p className="font-sans font-extrabold text-4xl text-brand-orange mb-2">
                {stat.value}
              </p>
              <p className="text-brand-charcoal-light text-sm leading-relaxed">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>

        {/* Use case cards */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
          role="list"
          aria-label="Disability-informed AI use cases"
        >
          {disabilitySpotlight.useCases.map((useCase, i) => (
            <li
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col"
            >
              {/* Tag */}
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange mb-3 block">
                {useCase.tag}
              </span>

              {/* Title */}
              <h3 className="font-sans font-bold text-lg text-brand-charcoal leading-snug mb-3">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="text-brand-charcoal-light text-sm leading-relaxed mb-5 flex-1">
                {useCase.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 pt-4 border-t border-gray-100" role="list">
                {useCase.highlights.map((highlight, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-xs text-brand-charcoal leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="text-brand-green font-bold mt-0.5 shrink-0"
                    >
                      ✓
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Vanessa quote */}
        <figure className="max-w-2xl mx-auto text-center">
          <blockquote>
            <p className="text-brand-charcoal text-xl md:text-2xl font-medium leading-relaxed italic mb-4">
              &ldquo;{disabilitySpotlight.vanessaQuote}&rdquo;
            </p>
          </blockquote>
          <figcaption className="text-brand-charcoal-light text-sm">
            — {disabilitySpotlight.vanessaCredit}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
