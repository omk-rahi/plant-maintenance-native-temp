import { WorkOrderItem } from "@/features/work-order/components/work-order-item";
import type { JSX } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WorkOrdersTab(): JSX.Element {
  const workOrders = [
    {
      workOrder: "WO-10234",
      type: "Breakdown" as const,
      title: "Centrifugal Pump P-101",
      location: "Utilities Area",
      status: "Overdue" as const,
      subtitle: "2h ago",
    },
    {
      workOrder: "WO-10228",
      type: "Preventive" as const,
      title: "Air Compressor AC-01",
      location: "Compressor Room",
      status: "Due Today" as const,
      subtitle: "10:00 AM",
    },
    {
      workOrder: "WO-10221",
      type: "Predictive" as const,
      title: "Cooling Tower CT-01",
      location: "Cooling Tower Area",
      status: "In Progress" as const,
      subtitle: "Started 08:30 AM",
    },
    {
      workOrder: "WO-10219",
      type: "Preventive" as const,
      title: "Boiler Feed Pump BP-02",
      location: "Boiler House",
      status: "Due Today" as const,
      subtitle: "04:30 PM",
    },
    {
      workOrder: "WO-10211",
      type: "Breakdown" as const,
      title: "Conveyor Belt CV-05",
      location: "Packing Section",
      status: "Overdue" as const,
      subtitle: "Yesterday",
    },
  ];

  return (
    <View className="flex-1 bg-background ">
      <SafeAreaView>
        <View className="px-4 pt-4">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 8 }}
          >
            {workOrders.map((item) => (
              <WorkOrderItem
                key={item.workOrder}
                workOrder={item.workOrder}
                type={item.type}
                title={item.title}
                location={item.location}
                status={item.status}
                subtitle={item.subtitle}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
