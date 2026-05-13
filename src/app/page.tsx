import { GridBackground } from "@/components/effects/grid-background";
import { NoiseOverlay } from "@/components/effects/noise-overlay";
import { SiteFooter } from "@/components/layout/site-footer";
import { AboutSection } from "@/components/sections/about-section";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function HomePage() {
  return (
    <main id="main-content" className="relative min-h-screen">
      <NoiseOverlay />
      <GridBackground />
      <HeroSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
