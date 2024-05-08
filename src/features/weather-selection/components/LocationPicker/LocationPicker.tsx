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
import useWeatherAPI from "../../hooks/useWeatherAPI";

export type Props = {
  style?: ViewStyle;
};

const LocationPicker = ({ style }: Props) => {
  const styles = useStyles(createStyles);
  const location = useAppSelector(selectLocation);
  const locationInput = useAppSelector(selectLocationInput);
  const dispatch = useAppDispatch();
  const { fetchWeatherData } = useWeatherAPI();

  const onSubmit = () => {
    fetchWeatherData(locationInput);
  };

  return (
    <>
      <TextInput
        dense
        mode="outlined"
        style={styles.input}
        outlineStyle={styles.outline}
        contentStyle={{ paddingLeft: 0 }}
        left={<TextInput.Icon icon="map-marker" style={styles.icon} />}
        value={locationInput}
        onChangeText={(str) => dispatch(setLocationInput(str))}
        placeholder={location}
        clearButtonMode="always"
        onSubmitEditing={onSubmit}
        returnKeyType="done"
      />
    </>
  );
};

export default LocationPicker;
