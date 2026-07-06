import { Card, Separator, Typography } from "heroui-native";
import {
  ChevronRight,
  CircleHelp,
  Clock,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";
import type { JSX } from "react";
import { Alert, Linking, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SUPPORT_PHONE_DISPLAY = "+91 98765 43210";
const SUPPORT_PHONE_NUMBER = "+919876543210";
const SUPPORT_EMAIL = "support@example.com";

type SupportAction = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  bgColor: string;
  url: string;
};

const SUPPORT_ACTIONS: SupportAction[] = [
  {
    id: "call",
    title: "Call Support",
    description: SUPPORT_PHONE_DISPLAY,
    Icon: Phone,
    color: "#16A34A",
    bgColor: "#DCFCE7",
    url: `tel:${SUPPORT_PHONE_NUMBER}`,
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Chat with our support team",
    Icon: MessageCircle,
    color: "#059669",
    bgColor: "#D1FAE5",
    url: `https://wa.me/${SUPPORT_PHONE_NUMBER.replace("+", "")}`,
  },
  {
    id: "email",
    title: "Email Support",
    description: SUPPORT_EMAIL,
    Icon: Mail,
    color: "#2563EB",
    bgColor: "#DBEAFE",
    url: `mailto:${SUPPORT_EMAIL}?subject=Help%20%26%20Support`,
  },
];

const FAQS = [
  {
    question: "When can I contact support?",
    answer: "Our team is available during working hours for app, training, and maintenance support.",
  },
  {
    question: "What should I include in my message?",
    answer: "Share your name, department, issue details, and any screenshot if available.",
  },
];

async function openSupportLink(url: string) {
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    Alert.alert("Unable to open", "This contact option is not available on your device.");
    return;
  }

  await Linking.openURL(url);
}

function SupportActionItem({
  action,
  isLast = false,
}: {
  action: SupportAction;
  isLast?: boolean;
}) {
  const { title, description, Icon, color, bgColor, url } = action;

  return (
    <Pressable
      onPress={() => {
        void openSupportLink(url);
      }}
      android_ripple={{ color: "rgba(0,0,0,0.06)" }}
    >
      <View className="flex-row items-center px-4 py-3">
        <View
          className="h-10 w-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: bgColor }}
        >
          <Icon size={21} color={color} strokeWidth={2} />
        </View>

        <View className="ml-3 flex-1">
          <Typography className="text-sm font-semibold">{title}</Typography>
          <Typography className="mt-0.5 text-xs text-muted">{description}</Typography>
        </View>

        <ChevronRight size={18} color="#9CA3AF" />
      </View>

      {!isLast && <Separator className="opacity-30" />}
    </Pressable>
  );
}

export default function HelpSupportScreen(): JSX.Element {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView edges={["bottom"]} className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="px-4 pb-8 pt-4">
          <Card className="overflow-hidden">
            <Card.Body className="p-5">
              <View className="h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                <CircleHelp size={26} color="#2563EB" strokeWidth={2} />
              </View>

              <Typography className="mt-4 text-xl font-bold">How can we help?</Typography>
              <Typography className="mt-2 text-sm leading-5 text-muted">
                Reach our support team by phone, WhatsApp, or email. We will help you with app
                issues, maintenance requests, and training questions.
              </Typography>

              <View className="mt-4 flex-row items-center">
                <Clock size={16} color="#64748B" />
                <Typography className="ml-2 text-xs font-medium text-muted">
                  Support hours: 9:00 AM - 6:00 PM
                </Typography>
              </View>
            </Card.Body>
          </Card>

          <Typography className="mt-6 text-base font-bold">Contact Support</Typography>

          <Card className="mt-4 px-0 py-1">
            <Card.Body className="px-0">
              {SUPPORT_ACTIONS.map((action, index) => (
                <SupportActionItem
                  key={action.id}
                  action={action}
                  isLast={index === SUPPORT_ACTIONS.length - 1}
                />
              ))}
            </Card.Body>
          </Card>

          <Typography className="mt-6 text-base font-bold">FAQs</Typography>

          <Card className="mt-4">
            <Card.Body className="p-4">
              {FAQS.map((faq, index) => (
                <View key={faq.question}>
                  <Typography className="text-sm font-semibold">{faq.question}</Typography>
                  <Typography className="mt-1 text-xs leading-5 text-muted">{faq.answer}</Typography>

                  {index !== FAQS.length - 1 && <Separator className="my-4 opacity-30" />}
                </View>
              ))}
            </Card.Body>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
