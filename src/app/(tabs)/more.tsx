import { Card, PressableFeedback, Typography } from "heroui-native";
import { Bell, ClipboardCheck, CalendarDays, History, ChevronRight } from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type MenuItemProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  bgColor: string;
  isLast?: boolean;
  onPress?: () => void;
};

function MenuItem({ title, description, Icon, color, bgColor, isLast, onPress }: MenuItemProps) {
  return (
    <Pressable onPress={onPress}>
      <View className={`flex-row items-center ${!isLast ? "border-b border-gray-200" : ""}`}>
        <View
          className="w-11 h-11 rounded-2xl items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <Icon size={22} color={color} />
        </View>

        <View className="flex-1 ml-4">
          <Typography className="font-semibold text-base">{title}</Typography>

          <Typography className="text-sm text-foreground-500 mt-1">{description}</Typography>
        </View>

        <ChevronRight size={20} color="#9CA3AF" />
      </View>
    </Pressable>
  );
}

export default function MoreTab() {
  return (
    <View className="flex-1 bg-background ">
      <SafeAreaView>
        <View className="p-4">
          <Card>
            <Card.Body>
              <PressableFeedback>
                <PressableFeedback.Highlight />
                <PressableFeedback.Ripple />
                <MenuItem
                  title="Report an Issue"
                  description="Report equipment issues or application bugs"
                  Icon={Bell}
                  color="#8B5CF6"
                  bgColor="#F3E8FF"
                />
              </PressableFeedback>

              <MenuItem
                title="Inspections"
                description="View inspection plans and results"
                Icon={ClipboardCheck}
                color="#16A34A"
                bgColor="#DCFCE7"
              />

              <MenuItem
                title="Maintenance Plans"
                description="Manage preventive maintenance plans"
                Icon={CalendarDays}
                color="#F59E0B"
                bgColor="#FEF3C7"
              />

              <MenuItem
                title="Maintenance History"
                description="View equipment maintenance history"
                Icon={History}
                color="#3B82F6"
                bgColor="#DBEAFE"
                isLast
              />
            </Card.Body>
          </Card>
        </View>
      </SafeAreaView>
    </View>
  );
}
