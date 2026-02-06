import type { Metadata, Viewport } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import { AnimatedSection } from "@/components/animated-section";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BackToTop } from "@/components/back-to-top";
import { ContactFooter } from "@/components/contact-footer";
import { SITE_CONFIG, CONTACT_INFO, SEO_KEYWORDS, MEDIA, SOCIAL_LINKS } from "@/lib/constants";

const readexPro = Readex_Pro({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-readex-pro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "مركز الإمام الحسين (ع) الصحي - مركز صحي في برج البراجنة | عيادات تخصصية ومختبر",
    template: "%s | مركز الإمام الحسين (ع) الصحي",
  },
  description: SITE_CONFIG.description,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_LB",
    url: SITE_CONFIG.url,
    title: "مركز الإمام الحسين (ع) الصحي - مركز صحي في برج البراجنة",
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: MEDIA.ogImage,
        width: 1200,
        height: 630,
        alt: "مركز الإمام الحسين (ع) الصحي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مركز الإمام الحسين (ع) الصحي",
    description: SITE_CONFIG.description,
    images: [MEDIA.ogImage],
  },
  icons: {
    icon: MEDIA.favicon,
    apple: MEDIA.favicon,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0397d5",
};

// Schema.org structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      alternateName: SITE_CONFIG.nameShort,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}${MEDIA.logo}`,
      image: `${SITE_CONFIG.url}${MEDIA.ogImage}`,
      description: SITE_CONFIG.description,
      telephone: CONTACT_INFO.phone.international,
      email: CONTACT_INFO.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT_INFO.address.full,
        addressLocality: CONTACT_INFO.address.city,
        addressCountry: CONTACT_INFO.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: CONTACT_INFO.address.coordinates.lat,
        longitude: CONTACT_INFO.address.coordinates.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
      priceRange: "$$",
      medicalSpecialty: [
        "Dentistry",
        "Cardiology",
        "Dermatology",
        "Neurology",
        "Orthopedics",
        "Pediatrics",
        "GeneralPractice",
      ],
      sameAs: [
        CONTACT_INFO.whatsapp.url,
        ...(SOCIAL_LINKS.instagram.url ? [SOCIAL_LINKS.instagram.url] : []),
        ...(SOCIAL_LINKS.tiktok.url ? [SOCIAL_LINKS.tiktok.url] : []),
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      publisher: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      inLanguage: "ar",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="ar" className={readexPro.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen font-sans">
        <Navbar />
        <main className="pt-14">{children}</main>
        <AnimatedSection delay={100}>
          <ContactFooter />
        </AnimatedSection>
        <WhatsAppFloat />
        <BackToTop />
      </body>
    </html>
  );
}
