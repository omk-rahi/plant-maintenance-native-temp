import { View } from "react-native";
import { COLORS } from "@/constants";

type Props = {
  progress: number;
  completed?: boolean;
};

export function ThumbnailProgress({ progress, completed = false }: Props) {
  return (
    <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/15">
      <View
        style={{
          width: `${Math.max(0, Math.min(progress, 100))}%`,
          height: "100%",
          backgroundColor: completed ? COLORS.accent : COLORS.info,
        }}
      />
    </View>
  );
}
