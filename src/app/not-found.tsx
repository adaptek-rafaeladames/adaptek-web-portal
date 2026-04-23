import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — Adaptek",
  description:
    "The page you're looking for doesn't exist. Let us help you find what you need.",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { label: "Services", href: "/#services" },
  { label: "Who We Serve", href: "/#who-we-serve" },
  { label: "About Us", href: "/#founders" },
  { label: "Contact", href: "/#contact" },
];

/**
 * NotFound — global 404 page for the Adaptek site.
 *
 * Design intent: self-aware, on-brand humor — an accessibility-first company
 * whose missing page is itself perfectly accessible. The glitch animation on
 * the "404" number fires once on load and is fully gated behind
 * `prefers-reduced-motion: no-preference` so it never triggers for users
 * with motion sensitivity.
 *
 * Navbar + Footer are rendered automatically by layout.tsx.
 * Excluded from search indexing (robots: noindex).
 */
export default function NotFound() {
  return (
    <>
      {/* Glitch keyframe — scoped here, respects prefers-reduced-motion */}
      <style>{`
        @keyframes glitch {
          0%   { color: #FF7F2E; transform: translateX(0)   skewX(0deg);   }
          15%  { color: #E06A18; transform: translateX(-3px) skewX(-2deg);  }
          30%  { color: #FF7F2E; transform: translateX(3px)  skewX(1deg);   }
          50%  { color: #c2410c; transform: translateX(-2px) skewX(-1deg);  }
          70%  { color: #FF7F2E; transform: translateX(1px)  skewX(0.5deg); }
          85%  { color: #E06A18; transform: translateX(-1px) skewX(0deg);   }
          100% { color: #FF7F2E; transform: translateX(0)   skewX(0deg);   }
        }
        @media (prefers-reduced-motion: no-preference) {
          .glitch-once {
            animation: glitch 0.4s ease-in-out 0.7s 1 both;
          }
        }
      `}</style>

      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 bg-brand-offwhite py-20 md:py-32"
      >
        <div className="container-content max-w-2xl mx-auto text-center">

          {/* Badge */}
          <span
            className="inline-block bg-brand-green-light text-brand-green-dark text-xs font-semibold font-sans uppercase tracking-widest px-3 py-1 rounded-full mb-8"
            aria-hidden="true"
          >
            Error 404
          </span>

          {/* 404 — decorative, aria-hidden so screen readers skip the number
              and go straight to the h1 headline below */}
          <p
            className="glitch-once font-sans font-extrabold text-[8rem] md:text-[10rem] text-brand-orange leading-none mb-4 select-none"
            aria-hidden="true"
          >
            404
          </p>

          {/* Main headline — this is what screen readers announce */}
          <h1 className="font-sans font-bold text-2xl md:text-4xl text-brand-charcoal mb-5 leading-snug">
            This page is perfectly accessible.{" "}
            <span className="text-brand-charcoal-light">
              It just doesn&apos;t exist.
            </span>
          </h1>

          {/* Body copy */}
          <p className="text-brand-charcoal-light text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            We verified it — zero contrast failures, full keyboard navigation,
            complete screen reader support. There&apos;s just no content here.
            Somehow this is still a better experience than 95% of AI
            implementations we&apos;ve walked into.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold font-sans px-6 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              ← Take me home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 border border-brand-charcoal/20 hover:border-brand-orange text-brand-charcoal hover:text-brand-orange font-semibold font-sans px-6 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              Contact Adaptek
            </Link>
          </div>

          {/* Quick jump links */}
          <div className="border-t border-brand-charcoal/10 pt-8">
            <p className="text-brand-charcoal-light text-sm mb-4 font-medium">
              Or jump directly to a section:
            </p>
            <nav
              aria-label="Quick page navigation"
              className="flex flex-wrap justify-center gap-x-8 gap-y-3"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-charcoal-light hover:text-brand-orange transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-orange rounded"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom whisper line */}
        <p className="text-center text-brand-charcoal/30 text-xs mt-20 italic px-4">
          Error 404 &middot; The one thing we couldn&apos;t make human-centered
          was a page that doesn&apos;t exist.
        </p>
      </main>
    </>
  );
}
