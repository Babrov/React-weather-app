import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "../styles/CardsContainer.module.scss";
import Card from "../components/Card";
import AddWeather from "../components/AddWeather";
import {
  getCoordsWeather,
  getCityWeather,
  removeCard,
  addCard,
} from "../actions/WeatherAction";

const CardsContainer = (props) => {
  const {
    getCoordsWeather,
    getCityWeather,
    weatherArray,
    removeCard,
    addCard,
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
    getCityWeather(document.getElementById("cityName").value);
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
  getCoordsWeather,
  getCityWeather,
  removeCard,
  addCard,
})(CardsContainer);
