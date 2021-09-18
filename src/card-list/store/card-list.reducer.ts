import { initialState, WeatherState } from "./card-list.state";
import { on, reducer } from "ts-action";
import {
  getLocationAction, getLocationFailedAction, getLocationSuccessAction,
  getWeatherAction,
  getWeatherFailedAction,
  getWeatherSuccessAction, removeCardAction
} from "./card-list.actions";
import { WeatherResponseModel } from "../../models";

const filterWeather = (state: WeatherState, payload: WeatherResponseModel) =>
  state.weatherList.filter(item => item.id === payload.id).length > 0 ? [...state.weatherList] : [...state.weatherList, payload];

export const cardListReducer = reducer(
  initialState,
  on(getWeatherAction, (state) => ({ ...state, isLoading: true })),
  on(getWeatherSuccessAction, (state, { payload }) => ({
    ...state,
    isLoading: false,
    weatherList: filterWeather(state, payload)
  })),
  on(getWeatherFailedAction, (state, { payload }) => ({ ...state, isLoading: false, error: payload })),
  on(getLocationAction, (state) => ({ ...state })),
  on(getLocationSuccessAction, (state, { payload }) => ({ ...state, coordinates: payload })),
  on(getLocationFailedAction, (state, { payload }) => ({ ...state, error: payload })),
  on(removeCardAction, (state, { payload }) => ({
    ...state,
    weatherList: state.weatherList.filter(item => item.id !== payload)
  }))
);