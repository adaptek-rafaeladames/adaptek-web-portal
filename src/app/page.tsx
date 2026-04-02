/**
 * Home Page — assembly file only.
 * This file imports and orders sections. No logic lives here.
 * To add/remove/reorder sections, edit this file only.
 * To change content, edit src/lib/i18n/en.ts.
 * To change layout/styling, edit the individual section component.
 */

import { HeroSection } from "@/components/sections/HeroSection";
import { WhyAdaptekSection } from "@/components/sections/WhyAdaptekSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { CtaStripSection } from "@/components/sections/CtaStripSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <WhyAdaptekSection />
      <ServicesSection />
      <ProofSection />
      <FoundersSection />
      <CtaStripSection />
      <ContactSection />
    </main>
  );
}
