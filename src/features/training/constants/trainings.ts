export type TrainingBadge = "mandatory" | "recommended";
export type TrainingStatus = "not-started" | "in-progress" | "completed" | "locked";

export type Training = {
  id: string;
  title: string;
  description: string;
  duration: string;
  chapters: number;
  status: TrainingStatus;
  progress?: number;
  badge?: TrainingBadge;
};

export const CONTINUE_LEARNING: Training = {
  id: "ppe-awareness",
  title: "PPE Awareness Training",
  description: "Learn proper use of personal protective equipment.",
  duration: "12:48 min",
  chapters: 4,
  status: "in-progress",
  progress: 65,
};

export const ALL_TRAININGS: Training[] = [
  {
    id: "safety-fundamentals",
    title: "Safety Fundamentals",
    description: "Core safety practices for the workplace.",
    duration: "18:30 min",
    chapters: 6,
    status: "not-started",
    badge: "mandatory",
  },
  {
    id: "application-overview",
    title: "Application Overview",
    description: "Get familiar with the CMMS application.",
    duration: "15:00 min",
    chapters: 5,
    status: "in-progress",
    progress: 40,
    badge: "recommended",
  },
  {
    id: "work-order-management",
    title: "Work Order Management",
    description: "Create, assign, and track work orders.",
    duration: "22:15 min",
    chapters: 7,
    status: "in-progress",
    progress: 25,
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance",
    description: "Plan and execute preventive maintenance tasks.",
    duration: "20:00 min",
    chapters: 5,
    status: "completed",
  },
  {
    id: "reporting-analytics",
    title: "Reporting & Analytics",
    description: "Generate reports and analyze maintenance data.",
    duration: "16:45 min",
    chapters: 4,
    status: "completed",
  },
];
