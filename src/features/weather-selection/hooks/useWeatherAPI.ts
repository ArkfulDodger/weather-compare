import { useAppDispatch } from "@/src/redux/reduxHooks";
import { setWeatherData } from "@/src/redux/slices/weatherSelectionSlice";
import { generateWeatherAPIUrl } from "@/src/utils/helpers";
import { WeatherResponse } from "@/src/utils/types";

// uses a weather API to retrieve forecast data for a given location
const useWeatherAPI = () => {
  const dispatch = useAppDispatch();

  // fetch weather data for the specified location
  const fetchWeatherData = async (location: string) => {
    const url = generateWeatherAPIUrl(location);

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json() as Promise<WeatherResponse>;
        } else {
          throw new Error("Location Error");
        }
      })
      .then(loadWeatherData)
      .catch((error) => {
        console.error(error);
      });
  };

  // set weather data in state
  const loadWeatherData = (data: WeatherResponse) => {
    // console.log(JSON.stringify(data, null, 2));
    dispatch(setWeatherData(data));
  };

  return { fetchWeatherData };
};

export default useWeatherAPI;
