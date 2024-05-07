import { AppColors, colors } from "./colors";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme,
} from "@react-navigation/native";
import {
  MD3Theme,
  MD3DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import merge from "deepmerge";

// merged RN Paper and React Navigation theme, using full app colors
export type AppTheme = Omit<Theme, "colors"> &
  Omit<MD3Theme, "colors"> & { colors: AppColors };

// compile combined default themes from RN Paper and React Navigation
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

// define settings that are the same regardless of dark/light mode
const universalSettings: Partial<AppTheme> = {
  roundness: 10,
  // fonts
};

export const lightTheme: AppTheme = {
  ...CombinedDefaultTheme,
  ...universalSettings,
  dark: false,
  colors: { ...CombinedDefaultTheme.colors, ...colors.light },
};

export const darkTheme: AppTheme = {
  ...CombinedDarkTheme,
  ...universalSettings,
  dark: true,
  mode: "adaptive",
  colors: { ...CombinedDarkTheme.colors, ...colors.dark },
};
