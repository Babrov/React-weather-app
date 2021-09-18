import { action, payload } from "ts-action";
import { CoordinatesModel, WeatherResponseModel } from "../../models";

export const getWeatherAction = action("Weather/Get", payload<string>());
export const getWeatherSuccessAction = action("Weather/GetSuccess", payload<WeatherResponseModel>());
export const getWeatherFailedAction = action("Weather/GetFailed", payload<string>());

export const getWeatherByLocationAction = action("WeatherByLocation/Get", payload<CoordinatesModel>());

export const getLocationAction = action("Location/Get");
export const getLocationSuccessAction = action("Location/GetSuccess", payload<CoordinatesModel>());
export const getLocationFailedAction = action("Location/GetFailed", payload<string>());

export const removeCardAction = action('CardItem/Remove',payload<number>());