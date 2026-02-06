import Link from "next/link";
import { Button } from "@/components/ui/button";

// استخدم هذا الرابط مع أي فيديو حقيقي تريده (YouTube embed URL)
const YOUTUBE_EMBED_URL =
  "https://www.youtube.com/embed/dQw4w9WgXcQ";

export function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20"
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
        <div className="order-2 md:order-1 space-y-6 text-right">
          <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            مركز الإمام الحسين (ع) الصحي - رعاية طبية متكاملة لسلامتكم
          </h1>
          <p className="max-w-xl mr-0 ml-auto text-muted-foreground text-lg leading-relaxed">
            نقدم خدمات طبية متخصصة تشمل العيادات التخصصية، المختبرات المتقدمة، وقسم الأشعة المتطور، لضمان حصولكم على أفضل رعاية صحية في مكان واحد.
          </p>
          <div className="flex flex-col gap-3 w-full md:w-auto md:flex-row md:flex-wrap md:justify-end">
            <Button asChild size="lg" className="w-full md:w-auto bg-primary-gradient text-white border-0 rounded-xl hover:opacity-95 shadow-soft hover:shadow-soft-hover transition-all">
              <a
                href="https://wa.me/96176040882"
                target="_blank"
                rel="noopener noreferrer"
              >
                تواصل معنا عبر واتساب
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full md:w-auto rounded-xl">
              <Link href="#doctors">عرض جدول الأطباء</Link>
            </Button>
          </div>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-end">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#a1c53e]/20 text-[#a1c53e] text-lg">
                ✓
              </span>
              <span>أحدث التقنيات الطبية</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#a1c53e]/20 text-[#a1c53e] text-lg">
                ✓
              </span>
              <span>نخبة من الأطباء الاختصاصيين</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#a1c53e]/20 text-[#a1c53e] text-lg">
                ✓
              </span>
              <span>خدمات صحية ميسّرة</span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-xl border-2 border-[#a1c53e] aspect-video bg-muted shadow-[0_0_0_1px_rgba(161,197,62,0.3),0_8px_32px_rgba(3,151,213,0.15)]">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="فيديو تعريفي عن مركز الإمام الحسين (ع) الصحي"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
