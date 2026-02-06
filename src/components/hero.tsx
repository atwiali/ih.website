import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, MEDIA, STATISTICS } from "@/lib/constants";
import { Phone, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative container mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20"
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
        <div className="order-2 md:order-1 space-y-6 text-right">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span>أكثر من {STATISTICS.yearsOfService} سنة من الثقة والخبرة</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            صحتكم أمانة في أيدٍ خبيرة
            <span className="block mt-2 text-primary">
              {STATISTICS.patientsServed} مريض وثقوا بنا
            </span>
          </h1>
          
          <p className="max-w-xl mr-0 ml-auto text-muted-foreground text-lg leading-relaxed">
            مركز طبي متكامل يضم <strong className="text-foreground">{STATISTICS.specialists} طبيب اختصاصي</strong> و<strong className="text-foreground">{STATISTICS.clinics} عيادة تخصصية</strong>، مع مختبر وأشعة متطورة - كل ما تحتاجونه تحت سقف واحد.
          </p>

          <div className="flex flex-col gap-3 w-full md:flex-row md:flex-wrap md:justify-start">
            <Button 
              asChild 
              size="lg" 
              className="w-full md:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <a
                href={CONTACT_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                احجز موعدك الآن عبر واتساب
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full md:w-auto rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <a href={CONTACT_INFO.phone.tel} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                اتصل بنا: <span dir="ltr">{CONTACT_INFO.phone.display}</span>
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-3 border border-primary/20">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary text-lg shrink-0">
                ✓
              </span>
              <span className="text-sm font-medium text-foreground">أحدث التقنيات الطبية</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-secondary/5 to-secondary/10 p-3 border border-secondary/20">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-secondary text-lg shrink-0">
                ✓
              </span>
              <span className="text-sm font-medium text-foreground">نتائج فورية</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-3 border border-primary/20">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary text-lg shrink-0">
                ✓
              </span>
              <span className="text-sm font-medium text-foreground">أسعار معقولة</span>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 shadow-[0_0_0_1px_rgba(3,151,213,0.2),0_8px_32px_rgba(3,151,213,0.2)] hover:shadow-[0_0_0_1px_rgba(3,151,213,0.3),0_12px_40px_rgba(3,151,213,0.25)] transition-all duration-300">
            <iframe
              src={MEDIA.heroVideo}
              title="فيديو تعريفي عن مركز الإمام الحسين (ع) الصحي"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              loading="lazy"
            />
            {/* Decorative gradient overlay on corners */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
