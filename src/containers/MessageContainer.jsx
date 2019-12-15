import React from 'react';
import PropTypes from 'prop-types';

import { MessageElement } from '../components/MessageElement';
import { convertDateToTime } from '../utils/date/convertDateToTime';

import styles from '../styles/messageContainer.module.scss';

export function MessageContainer({ messages }) {
  return (
    <div className={styles.container}>
      {messages.map((element) => {
        const { text, date } = element;
        return <MessageElement text={text} date={convertDateToTime(date)} key={date} />;
      })}
    </div>
  );
}

MessageContainer.defaultProps = {
  messages: [],
};

MessageContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.array),
};
