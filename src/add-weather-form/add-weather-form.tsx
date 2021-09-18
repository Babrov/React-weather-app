import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { getLocationAction, getWeatherAction } from "../card-list";

import css from "./add-weather-form.module.scss";

const validateCity = (value: string) => !value && "Required";

export const AddWeatherForm = () => {
  const dispatch = useDispatch();

  const handleGetLocation = () => void dispatch(getLocationAction());
  const handleSubmitForm = (city: string) => void dispatch(getWeatherAction(city));

  return (
    <div className={css.root}>
      <Formik
        initialValues={{
          city: ""
        }}
        onSubmit={values => handleSubmitForm(values.city)}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="city" validate={validateCity} />
            {errors.city && touched.city && <div>{errors.city}</div>}
            <button type="submit">Get Weather</button>
          </Form>
        )}
      </Formik>

      <button className={css.location} onClick={handleGetLocation}>
        Current location
        <FontAwesomeIcon className={css.icon} icon={faLocationArrow} />
      </button>
    </div>
  );
};