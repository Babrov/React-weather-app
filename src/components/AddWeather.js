import styles from '../styles/CardsContainer.module.scss';
import { Field, reduxForm } from 'redux-form';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let AddWeather = (props) => {
  return (
    <div>
      <form name="city" onSubmit={props.handleSubmit}>
        <label className={styles.input}>
          City:
          <Field name={'city'} component={'input'} id="cityName" />
        </label>
        <button
          className={styles.getButton}
          onSubmit={() => (document.getElementById('cityName').value = '')}
        >
          Get Weather
        </button>
      </form>

      <button className={styles.location} onClick={props.getLocation}>
        Current location
        <FontAwesomeIcon className={styles.icon} icon={faLocationArrow} />
      </button>
    </div>
  );
};

export default AddWeather = reduxForm({ form: 'AddWeather' })(AddWeather);
