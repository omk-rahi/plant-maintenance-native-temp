import { Typography } from "heroui-native";
import type { LucideIcon } from "lucide-react-native";
import { View } from "react-native";

type Props = {
  title: string;
  value: number | string;
  subtitle?: string;
  Icon: LucideIcon;
  backgroundColor: string;
};

export function KPICard({ title, value, subtitle, Icon, backgroundColor }: Props) {
  return (
    <View
      className="flex-1 overflow-hidden p-3 px-4"
      style={{
        backgroundColor,
        minHeight: 105,
        borderRadius: 20,
      }}
    >
      <View
        className="absolute -right-5 -top-5 h-20 w-20 rounded-full"
        style={{
          backgroundColor: "rgba(255,255,255,0.08)",
        }}
      />

      <View className="flex-row items-center">
        <Icon size={16} color="white" />

        <Typography.Paragraph
          className="ml-2 font-medium"
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: 13,
          }}
        >
          {title}
        </Typography.Paragraph>
      </View>

      <Typography.Heading
        className="mt-2"
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "700",
        }}
      >
        {value}
      </Typography.Heading>

      {subtitle && (
        <Typography.Paragraph
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 11,
            marginTop: 2,
          }}
        >
          {subtitle}
        </Typography.Paragraph>
      )}
    </View>
  );
}
