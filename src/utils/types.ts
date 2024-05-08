export interface HourlyData {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  precipprob: number;
  preciptype: string[] | null;
  windspeed: number;
  conditions: string;
  icon: string;
}

export interface DailyData {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  precipprob: number;
  preciptype: string[] | null;
  windspeed: number;
  conditions: string;
  icon: string;
  hours: HourlyData[];
}

export interface WeatherResponse {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  days: DailyData[];
}
