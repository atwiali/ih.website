import { CheckCircle2, Clock, Shield, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "أطباء اختصاصيون معتمدون",
    description:
      "نخبة من الأطباء ذوي الخبرة الطويلة والشهادات المعتمدة في مختلف التخصصات الطبية",
  },
  {
    icon: Sparkles,
    title: "أحدث التقنيات الطبية",
    description:
      "نستخدم أحدث الأجهزة والتقنيات الطبية لضمان دقة التشخيص وفعالية العلاج",
  },
  {
    icon: Clock,
    title: "خدمة سريعة ومنظمة",
    description:
      "نظام مواعيد منظم ونتائج سريعة للفحوصات المخبرية والأشعة في نفس اليوم",
  },
  {
    icon: Shield,
    title: "أسعار معقولة وشفافة",
    description:
      "نقدم خدمات طبية عالية الجودة بأسعار مناسبة مع قبول معظم أنواع التأمين الصحي",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-t border-border bg-gradient-to-b from-[#f9fafb] to-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-3">
            لماذا تختار مركزنا؟
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نجمع بين الخبرة الطبية والتقنية الحديثة لنقدم لكم أفضل رعاية صحية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-white p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 text-right">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-xl bg-primary/5">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">معدات معقمة</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-secondary/10">
            <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">دعم عبر واتساب</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-primary/5">
            <div className="text-2xl font-bold text-primary mb-1">19+</div>
            <div className="text-sm text-muted-foreground">عيادة تخصصية</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-secondary/10">
            <div className="text-2xl font-bold text-secondary mb-1">30+</div>
            <div className="text-sm text-muted-foreground">سنة خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}
