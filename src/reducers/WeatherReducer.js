import {
  ADD_CARD,
  GET_CITY,
  GET_LOCATION,
  REMOVE_CARD,
} from "../actions/constants";

const initialState = {
  weatherArray: [],
};
const arrayFromSet = (array) => {
  return Array.from(new Set([...array].map((el) => el.id))).map((id) => {
    return [...array].find((el) => el.id === id);
  });
};
export const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        weatherArray: arrayFromSet([action.payload, ...state.weatherArray]),
      };
    case GET_LOCATION:
      return {
        ...state,
        weatherArray: arrayFromSet([action.payload, ...state.weatherArray]),
      };
    case ADD_CARD:
      return {
        ...state,
        weatherArray: arrayFromSet([...state.weatherArray]),
      };
    case REMOVE_CARD:
      return {
        ...state,
        weatherArray: [...state.weatherArray].filter(
          (item, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
};
