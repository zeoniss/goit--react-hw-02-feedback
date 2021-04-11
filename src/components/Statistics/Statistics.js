import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Good: <span className={styles.quantity}>{good}</span>
      </li>
      <li className={styles.listItem}>
        Neutral: <span className={styles.quantity}>{neutral}</span>
      </li>
      <li className={styles.listItem}>
        Bad: <span className={styles.quantity}>{bad}</span>
      </li>
      <li className={styles.listItem}>
        Total: <span className={styles.quantity}>{total}</span>
      </li>
      <li className={styles.listItem}>
        Positive feedback: <span className={styles.quantity}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
