"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { en } from "@/lib/i18n/en";
import { prefixAnchorHref } from "@/lib/prefixAnchorHref";

const { footer } = en;

/**
 * Footer — includes logo, mission tagline, nav links, language toggle,
 * accessibility statement, and copyright.
 */
export function Footer() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <footer role="contentinfo" className="bg-brand-charcoal text-white">
      <div className="container-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
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
