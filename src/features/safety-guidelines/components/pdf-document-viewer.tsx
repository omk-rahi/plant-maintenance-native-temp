import {
  PDF_SOURCES,
  type PdfLanguageCode,
} from "@/features/safety-guidelines/constants/pdf-languages";
import { Spinner, Typography } from "heroui-native";
import { useState } from "react";
import { View } from "react-native";
import Pdf from "react-native-pdf";

type PdfDocumentViewerProps = {
  language: PdfLanguageCode;
};

export function PdfDocumentViewer({ language }: PdfDocumentViewerProps) {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <View className="flex-1 bg-slate-100">
      {isLoading ? (
        <View className="absolute inset-0 z-10 items-center justify-center bg-background/80">
          <Spinner size="lg" />
          <Typography className="mt-3 text-sm text-muted-foreground">Loading PDF...</Typography>
        </View>
      ) : null}

      {error ? (
        <View className="flex-1 items-center justify-center px-6">
          <Typography className="text-center text-sm text-danger">{error}</Typography>
        </View>
      ) : (
        <Pdf
          key={language}
          source={PDF_SOURCES[language]}
          style={{ flex: 1 }}
          fitPolicy={2}
          enablePaging={false}
          trustAllCerts
          onLoadComplete={(numberOfPages) => {
            setTotalPages(numberOfPages);
            setCurrentPage(1);
            setIsLoading(false);
            setError(null);
          }}
          onPageChanged={(page) => setCurrentPage(page)}
          onError={() => {
            setIsLoading(false);
            setError("Unable to open this PDF. Rebuild the app if you are using Expo Go.");
          }}
        />
      )}

      {!isLoading && !error && totalPages > 0 ? (
        <View className="absolute bottom-4 self-center rounded-full bg-slate-900 px-4 py-2">
          <Typography className="text-xs font-medium text-white">
            {currentPage} / {totalPages}
          </Typography>
        </View>
      ) : null}
    </View>
  );
}
