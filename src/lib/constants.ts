// Site-wide constants and configuration
export const SITE_CONFIG = {
  name: "مركز الإمام الحسين (ع) الصحي",
  nameShort: "مركز الإمام الحسين الصحي",
  description:
    "مركز صحي في برج البراجنة يقدم تحاليل دم، أشعة صوتية، ومختبر متطور. أفضل أطباء اختصاص في عيادات تخصصية، أشعة وتشخيص.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ih-health.center",
  locale: "ar",
  direction: "rtl",
} as const;

export const CONTACT_INFO = {
  phone: {
    display: "01-454644",
    tel: "tel:+9611454644",
    international: "+961 1 454644",
  },
  whatsapp: {
    number: "96176040882",
    url: "https://wa.me/96176040882",
    displayNumber: "\u200e+961 76 040 882",
  },
  email: "ih.healthcenter@gmail.com", // Update with actual email
  address: {
    full: "برج البراجنة - نزلة مستشفى الرسول الأعظم - مقابل بناية الموسوي",
    city: "برج البراجنة",
    country: "لبنان",
    coordinates: {
      lat: 33.8547, // Update with actual coordinates
      lng: 35.5053,
    },
  },
  workingHours: {
    ar: "الإثنين - السبت، 8:00 صباحاً - 5:00 مساءً",
    en: "Monday - Saturday, 8:00 AM - 5:00 PM",
    note: "الأحد عطلة رسمية",
  },
} as const;

export const SOCIAL_LINKS = {
  instagram: {
    url: "https://www.instagram.com/ih.healthcenter?igsh=MTRwbmhwODhya2dwdg==",
    handle: "@ih.healthcenter",
  },
  tiktok: {
    url: "https://www.tiktok.com/@user8186067258852?_r=1&_t=ZS-93hFEYRPIL2",
    handle: "@user8186067258852",
  },
  facebook: {
    url: "", // Add if available
    handle: "",
  },
  youtube: {
    url: "",
    channelId: "",
  },
} as const;

export const MEDIA = {
  logo: "/images/favicon.png",
  ogImage: "/ih.jpeg",
  heroVideo: "https://www.youtube.com/embed/vPDn7OW04Bc",
  favicon: "/images/favicon.png",
} as const;

export const STATISTICS = {
  yearsOfService: 30, // Update with actual number
  patientsServed: "50,000+", // Update with actual number
  specialists: "35+",
  clinics: "19+",
  successRate: "98%", // Update with actual number
} as const;

export const NAVIGATION_LINKS = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#clinics", label: "العيادات" },
  { href: "#services", label: "الخدمات" },
  { href: "#doctors", label: "دوام الأطباء" },
  { href: "#testimonials", label: "آراء المرضى" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "اتصل بنا" },
] as const;

export const SEO_KEYWORDS = [
  "مركز صحي",
  "برج البراجنة",
  "تحاليل دم",
  "أشعة صوتية",
  "أفضل أطباء اختصاص",
  "مختبر طبي",
  "أشعة طبية",
  "مركز الإمام الحسين الصحي",
  "عيادات تخصصية",
  "مركز طبي لبنان",
  "أطباء برج البراجنة",
  "فحوصات طبية",
  "تشخيص طبي",
] as const;

export const INSURANCE_PARTNERS = [
  "الضمان الاجتماعي الوطني",
  "تعاونية موظفي الدولة",
  // Add more insurance partners
] as const;

export const SERVICES = {
  lab: {
    title: "المختبر الطبي",
    description:
      "نقدم باقة واسعة من الفحوصات المخبرية (دم، هرمونات، وظائف أعضاء) باستخدام أجهزة أوتوماتيكية متطورة لضمان الدقة والسرعة.",
    features: [
      "تحاليل دم شاملة",
      "فحوصات الهرمونات",
      "وظائف الكبد والكلى",
      "فحوصات السكري",
      "تحاليل الحمل",
      "فحوصات الفيتامينات",
    ],
  },
  radiology: {
    title: "قسم الأشعة والتشخيص",
    description:
      "تشخيص دقيق باستخدام الأشعة السينية (X-Ray)، التصوير الصوتي (Echo)، البانوراما الرقمية للأسنان، وتخطيط السمع والقلب.",
    features: [
      "أشعة سينية (X-Ray)",
      "بانوراما الأسنان (Panoramic)",
      "إيكو (Echo / Ultrasound)",
      "إيكو دوبلر (Echo Doppler)",
      "تخطيط القلب (ECG)",
      "تخطيط السمع",
    ],
  },
} as const;
