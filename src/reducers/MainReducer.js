import { WeatherReducer } from './WeatherReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const MainReducer = combineReducers({
  weather: WeatherReducer,
  form: formReducer,
});
export default MainReducer;
