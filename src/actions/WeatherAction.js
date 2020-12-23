import axios from 'axios';
import {
  ADD_CARD,
  GET_CITY,
  GET_LOCATION,
  API_KEY,
  REMOVE_CARD,
} from '../actions/constants';

export const getCityWeather = (cityName) => (dispatch) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    )
    .then((response) => {
      dispatch({
        type: GET_CITY,
        payload: response.data,
      });
    })
    .catch(() => {
      alert('Please write correct city');
    });
};

export const getCoordsWeather = (lat, lon) => (dispatch) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then((localWeather) => {
      dispatch({
        type: GET_LOCATION,
        payload: localWeather.data,
      });
    });
};

export const addCard = () => (dispatch) => {
  dispatch({
    type: ADD_CARD,
  });
};

export const removeCard = (index) => (dispatch) => {
  dispatch({
    type: REMOVE_CARD,
    payload: index,
  });
};
