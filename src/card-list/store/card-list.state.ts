import { CoordinatesModel, emptyCoordinatesModel, WeatherResponseModel } from "../../models";

export interface WeatherState {
  weatherList: WeatherResponseModel[],
  coordinates: CoordinatesModel,
  isLoading: boolean,
  error?: string
}

export interface WeatherRootState {
  weather: WeatherState;
}

export const initialState:WeatherState = {
  weatherList: [],
  coordinates: emptyCoordinatesModel,
  isLoading: false
};