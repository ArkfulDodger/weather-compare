import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import HomeScreen from "../screens/HomeScreen";

const AppIndex = () => (
  <Animated.View style={{ flex: 1 }} exiting={FadeOut} entering={FadeIn}>
    <HomeScreen />
  </Animated.View>
);

export default AppIndex;
