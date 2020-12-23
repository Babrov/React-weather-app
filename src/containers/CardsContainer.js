import React, { useEffect } from 'react';
import styles from '../styles/CardsContainer.module.scss';
import Card from '../components/Card';
import { connect } from 'react-redux';
import {
  getCityWeather,
  getCoordsWeather,
  addCard,
  removeCard,
} from '../actions/WeatherAction';
import AddWeather from '../components/AddWeather';

const CardsContainer = (props) => {
  const {
    getCoordsWeather,
    getCityWeather,
    weatherArray,
    addCard,
    removeCard,
  } = props;

  useEffect(() => {
    if (weatherArray.length > 0) {
      addCard();
    }
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coordinates = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      getCoordsWeather(coordinates.lat, coordinates.lng);
    });
  };

  const OnSubmit = () => {
    getCityWeather(document.getElementById('cityName').value);
  };
  return (
    <div className={styles.wrapper}>
      <AddWeather getLocation={getLocation} onSubmit={OnSubmit} />
      <div className={styles.cards_holder}>
        {weatherArray.map((dataObj, index) => {
          return (
            <Card
              key={dataObj.id}
              info={dataObj}
              onRemove={() => removeCard(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  weatherArray: state.weather.weatherArray,
});

export default connect(mapStateToProps, {
  getCityWeather,
  getCoordsWeather,
  addCard,
  removeCard,
})(CardsContainer);
