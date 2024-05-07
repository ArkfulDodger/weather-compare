import Picker from "@/src/components/molecules/Picker";
import { TimeOfDay } from "@/src/constants/timesOfDay";
import { useAppDispatch, useAppSelector } from "@/src/redux/reduxHooks";
import { selectTime, setTime } from "@/src/redux/slices/weatherSelectionSlice";
import { ItemValue } from "@react-native-picker/picker/typings/Picker";
import { useCallback } from "react";

type Props = {};

// the option text for each time block
const timeOptions = {
  [TimeOfDay.Morning]: "Morning",
  [TimeOfDay.Afternoon]: "Afternoon",
  [TimeOfDay.Evening]: "Evening",
};

// a picker element for selecting the time of day to check the weather for
const TimePicker = ({}: Props) => {
  const time = useAppSelector(selectTime);
  const dispatch = useAppDispatch();

  const onTimeSelect = useCallback(
    (itemValue: ItemValue, itemIndex: number) => {
      dispatch(setTime(itemValue as TimeOfDay));
    },
    []
  );

  return (
    <>
      <Picker
        data={timeOptions}
        selectedValue={time}
        onValueChange={onTimeSelect}
      />
    </>
  );
};

export default TimePicker;
