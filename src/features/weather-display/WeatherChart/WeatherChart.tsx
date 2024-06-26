import { LineChart, lineDataItem } from "react-native-gifted-charts";
import useStyles from "@/src//hooks/useStyles";
import { createStyles } from "./WeatherChart.styles";
import { convertTimestamp } from "@/src/utils/helpers";
import { HourlyData } from "@/src/utils/types";
import useAppTheme from "@/src/hooks/useAppTheme";

export type Props = {
  hours: HourlyData[];
};

const WeatherChart = ({ hours }: Props) => {
  const styles = useStyles(createStyles);
  const { colors } = useAppTheme();

  const tempLineData: lineDataItem[] = hours.map((hour, index) => ({
    value: hour.temp,
    label: convertTimestamp(hour.datetime),
    showVerticalLine: index === 2 || index === hours.length - 3,
    verticalLineColor: colors.text,
    verticalLineThickness: 2,
    verticalLineStrokeDashArray: [5, 5],
    labelTextStyle: {
      fontSize: 12,
      fontWeight: index < 2 || index >= hours.length - 2 ? "regular" : "bold",
      opacity: index < 2 || index > hours.length - 3 ? 0.4 : 1,
      color: colors.text,
    },
    dataPointColor: "transparent",
    dataPointHeight: 10,
    dataPointText: `${hour.temp.toFixed(0)}°F`,
  }));

  const precipLineData: lineDataItem[] = hours.map((hour, index) => ({
    value: hour.precipprob,
    dataPointColor: "transparent",
    dataPointHeight: 10,
    dataPointText: index === 4 ? `${hour.precipprob.toFixed(0)}%` : undefined,
  }));

  const windLineData: lineDataItem[] = hours.map((hour, index) => ({
    value: hour.windspeed * 2,
    dataPointColor: "transparent",
    dataPointHeight: 10,
    dataPointText: index === 4 ? `${hour.windspeed.toFixed(0)}mph` : undefined,
  }));

  const maxTemp = Math.max(...hours.map((hour) => hour.temp));

  return (
    <LineChart
      overflowTop={Math.min(Math.max((maxTemp - 100) * 2, 0), 20)}
      overflowBottom={20}
      height={250}
      maxValue={100}
      data={tempLineData}
      data2={precipLineData}
      data3={windLineData}
      isAnimated
      curved
      adjustToWidth
      initialSpacing={0}
      disableScroll
      // hideDataPoints
      xAxisLabelTextStyle={{ fontSize: 12 }}
      yAxisLabelWidth={0}
      thickness={5}
      hideRules
      hideYAxisText
      hideAxesAndRules
      color1="red"
      color2="#1e90ff"
      color3="#228b22"
    />
  );
};

export default WeatherChart;
