import { AppTheme } from "@/src/theme/themes";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

interface StaticStyles {
  container: ViewStyle;
  headerContainer: ViewStyle;
  upperHeader: ViewStyle;
  headerLabel: TextStyle;
  menuButton: ViewStyle;
  locationPicker: ViewStyle;
  timeRow: ViewStyle;
}

interface DynamicStyles {
  // define dynamic style types
}

export interface Styles extends StaticStyles, DynamicStyles {}

export const createStyles = (theme: AppTheme, insets: EdgeInsets): Styles => {
  const staticStyles = StyleSheet.create<StaticStyles>({
    container: { flex: 1 },
    headerContainer: {
      paddingTop: insets.top,
      backgroundColor: theme.colors.bg2,
      paddingBottom: 5,
    },
    upperHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 20,
      paddingRight: 7,
    },
    headerLabel: {
      fontWeight: "bold",
      color: theme.colors.header,
      fontSize: 16,
    },
    menuButton: {},
    locationPicker: {},
    timeRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
      columnGap: 10,
    },
  });

  const dynamicStyles: DynamicStyles = {
    // define dynamic styles
  };

  return { ...staticStyles, ...dynamicStyles };
};
