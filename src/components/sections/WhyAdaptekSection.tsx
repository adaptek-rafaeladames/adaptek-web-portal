import { Badge } from "@/components/ui/Badge";
import { en } from "@/lib/i18n/en";

const { whyAdaptek } = en;

/**
 * WhyAdaptekSection — problem + solution split.
 * Two-column layout highlighting the common AI failure pattern
 * and Adaptek's differentiated approach.
 */
export function WhyAdaptekSection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="py-section bg-white"
    >
      <div className="container-content">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        {/* Two-column problem/solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problems column */}
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="font-sans font-semibold text-lg text-brand-charcoal mb-5 flex items-center gap-2">
              <span aria-hidden="true" className="text-red-400 text-2xl">✗</span>
              {whyAdaptek.problemsHeadline}
            </h3>
            <ul className="space-y-4" role="list">
              {whyAdaptek.problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-charcoal-light text-sm leading-relaxed">
                  <span aria-hidden="true" className="text-red-400 mt-0.5 shrink-0">✗</span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions column */}
          <div className="bg-brand-green-light rounded-2xl p-8">
            <h3 className="font-sans font-semibold text-lg text-brand-charcoal mb-5 flex items-center gap-2">
              <span aria-hidden="true" className="text-brand-green text-2xl">✓</span>
              {whyAdaptek.solutionsHeadline}
            </h3>
            <ul className="space-y-4" role="list">
              {whyAdaptek.solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-charcoal text-sm leading-relaxed">
                  <span aria-hidden="true" className="text-brand-green mt-0.5 shrink-0 font-bold">✓</span>
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
