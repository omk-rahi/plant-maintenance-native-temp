import { Card, Typography } from "heroui-native";
import type { MoreMenuSection as MoreMenuSectionType } from "@/features/more/constants/menu-sections";
import { MoreMenuItem } from "@/features/more/components/more-menu-item";
import { View } from "react-native";

type MoreMenuSectionProps = {
  section: MoreMenuSectionType;
  onItemPress?: (itemId: string) => void;
};

export function MoreMenuSection({
  section,
  onItemPress,
}: MoreMenuSectionProps) {
  return (
    <View className="mt-6">
      <Typography className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wide text-foreground-500">
        {section.title}
      </Typography>

      <Card className="px-0 py-1">
        <Card.Body className="px-0">
          {section.items.map((item, index) => (
            <MoreMenuItem
              key={item.id}
              title={item.title}
              description={item.description}
              Icon={item.Icon}
              color={item.color}
              bgColor={item.bgColor}
              isLast={index === section.items.length - 1}
              onPress={() => onItemPress?.(item.id)}
            />
          ))}
        </Card.Body>
      </Card>
    </View>
  );
}