import type { Metadata, Viewport } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import { AnimatedSection } from "@/components/animated-section";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { BackToTop } from "@/components/back-to-top";
import { ContactFooter } from "@/components/contact-footer";

const readexPro = Readex_Pro({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-readex-pro",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ih-health.center";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "مركز الإمام الحسين (ع) الصحي - مركز صحي في برج البراجنة",
  description:
    "مركز صحي في برج البراجنة يقدم تحاليل دم، أشعة صوتية، ومختبر متطور. أفضل أطباء اختصاص في عيادات تخصصية، أشعة وتشخيص. مركز الإمام الحسين (ع) الصحي لرعايتكم.",
  keywords: [
    "مركز صحي",
    "برج البراجنة",
    "تحاليل دم",
    "أشعة صوتية",
    "أفضل أطباء اختصاص",
    "مختبر",
    "أشعة",
    "مركز الإمام الحسين الصحي",
  ],
  openGraph: {
    title: "مركز الإمام الحسين (ع) الصحي - مركز صحي في برج البراجنة",
    description:
      "مركز صحي في برج البراجنة: تحاليل دم، أشعة صوتية، أفضل أطباء اختصاص. عيادات تخصصية، مختبر، أشعة وتشخيص.",
    images: ["/ih.jpeg"],
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="ar" className={readexPro.variable}>
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
