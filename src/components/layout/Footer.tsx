"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { en } from "@/lib/i18n/en";
import { prefixAnchorHref } from "@/lib/prefixAnchorHref";

const { footer } = en;

// SVG icons for each social platform
const SocialIcon = ({ id }: { id: string }) => {
  const icons: Record<string, React.ReactNode> = {
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  };
  return <>{icons[id] ?? null}</>;
};

/**
 * Footer — includes logo, mission tagline, nav links, social media,
 * language toggle, and copyright.
 */
export function Footer() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <footer role="contentinfo" className="bg-brand-charcoal text-white">
      <div className="container-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          {/* Brand column */}
          <div>
            <Image
              src="/images/logo-adaptek-white.png"
              alt="Adaptek logo"
              width={120}
              height={36}
              className="h-8 w-auto mb-4 opacity-90 mix-blend-screen"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
            <p className="text-white/50 text-xs mt-3">
              <a
                href={`mailto:${footer.email}`}
                className="hover:text-brand-orange transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-orange rounded"
              >
                {footer.email}
              </a>
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold font-sans text-white/90 uppercase tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2" role="list">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={prefixAnchorHref(link.href, pathname)}
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-orange rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social media */}
          <div>
            <h3 className="text-sm font-semibold font-sans text-white/90 uppercase tracking-wide mb-4">
              Follow Us
            </h3>
            <ul className="space-y-2" role="list">
              {footer.social.map((platform) => (
                <li key={platform.icon}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-orange rounded"
                    aria-label={`Adaptek on ${platform.label} (opens in new tab)`}
                  >
                    <SocialIcon id={platform.icon} />
                    {platform.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language toggle */}
          <div>
            <h3 className="text-sm font-semibold font-sans text-white/90 uppercase tracking-wide mb-4">
              Language
            </h3>
            <div
              role="group"
              aria-label="Select language"
              className="flex gap-2"
            >
              {(["en", "es"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold font-sans transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
                    lang === l
                      ? "bg-brand-orange text-white"
                      : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                  aria-pressed={lang === l}
                  aria-label={`Switch to ${l === "en" ? "English" : "Spanish"}`}
                >
                  {footer.languageToggle[l]}
                </button>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-3">
              Full Spanish translation coming soon.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/40 text-xs">
          <p>{footer.copyright}</p>
          <p>
            Built with care for humans and machines alike.
          </p>
        </div>
      </div>
    </footer>
  );
}
