import { MenuListItem } from "@/components/menu-list-item";
import { SafetyHeroBanner } from "@/features/safety-guidelines/components/safety-hero-banner";
import { SAFETY_GUIDELINES } from "@/features/safety-guidelines/constants/guidelines";
import { Card, Chip, Typography } from "heroui-native";
import type { JSX } from "react";
import { ScrollView, View } from "react-native";

export default function SafetyGuidelinesScreen(): JSX.Element {
  return (
    <View className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="px-4 pb-8 pt-4">
        <SafetyHeroBanner />

        <View className="mt-6 flex-row items-center">
          <Typography className="text-base font-bold">All Guidelines</Typography>
          <Chip size="sm" variant="soft" color="default" className="ml-2">
            <Chip.Label className="text-xs font-semibold">{SAFETY_GUIDELINES.length}</Chip.Label>
          </Chip>
        </View>

        <Card className="mt-4 px-0 py-1">
          <Card.Body className="px-0">
            {SAFETY_GUIDELINES.map((guideline, index) => (
              <MenuListItem
                key={guideline.id}
                title={guideline.title}
                description={guideline.description}
                Icon={guideline.Icon}
                color={guideline.color}
                bgColor={guideline.bgColor}
                isLast={index === SAFETY_GUIDELINES.length - 1}
              />
            ))}
          </Card.Body>
        </Card>
      </ScrollView>
    </View>
  );
}
