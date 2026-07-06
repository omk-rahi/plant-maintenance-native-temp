import { Stack } from "expo-router";
import type { JSX } from "react";

export default function MoreLayout(): JSX.Element {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{ headerShown: false, headerShadowVisible: false }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="safety-guidelines"
        options={{
          headerShown: true,
          title: "Safety Guidelines",
          headerBackTitle: "More",
        }}
      />
      <Stack.Screen
        name="training"
        options={{
          headerShown: true,
          title: "Training",
          headerBackTitle: "More",
        }}
      />
      <Stack.Screen
        name="help"
        options={{
          headerShown: true,
          title: "Help & Support",
          headerBackTitle: "More",
        }}
      />
      <Stack.Screen
        name="report-issue"
        options={{
          headerShown: true,
          title: "Bug Report",
          headerBackTitle: "More",
        }}
      />
    </Stack>
  );
}
