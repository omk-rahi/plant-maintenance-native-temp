import { Image } from "react-native";

export function TrainingPromoBanner() {
  return (
    <Image
      source={require("@/assets/images/training-banner.png")}
      className="w-full h-22 rounded-2xl shadow"
    />
  );
}
