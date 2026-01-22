"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TemplatesSection } from "@/components/sections/TemplatesSection";
import { ValentineWeekSection } from "@/components/sections/ValentineWeekSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen">
        {/* Navigation */}
        <Navbar />
        
        {/* Page Sections */}
        <HeroSection />
        <FeaturesSection />
        <TemplatesSection />
        <ValentineWeekSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        
        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
