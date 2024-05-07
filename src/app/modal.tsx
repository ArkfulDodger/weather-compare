import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";

import EditScreenInfo from "@/src/components/from-template/EditScreenInfo";
import { Text } from "react-native-paper";
import useAppTheme from "../hooks/useAppTheme";

export default function ModalScreen() {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={[styles.separator, { backgroundColor: colors.bg2 }]} />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
