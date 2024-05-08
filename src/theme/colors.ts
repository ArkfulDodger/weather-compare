import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { ColorValue } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

// colors which can be/are customized within the app
export type CustomizedColors = Partial<
  MD3Colors &
    typeof NavigationDefaultTheme.colors &
    typeof NavigationDarkTheme.colors
> & {
  // added colors go here
  tint: string;
  tabIconDefault: ColorValue;
  tabIconSelected: ColorValue;
  bg2: ColorValue;
  bg3: string;
  bg4: string;
  highlight: ColorValue;
  header: ColorValue;
};

// all colors which are defined by the app theme
export type AppColors = MD3Colors &
  typeof NavigationDefaultTheme.colors &
  typeof NavigationDarkTheme.colors &
  CustomizedColors;

// light theme color palette
const light: CustomizedColors = {
  text: "#000",
  background: "#fff",
  tint: "#2f95dc",
  tabIconDefault: "#ccc",
  tabIconSelected: "#2f95dc",
  bg2: "#eee",
  highlight: "rgba(0,0,0,0.05)",
  header: "#e43838",
  bg3: "#d0edf5",
  bg4: "#e3f3f7",
};

// dark theme color palette
const dark: CustomizedColors = {
  text: "#fff",
  background: "#000",
  tint: "#fff",
  tabIconDefault: "#ccc",
  tabIconSelected: "#fff",
  bg2: "rgba(255,255,255,0.1)",
  highlight: "rgba(255,255,255,0.05)",
  header: "#ca6b6b",
  bg3: "#030d2c",
  bg4: "#000103",
};

export const colors = { light: light, dark: dark };
