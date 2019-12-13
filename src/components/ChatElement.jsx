import React from 'react';
import PropTypes from 'prop-types';

import { UnreadMessageIcon } from './UnreadMessageIcon';

import styles from '../styles/chatElement.module.scss';
import AvatarIcon from '../img/avatar.jpeg';

export function ChatElement({ name, lastMessage, date, onClick }) {
  return (
    <div className={styles.chatElementContainer} onClick={onClick}>
      <div className={styles.leftBlock}>
        <img className={styles.avatar} src={AvatarIcon} alt='avatar'/>
      </div>
      <div className={styles.centerBlock}>
        <div className={styles.name}>{name}</div>
        <div className={styles.message}>{lastMessage}</div>
      </div>
      <div className={styles.rightBlock}>
        {date}
        <UnreadMessageIcon />
      </div>
    </div>
  );
}

ChatElement.defaultProps = {
  name: '',
  lastMessage: '',
  date: '',
  onClick: () => {},
};

ChatElement.propTypes = {
  name: PropTypes.string,
  lastMessage: PropTypes.string,
  date: PropTypes.string,
  onClick: PropTypes.func,
};