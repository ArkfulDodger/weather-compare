// Import the createSlice API from Redux Toolkit
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getTimeOfDay, TimeOfDay } from "@/src/constants/timesOfDay";
import { Weekday } from "@/src/constants/weekdays";
import { WeatherResponse } from "@/src/utils/types";

// Define a type for the slice state
interface WeatherSelectionState {
  location: string;
  locationInput: string;
  day: Weekday;
  time: TimeOfDay;
  data?: WeatherResponse;
}

// This is the initial state of the slice
const initialState: WeatherSelectionState = {
  location: "New York, New York",
  locationInput: "",
  day: new Date().getDay(),
  time: getTimeOfDay(new Date().getHours()) ?? TimeOfDay.Afternoon,
  data: undefined,
};

const weatherSelectionSlice = createSlice({
  name: "weatherSelection",
  initialState,
  reducers: {
    // set the location
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },

    // set the location
    setLocationInput: (state, action: PayloadAction<string>) => {
      state.locationInput = action.payload;
    },

    // set the day of the week
    setDay: (state, action: PayloadAction<Weekday>) => {
      state.day = action.payload;
    },

    // set the time of day
    setTime: (state, action: PayloadAction<TimeOfDay>) => {
      state.time = action.payload;
    },

    // set weather data, and ensure location matches
    setWeatherData: (
      state,
      action: PayloadAction<WeatherResponse | undefined>
    ) => {
      state.data = action.payload;
      state.location = action.payload?.resolvedAddress ?? "";
      state.locationInput = "";
    },
  },
});

// Export all newly created actions here
export const {
  setLocation,
  setLocationInput,
  setDay,
  setTime,
  setWeatherData,
} = weatherSelectionSlice.actions;

// Create selectors here, or in their own files if needed
export const selectLocation = (state: RootState) =>
  state.weatherSelection.location;
export const selectLocationInput = (state: RootState) =>
  state.weatherSelection.locationInput;
export const selectDay = (state: RootState) => state.weatherSelection.day;
export const selectTime = (state: RootState) => state.weatherSelection.time;
export const selectWeatherData = (state: RootState) =>
  state.weatherSelection.data;

// Export the reducer function so that it can be added to the store
export default weatherSelectionSlice.reducer;
