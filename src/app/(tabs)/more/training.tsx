import { TrainingListItem } from "@/features/training/components/training-list-item";
import { TrainingPromoBanner } from "@/features/training/components/training-promo-banner";
import { ALL_TRAININGS } from "@/features/training/constants/trainings";
import { Card, Chip, Typography } from "heroui-native";
import type { JSX } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TrainingScreen(): JSX.Element {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="px-4">
          <TrainingPromoBanner />

          <View className="mt-6 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Typography className="text-base font-bold">All Trainings</Typography>
              <Chip size="sm" variant="soft" className="ml-2 mt-0.5">
                <Chip.Label className="text-xs font-semibold">{ALL_TRAININGS.length}</Chip.Label>
              </Chip>
            </View>
          </View>

          <Card className="mt-4 px-0 py-1">
            <Card.Body className="px-0">
              {ALL_TRAININGS.map((training, index) => (
                <TrainingListItem
                  key={training.id}
                  training={training}
                  isLast={index === ALL_TRAININGS.length - 1}
                />
              ))}
            </Card.Body>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
