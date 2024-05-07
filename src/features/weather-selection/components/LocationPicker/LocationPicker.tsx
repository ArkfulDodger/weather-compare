import useStyles from "@/src/hooks/useStyles";
import { createStyles } from "./LocationPicker.styles";
import { ViewStyle } from "react-native";

export type Props = {
  style?: ViewStyle;
};

const LocationPicker = ({ style }: Props) => {
  const styles = useStyles(createStyles);

  return (
    <>
      <></>
    </>
  );
};

export default LocationPicker;
