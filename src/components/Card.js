import {
  card,
  inner,
  card_cold,
  card_warm,
  city,
  icon,
  time,
  temp,
  descr,
  date,
  moreInfo,
  side,
  front_side,
  back_side,
  isFlipped,
  fiveDays,
  navButtons,
  backButton,
} from '../styles/Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };
  return (
    <div className={` ${card}`}>
      <div className={`${card_cold} ${inner}  ${flipped ? isFlipped : ''}  `}>
        <div className={` ${side} ${front_side}`}>
          <h2 className={city}>Kyiv</h2>
          <p className={icon}>ICON</p>
          <h2 className={temp}>-10°С</h2>
          <p className={descr}>Sunny day</p>
          <h3 className={time}>09:41</h3>
          <p className={date}>Fri 09 Jan</p>
          <label className={`${navButtons} ${moreInfo}`}>
            5 days forecast
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </label>
        </div>
        <div className={`${side} ${back_side}`}>
          <h2 className={city}>Kyiv</h2>
          <div className={fiveDays}>
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
          <label className={`${navButtons} ${backButton}`}>
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
