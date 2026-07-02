import HomeHeader from "@/features/home/components/home-header";
import type { JSX } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeTab(): JSX.Element {
  return (
    <View className="flex-1 bg-background px-4">
      <SafeAreaView>
        <HomeHeader name="Omkar" />
      </SafeAreaView>
    </View>
  );
}
