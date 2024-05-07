export enum TimeOfDay {
  Morning = "Morning",
  Afternoon = "Afternoon",
  Evening = "Evening",
}

// specifies start and end times for each time block
export const TIME_BLOCKS = {
  [TimeOfDay.Morning]: {
    start: 8,
    end: 12,
  },
  [TimeOfDay.Afternoon]: {
    start: 12,
    end: 17,
  },
  [TimeOfDay.Evening]: {
    start: 17,
    end: 9,
  },
};

// given the local hour (military time), return which time block the hour is in
export const getTimeOfDay = (hour: number) => {
  for (const timeOfDay of Object.keys(TimeOfDay)) {
    // Get the time block for the time of day
    const timeBlock = TIME_BLOCKS[timeOfDay as TimeOfDay];

    if (hour >= timeBlock.start && hour < timeBlock.end) {
      return timeOfDay as TimeOfDay;
    }
  }
  return null;
};