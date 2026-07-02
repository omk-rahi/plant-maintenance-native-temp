import { Tabs } from "expo-router";
import { Button } from "heroui-native";
import { House, ClipboardList, ScanLine, Wrench, Menu } from "lucide-react-native";
import { Pressable } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 68,
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.08,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <House color={color as string} size={24} />,
        }}
      />

      <Tabs.Screen
        name="work-orders"
        options={{
          tabBarIcon: ({ color }) => <ClipboardList color={color as string} size={24} />,
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          tabBarButton: (props) => {
            const { ref, style, ...rest } = props as any;

            return (
              <Pressable
                {...rest}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: -24,
                }}
              >
                <Button
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}
                >
                  <ScanLine size={28} color="white" />
                </Button>
              </Pressable>
            );
          },
        }}
      />

      <Tabs.Screen
        name="equipment"
        options={{
          tabBarIcon: ({ color }) => <Wrench color={color as string} size={24} />,
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          tabBarIcon: ({ color }) => <Menu color={color as string} size={24} />,
        }}
      />
    </Tabs>
  );
}
