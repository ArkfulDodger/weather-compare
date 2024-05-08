import useStyles from "@/src/hooks/useStyles";
import { createStyles } from "./WeatherListItem.styles";
import { HourlyData } from "@/src/utils/types";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { getFormattedDate } from "@/src/utils/helpers";

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

// const testData: Props = {
//   datetime: "2024-05-07",
//   icon: "clear-day",
//   conditions: "Clear",
//   temp: 68.7,
//   windspeed: 10.0,
//   precipprob: 2.0,
//   // preciptype: null,
//   hours: [
//     {
//       datetime: "08:00:00",
//       datetimeEpoch: 1715083200,
//       temp: 64.1,
//       precipprob: 0.0,
//       preciptype: null,
//       windspeed: 3.4,
//       conditions: "Clear",
//       icon: "clear-day",
//     },
//     {
//       datetime: "09:00:00",
//       datetimeEpoch: 1715086800,
//       temp: 65.1,
//       precipprob: 0.0,
//       preciptype: null,
//       windspeed: 3.5,
//       conditions: "Clear",
//       icon: "clear-day",
//     },
//     {
//       datetime: "10:00:00",
//       datetimeEpoch: 1715090400,
//       temp: 70.0,
//       precipprob: 0.0,
//       preciptype: null,
//       windspeed: 10.0,
//       conditions: "Clear",
//       icon: "clear-day",
//     },
//     {
//       datetime: "11:00:00",
//       datetimeEpoch: 1715094000,
//       temp: 73.0,
//       precipprob: 0.0,
//       preciptype: null,
//       windspeed: 3.5,
//       conditions: "Clear",
//       icon: "clear-day",
//     },
//   ],
// };

const WeatherListItem = (props: Props) => {
  const styles = useStyles(createStyles);

  const dateString = getFormattedDate(props.datetime, props.timezone);

  return (
    <View style={styles.container}>
      <Text>{dateString}</Text>
    </View>
  );
};

export default WeatherListItem;
