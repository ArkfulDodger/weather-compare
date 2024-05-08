import { TIME_BLOCKS } from "@/src/constants/timesOfDay";
import { useAppSelector } from "@/src/redux/reduxHooks";
import {
  selectDay,
  selectTime,
  selectWeatherData,
} from "@/src/redux/slices/weatherSelectionSlice";
import { toDate } from "date-fns-tz";
import { useMemo } from "react";
import { WeatherListItemProps } from "../components/WeatherListItem";
import { WEATHER_ICONS } from "@/src/constants/weatherIcons";

// given the current weather data and day/time selections, returns memoized weather selections
const useSelectedWeatherData = () => {
  const day = useAppSelector(selectDay);
  const time = useAppSelector(selectTime);
  const weatherData = useAppSelector(selectWeatherData);

  const selectionData = useMemo(() => {
    // get the days that match the selection
    const filteredDays = weatherData?.days.filter((dailyData) => {
      let thisDay = toDate(dailyData.datetime, {
        timeZone: weatherData.timezone,
      }).getDay();
      return thisDay == day;
    });

    if (!filteredDays || filteredDays.length < 1) return [];

    // get the timer block for the selection
    const timeBlock = TIME_BLOCKS[time];

    // get the days with only the hours records in the given timeblock
    const timeblockedDays = filteredDays.map((day) => ({
      ...day,
      hours: day.hours.filter((hour) => {
        const [hourStr] = hour.datetime.split(":");
        const hourInt = parseInt(hourStr);

        // extend timeblock range by buffer of 2 hours
        const lowLimit = timeBlock.start - 2;
        const highLimit = timeBlock.end + 2;

        return hourInt >= lowLimit && hourInt <= highLimit;
      }),
    }));

    // convert to selection data
    const weatherSelection: WeatherListItemProps[] = timeblockedDays.map(
      (day) => {
        // get average temperature in the time block
        const avgTemp =
          day.hours.reduce((acc, hourlyData) => acc + hourlyData.temp, 0) /
          day.hours.length;

        // get average wind speed in the time block
        const avgWindSpeed =
          day.hours.reduce((acc, hourlyData) => acc + hourlyData.windspeed, 0) /
          day.hours.length;

        // get maximum precipitation probability in the time block
        const maxPrecipprob = Math.max(
          ...day.hours.map((hourlyData) => hourlyData.precipprob)
        );

        // get the hour with the most significant weather in the time block
        const prioritizedHour = day.hours.reduce((prev, curr) =>
          WEATHER_ICONS[prev.icon].priority < WEATHER_ICONS[curr.icon].priority
            ? prev
            : curr
        );

        return {
          datetime: day.datetime,
          timezone: weatherData?.timezone,
          icon: WEATHER_ICONS[prioritizedHour.icon].icon,
          conditions: prioritizedHour.conditions,
          temp: avgTemp,
          windspeed: avgWindSpeed,
          precipprob: maxPrecipprob,
          preciptype: prioritizedHour.preciptype
            ? prioritizedHour.preciptype[0]
            : undefined,
          hours: day.hours,
        } as WeatherListItemProps;
      }
    );

    return weatherSelection;
  }, [day, time, weatherData]);

  return selectionData;
};

export default useSelectedWeatherData;
