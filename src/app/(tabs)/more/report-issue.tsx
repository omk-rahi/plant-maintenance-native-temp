import { View, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as DocumentPicker from "expo-document-picker";

import { Button, FieldError, Label, Select, TextArea, TextField, Typography } from "heroui-native";

import { useState } from "react";
import { FileImage, Upload, X } from "lucide-react-native";
import { VoiceTextArea } from "@/components/voice-textarea";

export default function ReportIssueScreen() {
  const [attachments, setAttachments] = useState<DocumentPicker.DocumentPickerAsset[]>([]);
  const pickAttachments = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      multiple: true,
      copyToCacheDirectory: true,
      type: ["image/*", "application/pdf"],
    });

    if (!result.canceled) {
      setAttachments((prev) => [...prev, ...result.assets]);
    }
  };
  const removeAttachment = (uri: string) => {
    setAttachments((prev) => prev.filter((file) => file.uri !== uri));
  };
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex-1" edges={["bottom"]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerClassName="p-4 pb-8"
          showsVerticalScrollIndicator={false}
        >
          <View className="mt-4 gap-5">
            <TextField isRequired>
              <Label>Issue Type</Label>

              <Select presentation="bottom-sheet">
                <Select.Trigger>
                  <Select.Value placeholder="Select issue type" />
                  <Select.TriggerIndicator />
                </Select.Trigger>

                <Select.Portal>
                  <Select.Overlay />

                  <Select.Content presentation="bottom-sheet" snapPoints={["40%"]}>
                    <Select.Item value="crash" label="App Crash" />
                    <Select.Item value="ui" label="UI / Display Issue" />
                    <Select.Item value="performance" label="Performance Issue" />
                    <Select.Item value="feature" label="Feature Request" />
                    <Select.Item value="data" label="Incorrect Data" />
                    <Select.Item value="login" label="Login Issue" />
                    <Select.Item value="other" label="Other" />
                  </Select.Content>
                </Select.Portal>
              </Select>

              <FieldError>Please select an issue type.</FieldError>
            </TextField>

            <TextField isRequired>
              <Label>Describe the Issue</Label>

              <TextArea
                placeholder="Briefly describe the issue."
                textAlignVertical="top"
                className="rounded-xl"
              />

              <FieldError>Please enter a description.</FieldError>
            </TextField>

            <VoiceTextArea />

            <View>
              <Typography.Paragraph className="font-medium mb-1">
                Attachment&nbsp;
                <Typography.Paragraph className="text-muted">(Optional)</Typography.Paragraph>
              </Typography.Paragraph>

              <Pressable
                onPress={pickAttachments}
                className="items-center rounded-xl bg-white shadow py-4"
              >
                <View className="h-8 w-8 items-center justify-center rounded-full bg-content2">
                  <Upload size={20} />
                </View>

                <Typography.Paragraph className="text-sm">Upload Attachments</Typography.Paragraph>

                <Typography.Paragraph className="mt-1 text-center text-xs text-muted">
                  Upload PNG, JPG, or PDF files (multiple files allowed)
                </Typography.Paragraph>
              </Pressable>
            </View>

            <View className="gap-3">
              {attachments.map((file) => (
                <View
                  key={file.uri}
                  className="flex-row items-center rounded-xl bg-white shadow p-2 px-4"
                >
                  <View className="h-10 w-10 items-center justify-center bg-accent/10 rounded-full">
                    <FileImage size={16} />
                  </View>

                  <View className="ml-3 flex-1">
                    <Typography.Paragraph numberOfLines={1} className="font-medium text-sm">
                      {file.name}
                    </Typography.Paragraph>

                    <Typography.Paragraph className="text-xs text-muted">
                      {((file.size ?? 0) / 1024).toFixed(1)} KB
                    </Typography.Paragraph>
                  </View>

                  <Pressable onPress={() => removeAttachment(file.uri)}>
                    <X size={18} />
                  </Pressable>
                </View>
              ))}
            </View>

            <Button>Submit Report</Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
