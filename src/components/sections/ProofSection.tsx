import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { en } from "@/lib/i18n/en";

const { proof } = en;

/**
 * ProofSection — V3 case study cards replacing the generic stat metrics.
 * Dark charcoal background, 3 case study cards with real engagement metrics.
 */
export function ProofSection() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="py-section bg-brand-charcoal text-white"
    >
      <div className="container-content">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="orange" className="mb-4">
            {proof.sectionLabel}
          </Badge>
          <h2
            id="proof-heading"
            className="font-sans font-bold text-3xl md:text-4xl text-white mb-4"
          >
            {proof.headline}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            {proof.subheadline}
          </p>
        </div>

        {/* Case study cards */}
        <ul
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          role="list"
          aria-label="Adaptek case studies"
        >
          {proof.caseStudies.map((study, i) => (
            <li
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 p-7 flex flex-col"
            >
              {/* Industry tag */}
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-orange border border-brand-orange/40 rounded-full px-3 py-1 mb-4 self-start">
                {study.tag}
              </span>

              {/* Title */}
              <h3 className="font-sans font-bold text-lg text-white leading-snug mb-3">
                {study.title}
              </h3>

              {/* Context */}
              <p className="text-white/50 text-xs leading-relaxed mb-2">
                {study.context}
              </p>

              {/* Approach */}
              <p className="text-white/70 text-xs leading-relaxed mb-6 flex-1">
                {study.approach}
              </p>

              {/* Metrics row */}
              <ul
                className="grid grid-cols-3 gap-3 pt-5 border-t border-white/10"
                role="list"
              >
                {study.metrics.map((metric, j) => (
                  <li key={j} className="text-center">
                    <p className="font-sans font-extrabold text-xl text-brand-orange leading-none mb-1">
                      {metric.value}
                    </p>
                    <p className="text-white/80 text-xs font-medium leading-tight mb-0.5">
                      {metric.label}
                    </p>
                    <p className="text-white/40 text-xs leading-tight">
                      {metric.sub}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center">
          <Button
            href="/?intent=challenge#contact"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white border-0"
          >
            {proof.ctaText} →
          </Button>
        </div>
      </div>
    </section>
  );
}
