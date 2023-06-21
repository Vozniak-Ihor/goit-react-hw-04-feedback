import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css'

const Notification = ({ message }) => {
  return <h4 className={css.notification}>{message}</h4>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
