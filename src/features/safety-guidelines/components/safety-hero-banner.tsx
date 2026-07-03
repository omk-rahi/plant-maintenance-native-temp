import { Card, Typography } from "heroui-native";
import { ShieldCheck } from "lucide-react-native";
import { Image, View } from "react-native";

export function SafetyHeroBanner() {
  return (
    <Card className="overflow-hidden border-0">
      <Card.Body className="relative min-h-42.5 p-5">
        <View className="w-[60%]">
          <View className="mb-4 h-12 w-12 items-center justify-center rounded-xl bg-[#E8F0FE]">
            <ShieldCheck size={22} color="#2563EB" strokeWidth={2} />
          </View>

          <Typography.Heading className="text-base font-bold leading-8">
            Safety First,
          </Typography.Heading>

          <Typography.Heading className="text-base font-bold leading-8">Always</Typography.Heading>

          <Typography.Paragraph className="mt-3 text-sm leading-6 text-muted-foreground">
            Follow safety guidelines to protect yourself, your team, and the workplace.
          </Typography.Paragraph>
        </View>

        <Image
          source={require("@/assets/images/safety-banner.png")}
          resizeMode="contain"
          className="absolute bottom-0 right-3 h-36 w-36"
        />
      </Card.Body>
    </Card>
  );
}
