import { format, toDate } from "date-fns-tz";
import { PixelRatio } from "react-native";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// takes a standard size and scales it with font accessibility scale
export const getScaledFont = (size: number) => {
  const scaleFactor = PixelRatio.getFontScale();
  return size * scaleFactor;
};

// get the url to retrieve 15-day hourly forecast data for the provided location string
export const generateWeatherAPIUrl = (locationInput: string): string => {
  const YOUR_API_KEY = "YF8HMJHNSVNHAAF96P9SRJGZG";

  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    locationInput
  )}?unitGroup=us&elements=datetime%2CdatetimeEpoch%2Cname%2CresolvedAddress%2Ctemp%2Cprecipprob%2Cpreciptype%2Cwindspeed%2Cconditions%2Cicon&include=hours&key=${YOUR_API_KEY}&contentType=json`;

  return apiUrl;
};

// convert 00:00:00 military timestamp to 0:00 am/pm timestamp
export const convertTimestamp = (timestamp: string): string => {
  const [hours, minutes] = timestamp.split(":").map(Number);

  let formattedHours = hours % 12; // Convert to 12-hour format
  if (formattedHours === 0) {
    formattedHours = 12; // Special case when hours is 12
  }

  return `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes}`;
};

// get a formatted string to display for the given date in the given timezone
export const getFormattedDate = (
  dateTimeString: string,
  timeZone: string
): string => {
  // get today and the target date in the location time zone
  const today = new Date(format(new Date(), "yyyy-MM-dd", { timeZone }));
  const targetDate = toDate(dateTimeString, { timeZone });

  // Calculate the difference in days between today and the target date
  const diffDays = Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Format the target date
  const formattedTargetDate = format(targetDate, "do", { timeZone });
  const weekdayOfTargetDate = weekdays[targetDate.getDay()];

  const leadingWord =
    diffDays === 0
      ? "Today, "
      : diffDays <= 6
      ? "This "
      : diffDays <= 13
      ? "Next "
      : "";

  return `${leadingWord}${weekdayOfTargetDate} the ${formattedTargetDate}`;
};
