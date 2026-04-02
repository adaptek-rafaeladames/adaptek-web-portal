import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { en } from "@/lib/i18n/en";

const { proof } = en;

/**
 * ProofSection — social trust section with outcome stats,
 * client logos placeholder, and secondary CTA.
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

        {/* Outcome stats */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14"
          role="list"
          aria-label="Key outcome metrics"
        >
          {proof.outcomes.map((outcome, i) => (
            <li
              key={i}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <p className="font-sans font-extrabold text-5xl text-brand-orange mb-3">
                {outcome.metric}
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                {outcome.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Client logos placeholder */}
        <div className="text-center mb-10">
          <p className="text-white/50 text-sm uppercase tracking-widest font-sans mb-6">
            {proof.logosLabel}
          </p>
          <div
            className="flex flex-wrap justify-center gap-6"
            aria-label="Client logos — coming soon"
          >
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="h-10 w-28 rounded-lg bg-white/10 animate-pulse"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            href="#contact"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white border-0"
          >
            {proof.ctaText} →
          </Button>
        </div>
      </div>
    </section>
  );
}
