import {
  wrapper,
  card_cold,
  card_warm,
  city,
  icon,
  time,
  temp,
  descr,
  date,
  moreInfo,
  front_side,
  back_side,
} from '../styles/Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const Card = () => {
  const [flipped, setFlipped] = useState(false);
  const [className, setClass] = useState(front_side);
  const card = useRef();
  const handleClick = () => {
    setFlipped(!flipped);
  };
  return (
    <div className={`${card_cold} ${wrapper}`} ref={card}>
      {!flipped ? (
        <div className={className}>
          <h2 className={city}>Kyiv</h2>
          <p className={icon}>ICON</p>
          <h2 className={temp}>-10°С</h2>
          <p className={descr}>Sunny day</p>
          <h3 className={time}>09:41</h3>
          <p className={date}>Fri 09 Jan</p>
          <label className={moreInfo}>
            5 days forecast
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </label>
        </div>
      ) : (
        <div className={flipped ? setClass(back_side) : ''}>
          <h2>THIS IS BACK OF CARD</h2>
          <label className={moreInfo}>
            Back
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </label>
        </div>
      )}
    </div>
  );
};

export default Card;
