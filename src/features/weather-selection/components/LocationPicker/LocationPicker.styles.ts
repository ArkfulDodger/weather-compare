import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { AppTheme } from "@/src/theme/themes";

interface Styles {
  input: TextStyle;
  outline: ViewStyle;
  icon: ViewStyle;
}

export const createStyles = (theme: AppTheme): Styles => {
  return StyleSheet.create<Styles>({
    input: {
      backgroundColor: "transparent",
      fontSize: 16,
    },
    outline: {
      borderWidth: 0,
    },
    icon: {
      paddingLeft: 5,
    },
  });
};
