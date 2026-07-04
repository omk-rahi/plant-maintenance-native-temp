import {
  DEFAULT_PDF_LANGUAGE,
  PDF_LANGUAGES,
  type PdfLanguage,
  type PdfLanguageCode,
} from "@/features/safety-guidelines/constants/pdf-languages";
import { Label, Select, Typography } from "heroui-native";
import { View } from "react-native";

type PdfLanguageSelectProps = {
  value: PdfLanguage;
  onChange: (language: PdfLanguage) => void;
};

export function PdfLanguageSelect({ value, onChange }: PdfLanguageSelectProps) {
  return (
    <View className="px-4 py-3">
      <Label className="mb-2 text-xs text-muted-foreground">Document Language</Label>

      <Select
        value={value}
        onValueChange={(option) => {
          if (option && !Array.isArray(option)) {
            onChange(option as PdfLanguage);
          }
        }}
      >
        <Select.Trigger className="w-full">
          <Select.Value placeholder="Select language" />
          <Select.TriggerIndicator />
        </Select.Trigger>

        <Select.Portal>
          <Select.Overlay />
          <Select.Content presentation="bottom-sheet" snapPoints={["35%"]}>
            <Select.ListLabel>Select PDF language</Select.ListLabel>
            {PDF_LANGUAGES.map((language) => (
              <Select.Item key={language.value} value={language.value} label={language.label}>
                <Select.ItemLabel>{language.label}</Select.ItemLabel>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Portal>
      </Select>

      <Typography className="mt-2 text-xs text-muted-foreground">
        Demo uses the same sample PDF for all languages.
      </Typography>
    </View>
  );
}

export function getPdfLanguage(code: PdfLanguageCode): PdfLanguage {
  return PDF_LANGUAGES.find((language) => language.value === code) ?? DEFAULT_PDF_LANGUAGE;
}
