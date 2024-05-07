import { Text, TextProps } from "react-native-paper";

export function MonoText(props: TextProps<Text>) {
  return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}
