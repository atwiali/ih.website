import { Instagram, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const INSTAGRAM_URL = "https://www.instagram.com/ih.healthcenter?igsh=MTRwbmhwODhya2dwdg==";
const TIKTOK_URL = "https://www.tiktok.com/@user8186067258852?_r=1&_t=ZS-93hFEYRPIL2";
const WHATSAPP_NUMBER = "96176040882";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_TEL = "tel:+9611454644";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-primary py-12 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-3 text-white/90">
            <p className="font-medium text-white">الموقع</p>
            <p>برج البراجنة - نزلة مستشفى الرسول الأعظم - مقابل بناية الموسوي</p>
            <p className="pt-2 text-white/90">
              دوام العمل الرسمي: دوام المركز العام: يومياً من الساعة 8:00 صباحاً حتى 5:00 مساءً. (الأحد عطلة رسمية).
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href={PHONE_TEL}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
              aria-label="اتصال هاتف 01"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
              aria-label="إنستغرام"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
              aria-label="تيك توك"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
              aria-label="واتساب"
            >
              <WhatsAppIcon className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-6 w-full max-w-3xl space-y-3">
            <div className="aspect-video overflow-hidden rounded-xl border-2 border-white/20 bg-white/5">
              <iframe
                src="https://www.google.com/maps?q=%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D8%AC%D9%86%D8%A9+%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84+%D8%A7%D9%84%D8%A3%D8%B9%D8%B8%D9%85&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                title="موقع مركز الإمام الحسين (ع) الصحي على خرائط جوجل"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D8%AC%D9%86%D8%A9+%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84+%D8%A7%D9%84%D8%A3%D8%B9%D8%B8%D9%85"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:text-[#a1c53e] hover:underline transition-colors"
            >
              فتح الموقع على خرائط جوجل
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-white/80 mt-8">
          جميع الحقوق محفوظة - مركز الإمام الحسين (ع) الصحي
        </p>
      </div>
    </footer>
  );
}
