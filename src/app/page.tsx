import { AnimatedSection } from "@/components/animated-section";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ClinicsSection } from "@/components/clinics-section";
import { DiagnosticServices } from "@/components/diagnostic-services";
import { DoctorsSchedule } from "@/components/doctors-schedule";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <ClinicsSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <DiagnosticServices />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <DoctorsSchedule />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <FAQSection />
      </AnimatedSection>
    </>
  );
}
