import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./slices/systemSlice";
import weatherSelectionReducer from "./slices/weatherSelectionSlice";

export const store = configureStore({
  reducer: {
    system: systemReducer,
    weatherSelection: weatherSelectionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
