import type { LucideIcon } from "lucide-react";
import {
  Smile,
  Brain,
  CircleDot,
  AirVent,
  Heart,
  Ear,
  BrainCircuit,
  Dumbbell,
  Bone,
  Stethoscope,
  UtensilsCrossed,
  Apple,
  Radio,
  TestTube,
  Eye,
  Activity,
  Baby,
  Droplets,
} from "lucide-react";

export interface ClinicItem {
  name: string;
  icon: LucideIcon;
}

export const clinics: ClinicItem[] = [
  { name: "أسنان", icon: Smile },
  { name: "أعصاب ودماغ", icon: Brain },
  { name: "أمراض جلدية", icon: CircleDot },
  { name: "أمراض رئة وجهاز تنفسي", icon: AirVent },
  { name: "أمراض قلب وأوعية دموية", icon: Heart },
  { name: "أنف أذن حنجرة", icon: Ear },
  { name: "علاج نفسي", icon: BrainCircuit },
  { name: "علاج فيزيائي", icon: Dumbbell },
  { name: "عظم ومفاصل", icon: Bone },
  { name: "صحة عامة", icon: Stethoscope },
  { name: "جهاز هضمي", icon: UtensilsCrossed },
  { name: "تغذية", icon: Apple },
  { name: "تخطيط سمع", icon: Radio },
  { name: "أمراض دم", icon: TestTube },
  { name: "عيون", icon: Eye },
  { name: "غدد وسكري", icon: Activity },
  { name: "قابلة قانونية", icon: Baby },
  { name: "مسالك بولية وكلى", icon: Droplets },
  { name: "نسائي وتوليد", icon: Baby },
];
