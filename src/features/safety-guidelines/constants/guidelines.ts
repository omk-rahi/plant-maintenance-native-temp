import { BriefcaseMedical, Flame, HardHat, Lock, TriangleAlert, Wrench } from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";

export type SafetyGuideline = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  bgColor: string;
};

export const SAFETY_GUIDELINES: SafetyGuideline[] = [
  {
    id: "general-safety",
    title: "General Safety Rules",
    description: "Basic workplace safety practices.",
    Icon: TriangleAlert,
    color: "#2563EB",
    bgColor: "#DBEAFE",
  },
  {
    id: "ppe",
    title: "Personal Protective Equipment",
    description: "Proper use of required PPE.",
    Icon: HardHat,
    color: "#16A34A",
    bgColor: "#DCFCE7",
  },
  {
    id: "equipment-operation",
    title: "Equipment Operation",
    description: "Safe operation of machinery.",
    Icon: Wrench,
    color: "#EA580C",
    bgColor: "#FFEDD5",
  },
  {
    id: "lockout-tagout",
    title: "Lockout / Tagout",
    description: "Equipment isolation procedure.",
    Icon: Lock,
    color: "#7C3AED",
    bgColor: "#EDE9FE",
  },
  {
    id: "fire-safety",
    title: "Fire Safety",
    description: "Fire prevention and response.",
    Icon: Flame,
    color: "#0D9488",
    bgColor: "#CCFBF1",
  },
  {
    id: "emergency-response",
    title: "Emergency Response",
    description: "Emergency actions and reporting.",
    Icon: BriefcaseMedical,
    color: "#DC2626",
    bgColor: "#FEE2E2",
  },
];
