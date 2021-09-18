import { fromFetch } from "rxjs/fetch";
import { CoordinatesModel } from "../models";

export const getWeatherRequest$ = (cityName: string) =>
  fromFetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    {
      method: "GET",
      selector: async response => {
        if (response.ok) {
          return (await response.json());
        }
        throw new Error((await response.text()) ?? "error fetching");
      }
    }
  );

export const getWeatherByCoordsRequest$ = (res: CoordinatesModel) =>
  fromFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${res.lat}&lon=${res.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    {
      method: "GET",
      selector: async response => {
        if (response.ok) {
          return (await response.json());
        }
        throw new Error((await response.text()) ?? "error fetching");
      }
    }
  );
