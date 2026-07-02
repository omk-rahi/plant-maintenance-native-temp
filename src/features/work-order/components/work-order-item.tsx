import { View } from "react-native";
import { Card, Typography } from "heroui-native";
import { AlertTriangle, CalendarDays, Activity, MapPin, ChevronRight } from "lucide-react-native";

type WorkOrderStatus = "Overdue" | "Due Today" | "In Progress";
type WorkOrderType = "Breakdown" | "Preventive" | "Predictive";

type Props = {
  workOrder: string;
  title: string;
  location: string;
  type: WorkOrderType;
  status: WorkOrderStatus;
  subtitle: string;
};

const typeConfig = {
  Breakdown: {
    icon: AlertTriangle,
    color: "#EF4444",
    bg: "#FEF2F2",
    pill: "#FEE2E2",
    text: "#DC2626",
  },
  Preventive: {
    icon: CalendarDays,
    color: "#16A34A",
    bg: "#F0FDF4",
    pill: "#DCFCE7",
    text: "#16A34A",
  },
  Predictive: {
    icon: Activity,
    color: "#7C3AED",
    bg: "#F5F3FF",
    pill: "#EDE9FE",
    text: "#7C3AED",
  },
};

const statusConfig = {
  Overdue: {
    bg: "#FEE2E2",
    text: "#DC2626",
  },
  "Due Today": {
    bg: "#FFEDD5",
    text: "#EA580C",
  },
  "In Progress": {
    bg: "#DBEAFE",
    text: "#2563EB",
  },
};

export function WorkOrderItem({ workOrder, title, location, type, status, subtitle }: Props) {
  const typeStyle = typeConfig[type];
  const statusStyle = statusConfig[status];
  const Icon = typeStyle.icon;

  return (
    <Card className="mx-3 mb-2 rounded-2xl shadow-none">
      <Card.Body className="flex-row items-center px-3 py-3">
        <View
          className="mr-3 h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: typeStyle.bg }}
        >
          <Icon size={18} color={typeStyle.color} strokeWidth={2.2} />
        </View>

        {/* Center */}
        <View className="flex-1">
          <View className="flex-row items-center">
            <Typography className="text-[14px] font-semibold">{workOrder}</Typography>

            <View
              className="ml-2 rounded-full px-2 py-0.5"
              style={{ backgroundColor: typeStyle.pill }}
            >
              <Typography className="text-[10px] font-medium" style={{ color: typeStyle.text }}>
                {type}
              </Typography>
            </View>
          </View>

          <Typography className="mt-0.5 text-[13px] font-medium">{title}</Typography>

          <View className="mt-1 flex-row items-center">
            <MapPin size={11} color="#9CA3AF" />
            <Typography className="ml-1 text-[11px] text-foreground-500">{location}</Typography>
          </View>
        </View>

        {/* Right */}
        <View className="ml-2 items-end">
          <View className="rounded-full px-2 py-0.5" style={{ backgroundColor: statusStyle.bg }}>
            <Typography className="text-[10px] font-medium" style={{ color: statusStyle.text }}>
              {status}
            </Typography>
          </View>

          <Typography className="mt-1 text-[10px] text-foreground-500">{subtitle}</Typography>
        </View>

        <ChevronRight size={16} color="#9CA3AF" style={{ marginLeft: 8 }} />
      </Card.Body>
    </Card>
  );
}
