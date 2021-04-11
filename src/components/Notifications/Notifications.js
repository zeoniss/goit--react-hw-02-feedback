import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notifications.module.css';

const Notification = ({ message }) => {
  return <p className={styles.text}>{message}</p>;
};

export default Notification;

Notification.defaultProps = {
  message: 'No feedbacks yet',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
