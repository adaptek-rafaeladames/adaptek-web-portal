import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { en } from "@/lib/i18n/en";

const { whyAdaptek } = en;

/**
 * WhyAdaptekSection — V3 rewrite.
 * Opens with the 95% stat hook, then the 5 barriers grid,
 * then the problem/solution split columns.
 */
export function WhyAdaptekSection() {
  return (
    <section aria-labelledby="why-heading" className="py-section bg-white">
      <div className="container-content">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="green" className="mb-4">
            {whyAdaptek.sectionLabel}
          </Badge>
          <h2
            id="why-heading"
            className="font-sans font-bold text-3xl md:text-4xl text-brand-charcoal mb-4"
          >
            {whyAdaptek.headline}
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            {whyAdaptek.intro}
          </p>
        </div>

        {/* 95% stat callout */}
        <div className="relative rounded-2xl bg-brand-charcoal text-white p-8 md:p-12 mb-14 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"
          />
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Stat text */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 flex-1">
              <div className="text-center md:text-left shrink-0">
                <p
                  className="font-sans font-extrabold text-7xl md:text-8xl text-brand-orange leading-none"
                  aria-label={whyAdaptek.stat + " " + whyAdaptek.statLabel}
                >
                  {whyAdaptek.stat}
                </p>
                <p className="text-white/70 font-medium text-lg mt-2">
                  {whyAdaptek.statLabel}
                </p>
              </div>
              <div className="md:border-l md:border-white/20 md:pl-8">
                <p className="text-white/90 text-xl md:text-2xl font-medium leading-snug">
                  {whyAdaptek.statCaption}
                </p>
              </div>
            </div>
            {/* Illustration */}
            <div className="shrink-0 w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden opacity-90">
              <Image
                src="/images/img-brain-dual.png"
                alt="Paper-cut illustration of a dual orange and green brain with circuit patterns representing the intersection of AI engineering and human-centered design"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 5 Barriers grid */}
        <div className="mb-14">
          <h3 className="font-sans font-semibold text-xl text-brand-charcoal mb-6 text-center">
            {whyAdaptek.barriersHeading}
          </h3>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            role="list"
          >
            {whyAdaptek.barriers.map((barrier) => (
              <li
                key={barrier.number}
                className="flex gap-4 p-5 rounded-xl border border-brand-orange/20 bg-brand-orange-light/10"
              >
                <span
                  aria-hidden="true"
                  className="font-sans font-extrabold text-2xl text-brand-orange shrink-0 leading-none mt-0.5"
                >
                  {barrier.number}
                </span>
                <div>
                  <p className="font-sans font-semibold text-sm text-brand-charcoal mb-1">
                    {barrier.title}
                  </p>
                  <p className="text-brand-charcoal-light text-xs leading-relaxed">
                    {barrier.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-center text-brand-charcoal-light text-sm mt-5 italic max-w-2xl mx-auto">
            {whyAdaptek.barriersFootnote}
          </p>
        </div>

        {/* Problem / Solution columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="font-sans font-semibold text-base text-brand-charcoal mb-5">
              {whyAdaptek.problemsHeadline}
            </h3>
            <ul className="space-y-4" role="list">
              {whyAdaptek.problems.map((problem, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-brand-charcoal-light text-sm leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="text-red-400 mt-0.5 shrink-0"
                  >
                    ✗
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-brand-green-light rounded-2xl p-8">
            <h3 className="font-sans font-semibold text-base text-brand-charcoal mb-5">
              {whyAdaptek.solutionsHeadline}
            </h3>
            <ul className="space-y-4" role="list">
              {whyAdaptek.solutions.map((solution, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-brand-charcoal text-sm leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="text-brand-green mt-0.5 shrink-0 font-bold"
                  >
                    ✓
                  </span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
