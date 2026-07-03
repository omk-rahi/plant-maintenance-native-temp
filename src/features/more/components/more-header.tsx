import { Avatar, Typography } from "heroui-native";
import { Bell } from "lucide-react-native";
import { Pressable, View } from "react-native";

type MoreHeaderProps = {
  notificationCount?: number;
  onNotificationsPress?: () => void;
};

export function MoreHeader({ notificationCount = 3, onNotificationsPress }: MoreHeaderProps) {
  return (
    <View className="flex-row items-start justify-between">
      <View className="flex-1 pr-4">
        <Typography.Heading className="text-3xl font-bold">More</Typography.Heading>
        <Typography.Paragraph className="mt-1 text-sm text-muted">
          Access additional features and tools
        </Typography.Paragraph>
      </View>
    </View>
  );
}
