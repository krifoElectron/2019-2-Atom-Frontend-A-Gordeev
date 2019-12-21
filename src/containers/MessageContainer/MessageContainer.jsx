import React from 'react';
import PropTypes from 'prop-types';

import { MessageElement } from '../../components/MessageElement/MessageElement';
import { convertDateToTime } from '../../utils/date/convertDateToTime';

import styles from './messageContainer.module.scss';

export function MessageContainer({ messages }) {
  return (
    <div className={styles.container}>
      {messages.map(({ text, addedAt, toMe, latitude, longitude }) => {
        return (
          <MessageElement
            text={text}
            date={convertDateToTime(addedAt)}
            toMe={toMe}
            key={addedAt}
            latitude={latitude}
            longitude={longitude}
          />
        );
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
