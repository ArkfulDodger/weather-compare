import { PixelRatio } from "react-native";

// takes a standard size and scales it with font accessibility scale
export const getScaledFont = (size: number) => {
  const scaleFactor = PixelRatio.getFontScale();
  return size * scaleFactor;
};

// get the url to retrieve 15-day hourly forecast data for the provided location string
export const generateWeatherAPIUrl = (locationInput: string): string => {
  const YOUR_API_KEY =
    process.env.VISUAL_CROSSING_API_KEY ||
    process.env.EXPO_PUBLIC_VISUAL_CROSSING_API_KEY;

  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    locationInput
  )}?unitGroup=us&elements=datetime%2CdatetimeEpoch%2Cname%2CresolvedAddress%2Ctemp%2Cprecipprob%2Cpreciptype%2Cwindspeed%2Cconditions%2Cicon&include=hours&key=${YOUR_API_KEY}&contentType=json`;

  return apiUrl;
};
