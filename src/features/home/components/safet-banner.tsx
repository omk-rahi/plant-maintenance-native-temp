import { ShieldCheck, ChevronRight } from "lucide-react-native";
import { Pressable, View } from "react-native";
import { Card, Typography } from "heroui-native";

type SafetyBannerProps = {
  onPress: () => void;
};

export function SafetyBanner({ onPress }: SafetyBannerProps) {
  return (
    <Pressable onPress={onPress}>
      <Card>
        <Card.Body className="flex flex-row items-center">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <ShieldCheck size={20} color="#2563EB" />
          </View>

          <View className="ml-3 flex-1">
            <Typography.Heading className="text-sm font-semibold">
              Safety Comes First
            </Typography.Heading>

            <Typography.Paragraph className="text-xs text-muted-foreground">
              Review the plant safety guidelines before starting work.
            </Typography.Paragraph>
          </View>

          <ChevronRight size={18} color="#64748B" />
        </Card.Body>
      </Card>
    </Pressable>
  );
}
