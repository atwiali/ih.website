import { clinics } from "@/data/clinics";
import { cn } from "@/lib/utils";

export function ClinicsSection() {
  return (
    <section
      id="clinics"
      className="border-t border-border bg-[#f9fafb] py-16"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-2">
            العيادات التخصصية
          </h2>
          <p className="text-muted-foreground text-lg">
            نخبة من الأطباء الاختصاصيين في خدمتكم
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clinics.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className={cn(
                "flex items-center gap-4 rounded-xl border border-border bg-white p-4 shadow-soft",
                "hover:border-primary/40 hover:shadow-soft-hover transition-all duration-300"
              )}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
