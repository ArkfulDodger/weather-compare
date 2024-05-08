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
    value: hour.windspeed,
  }));

  return (
    <LineChart
      // initialSpacing={0}
      endSpacing={40}
      data={tempLineData}
      data2={precipLineData}
      data3={windLineData}
      // width={metrics.windowWidth - 40}
      isAnimated
      adjustToWidth
      disableScroll
      xAxisLabelTextStyle={{ fontSize: 12 }}
      yAxisLabelContainerStyle={{ width: 20, backgroundColor: "red" }}
      // spacing={(metrics.windowWidth - 40) / (props.hours.length - 1)}
      hideDataPoints
      thickness={5}
      hideRules
      hideYAxisText
      hideAxesAndRules
      color="#0BA5A4"
      color1="red"
      color2="blue"
      color3="#0BA5A4"
    />
  );
};

export default WeatherChart;
