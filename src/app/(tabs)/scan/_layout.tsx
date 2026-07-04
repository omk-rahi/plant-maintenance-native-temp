import { Stack } from "expo-router";
import type { JSX } from "react";

export default function ScanLayout(): JSX.Element {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{ headerShown: false, headerShadowVisible: false }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
