import { SafetyContactBanner } from "@/features/safety-guidelines/components/safety-contact-banner";
import { SafetyGuidelineItem } from "@/features/safety-guidelines/components/safety-guideline-item";
import { SafetyHeroBanner } from "@/features/safety-guidelines/components/safety-hero-banner";
import { SAFETY_GUIDELINES } from "@/features/safety-guidelines/constants/guidelines";
import { Chip, Typography } from "heroui-native";
import type { JSX } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafetyGuidelinesScreen(): JSX.Element {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="px-4 pb-8 pt-4">
          <SafetyHeroBanner />

          <View className="flex-row items-center">
            <Typography className="text-base font-bold">All Guidelines</Typography>
            <Chip size="sm" variant="soft" color="default" className="ml-2">
              <Chip.Label className="text-xs font-semibold">{SAFETY_GUIDELINES.length}</Chip.Label>
            </Chip>
          </View>

          <View className="mt-4 gap-2">
            {SAFETY_GUIDELINES.map((guideline) => (
              <SafetyGuidelineItem
                key={guideline.id}
                title={guideline.title}
                description={guideline.description}
                Icon={guideline.Icon}
                color={guideline.color}
                bgColor={guideline.bgColor}
              />
            ))}
          </View>

          <SafetyContactBanner />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
