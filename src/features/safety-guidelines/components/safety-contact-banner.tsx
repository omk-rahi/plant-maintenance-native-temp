import { Button, Card, Typography } from "heroui-native";
import { ChevronRight, Info } from "lucide-react-native";
import { View } from "react-native";

type SafetyContactBannerProps = {
  onContactPress?: () => void;
};

export function SafetyContactBanner({ onContactPress }: SafetyContactBannerProps) {
  return (
    <Card className="mt-2 border-0 bg-blue-50">
      <Card.Body className="px-4 py-4">
        <View className="flex-row items-start">
          <View className="mt-0.5 h-8 w-8 items-center justify-center rounded-full bg-blue-100">
            <Info size={16} color="#2563EB" strokeWidth={2} />
          </View>

          <View className="ml-3 flex-1">
            <Typography.Paragraph className="text-xs leading-5 text-blue-800">
              Can&apos;t find what you&apos;re looking for? Contact your safety officer for more
              information.
            </Typography.Paragraph>

            <Button
              variant="secondary"
              size="sm"
              className="mt-3 self-start bg-white"
              onPress={onContactPress}
            >
              <Button.Label className="text-xs font-semibold text-blue-700">
                Contact Safety Officer
              </Button.Label>
              <ChevronRight size={14} color="#2563EB" />
            </Button>
          </View>
        </View>
      </Card.Body>
    </Card>
  );
}
