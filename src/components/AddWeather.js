import styles from "../styles/CardsContainer.module.scss";
import { Field, reduxForm } from "redux-form";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

let AddWeather = ({ getLocation, handleSubmit }) => {
  return (
    <div className={styles.form}>
      <form name="city" onSubmit={handleSubmit}>
        <label className={styles.input}>
          City:
          <Field name={"city"} component={"input"} id="cityName" />
        </label>
        <button
          className={styles.getButton}
          onSubmit={() => (document.getElementById("cityName").value = "")}
        >
          Get Weather
        </button>
      </form>
      <button className={styles.location} onClick={getLocation}>
        Current location
        <FontAwesomeIcon className={styles.icon} icon={faLocationArrow} />
      </button>
    </div>
  );
};
AddWeather.propTypes = {
  getLocation: PropTypes.func,
  handleSubmit: PropTypes.func,
};
export default AddWeather = reduxForm({ form: "AddWeather" })(AddWeather);
