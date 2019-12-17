import React from 'react';
import PropTypes from 'prop-types';

import { ReadMessageIcon } from '../ReadMessageIcon/ReadMessageIcon';

import styles from './messageElement.module.scss';

export function MessageElement({ date, text }) {
  return (
    <div className={[styles.messageElement, styles.animation].join(' ')}>
      <div className={styles.messText}>{text}</div>
      <div className={styles.bottomBlock}>
        <div className={styles.messDate}>{date}</div>
        <ReadMessageIcon />
      </div>
    </div>
  );
}

MessageElement.defaultProps = {
  date: 'XX:XX',
  text: 'null',
};

MessageElement.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string,
};
