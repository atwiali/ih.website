import { Award, Users, Heart, Shield } from "lucide-react";
import { STATISTICS } from "@/lib/constants";

const features = [
  {
    icon: Award,
    title: "خبرة طويلة",
    description: `أكثر من ${STATISTICS.yearsOfService} سنة من الخدمة الطبية المتميزة`,
  },
  {
    icon: Users,
    title: "فريق متخصص",
    description: `${STATISTICS.specialists} طبيب اختصاصي في مختلف المجالات`,
  },
  {
    icon: Heart,
    title: "رعاية شاملة",
    description: "خدمات طبية متكاملة تحت سقف واحد",
  },
  {
    icon: Shield,
    title: "جودة عالية",
    description: "أحدث الأجهزة الطبية والمعايير العالمية",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text Content */}
          <div className="space-y-6 text-right">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-3">
                من نحن
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mr-auto" />
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              مركز الإمام الحسين (ع) الصحي هو صرح طبي متكامل يقدم خدمات صحية
              شاملة لسكان برج البراجنة والمناطق المحيطة. نفخر بتقديم رعاية طبية
              عالية الجودة بأسعار معقولة، مع التركيز على راحة المريض وسلامته.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              يضم مركزنا نخبة من الأطباء الاختصاصيين ذوي الخبرة الطويلة،
              مختبراً طبياً مجهزاً بأحدث الأجهزة، وقسم أشعة متطور. نسعى دائماً
              لتطوير خدماتنا ومواكبة أحدث التقنيات الطبية لضمان أفضل رعاية
              لمرضانا.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                رؤيتنا ورسالتنا
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                نسعى لأن نكون المركز الصحي الأول في المنطقة من حيث جودة الخدمة
                والرعاية الطبية، مع الحفاظ على قيمنا الإنسانية والأخلاقية في
                التعامل مع كل مريض.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border bg-gradient-to-br from-white to-primary/5 p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-12 rounded-2xl bg-primary-gradient p-8 text-white shadow-lg">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold sm:text-4xl">
                {STATISTICS.yearsOfService}+
              </div>
              <div className="mt-2 text-sm text-white/90">سنة من الخبرة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold sm:text-4xl">
                {STATISTICS.patientsServed}
              </div>
              <div className="mt-2 text-sm text-white/90">مريض راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold sm:text-4xl">
                {STATISTICS.specialists}
              </div>
              <div className="mt-2 text-sm text-white/90">طبيب اختصاصي</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold sm:text-4xl">
                {STATISTICS.clinics}
              </div>
              <div className="mt-2 text-sm text-white/90">عيادة تخصصية</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
