import { Stack } from "expo-router";
import type { JSX } from "react";

export default function SafetyGuidelinesLayout(): JSX.Element {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Safety Guidelines",
        }}
      />
    </Stack>
  );
}
