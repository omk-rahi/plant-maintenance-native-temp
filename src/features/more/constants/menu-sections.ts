import {
  BookOpen,
  CircleHelp,
  FileCheck,
  Gauge,
  LogOut,
  Settings,
  ShieldCheck,
  TriangleAlert,
  ClipboardList,
  Bug,
} from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";

export type MenuSectionItem = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  bgColor: string;
};

export type MoreMenuSection = {
  id: string;
  title: string;
  items: MenuSectionItem[];
};

export const MORE_MENU_SECTIONS: MoreMenuSection[] = [
  {
    id: "maintenance",
    title: "Maintenance",
    items: [
      {
        id: "create-notification",
        title: "Create Notification",
        description: "Report equipment issues",
        Icon: TriangleAlert,
        color: "#DC2626",
        bgColor: "#FEE2E2",
      },
      {
        id: "safety-guidelines",
        title: "Safety Guidelines",
        description: "Safety documents & SOPs",
        Icon: ShieldCheck,
        color: "#16A34A",
        bgColor: "#DCFCE7",
      },
      {
        id: "training",
        title: "Training",
        description: "Learning videos & courses",
        Icon: BookOpen,
        color: "#2563EB",
        bgColor: "#DBEAFE",
      },
      {
        id: "work-permits",
        title: "Work Permits",
        description: "View and manage permits",
        Icon: FileCheck,
        color: "#EA580C",
        bgColor: "#FFEDD5",
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    items: [
      {
        id: "help-support",
        title: "Help & Support",
        description: "FAQs and contact support",
        Icon: CircleHelp,
        color: "#2563EB",
        bgColor: "#DBEAFE",
      },
      {
        id: "report-issue",
        title: "Bug Report",
        description: "Help us improve the app",
        Icon: Bug,
        color: "#F59E0B",
        bgColor: "#FEF3C7",
      },
      {
        id: "settings",
        title: "Settings",
        description: "App preferences",
        Icon: Settings,
        color: "#64748B",
        bgColor: "#F1F5F9",
      },
      {
        id: "logout",
        title: "Logout",
        description: "Sign out securely",
        Icon: LogOut,
        color: "#DC2626",
        bgColor: "#FEE2E2",
      },
    ],
  },
];
