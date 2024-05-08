import useStyles from "@/src/hooks/useStyles";
import { createStyles } from "./WeatherList.styles";
import WeatherListItem, { WeatherListItemProps } from "../WeatherListItem";
import { useCallback } from "react";
import { FlatList, View } from "react-native";
import metrics from "@/src/utils/metrics";
import useSelectedWeatherData from "../../hooks/useSelectedWeatherData";

export type Props = {};

// displays a list of individual days' weather info which can be swiped through
const WeatherList = ({}: Props) => {
  const styles = useStyles(createStyles);
  const data = useSelectedWeatherData();

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
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) =>
        item.hours[0].datetimeEpoch.toString() || item.datetime
      }
    />
  );
};

export default WeatherList;
