export interface DoctorRow {
  specialty: string;
  doctorName: string;
  days: string;
  time: string;
}

export const doctors: DoctorRow[] = [
  {
    specialty: "عيادة باطنية",
    doctorName: "د. أحمد محمد",
    days: "السبت - الثلاثاء",
    time: "4:00 م - 8:00 م",
  },
  {
    specialty: "عيادة الأسنان",
    doctorName: "د. فاطمة علي",
    days: "الأحد - الأربعاء",
    time: "10:00 ص - 2:00 م",
  },
  { specialty: "عظام", doctorName: "د. عمر حسن", days: "الإثنين - الخميس", time: "5:00 - 9:00 م" },
  { specialty: "أطفال", doctorName: "د. سارة إبراهيم", days: "السبت - الأربعاء", time: "9:00 ص - 1:00 م" },
];
