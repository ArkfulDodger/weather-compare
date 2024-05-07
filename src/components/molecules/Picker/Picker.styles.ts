import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { AppTheme } from "@/src/theme/themes";

interface Styles {
  button: ViewStyle;
  modalCard: ViewStyle;
  item: ViewStyle;
  itemText: TextStyle;
}

export const createStyles = (theme: AppTheme): Styles => {
  return StyleSheet.create<Styles>({
    button: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 5,
    },
    modalCard: {
      margin: 20,
      padding: 20,
    },
    item: {
      padding: 15,
      marginHorizontal: 20,
      alignItems: "center",
    },
    itemText: {
      fontSize: 16,
    },
  });
};
