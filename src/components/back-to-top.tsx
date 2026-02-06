"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="العودة للأعلى"
      className={`
        fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full
        bg-[#a1c53e] text-white shadow-lg
        transition-all duration-300 ease-out
        hover:bg-[#8fb336] hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-[#a1c53e] focus:ring-offset-2
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}
