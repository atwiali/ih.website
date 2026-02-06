import { Instagram, Phone, MapPin, Clock, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CONTACT_INFO, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#0b2a3a] via-[#045a82] to-[#0b6b54] text-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-start">
              <Image
                src="/images/favicon.png"
                alt=""
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h3 className="font-bold text-lg">{SITE_CONFIG.nameShort}</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed text-right">
              مركز طبي متكامل يقدم خدمات صحية شاملة بأعلى معايير الجودة والرعاية الطبية المتخصصة.
            </p>
            <div className="flex items-center justify-start gap-3">
              <a
                href={CONTACT_INFO.phone.tel}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="اتصال هاتفي"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="إنستغرام"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="تيك توك"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href={CONTACT_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/20 text-white hover:bg-[#25D366]/30 transition-colors"
                aria-label="واتساب"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-right space-y-4">
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#hero" className="text-white/80 hover:text-white text-sm transition-colors">
                الرئيسية
              </Link>
              <Link href="#about" className="text-white/80 hover:text-white text-sm transition-colors">
                من نحن
              </Link>
              <Link href="#clinics" className="text-white/80 hover:text-white text-sm transition-colors">
                العيادات التخصصية
              </Link>
              <Link href="#services" className="text-white/80 hover:text-white text-sm transition-colors">
                الخدمات
              </Link>
              <Link href="#doctors" className="text-white/80 hover:text-white text-sm transition-colors">
                دوام الأطباء
              </Link>
              <Link href="#faq" className="text-white/80 hover:text-white text-sm transition-colors">
                الأسئلة الشائعة
              </Link>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="text-right space-y-4">
            <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              <li>• عيادات تخصصية</li>
              <li>• مختبر طبي متطور</li>
              <li>• قسم الأشعة والتشخيص</li>
              <li>• تحاليل دم شاملة</li>
              <li>• أشعة صوتية</li>
              <li>• تخطيط القلب والسمع</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="text-right space-y-4">
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 justify-start">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-white/80 flex-1 text-right">
                  {CONTACT_INFO.address.full}
                </div>
              </div>
              <div className="flex items-center gap-2 justify-start">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a 
                  href={CONTACT_INFO.phone.tel}
                  className="text-white/80 hover:text-white transition-colors"
                  dir="ltr"
                >
                  {CONTACT_INFO.phone.international}
                </a>
              </div>
              <div className="flex items-center gap-2 justify-start">
                <WhatsAppIcon className="h-5 w-5 text-secondary shrink-0" />
                <a 
                  href={CONTACT_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  dir="ltr"
                >
                  {CONTACT_INFO.whatsapp.displayNumber}
                </a>
              </div>
              <div className="flex items-start gap-2 justify-start">
                <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-white/80 flex-1 text-right">
                  {CONTACT_INFO.workingHours.ar}
                  <br />
                  <span className="text-xs">({CONTACT_INFO.workingHours.note})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <div className="aspect-video max-w-4xl mx-auto overflow-hidden rounded-xl border-2 border-white/20 bg-white/5 shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D8%AC%D9%86%D8%A9+%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84+%D8%A7%D9%84%D8%A3%D8%B9%D8%B8%D9%85&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              title="موقع مركز الإمام الحسين (ع) الصحي على خرائط جوجل"
            />
          </div>
          <div className="text-center mt-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=%D8%A8%D8%B1%D8%AC+%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D8%AC%D9%86%D8%A9+%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84+%D8%A7%D9%84%D8%A3%D8%B9%D8%B8%D9%85"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-secondary transition-colors"
            >
              <MapPin className="h-4 w-4" />
              فتح الموقع على خرائط جوجل
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <p className="text-center md:text-right">
              © {new Date().getFullYear()} {SITE_CONFIG.name} - جميع الحقوق محفوظة
            </p>
            <p className="text-center md:text-left">
              Powered by <a href="https://devycode.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-secondary transition-colors">Devy Code</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
