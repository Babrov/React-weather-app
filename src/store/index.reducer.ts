import { combineReducers } from "redux";
import { cardListReducer } from "../card-list";
import { WeatherRootState } from "../card-list";


export interface AppState extends WeatherRootState {
}

export default function createRootReducer() {
  return combineReducers<AppState>({
    weather: cardListReducer
  });
}