import useStyles from "@/src/hooks/useStyles";
import { createStyles } from "./WeatherList.styles";

export type Props = {};

// displays a list of individual days' weather info which can be swiped through
const WeatherList = ({}: Props) => {
  const styles = useStyles(createStyles);

  return (
    <>
      <></>
    </>
  );
};

export default WeatherList;
