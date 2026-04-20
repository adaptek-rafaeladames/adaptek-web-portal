"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { en } from "@/lib/i18n/en";
import { prefixAnchorHref } from "@/lib/prefixAnchorHref";

const { nav } = en;

/**
 * Navbar — sticky top navigation with skip link, mobile hamburger menu,
 * and visible focus styles for full keyboard accessibility.
 */
export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Skip link — visible on focus for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        {nav.skipLink}
      </a>

      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container-content flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded-lg"
            aria-label="Adaptek — home"
          >
            <Image
              src="/images/logo-adaptek.png"
              alt="Adaptek logo"
              width={120}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={prefixAnchorHref(link.href, pathname)}
                className="text-brand-charcoal hover:text-brand-orange font-sans font-medium text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            ))}
            <Button href="/?intent=consult#contact" size="sm">
              {nav.cta}
            </Button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-brand-charcoal hover:text-brand-orange focus-visible:ring-2 focus-visible:ring-brand-orange"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
            <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
            <span className="block w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <ul className="container-content flex flex-col py-4 gap-1" role="list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={prefixAnchorHref(link.href, pathname)}
                    className="block py-3 text-brand-charcoal hover:text-brand-orange font-sans font-medium transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button href="/?intent=consult#contact" className="w-full justify-center">
                  {nav.cta}
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
