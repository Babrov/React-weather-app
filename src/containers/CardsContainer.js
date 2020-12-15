import styles from '../styles/CardsContainer.module.scss';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { getCityWeather, getCoordsWeather } from '../actions/WeatherAction';
import AddWeather from '../components/AddWeather';

const CardsContainer = (props) => {
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coordinates = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      props.getCoordsWeather(coordinates.lat, coordinates.lng);
    });
  };

  return (
    <div className={styles.wrapper}>
      <AddWeather getLocation={getLocation} />
      <div className={styles.cards_holder}>
        {props.localWeather.length !== 0 ? (
          <Card localWeather={props.localWeather} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  localWeather: state.weather.localWeather,
  cityWeather: state.weather.cityWeather,
});

export default connect(mapStateToProps, { getCityWeather, getCoordsWeather })(
  CardsContainer
);
