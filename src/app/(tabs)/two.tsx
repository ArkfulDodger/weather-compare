import { StyleSheet, View } from "react-native";

import EditScreenInfo from "@/src/components/from-template/EditScreenInfo";
import useAppTheme from "@/src/hooks/useAppTheme";
import { Text } from "react-native-paper";

export default function TabTwoScreen() {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={[styles.separator, { backgroundColor: colors.bg2 }]} />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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
