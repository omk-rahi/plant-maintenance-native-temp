import { Card, Typography } from "heroui-native";
import { ChevronRight } from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";
import { Pressable, View } from "react-native";

type SafetyGuidelineItemProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  bgColor: string;
  onPress?: () => void;
};

export function SafetyGuidelineItem({
  title,
  description,
  Icon,
  color,
  bgColor,
  onPress,
}: SafetyGuidelineItemProps) {
  return (
    <Pressable onPress={onPress}>
      <Card>
        <Card.Body className="flex-row items-center">
          <View
            className="h-11 w-11 items-center justify-center rounded-full"
            style={{ backgroundColor: bgColor }}
          >
            <Icon size={20} color={color} strokeWidth={2} />
          </View>

          <View className="ml-3 flex-1">
            <Typography className="text-sm font-semibold">{title}</Typography>
            <Typography className="mt-1 text-xs leading-4 text-muted-foreground" numberOfLines={2}>
              {description}
            </Typography>
          </View>

          <ChevronRight size={16} color="#9CA3AF" style={{ marginLeft: 8 }} />
        </Card.Body>
      </Card>
    </Pressable>
  );
}
