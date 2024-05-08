// the weather icons returned from Visual Crossing API in descending priority
// and the React Native Paper icon used to represent it

interface WeatherIcon {
  icon: string;
  priority: number;
}

export const WEATHER_ICONS: { [icon: string]: WeatherIcon } = {
  snow: {
    icon: "weather-snowy-heavy",
    priority: 0,
  },
  "snow-showers-day": {
    icon: "weather-partly-snowy-rainy",
    priority: 1,
  },
  "snow-showers-night": {
    icon: "weather-snowy-rainy",
    priority: 2,
  },
  "thunder-rain": {
    icon: "weather-lightning-rainy",
    priority: 3,
  },
  "thunder-showers-day": {
    icon: "weather-partly-lightning",
    priority: 4,
  },
  "thunder-showers-night": {
    icon: "weather-lightning",
    priority: 5,
  },
  rain: {
    icon: "weather-pouring",
    priority: 6,
  },
  "showers-day": {
    icon: "weather-partly-rainy",
    priority: 7,
  },
  "showers-night": {
    icon: "weather-rainy",
    priority: 8,
  },
  fog: {
    icon: "weather-fog",
    priority: 9,
  },
  wind: {
    icon: "weather-windy",
    priority: 10,
  },
  cloudy: {
    icon: "weather-cloudy",
    priority: 11,
  },
  "partly-cloudy-day": {
    icon: "weather-partly-cloudy",
    priority: 12,
  },
  "partly-cloudy-night": {
    icon: "weather-night-partly-cloudy",
    priority: 13,
  },
  "clear-day": {
    icon: "weather-sunny",
    priority: 14,
  },
  "clear-night": {
    icon: "weather-night",
    priority: 15,
  },
};
