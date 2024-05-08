import useStyles from "@/src/hooks/useStyles";
import { createStyles } from "./WeatherList.styles";
import { FlatList } from "react-native-gesture-handler";
import WeatherListItem, { WeatherListItemProps } from "../WeatherListItem";

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
        datetime: "08:00:00",
        datetimeEpoch: 1715083200,
        temp: 64.1,
        precipprob: 0.0,
        preciptype: null,
        windspeed: 3.4,
        conditions: "Clear",
        icon: "clear-day",
      },
      {
        datetime: "09:00:00",
        datetimeEpoch: 1715086800,
        temp: 65.1,
        precipprob: 0.0,
        preciptype: null,
        windspeed: 3.5,
        conditions: "Clear",
        icon: "clear-day",
      },
      {
        datetime: "10:00:00",
        datetimeEpoch: 1715090400,
        temp: 70.0,
        precipprob: 0.0,
        preciptype: null,
        windspeed: 10.0,
        conditions: "Clear",
        icon: "clear-day",
      },
      {
        datetime: "11:00:00",
        datetimeEpoch: 1715094000,
        temp: 73.0,
        precipprob: 0.0,
        preciptype: null,
        windspeed: 3.5,
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

  const renderItem = ({ item }: { item: WeatherListItemProps }) => (
    <WeatherListItem {...item} />
  );

  return (
    <FlatList
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
