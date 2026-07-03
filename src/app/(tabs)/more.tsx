import { MORE_MENU_SECTIONS } from "@/features/more/constants/menu-sections";
import { MoreHeader } from "@/features/more/components/more-header";
import { MoreMenuSection } from "@/features/more/components/more-menu-section";
import { useRouter, type Href } from "expo-router";
import type { JSX } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MORE_ROUTE_MAP: Record<string, Href> = {
  "safety-guidelines": "/(tabs)/safety-guidelines/",
};

export default function MoreTab(): JSX.Element {
  const router = useRouter();

  const handleItemPress = (itemId: string) => {
    const route = MORE_ROUTE_MAP[itemId];
    if (route) {
      router.push(route);
    }
  };

  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="px-4 pb-8 pt-4">
          <MoreHeader />

          {MORE_MENU_SECTIONS.map((section) => (
            <MoreMenuSection key={section.id} section={section} onItemPress={handleItemPress} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
