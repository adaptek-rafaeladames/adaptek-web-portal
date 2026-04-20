import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { en } from "@/lib/i18n/en";

const { services } = en;

// Icon map — accessible SVG icons
const ServiceIcon = ({ id }: { id: string }) => {
  const icons: Record<string, React.ReactNode> = {
    accessibility: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="5" r="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6M12 9v5m-3 4l1.5-4M15 18l-1.5-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12a7 7 0 1014 0A7 7 0 005 12z" />
      </svg>
    ),
    brain: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    people: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  };
  return <>{icons[id] ?? null}</>;
};

/**
 * ServicesSection — V3 4-service-line grid with lead attribution.
 */
export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-section bg-brand-offwhite"
    >
      <div className="container-content">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="orange" className="mb-4">
            {services.sectionLabel}
          </Badge>
          <h2
            id="services-heading"
            className="font-sans font-bold text-3xl md:text-4xl text-brand-charcoal mb-4"
          >
            {services.headline}
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            {services.subheadline}
          </p>
        </div>

        {/* 4-card grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Adaptek service offerings"
        >
          {services.items.map((service) => (
            <li key={service.id}>
              <Card as="article" hover className="h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-orange-light flex items-center justify-center text-brand-orange mb-4">
                  <ServiceIcon id={service.icon} />
                </div>

                <CardHeader>
                  <h3 className="font-sans font-bold text-base text-brand-charcoal leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-brand-green-dark font-medium text-sm mt-1">
                    {service.tagline}
                  </p>
                  {/* Lead attribution — V3 addition */}
                  <p className="text-brand-charcoal-light text-xs mt-2 italic">
                    {service.lead}
                  </p>
                </CardHeader>

                <CardBody className="flex-1">
                  <ul className="space-y-2" role="list">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <span
                          aria-hidden="true"
                          className="text-brand-orange mt-0.5 shrink-0"
                        >
                          →
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardBody>

                {/* Pricing footer */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-brand-charcoal-light">
                  <span>{service.priceRange}</span>
                  <span>{service.leadTime}</span>
                </div>
              </Card>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <Button href="/?intent=services#contact" variant="secondary">
            Not sure which service fits? Let&#39;s talk →
          </Button>
        </div>
      </div>
    </section>
  );
}
