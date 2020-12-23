import { ADD_CARD, GET_CITY, GET_LOCATION } from '../actions/WeatherAction';

const initialState = {
  cityWeather: [],
  localWeather: [],
  cardDataArray: [],
};

export const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        cityWeather: [action.payload, ...state.cityWeather],
      };
    case GET_LOCATION:
      return {
        ...state,
        localWeather: [action.payload],
      };
    case ADD_CARD:
      return {
        ...state,
        cardDataArray: [...state.cityWeather, ...state.localWeather],
      };
    default:
      return state;
  }
};
