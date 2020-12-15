import { GET_CITY, GET_LOCATION } from '../actions/WeatherAction';

const initialState = {
  cityWeather: [],
  localWeather: [],
};

export const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        cityWeather: action.payload,
      };
    case GET_LOCATION:
      return {
        ...state,
        localWeather: action.payload,
      };
    default:
      return state;
  }
};
