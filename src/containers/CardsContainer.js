import React, { useEffect } from 'react';
import styles from '../styles/CardsContainer.module.scss';
import Card from '../components/Card';
import { connect } from 'react-redux';
import {
  getCityWeather,
  getCoordsWeather,
  addCard,
} from '../actions/WeatherAction';
import AddWeather from '../components/AddWeather';

const CardsContainer = (props) => {
  const {
    getCoordsWeather,
    getCityWeather,
    cardDataArray,
    localWeather,
    cityWeather,
    addCard,
  } = props;
  useEffect(() => {
    if (localWeather.length > 0) {
      addCard(localWeather);
    }
  }, [localWeather]);
  useEffect(() => {
    if (cityWeather.length > 0) {
      addCard(cityWeather);
    }
  }, [cityWeather]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coordinates = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      getCoordsWeather(coordinates.lat, coordinates.lng);
    });
  };
  let filtered = cardDataArray.filter((a) => !cardDataArray.includes(a.id));
  const OnSubmit = () => {
    const name = document.getElementById('cityName');
    getCityWeather(name.value);
  };
  return (
    <div className={styles.wrapper}>
      <AddWeather getLocation={getLocation} onSubmit={OnSubmit} />
      <div className={styles.cards_holder}>
        {filtered.map((dataObj) => {
          return <Card key={dataObj.id} info={dataObj} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  localWeather: state.weather.localWeather,
  cityWeather: state.weather.cityWeather,
  cardDataArray: state.weather.cardDataArray,
});

export default connect(mapStateToProps, {
  getCityWeather,
  getCoordsWeather,
  addCard,
})(CardsContainer);
