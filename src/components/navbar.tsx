"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CONTACT_INFO } from "@/lib/constants";

const SCROLL_THRESHOLD = 20;

const navLinks = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#clinics", label: "العيادات" },
  { href: "#services", label: "الخدمات" },
  { href: "#doctors", label: "دوام الأطباء" },
  { href: "#testimonials", label: "آراء المرضى" },
  { href: "#faq", label: "الأسئلة" },
  { href: "#contact", label: "اتصل بنا" },
];

function NavLinks({
  className,
  onClick,
  scrolled,
}: {
  className?: string;
  onClick?: () => void;
  scrolled?: boolean;
}) {
  return (
    <nav className={cn("flex flex-wrap items-center gap-1 sm:gap-2", className)}>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onClick}
          className={cn(
            "rounded-md px-3 py-2 text-sm font-medium transition-colors",
            scrolled
              ? "text-white hover:bg-white/20 hover:text-white"
              : "text-foreground hover:bg-primary/10 hover:text-primary"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onSheetOpen = (open: boolean) => {
    if (open) setActiveHash(typeof window !== "undefined" ? window.location.hash || "#hero" : "#hero");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 w-full transition-[background-color,box-shadow] duration-300 ease-out",
        scrolled
          ? "bg-primary shadow-[0_2px 16px rgba(3,151,213,0.35)] backdrop-blur-md"
          : "bg-transparent shadow-none backdrop-blur-none"
      )}
    >
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link
          href="#hero"
          className={cn(
            "flex items-center gap-2 shrink-0 rounded-md transition-colors hover:opacity-90",
            scrolled ? "text-white" : "text-primary"
          )}
          aria-label="مركز الإمام الحسين (ع) الصحي - الرئيسية"
        >
          <Image
            src="/images/favicon.png"
            alt=""
            width={32}
            height={32}
            priority
          />
          <span className="font-semibold text-sm sm:text-base">
            مركز الإمام الحسين (ع) الصحي
          </span>
        </Link>

        <div className="hidden md:flex">
          <NavLinks scrolled={scrolled} />
        </div>

        <Sheet open={open} onOpenChange={(o) => { setOpen(o); onSheetOpen(o); }}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="فتح القائمة"
              className={scrolled ? "text-white hover:bg-white/20 hover:text-white" : ""}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(320px,85vw)] flex flex-col p-0" showCloseButton={false}>
            <div className="flex flex-col flex-1 overflow-hidden">
              <div className="flex items-center justify-between gap-2 p-4 border-b border-border">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="إغلاق القائمة"
                  onClick={() => setOpen(false)}
                  className="shrink-0"
                >
                  <X className="h-5 w-5" />
                </Button>
                <Link
                  href="#hero"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 min-w-0 flex-1 justify-end text-right"
                >
                  <Image
                    src="/images/favicon.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain shrink-0"
                  />
                  <span className="font-semibold text-foreground text-sm leading-tight break-words">
                    مركز الإمام الحسين (ع) الصحي
                  </span>
                </Link>
              </div>
              <nav className="flex flex-col gap-0 p-3 flex-1 overflow-y-auto">
                {navLinks.map(({ href, label }) => {
                  const isActive = activeHash === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-3 text-sm font-medium transition-colors text-right",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>
              <div className="border-t border-border p-4 space-y-3">
                <p className="text-xs text-muted-foreground text-center">
                  دوام العمل: الإثنين - السبت، 8 ص - 5 م
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild className="w-full rounded-xl bg-primary hover:bg-primary/90">
                    <a href={CONTACT_INFO.phone.tel}>اتصل بنا هاتفياً</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-xl border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                    <a href={CONTACT_INFO.whatsapp.url} target="_blank" rel="noopener noreferrer">
                      واتساب
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
