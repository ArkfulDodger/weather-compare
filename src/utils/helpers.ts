import { PixelRatio } from "react-native";

// takes a standard size and scales it with font accessibility scale
export const getScaledFont = (size: number) => {
  const scaleFactor = PixelRatio.getFontScale();
  return size * scaleFactor;
};
