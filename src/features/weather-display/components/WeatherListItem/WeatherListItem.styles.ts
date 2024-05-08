import { StyleSheet, ViewStyle } from "react-native";
import { AppTheme } from "@/src/theme/themes";
import metrics from "@/src/utils/metrics";

interface StaticStyles {
  container: ViewStyle;
}

interface DynamicStyles {
  // define dynamic style types
}

export interface Styles extends StaticStyles, DynamicStyles {}

export const createStyles = (theme: AppTheme): Styles => {
  const staticStyles = StyleSheet.create<StaticStyles>({
    container: {
      width: metrics.windowWidth,
    },
  });

  const dynamicStyles: DynamicStyles = {
    // define dynamic styles
  };

  return { ...staticStyles, ...dynamicStyles };
};
