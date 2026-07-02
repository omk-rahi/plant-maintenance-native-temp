import { View } from "react-native";
import { Avatar, Typography } from "heroui-native";

type HeaderProps = {
  name: string;
  greeting?: string;
};

export function HomeHeader({ name, greeting = "Good Morning" }: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between">
      <View>
        <Typography.Paragraph className="text-sm text-muted-foreground">
          {greeting}
        </Typography.Paragraph>

        <Typography.Heading className="mt-1 text-3xl font-bold">{name}</Typography.Heading>
      </View>

      <Avatar size="md">
        <Avatar.Image source={require("@/assets/avatar.jpg")} />
        <Avatar.Fallback />
      </Avatar>
    </View>
  );
}
