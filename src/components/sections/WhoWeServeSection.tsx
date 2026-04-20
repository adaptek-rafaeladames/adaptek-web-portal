import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { en } from "@/lib/i18n/en";

const { whoWeServe } = en;

// Icon map for each segment
const SegmentIcon = ({ id }: { id: string }) => {
  const icons: Record<string, React.ReactNode> = {
    accessibility: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="5" r="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6M12 9v5m-3 4l1.5-4M15 18l-1.5-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12a7 7 0 1014 0A7 7 0 005 12z" />
      </svg>
    ),
    health: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    enterprise: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    hr: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    latam: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    behavioral: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M9 3.75h6M9 3.75a2.25 2.25 0 000 4.5h6a2.25 2.25 0 000-4.5M9 8.25h6" />
      </svg>
    ),
  };
  return <>{icons[id] ?? null}</>;
};

/**
 * WhoWeServeSection — 6-segment grid introducing Adaptek's ideal clients.
 * Helps prospects self-identify quickly.
 */
export function WhoWeServeSection() {
  return (
    <section
      id="who-we-serve"
      aria-labelledby="serve-heading"
      className="py-section bg-white"
    >
      <div className="container-content">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="green" className="mb-4">
            {whoWeServe.sectionLabel}
          </Badge>
          <h2
            id="serve-heading"
            className="font-sans font-bold text-3xl md:text-4xl text-brand-charcoal mb-4"
          >
            {whoWeServe.headline}
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            {whoWeServe.subheadline}
          </p>
        </div>

        {/* Segments grid — 2 top, 3 bottom on md+ */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Organizations Adaptek serves"
        >
          {whoWeServe.segments.map((segment) => (
            <li key={segment.id}>
              <Card as="article" hover className="h-full flex flex-col">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-brand-green-light flex items-center justify-center text-brand-green mb-4">
                  <SegmentIcon id={segment.icon} />
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-base text-brand-charcoal leading-snug mb-3">
                  {segment.title}
                </h3>

                {/* Description */}
                <p className="text-brand-charcoal-light text-sm leading-relaxed flex-1 mb-5">
                  {segment.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {segment.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-brand-green-dark bg-brand-green-light px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
