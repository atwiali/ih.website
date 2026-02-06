export interface DoctorRow {
  specialty: string;
  doctorName: string;
  days: string;
  time: string;
}

export const doctors: DoctorRow[] = [
  { specialty: "أمراض دم", doctorName: "د. حسن فواز", days: "السبت", time: "09:30 ص - 01:00 م" },
  { specialty: "تخطيط سمع", doctorName: "د. علي المقداد", days: "الجمعة", time: "02:00 م - 04:00 م" },
  { specialty: "أمراض جلدية", doctorName: "د. علي كركى", days: "الخميس", time: "12:00 م - 03:00 م" },
  { specialty: "أنف أذن حنجرة", doctorName: "د. محمد حمد", days: "الإثنين، السبت", time: "09:30 ص - 11:35 ص، 09:30 ص - 11:30 ص" },
  { specialty: "نسائي وتوليد", doctorName: "د. رندا سبيتي", days: "الإثنين", time: "10:00 ص - 12:00 م" },
  { specialty: "أعصاب ودماغ", doctorName: "د. ناصر خريس", days: "الخميس", time: "10:00 ص - 12:00 م" },
  { specialty: "عظم ومفاصل", doctorName: "د. حسين طحيني", days: "الإثنين", time: "09:30 ص - 12:00 م" },
  { specialty: "أمراض قلب وأوعية دموية", doctorName: "د. نبيل شيت", days: "السبت", time: "12:00 م - 05:00 م" },
  { specialty: "تغذية", doctorName: "اخصائية منى حسن رضا", days: "الإثنين، الثلاثاء، الخميس", time: "09:00 ص - 02:00 م" },
  { specialty: "علاج نفسي", doctorName: "د. ربى رضا تركيا", days: "السبت", time: "09:00 ص - 02:00 م" },
  { specialty: "أشعة", doctorName: "د. زياد زين الدين", days: "الأربعاء", time: "03:00 م - 05:00 م" },
  { specialty: "أسنان", doctorName: "د. عدنان زعرور", days: "الإثنين - السبت", time: "09:00 ص - 01:00 م" },
  { specialty: "أمراض رئة وجهاز تنفسي", doctorName: "د. قاسم بنوت", days: "الجمعة", time: "10:30 ص - 11:30 ص" },
  { specialty: "أسنان", doctorName: "د. رولا عبدالله", days: "الثلاثاء، الخميس، الجمعة", time: "09:00 - 04:00 م، 08:30 ص - 10:00 ص" },
  { specialty: "أسنان", doctorName: "د. ميرنا عساف", days: "الإثنين، الأربعاء، الجمعة، السبت", time: "01:30 م - 04:00 م، 08:30 ص - 04:00 م" },
  { specialty: "أسنان", doctorName: "د. محمد فقيه", days: "الإثنين، الجمعة", time: "10:00 ص - 01:00 م" },
  { specialty: "علاج فيزيائي", doctorName: "المعالج حسين قصير", days: "الإثنين، الثلاثاء، الخميس، الجمعة", time: "09:00 ص - 05:00 م" },
  { specialty: "علاج فيزيائي", doctorName: "المعالجة مريم ترمس", days: "الإثنين، الثلاثاء، الأربعاء", time: "09:30 ص - 02:00 م" },
  { specialty: "علاج فيزيائي", doctorName: "د. حياة شاهين", days: "الأربعاء، السبت", time: "11:00 ص - 02:00 م" },
  { specialty: "علاج نفسي", doctorName: "د. فاطمة حيدر", days: "الخميس", time: "09:00 ص - 12:00 م" },
  { specialty: "تغذية", doctorName: "اخصائية زينب ياسين", days: "الأربعاء، الجمعة", time: "09:00 ص - 12:00 م" },
  { specialty: "أمراض قلب وأوعية دموية", doctorName: "د. نبيل خريس", days: "الإثنين، الخميس", time: "10:30 ص - 12:00 م" },
  { specialty: "مسالك بولية وكلى", doctorName: "د. زاهي الخطيب", days: "الثلاثاء، الخميس", time: "01:15 م - 02:00 م" },
  { specialty: "أنف أذن حنجرة", doctorName: "د. نرجس فضل الله", days: "الثلاثاء", time: "10:30 ص - 01:00 م" },
  { specialty: "أنف أذن حنجرة", doctorName: "د. غازي سرغاني", days: "الخميس", time: "12:00 م - 01:30 م" },
  { specialty: "أمراض جلدية", doctorName: "د. نمر سليم", days: "الأربعاء", time: "09:00 ص - 10:00 ص" },
  { specialty: "عظم ومفاصل", doctorName: "د. محمد اسماعيل", days: "الخميس", time: "01:00 م - 02:00 م" },
  { specialty: "قابلة قانونية", doctorName: "د. دارين أيوب", days: "الأربعاء", time: "12:00 م - 02:00 م" },
  { specialty: "نسائي وتوليد", doctorName: "د. باسمة فرحات", days: "الجمعة", time: "10:30 ص - 12:00 م" },
  { specialty: "نسائي وتوليد", doctorName: "د. ناتاليا الحسيني", days: "الثلاثاء", time: "09:00 ص - 11:30 ص" },
  { specialty: "عيون", doctorName: "د. مصطفى ضاهر", days: "الأربعاء", time: "08:30 ص - 10:00 ص" },
  { specialty: "غدد وسكري", doctorName: "د. أديب هزيمة", days: "الإثنين", time: "03:00 م - 04:00 م" },
  { specialty: "جهاز هضمي", doctorName: "د. حسان جباوي", days: "الخميس", time: "12:30 م - 01:30 م" },
  { specialty: "صحة عامة", doctorName: "د. مالك زراقط", days: "الإثنين - السبت", time: "10:30 ص - 02:00 م" },
];
