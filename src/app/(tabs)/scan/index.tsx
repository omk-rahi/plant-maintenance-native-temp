import { CameraPermission } from "@/features/scan/components/camera-permission";
import { ScannerOverlay } from "@/features/scan/components/scanner-overlay";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function ScanTab() {
  const [facing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) return <CameraPermission onRequest={requestPermission} />;

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: [
            "qr",
            "ean13",
            "ean8",
            "code128",
            "code39",
            "upc_a",
            "upc_e",
            "pdf417",
            "aztec",
            "datamatrix",
          ],
        }}
        onBarcodeScanned={
          scanned
            ? undefined
            : ({ type, data }) => {
                setScanned(true);

                Alert.alert("Barcode Detected", `Type: ${type}\nData: ${data}`, [
                  {
                    text: "Scan Again",
                    onPress: () => setScanned(false),
                  },
                ]);
              }
        }
      />

      <ScannerOverlay />

      <View style={styles.overlay}>
        <Text style={styles.text}>{scanned ? "Barcode Found" : "Point camera at barcode"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  message: {
    textAlign: "center",
    marginBottom: 10,
  },
});
