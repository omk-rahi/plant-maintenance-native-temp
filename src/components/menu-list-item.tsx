import { Separator, Typography } from "heroui-native";
import { ChevronRight } from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";
import { Pressable, View } from "react-native";

export type MenuListItemProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  bgColor: string;
  isLast?: boolean;
  onPress?: () => void;
};

export function MenuListItem({
  title,
  description,
  Icon,
  color,
  bgColor,
  isLast = false,
  onPress,
}: MenuListItemProps) {
  return (
    <Pressable onPress={onPress} android_ripple={{ color: "rgba(0,0,0,0.06)" }}>
      <>
        <View className="flex-row items-center px-4 py-3">
          <View
            className="h-9 w-9 items-center justify-center rounded-xl"
            style={{ backgroundColor: bgColor }}
          >
            <Icon size={20} color={color} strokeWidth={2} />
          </View>

          <View className="ml-3 flex-1">
            <Typography className="text-sm font-semibold">{title}</Typography>

            <Typography className="mt-0.5 text-xs text-muted" numberOfLines={1}>
              {description}
            </Typography>
          </View>

          <ChevronRight size={18} color="#9CA3AF" />
        </View>

        {!isLast && <Separator className="opacity-30" />}
      </>
    </Pressable>
  );
}
