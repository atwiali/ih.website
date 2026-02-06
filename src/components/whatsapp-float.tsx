import { WhatsAppIcon } from "@/components/whatsapp-icon";

const WHATSAPP_NUMBER = "96176040882";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="تواصل معنا عبر واتساب"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
