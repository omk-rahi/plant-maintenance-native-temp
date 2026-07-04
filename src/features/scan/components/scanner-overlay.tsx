import { COLORS } from "@/constants";
import { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const BOX_SIZE = width * 0.72;

export function ScannerOverlay() {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(BOX_SIZE - 4, {
          duration: 1800,
          easing: Easing.linear,
        }),
        withTiming(0, {
          duration: 1800,
          easing: Easing.linear,
        })
      ),
      -1,
      false
    );
  }, []);

  const lineStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <View style={styles.topMask} />

      <View style={styles.middle}>
        <View style={styles.sideMask} />

        <View style={styles.scanBox}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />

          <Animated.View style={[styles.scanLine, lineStyle]} />
        </View>

        <View style={styles.sideMask} />
      </View>

      <View style={styles.bottomMask} />
    </View>
  );
}

const styles = StyleSheet.create({
  topMask: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  bottomMask: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  middle: {
    flexDirection: "row",
    height: BOX_SIZE,
  },

  sideMask: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  scanBox: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    overflow: "hidden",
  },

  corner: {
    position: "absolute",
    width: 36,
    height: 36,
    borderColor: COLORS.accent,
  },

  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },

  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
  },

  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },

  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
  },

  scanLine: {
    position: "absolute",
    left: 12,
    right: 12,
    height: 3,
    backgroundColor: COLORS.accent,

    shadowColor: COLORS.accent,
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 8,
  },
});
