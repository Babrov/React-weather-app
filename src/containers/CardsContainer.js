import styles from '../styles/CardsContainer.module.scss';
import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const CardsContainer = () => {
  return (
    <div className={styles.wrapper}>
      <form>
        <label className={styles.input}>
          City:
          <input type="text" />
        </label>
        <button className={styles.getButton}>Get Weather</button>
      </form>

      <button className={styles.location}>
        Current location
        <FontAwesomeIcon className={styles.icon} icon={faLocationArrow} />
      </button>
      <div className={styles.cards_holder}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default CardsContainer;
