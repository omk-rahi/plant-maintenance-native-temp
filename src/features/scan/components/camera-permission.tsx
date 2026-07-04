import { Image, View } from "react-native";
import { Button, Typography } from "heroui-native";

type CameraPermissionProps = {
  onRequest: () => void;
};

export function CameraPermission({ onRequest }: CameraPermissionProps) {
  return (
    <View className="flex-1 items-center justify-center bg-background px-8">
      <View className="items-center">
        <View className="mb-8 h-28 w-28 items-center justify-center rounded-full bg-primary/10">
          <Image
            source={require("@/assets/images/camera-icon.png")}
            className="h-48 w-48"
            resizeMode="contain"
          />
        </View>

        <Typography.Heading className="text-center text-xl">
          Camera Permission Required
        </Typography.Heading>

        <Typography.Paragraph className="text-center text-muted text-sm mt-1">
          Allow camera access to scan QR codes and barcodes for equipment, work orders, and other
          plant operations.
        </Typography.Paragraph>
      </View>

      <Button className="w-full mt-4" onPress={onRequest} size="sm">
        Grant Camera Permission
      </Button>
    </View>
  );
}
