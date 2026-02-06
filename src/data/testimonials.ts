export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service?: string;
  date?: string;
  verified?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "أحمد محمود",
    rating: 5,
    comment:
      "خدمة ممتازة واهتمام كبير من الطاقم الطبي. الأطباء محترفون جداً والمركز نظيف ومجهز بأحدث الأجهزة.",
    service: "عيادة القلب",
    verified: true,
  },
  {
    id: "2",
    name: "فاطمة حسن",
    rating: 5,
    comment:
      "أفضل مركز صحي في المنطقة. المواعيد منظمة والانتظار قصير. الدكتورة كانت لطيفة جداً وشرحت كل شيء بوضوح.",
    service: "عيادة النساء والتوليد",
    verified: true,
  },
  {
    id: "3",
    name: "محمد علي",
    rating: 5,
    comment:
      "نتائج المختبر دقيقة وسريعة. الأسعار معقولة والموظفون متعاونون. أنصح الجميع بزيارة هذا المركز.",
    service: "المختبر الطبي",
    verified: true,
  },
  {
    id: "4",
    name: "زينب أحمد",
    rating: 5,
    comment:
      "تجربة رائعة مع قسم الأشعة. الجهاز حديث والفني كان محترف جداً. حصلت على النتائج في نفس اليوم.",
    service: "قسم الأشعة",
    verified: true,
  },
  {
    id: "5",
    name: "حسين كريم",
    rating: 5,
    comment:
      "عيادة الأسنان ممتازة. الطبيب ماهر جداً والعلاج كان بدون ألم. المركز نظيف والأسعار مناسبة.",
    service: "عيادة الأسنان",
    verified: true,
  },
  {
    id: "6",
    name: "ليلى محمد",
    rating: 5,
    comment:
      "شكراً لكل الطاقم الطبي على الاهتمام والرعاية. المركز يستحق أكثر من 5 نجوم. سأعود بالتأكيد.",
    service: "صحة عامة",
    verified: true,
  },
];
