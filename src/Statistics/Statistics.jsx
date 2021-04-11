import styles from './Statistic.module.css';
import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.listContainer}>
    <h2 className={styles.miniheader}>Statistics</h2>
    <ul>
      <li className={styles.statisticList}>
        <p className={styles.description}>Good: {good}</p>
      </li>
      <li className={styles.statisticList}>
        <p className={styles.description}>Neutral: {neutral}</p>
      </li>
      <li className={styles.statisticList}>
        <p className={styles.description}>Bad: {bad}</p>
      </li>

      <li className={styles.total}>
        <p className={styles.description}>Total: {total}</p>
      </li>

      <li className={styles.statisticList}>
        <p className={styles.positive}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.func.isRequired,
};

export default Statistics;
