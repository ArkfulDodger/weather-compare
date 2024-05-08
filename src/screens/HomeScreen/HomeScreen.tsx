import useStyles from "@/src/hooks/useStyles";
import { createStyles } from "./HomeScreen.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon, Surface, Text } from "react-native-paper";
import { View } from "react-native";
import WeatherList from "@/src/features/weather-display/components/WeatherList";
import LocationPicker from "@/src/features/weather-selection/components/LocationPicker";
import DayPicker from "@/src/features/weather-selection/components/DayPicker";
import TimePicker from "@/src/features/weather-selection/components/TimePicker";
import MenuButton from "@/src/features/system/components/MenuButton";
import useWeatherAPI from "@/src/features/weather-selection/hooks/useWeatherAPI";
import { useAppSelector } from "@/src/redux/reduxHooks";
import { selectLocation } from "@/src/redux/slices/weatherSelectionSlice";
import { useEffect } from "react";

export type Props = {};

// the primary app screen for updating selections and viewing weather data
const HomeScreen = ({}: Props) => {
  const insets = useSafeAreaInsets();
  const styles = useStyles(createStyles, insets);
  const location = useAppSelector(selectLocation);
  const { fetchWeatherData } = useWeatherAPI();

  // fetch weather data for default location on startup
  useEffect(() => {
    if (location !== "") fetchWeatherData(location);
  }, []);

  return (
    <View style={styles.container}>
      <Surface style={styles.headerContainer}>
        <View style={styles.upperHeader}>
          <Text style={styles.headerLabel}>WHETHER.IO</Text>
          <MenuButton style={styles.menuButton} />
        </View>
        <LocationPicker style={styles.locationPicker} />
        <View style={styles.timeRow}>
          <Icon source="clock-outline" size={20} />
          <DayPicker />
          <TimePicker />
        </View>
      </Surface>
      <WeatherList />
    </View>
  );
};

export default HomeScreen;
