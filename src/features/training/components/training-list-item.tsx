import type { Training } from "@/features/training/constants/trainings";
import { BookOpen, CheckCircle2, Clock, Play } from "lucide-react-native";
import { Pressable, View } from "react-native";
import { Separator, Typography } from "heroui-native";
import { COLORS } from "@/constants";
import { ThumbnailProgress } from "./thumbnail-progress";

type TrainingListItemProps = {
  training: Training;
  isLast?: boolean;
};

export function TrainingListItem({ training, isLast = false }: TrainingListItemProps) {
  const progress =
    training.status === "completed"
      ? 100
      : training.status === "in-progress"
        ? (training.progress ?? 0)
        : 0;

  return (
    <Pressable android_ripple={{ color: "rgba(0,0,0,0.05)" }}>
      <>
        <View className="flex-row items-center px-4 py-3">
          <View className="relative h-14 w-16 overflow-hidden bg-[#EEF2F7]">
            <View className="flex-1 items-center justify-center">
              {training.status === "completed" ? (
                <CheckCircle2 size={18} color={COLORS.accent} />
              ) : (
                <Play size={18} color="#64748B" fill="#64748B" />
              )}
            </View>

            {(training.status === "completed" || training.status === "in-progress") && (
              <ThumbnailProgress progress={progress} completed={training.status === "completed"} />
            )}
          </View>

          <View className="ml-3 flex-1">
            <Typography className="text-sm font-semibold" numberOfLines={2}>
              {training.title}
            </Typography>

            <Typography className="mt-0.5 text-xs text-muted" numberOfLines={1}>
              {training.description}
            </Typography>

            <View className="mt-2 flex-row items-center">
              <View className="mr-4 flex-row items-center">
                <Clock size={12} color="#9CA3AF" />
                <Typography className="ml-1 text-[11px] text-muted">{training.duration}</Typography>
              </View>

              <View className="flex-row items-center">
                <BookOpen size={12} color="#9CA3AF" />
                <Typography className="ml-1 text-[11px] text-muted">
                  {training.chapters} Chapters
                </Typography>
              </View>
            </View>
          </View>
        </View>

        {!isLast && <Separator className="opacity-20" />}
      </>
    </Pressable>
  );
}
