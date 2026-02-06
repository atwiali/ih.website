"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs, faqCategories } from "@/data/faq";
import { cn } from "@/lib/utils";
import { CONTACT_INFO } from "@/lib/constants";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredFaqs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="border-t border-border bg-white py-16"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-3">
            الأسئلة الشائعة
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              selectedCategory === "all"
                ? "bg-primary text-white shadow-md"
                : "bg-muted text-muted-foreground hover:bg-primary/10"
            )}
          >
            الكل
          </button>
          {Object.entries(faqCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                selectedCategory === key
                  ? "bg-primary text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl border border-border bg-white shadow-soft overflow-hidden transition-all duration-300 hover:shadow-soft-hover"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-right transition-colors hover:bg-muted/30"
              >
                <h3 className="font-semibold text-foreground flex-1">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-primary transition-transform duration-300 shrink-0",
                    openId === faq.id && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openId === faq.id ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-5 pb-5 pt-2">
                  <p className="text-muted-foreground leading-relaxed text-right">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 border border-primary/20">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="text-muted-foreground mb-4">
            تواصل معنا مباشرة وسنكون سعداء بمساعدتك
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONTACT_INFO.phone.tel}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity"
            >
              اتصل بنا: <span dir="ltr" className="mr-1">{CONTACT_INFO.phone.display}</span>
            </a>
            <a
              href={CONTACT_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity"
            >
              واتساب: <span dir="ltr" className="mr-1">76-040882</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
