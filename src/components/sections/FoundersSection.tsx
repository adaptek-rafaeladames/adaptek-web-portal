"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { en } from "@/lib/i18n/en";

const { founders } = en;

/**
 * FounderPhoto — shows the real photo if found in public/images/,
 * gracefully falls back to an initial avatar if the file isn't there yet.
 *
 * To activate a real photo:
 * 1. Drop the file into public/images/ with the exact name in en.ts
 *    e.g. public/images/rafael-adames.jpg
 * 2. No code changes needed — this component detects it automatically.
 */
function FounderPhoto({ src, alt, initial }: { src: string; alt: string; initial: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-brand-orange-light to-brand-green-light flex items-center justify-center">
        <span className="text-3xl font-bold font-sans text-brand-orange" aria-hidden="true">
          {initial}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={80}
      height={80}
      className="w-full h-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}

/**
 * FoundersSection — introduces Rafael and Vanessa with bios,
 * highlight bullets, and LinkedIn links.
 */
export function FoundersSection() {
  return (
    <section
      id="founders"
      aria-labelledby="founders-heading"
      className="py-section bg-white"
    >
      <div className="container-content">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="green" className="mb-4">
            {founders.sectionLabel}
          </Badge>
          <h2
            id="founders-heading"
            className="font-sans font-bold text-3xl md:text-4xl text-brand-charcoal mb-4"
          >
            {founders.headline}
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            {founders.subheadline}
          </p>
        </div>

        {/* Founder cards */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          role="list"
          aria-label="Adaptek founders"
        >
          {founders.members.map((member) => (
            <li key={member.name}>
              <Card as="article" className="flex flex-col h-full">
                {/* Photo — drops in automatically from public/images/ */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-brand-orange-light">
                    <FounderPhoto
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      initial={member.name.charAt(0)}
                    />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-brand-charcoal">
                      {member.name}
                    </h3>
                    <p className="text-brand-orange font-medium text-sm mt-0.5">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-brand-charcoal-light text-sm leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 flex-1" role="list">
                  {member.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-charcoal">
                      <span aria-hidden="true" className="text-brand-green font-bold mt-0.5 shrink-0">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* LinkedIn */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-brand-charcoal-light hover:text-brand-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
                    aria-label={`Connect with ${member.name} on LinkedIn (opens in new tab)`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
