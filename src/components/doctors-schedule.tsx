"use client";

import { useMemo, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { doctors } from "@/data/doctors";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { DoctorRow } from "@/data/doctors";

const ITEMS_PER_PAGE = 8;

export function DoctorsSchedule() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      doctors.filter((row) => {
        if (!query.trim()) return true;
        const q = query.trim().toLowerCase();
        return (
          row.specialty.toLowerCase().includes(q) ||
          row.doctorName.toLowerCase().includes(q)
        );
      }),
    [query]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = useMemo(
    () => filtered.slice(start, start + ITEMS_PER_PAGE),
    [filtered, start]
  );

  useEffect(() => {
    setPage(1);
  }, [query]);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <section
      id="doctors"
      className="border-t border-border bg-white py-16"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold text-foreground text-center mb-6 sm:text-3xl">
          دوام الأطباء
        </h2>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            ابحث عن الاختصاص أو اسم الطبيب لمعرفة أوقات الدوام.
          </p>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="مثال: أسنان أو د. أحمد"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-right shadow-sm outline-none focus:ring-2 focus:ring-primary sm:w-72"
            aria-label="بحث عن طبيب أو اختصاص"
          />
        </div>

        {/* Desktop: Table (md and up) */}
        <div className="hidden md:block overflow-x-auto rounded-lg border border-border bg-background">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الاختصاص</TableHead>
                <TableHead>اسم الطبيب</TableHead>
                <TableHead>أيام الدوام</TableHead>
                <TableHead>التوقيت</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length ? (
                paginated.map((row, i) => (
                  <TableRow key={start + i}>
                    <TableCell>{row.specialty}</TableCell>
                    <TableCell>{row.doctorName}</TableCell>
                    <TableCell>{row.days}</TableCell>
                    <TableCell>{row.time}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center text-sm text-muted-foreground py-6"
                  >
                    لا توجد نتائج مطابقة لعملية البحث الحالية.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Mobile: Cards (sm and below) */}
        <div className="md:hidden space-y-3">
          {paginated.length ? (
            paginated.map((row, i) => (
              <DoctorCard key={start + i} row={row} />
            ))
          ) : (
            <div className="rounded-xl border border-border bg-muted/30 p-6 text-center text-sm text-muted-foreground">
              لا توجد نتائج مطابقة لعملية البحث الحالية.
            </div>
          )}
        </div>

        {/* Pagination: centered, primary color */}
        {filtered.length > 0 && (
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={goPrev}
                disabled={page <= 1}
                className="rounded-lg border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="mr-1">السابق</span>
              </Button>
              <span className="px-3 py-1.5 text-sm font-medium text-primary min-w-[100px] text-center">
                صفحة {page} من {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={goNext}
                disabled={page >= totalPages}
                className="rounded-lg border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50"
              >
                <span className="ml-1">التالي</span>
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              عرض {paginated.length} من {filtered.length} طبيب
            </p>
          </div>
        )}

        <p className="mt-4 text-center text-sm text-muted-foreground">
          ملاحظة: المواعيد عرضة للتغيير، يرجى التأكيد عبر الاتصال أو الواتساب.
        </p>
      </div>
    </section>
  );
}

function DoctorCard({ row }: { row: DoctorRow }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
      <div className="flex flex-col gap-2 text-right">
        <p className="font-semibold text-foreground">{row.doctorName}</p>
        <p className="text-sm text-primary">{row.specialty}</p>
        <div className="flex flex-col gap-0.5 text-sm text-muted-foreground">
          <p><span className="font-medium text-foreground">أيام الدوام:</span> {row.days}</p>
          <p><span className="font-medium text-foreground">التوقيت:</span> {row.time}</p>
        </div>
      </div>
    </div>
  );
}
