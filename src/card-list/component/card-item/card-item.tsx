import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";

import { WeatherResponseModel } from "../../../models";
import { getFormattedInfo } from "../../card-list.util";

import css from "./card.module.scss";

interface Props {
  weatherInfo: WeatherResponseModel;
  onRemove: () => void;
}

export const CardItem = ({ weatherInfo, onRemove }: Props) => {
  const [isFlipped, setFlipped] = useState(false);
  const { name, main, wind } = weatherInfo;
  const {
    timeFromDate,
    dateWeek,
    sunrise,
    sunset,
    icon,
    mainTemp,
    feelsLikeTemp,
    weatherDescription
  } = getFormattedInfo(weatherInfo);

  const handleRemove = () => onRemove();
  const handleFlip = () => setFlipped(prevState => !prevState);

  const cardBackground = main.temp <= 15 ? css.card_cold : css.card_warm;

  return (
    <div className={css.card}>
      <div className={classNames(css.inner, isFlipped && css.isFlipped)}>
        <div
          className={classNames(css.side, css.front_side, cardBackground)}
        >
          <span className={css.close} onClick={handleRemove}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <h2 className={css.city}>{name}</h2>
          <img className={css.icon} src={icon} alt="weather icon" />
          <h2 className={css.temp}>{mainTemp} °С</h2>
          <p className={css.descr}>
            {weatherDescription}
          </p>
          <h3 className={css.time}>{timeFromDate}</h3>
          <p className={css.date}>{dateWeek}</p>
          <label className={classNames(css.navButtons, css.moreInfo)}>
            More Info
            <button onClick={handleFlip}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </label>
        </div>
        <div
          className={classNames(css.side, css.back_side, cardBackground)}
        >
          <span className={css.close} onClick={onRemove}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <h2 className={css.city}>{name}</h2>
          <div className={css.moreData}>
            <h3>
              Feels :<span>{feelsLikeTemp} °С</span>
            </h3>
            <h3>
              Pressure :<span>{main.pressure} hPa</span>
            </h3>
            <h3>
              Wind :<span>{wind.speed} m/s</span>
            </h3>
            <h3>
              Sunrise :
              <span>{sunrise}</span>
            </h3>
            <h3>
              Sunset :
              <span>{sunset}</span>
            </h3>
          </div>
          <label className={classNames(css.navButtons, css.backButton)}>
            <button onClick={handleFlip}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            Back
          </label>
        </div>
      </div>
    </div>
  );
};
