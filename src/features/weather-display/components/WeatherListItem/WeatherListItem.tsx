import useStyles from "@/src/hooks/useStyles";
import { createStyles } from "./WeatherListItem.styles";
import { HourlyData } from "@/src/utils/types";
import { View } from "react-native";
import { Icon, Text } from "react-native-paper";
import { getFormattedDate } from "@/src/utils/helpers";
import WeatherChart from "../../WeatherChart";
import { useAppSelector } from "@/src/redux/reduxHooks";
import { selectTime } from "@/src/redux/slices/weatherSelectionSlice";

export type Props = {
  datetime: string;
  timezone: string;
  icon: string;
  conditions: string;
  temp: number;
  windspeed: number;
  precipprob: number;
  preciptype?: string;
  hours: HourlyData[];
};

const WeatherListItem = (props: Props) => {
  const styles = useStyles(createStyles);
  const timeOfDay = useAppSelector(selectTime);

  const dateString = getFormattedDate(props.datetime, props.timezone);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{dateString}</Text>
      <View style={styles.infoContainer}>
        <Icon source={props.icon} size={100} />
        <View style={styles.info}>
          <Text style={styles.body}>
            {props.conditions.split(",")[0].toLowerCase()}{" "}
            {props.temp.toFixed(0)}°F
          </Text>
          <Text>
            <Icon source="weather-windy" size={16} /> winds{" "}
            {props.windspeed.toFixed(0)}mph
          </Text>
          <Text style={styles.small}>
            <Icon source="water" size={16} />
            {`${props.precipprob.toFixed(0)}% chance ${
              props.preciptype ?? "rain"
            }`}
          </Text>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <WeatherChart hours={props.hours} />
      </View>
      <Text style={styles.small}>{timeOfDay}</Text>
    </View>
  );
};

export default WeatherListItem;
