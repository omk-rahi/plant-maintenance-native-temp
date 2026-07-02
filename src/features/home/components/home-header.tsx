import { View } from "react-native";
import { Avatar, Button, Typography } from "heroui-native";
import { Bell } from "lucide-react-native";

type HeaderProps = {
  name: string;
  greeting?: string;
};

export default function HomeHeader({ name, greeting = "Good Morning" }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      <View className="flex-row items-center flex-1">
        <Avatar size="sm">
          <Avatar.Image source={require("@/assets/avatar.jpg")} />
          <Avatar.Fallback />
        </Avatar>

        <View className="ml-3">
          <Typography.Heading className="text-sm">
            {greeting}, {name}
          </Typography.Heading>

          <Typography.Paragraph className="text-xs text-muted-foreground">
            Here&apos;s what&apos;s happening today
          </Typography.Paragraph>
        </View>
      </View>

      <View className="flex-row gap-2 justify-end">
        <Button isIconOnly variant="ghost" size="sm">
          <Bell size={20} />
        </Button>
      </View>
    </View>
  );
}
