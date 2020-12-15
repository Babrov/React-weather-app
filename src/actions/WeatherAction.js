import axios from 'axios';
export const GET_CITY = 'FETCH_CITY';
export const GET_LOCATION = 'FETCH_LOCATION';
export const API_KEY = '05f7911bd80b989d6f1878b5b3f72620';

export const getCityWeather = (cityName) => (dispatch) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    )
    .then((response) =>
      dispatch({
        type: GET_CITY,
        payload: { response },
      })
    );
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
      console.log(localWeather.data);
    });
};
