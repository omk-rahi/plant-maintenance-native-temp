import { HomeHeader } from "@/features/home/components/home-header";
import { KPICard } from "@/features/home/components/kpi-card";
import { SafetyBanner } from "@/features/home/components/safet-banner";
import { CheckCircle2, ClipboardList, Clock3, TriangleAlert } from "lucide-react-native";
import type { JSX } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeTab(): JSX.Element {
  return (
    <View className="flex-1 bg-background ">
      <SafeAreaView>
        <View className="px-4 pt-4">
          <HomeHeader name="Omkar Rahi" />

          {/* OVERVIEW CARDS */}

          <View className="mt-6 gap-4">
            <View className="flex-row gap-4">
              <KPICard
                title="Open Tasks"
                value={18}
                subtitle="Needs action"
                Icon={ClipboardList}
                backgroundColor="#2563EB"
              />

              <KPICard
                title="Assigned"
                value={7}
                subtitle="In Progress"
                Icon={Clock3}
                backgroundColor="#0F766E"
              />
            </View>

            <View className="flex-row gap-4">
              <KPICard
                title="Overdue"
                value={3}
                subtitle="Immediate attention"
                Icon={TriangleAlert}
                backgroundColor="#DC2626"
              />

              <KPICard
                title="Approval"
                value={11}
                subtitle="Awaiting confirmation"
                Icon={CheckCircle2}
                backgroundColor="#7C3AED"
              />
            </View>
          </View>

          <View className="my-4">
            <SafetyBanner onPress={() => {}} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
