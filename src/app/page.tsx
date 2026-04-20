/**
 * Home Page — assembly file only.
 * This file imports and orders sections. No logic lives here.
 * To add/remove/reorder sections, edit this file only.
 * To change content, edit src/lib/i18n/en.ts.
 * To change layout/styling, edit the individual section component.
 *
 * V3 Section Order:
 * Hero → The Problem (5 Barriers) → Who We Serve → Services →
 * Disability Spotlight → Case Studies → Competitive Edge →
 * Founders → CTA Strip → Contact
 */

import { HeroSection } from "@/components/sections/HeroSection";
import { WhyAdaptekSection } from "@/components/sections/WhyAdaptekSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DisabilitySpotlightSection } from "@/components/sections/DisabilitySpotlightSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { CompetitiveSection } from "@/components/sections/CompetitiveSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { CtaStripSection } from "@/components/sections/CtaStripSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <WhyAdaptekSection />
      <WhoWeServeSection />
      <ServicesSection />
      <DisabilitySpotlightSection />
      <ProofSection />
      <CompetitiveSection />
      <FoundersSection />
      <CtaStripSection />
      <ContactSection />
    </main>
  );
}
