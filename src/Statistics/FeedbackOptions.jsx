import styles from './Statistic.module.css';
import propTypes from 'prop-types';

const FeedbackOptions = ({ reviews, onAddRate }) => (
  <ul className={styles.buttonUl}>
    {reviews.map(button => (
      <li key={button} className={styles.list}>
        <button name={button} className={styles.button__bad} onClick={() => onAddRate(button)}>
          {button}
        </button>
      </li>
    ))}
  </ul>
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onAddRate: propTypes.func.isRequired,
};
