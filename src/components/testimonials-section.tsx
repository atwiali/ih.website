import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-t border-border bg-gradient-to-b from-white to-[#f9fafb] py-16"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-3">
            آراء مرضانا
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نفخر بثقة مرضانا ورضاهم عن خدماتنا الطبية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl border border-border bg-white p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#FFD700] text-[#FFD700]"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-muted-foreground leading-relaxed mb-4 text-right">
                "{testimonial.comment}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="text-right flex-1">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  {testimonial.service && (
                    <p className="text-sm text-primary">{testimonial.service}</p>
                  )}
                </div>
                {testimonial.verified && (
                  <div className="flex items-center gap-1 text-xs text-[#a1c53e]">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>موثق</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#a1c53e]/10 px-6 py-3 text-[#a1c53e]">
            <Star className="h-5 w-5 fill-current" />
            <span className="font-semibold">تقييم 4.9/5 بناءً على أكثر من 500 تقييم</span>
          </div>
        </div>
      </div>
    </section>
  );
}
