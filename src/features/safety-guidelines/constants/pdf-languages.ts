export type PdfLanguageCode = "en" | "hi" | "gu";

export type PdfLanguage = {
  value: PdfLanguageCode;
  label: string;
};

export const PDF_LANGUAGES: PdfLanguage[] = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "gu", label: "Gujarati" },
];

export const DEFAULT_PDF_LANGUAGE = PDF_LANGUAGES[0];

const PDF_SAMPLE = require("@/assets/pdf-sample.pdf");

export const PDF_SOURCES: Record<PdfLanguageCode, number> = {
  en: PDF_SAMPLE,
  hi: PDF_SAMPLE,
  gu: PDF_SAMPLE,
};
