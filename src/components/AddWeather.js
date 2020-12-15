import styles from '../styles/CardsContainer.module.scss';
import { Field, reduxForm } from 'redux-form';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let AddWeather = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label className={styles.input}>
          City:
          <Field name={'city'} component={'input'} />
        </label>
        <button className={styles.getButton}>Get Weather</button>
      </form>

      <button className={styles.location} onClick={props.getLocation}>
        Current location
        <FontAwesomeIcon className={styles.icon} icon={faLocationArrow} />
      </button>
    </div>
  );
};

export default AddWeather = reduxForm({ form: 'AddWeather' })(AddWeather);
