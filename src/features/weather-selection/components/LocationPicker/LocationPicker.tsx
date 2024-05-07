import useStyles from "@/src/hooks/useStyles";
import { createStyles } from "./LocationPicker.styles";
import { ViewStyle } from "react-native";
import { TextInput } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "@/src/redux/reduxHooks";
import {
  selectLocation,
  selectLocationInput,
  setLocationInput,
} from "@/src/redux/slices/weatherSelectionSlice";

export type Props = {
  style?: ViewStyle;
};

const LocationPicker = ({ style }: Props) => {
  const styles = useStyles(createStyles);
  const location = useAppSelector(selectLocation);
  const locationInput = useAppSelector(selectLocationInput);
  const dispatch = useAppDispatch();

  return (
    <>
      <TextInput
        left={<TextInput.Icon icon="map-marker" />}
        value={locationInput}
        onChangeText={(str) => dispatch(setLocationInput(str))}
        placeholder={location}
        clearButtonMode="always"
      />
    </>
  );
};

export default LocationPicker;
