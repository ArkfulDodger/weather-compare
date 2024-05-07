import { Weekday } from "@/src/constants/weekdays";
import { useState } from "react";
import Picker from "@/src/components/molecules/Picker";
import { PickerProps } from "@react-native-picker/picker";

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
  // initialize to current weekday (0 = Sunday, 1 = Monday, ...)
  const [day, setDay] = useState<string | number>(new Date().getDay());

  return (
    <>
      <Picker
        {...props}
        leftText="Every"
        data={dayOptions}
        selectedValue={day}
        onValueChange={(item) => {
          setDay(item);
        }}
      />
    </>
  );
};

export default DayPicker;
