import { AnimatedSection } from "@/components/animated-section";
import { Hero } from "@/components/hero";
import { ClinicsSection } from "@/components/clinics-section";
import { DiagnosticServices } from "@/components/diagnostic-services";
import { DoctorsSchedule } from "@/components/doctors-schedule";

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <Hero />
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
    </>
  );
}
