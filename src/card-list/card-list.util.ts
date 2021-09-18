import { WeatherResponseModel } from "../models";

const getTimeFromDate = (date: Date) =>
  date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });

const getDateWeek = (date: Date) => date.toLocaleString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric"
});

export const getFormattedInfo = (info: WeatherResponseModel) => {
  const { dt, weather, sys, main } = info;
  const date = new Date(dt * 1000);
  return {
    timeFromDate: getTimeFromDate(date),
    dateWeek: getDateWeek(date),
    sunset: getTimeFromDate(new Date(sys.sunset * 1000)),
    sunrise: getTimeFromDate(new Date(sys.sunrise * 1000)),
    icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
    mainTemp: Math.round(main.temp),
    feelsLikeTemp: Math.round(main.feels_like),
    weatherDescription: weather[0].description.charAt(0).toUpperCase() +
      weather[0].description.slice(1)
  };
};