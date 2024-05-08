// Import the createSlice API from Redux Toolkit
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Appearance, AppStateStatus, ColorSchemeName } from "react-native";

// Define a type for the slice state
interface SystemState {
  appState: AppStateStatus;
  theme: {
    isDark: boolean;
    system: ColorSchemeName;
    preference: ColorSchemeName | "system";
  };
}

// This is the initial state of the slice
const initialState: SystemState = {
  appState: "active",
  theme: {
    isDark: false,
    system: "light",
    preference: "system",
  },
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    // update the app's state (whether the app is currently active/focused), and boolean
    setAppState: (state, action: PayloadAction<AppStateStatus>) => {
      state.appState = action.payload;
    },

    // refreshes the system theme, updating app theme if needed
    refreshSystemTheme: (state) => {
      // get current system theme
      const systemTheme = Appearance.getColorScheme();

      // update system theme in state
      state.theme.system = systemTheme;

      // if app theme preference is "system", update dark mode status
      if (state.theme.preference === "system") {
        state.theme.isDark = systemTheme === "dark";
      }
    },

    // update the user's theme preference to the passed color scheme, and make active theme
    setThemePreference: (
      state,
      action: PayloadAction<ColorSchemeName | "system">
    ) => {
      // update the theme preference in state
      state.theme.preference = action.payload;

      // enforce the theme according to the preference
      switch (action.payload) {
        case "dark":
          state.theme.isDark = true;
          break;
        case "light":
          state.theme.isDark = false;
          break;
        default:
          state.theme.isDark = state.theme.system === "dark";
          break;
      }
    },

    // toggle dark mode
    toggleDark: (state) => {
      if (state.theme.isDark) {
        state.theme.isDark = false;
        state.theme.preference = "light";
      } else {
        state.theme.isDark = true;
        state.theme.preference = "dark";
      }
    },
  },
});

// Export all newly created actions here
export const {
  setAppState,
  refreshSystemTheme,
  setThemePreference,
  toggleDark,
} = systemSlice.actions;

// Create selectors here, or in their own files if needed
export const selectIsAppActive = (state: RootState) =>
  state.system.appState === "active";
export const selectIsDark = (state: RootState) => state.system.theme.isDark;

// Export the reducer function so that it can be added to the store
export default systemSlice.reducer;
