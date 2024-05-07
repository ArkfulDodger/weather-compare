import { Weekday } from "@/src/constants/weekdays";
import Picker from "@/src/components/molecules/Picker";
import { PickerProps } from "@react-native-picker/picker";
import { useAppDispatch, useAppSelector } from "@/src/redux/reduxHooks";
import { selectDay, setDay } from "@/src/redux/slices/weatherSelectionSlice";
import { ItemValue } from "@react-native-picker/picker/typings/Picker";
import { useCallback } from "react";

// the selectable option text for each day of the week
const dayOptions = {
  [Weekday.Sunday]: "Sunday",
  [Weekday.Monday]: "Monday",
  [Weekday.Tuesday]: "Tuesday",
  [Weekday.Wednesday]: "Wednesday",
  [Weekday.Thursday]: "Thursday",
  [Weekday.Friday]: "Friday",
  [Weekday.Saturday]: "Saturday",
};

// allows the user to select a day of the week to use for the weekly interval to check
const DayPicker = (props: PickerProps) => {
  const day = useAppSelector(selectDay);
  const dispatch = useAppDispatch();

  const onDaySelect = useCallback((itemValue: ItemValue, itemIndex: number) => {
    dispatch(setDay(itemValue as Weekday));
  }, []);

  return (
    <>
      <Picker
        {...props}
        leftText="Every"
        data={dayOptions}
        selectedValue={day}
        onValueChange={onDaySelect}
      />
    </>
  );
};

export default DayPicker;
