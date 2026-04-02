import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { en } from "@/lib/i18n/en";

const { hero } = en;

/**
 * HeroSection — 2-column layout with headline, subheadline, dual CTAs,
 * and illustration on the right. Stacks on mobile.
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-28 md:pt-36 pb-section bg-brand-offwhite overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-orange-light/30 via-transparent to-brand-green-light/20 pointer-events-none"
      />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <p className="text-brand-orange font-sans font-semibold text-sm uppercase tracking-widest mb-4">
              Human-Centered AI Consulting
            </p>
            <h1
              id="hero-heading"
              className="font-sans font-bold text-4xl md:text-5xl xl:text-6xl text-brand-charcoal leading-tight mb-6"
            >
              {hero.headline}
            </h1>
            <p className="text-brand-charcoal-light text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact" size="lg">
                {hero.ctaPrimary}
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                {hero.ctaSecondary}
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-sm text-brand-charcoal-light">
                <span aria-hidden="true" className="text-brand-green text-lg">✓</span>
                Massachusetts-based
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-charcoal-light">
                <span aria-hidden="true" className="text-brand-green text-lg">✓</span>
                Healthcare AI specialists
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-charcoal-light">
                <span aria-hidden="true" className="text-brand-green text-lg">✓</span>
                WCAG 2.1 AA compliant work
              </div>
            </div>
          </div>

          {/* Illustration column */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/hero-adaptek-paper.png"
                alt={hero.imageAlt}
                width={560}
                height={480}
                priority
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
