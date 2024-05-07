import Picker from "@/src/components/molecules/Picker";
import { getTimeOfDay, TimeOfDay } from "@/src/constants/timesOfDay";
import { useState } from "react";

type Props = {};

// the option text for each time block
const timeOptions = {
  [TimeOfDay.Morning]: "Morning",
  [TimeOfDay.Afternoon]: "Afternoon",
  [TimeOfDay.Evening]: "Evening",
};

// a picker element for selecting the time of day to check the weather for
const TimePicker = ({}: Props) => {
  // initialize to current local hour; default to noon if outside defined time blocks
  const [timeBlock, setTimeBlock] = useState<string | number>(
    getTimeOfDay(new Date().getHours()) ?? TimeOfDay.Afternoon
  );

  return (
    <>
      <Picker
        data={timeOptions}
        selectedValue={timeBlock}
        onValueChange={(item) => {
          setTimeBlock(item);
        }}
      />
    </>
  );
};

export default TimePicker;
