import { TestTube, Scan } from "lucide-react";

export function DiagnosticServices() {
  return (
    <section className="border-t border-border bg-[#f5f5f5] py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div
            id="lab"
            className="rounded-xl border border-border bg-white p-6 shadow-soft md:p-8 hover:shadow-soft-hover transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <TestTube className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                المختبر الطبي
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              نقدم باقة واسعة من الفحوصات المخبرية (دم، هرمونات، وظائف أعضاء) باستخدام أجهزة أوتوماتيكية متطورة لضمان الدقة والسرعة.
            </p>
          </div>
          <div
            id="radiology"
            className="rounded-xl border border-border bg-white p-6 shadow-soft md:p-8 hover:shadow-soft-hover transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                <Scan className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                قسم الأشعة والتشخيص
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-2">
              تشخيص دقيق باستخدام الأشعة السينية (X-Ray)، التصوير الصوتي (Echo)، البانوراما الرقمية للأسنان، وتخطيط السمع والقلب.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
