import { StyleSheet, ViewStyle } from "react-native";
import { AppTheme } from "@/src/theme/themes";

interface Styles {
  button: ViewStyle;
  modalCard: ViewStyle;
}

export const createStyles = (theme: AppTheme): Styles => {
  return StyleSheet.create<Styles>({
    button: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
    },
    modalCard: {
      margin: 20,
      shadowOpacity: 0,
    },
  });
};
