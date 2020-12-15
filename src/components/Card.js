import style from '../styles/Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Card = ({ localWeather }) => {
  const [flipped, setFlipped] = useState(false);
  const { name, main, weather } = localWeather;
  let icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const handleClick = () => {
    setFlipped(!flipped);
  };
  return (
    <div className={` ${style.card}`}>
      <div className={` ${style.inner}  ${flipped ? style.isFlipped : ''}  `}>
        <div
          className={`${main.temp <= 15 ? style.card_cold : style.card_warm} ${
            style.side
          } ${style.front_side}`}
        >
          <span className={style.close}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <h2 className={style.city}>{name}</h2>
          <img className={style.icon} src={icon} alt="weather icon" />
          <h2 className={style.temp}>{`${Math.round(main.temp)} °С`}</h2>
          <p className={style.descr}>
            {weather[0].description.charAt(0).toUpperCase() +
              weather[0].description.slice(1)}
          </p>
          <h3 className={style.time}>09:41</h3>
          <p className={style.date}>Fri 09 Jan</p>
          <label className={`${style.navButtons} ${style.moreInfo}`}>
            5 days forecast
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
          <span className={style.close}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <h2 className={style.city}>{name}</h2>
          <div className={style.fiveDays}>
            <h3>
              Saturday <span>-10°С</span>
            </h3>
            <h3>
              sunday<span>-10°С</span>
            </h3>
            <h3>
              Monday<span>-10°С</span>
            </h3>
            <h3>
              Thursday<span>-10°С</span>
            </h3>
            <h3>
              Saturday<span>-10°С</span>
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
