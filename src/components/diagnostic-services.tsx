import { TestTube, Scan } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export function DiagnosticServices() {
  return (
    <section id="services" className="border-t border-border bg-[#f5f5f5] py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-3">
            خدمات التشخيص المتطورة
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نوفر أحدث تقنيات التشخيص الطبي لضمان دقة النتائج وسرعة الخدمة
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div
            id="lab"
            className="rounded-2xl border border-border bg-white p-6 shadow-soft md:p-8 hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <TestTube className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                {SERVICES.lab.title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {SERVICES.lab.description}
            </p>
            <ul className="space-y-2">
              {SERVICES.lab.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs shrink-0">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div
            id="radiology"
            className="rounded-2xl border border-border bg-white p-6 shadow-soft md:p-8 hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                <Scan className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                {SERVICES.radiology.title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {SERVICES.radiology.description}
            </p>
            <ul className="space-y-2">
              {SERVICES.radiology.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/20 text-secondary text-xs shrink-0">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
