import React from 'react';
import PropTypes from 'prop-types';

import { MessageElement } from '../../components/MessageElement/MessageElement';
import { convertDateToTime } from '../../utils/date/convertDateToTime';

import styles from './messageContainer.module.scss';

export function MessageContainer({ messages, voices }) {
  return (
    <div className={styles.container}>
      {messages.map(({ text, addedAt, toMe, latitude, longitude, attachType, url }) => {
        return (
          <MessageElement
            text={text}
            date={convertDateToTime(addedAt)}
            toMe={toMe}
            key={addedAt}
            latitude={latitude}
            longitude={longitude}
            attachType={attachType}
            url={url}
          />
        );
      })}
    </div>
  );
}

MessageContainer.defaultProps = {
  messages: [],
  voices: [],
};

MessageContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.array),
  voices: PropTypes.arrayOf(PropTypes.object),
};
