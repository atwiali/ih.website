"use client";

import { useMemo, useState } from "react";
import { doctors } from "@/data/doctors";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DoctorsSchedule() {
  const [query, setQuery] = useState("");

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
            placeholder="مثال: عيادة الأسنان أو د. أحمد"
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-right shadow-sm outline-none focus:ring-2 focus:ring-primary sm:w-72"
            aria-label="بحث عن طبيب أو اختصاص"
          />
        </div>
        <div className="overflow-x-auto rounded-lg border border-border bg-background">
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
              {filtered.length ? (
                filtered.map((row, i) => (
                  <TableRow key={i}>
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
        <p className="mt-4 text-center text-sm text-muted-foreground">
          ملاحظة: المواعيد عرضة للتغيير، يرجى التأكيد عبر الاتصال أو الواتساب.
        </p>
      </div>
    </section>
  );
}
