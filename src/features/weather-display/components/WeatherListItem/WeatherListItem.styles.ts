import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { AppTheme } from "@/src/theme/themes";
import metrics from "@/src/utils/metrics";

interface StaticStyles {
  container: ViewStyle;
  infoContainer: ViewStyle;
  info: ViewStyle;
  h1: TextStyle;
  body: TextStyle;
  small: TextStyle;
}

interface DynamicStyles {
  // define dynamic style types
}

export interface Styles extends StaticStyles, DynamicStyles {}

export const createStyles = (theme: AppTheme): Styles => {
  const staticStyles = StyleSheet.create<StaticStyles>({
    container: {
      width: metrics.windowWidth,
      alignItems: "center",
    },
    infoContainer: {
      flexDirection: "row",
    },
    info: {
      justifyContent: "space-evenly",
    },
    h1: {
      fontSize: 22,
    },
    body: {
      fontSize: 16,
    },
    small: {
      fontSize: 14,
    },
  });

  const dynamicStyles: DynamicStyles = {
    // define dynamic styles
  };

  return { ...staticStyles, ...dynamicStyles };
};
