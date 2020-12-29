import style from "../styles/Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faArrowRight,
  faArrowLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ info, onRemove }) => {
  const [flipped, setFlipped] = useState(false);

  const { name, main, weather, dt, wind, sys } = info;

  const date = new Date(dt * 1000);
  const dateWeek = date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const takeTimeFromDate = (date) => {
    let time = date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  };
  let icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`${style.card}`}>
      <div className={`${style.inner} ${flipped ? style.isFlipped : ""}`}>
        <div
          className={`${main.temp <= 15 ? style.card_cold : style.card_warm} 
          ${style.side} 
          ${style.front_side}`}
        >
          <span className={style.close} onClick={onRemove}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <h2 className={style.city}>{name}</h2>
          <img className={style.icon} src={icon} alt="weather icon" />
          <h2 className={style.temp}>{`${Math.round(main.temp)} °С`}</h2>
          <p className={style.descr}>
            {weather[0].description.charAt(0).toUpperCase() +
              weather[0].description.slice(1)}
          </p>
          <h3 className={style.time}>{takeTimeFromDate(date)}</h3>
          <p className={style.date}>{dateWeek}</p>
          <label className={`${style.navButtons} ${style.moreInfo}`}>
            More Info
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </label>
        </div>
        <div
          className={`${main.temp <= 15 ? style.card_cold : style.card_warm} ${
            style.side
          } ${style.back_side}`}
        >
          <span className={style.close} onClick={onRemove}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <h2 className={style.city}>{name}</h2>
          <div className={style.moreData}>
            <h3>
              Feels :<span>{`${Math.round(main.feels_like)} °С`}</span>
            </h3>
            <h3>
              Pressure :<span>{`${main.pressure} hPa`}</span>
            </h3>
            <h3>
              Wind :<span>{`${wind.speed} m/s`}</span>
            </h3>
            <h3>
              Sunrise :
              <span>{`${takeTimeFromDate(new Date(sys.sunrise * 1000))}`}</span>
            </h3>
            <h3>
              Sunset :
              <span>{`${takeTimeFromDate(new Date(sys.sunset * 1000))}`}</span>
            </h3>
          </div>
          <label className={`${style.navButtons} ${style.backButton}`}>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            Back
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
