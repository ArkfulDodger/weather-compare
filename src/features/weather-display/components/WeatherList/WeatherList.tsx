import useStyles from "@/src/hooks/useStyles";
import { createStyles } from "./WeatherList.styles";
import WeatherListItem, { WeatherListItemProps } from "../WeatherListItem";
import { useCallback } from "react";
import { FlatList, View } from "react-native";
import metrics from "@/src/utils/metrics";

export type Props = {};

const testData: WeatherListItemProps[] = [
  {
    datetime: "2024-05-08",
    icon: "clear-day",
    conditions: "Clear",
    temp: 68.7,
    windspeed: 10.0,
    precipprob: 2.0,
    timezone: "America/New_York",
    // preciptype: null,
    hours: [
      {
        datetime: "11:00:00",
        datetimeEpoch: 1715180400,
        temp: 65.0,
        precipprob: 31.0,
        preciptype: null,
        windspeed: 9.2,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "12:00:00",
        datetimeEpoch: 1715184000,
        temp: 67.9,
        precipprob: 31.0,
        preciptype: null,
        windspeed: 9.2,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "13:00:00",
        datetimeEpoch: 1715187600,
        temp: 71.0,
        precipprob: 31.0,
        preciptype: null,
        windspeed: 9.2,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "14:00:00",
        datetimeEpoch: 1715191200,
        temp: 74.9,
        precipprob: 26.0,
        preciptype: ["rain"],
        windspeed: 8.1,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "15:00:00",
        datetimeEpoch: 1715194800,
        temp: 76.9,
        precipprob: 26.0,
        preciptype: null,
        windspeed: 9.2,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "16:00:00",
        datetimeEpoch: 1715198400,
        temp: 78.0,
        precipprob: 26.0,
        preciptype: null,
        windspeed: 9.2,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "17:00:00",
        datetimeEpoch: 1715202000,
        temp: 78.0,
        precipprob: 26.0,
        preciptype: null,
        windspeed: 9.2,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "18:00:00",
        datetimeEpoch: 1715205600,
        temp: 76.9,
        precipprob: 26.0,
        preciptype: null,
        windspeed: 9.2,
        conditions: "Clear",
        icon: "clear-day",
      },
      {
        datetime: "19:00:00",
        datetimeEpoch: 1715209200,
        temp: 74.9,
        precipprob: 26.0,
        preciptype: null,
        windspeed: 9.2,
        conditions: "Clear",
        icon: "clear-day",
      },
    ],
  },
  {
    datetime: "2024-05-15",
    timezone: "America/New_York",
    icon: "rain",
    conditions: "Rain, Partially cloudy",
    temp: 63.8,
    windspeed: 9.2,
    precipprob: 67.0,
    preciptype: "rain",
    hours: [
      {
        datetime: "08:00:00",
        datetimeEpoch: 1715256000,
        temp: 63.1,
        precipprob: 39.0,
        preciptype: null,
        windspeed: 5.8,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "09:00:00",
        datetimeEpoch: 1715259600,
        temp: 65.0,
        precipprob: 39.0,
        preciptype: null,
        windspeed: 5.8,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "10:00:00",
        datetimeEpoch: 1715263200,
        temp: 66.1,
        precipprob: 39.0,
        preciptype: null,
        windspeed: 6.5,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
      {
        datetime: "11:00:00",
        datetimeEpoch: 1715266800,
        temp: 67.0,
        precipprob: 39.0,
        preciptype: ["rain"],
        windspeed: 6.9,
        conditions: "Partially cloudy",
        icon: "partly-cloudy-day",
      },
    ],
  },
];

// displays a list of individual days' weather info which can be swiped through
const WeatherList = ({}: Props) => {
  const styles = useStyles(createStyles);

  const renderItem = useCallback(
    ({ item }: { item: WeatherListItemProps }) => (
      <View>
        <WeatherListItem {...item} />
      </View>
    ),
    []
  );

  return (
    <FlatList
      snapToInterval={metrics.screenWidth}
      disableIntervalMomentum
      horizontal
      data={testData}
      renderItem={renderItem}
      keyExtractor={(item) =>
        item.hours[0].datetimeEpoch.toString() || item.datetime
      }
    />
  );
};

export default WeatherList;
