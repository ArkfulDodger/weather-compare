import { LineChart, lineDataItem } from "react-native-gifted-charts";
import useStyles from "@/src//hooks/useStyles";
import { createStyles } from "./WeatherChart.styles";
import { convertTimestamp } from "@/src/utils/helpers";
import { HourlyData } from "@/src/utils/types";

export type Props = {
  hours: HourlyData[];
};

const WeatherChart = ({ hours }: Props) => {
  const styles = useStyles(createStyles);

  const tempLineData: lineDataItem[] = hours.map((hour, index) => ({
    value: hour.temp,
    label: convertTimestamp(hour.datetime),
    showVerticalLine: index === 2 || index === hours.length - 3,
    verticalLineColor: "black",
    verticalLineThickness: 2,
    verticalLineStrokeDashArray: [5, 5],
    labelTextStyle: {
      fontSize: 12,
      fontWeight: index < 2 || index > hours.length - 2 ? "regular" : "bold",
      opacity: index < 2 || index > hours.length - 3 ? 0.4 : 1,
    },
  }));
  const precipLineData: lineDataItem[] = hours.map((hour) => ({
    value: hour.precipprob,
  }));
  const windLineData: lineDataItem[] = hours.map((hour) => ({
    value: hour.windspeed * 2,
  }));

  return (
    <LineChart
      height={250}
      data={tempLineData}
      data2={precipLineData}
      data3={windLineData}
      isAnimated
      curved
      adjustToWidth
      initialSpacing={0}
      disableScroll
      hideDataPoints
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
