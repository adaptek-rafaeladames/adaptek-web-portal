import { Button } from "@/components/ui/Button";
import { en } from "@/lib/i18n/en";

const { ctaStrip } = en;

/**
 * CtaStripSection — a high-contrast conversion strip between content
 * and the contact form. Primary and secondary CTAs.
 */
export function CtaStripSection() {
  return (
    <section
      aria-labelledby="cta-strip-heading"
      className="py-16 bg-gradient-to-r from-brand-orange to-brand-orange-dark"
    >
      <div className="container-content text-center">
        <h2
          id="cta-strip-heading"
          className="font-sans font-bold text-3xl md:text-4xl text-white mb-4"
        >
          {ctaStrip.headline}
        </h2>
        <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {ctaStrip.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/?intent=consult#contact"
            className="bg-white text-brand-orange hover:bg-brand-orange-light border-0 font-bold"
            size="lg"
          >
            {ctaStrip.ctaPrimary}
          </Button>
          <Button
            href="/?intent=accessibility#contact"
            className="bg-transparent text-white border-2 border-white hover:bg-white/10"
            size="lg"
          >
            {ctaStrip.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
