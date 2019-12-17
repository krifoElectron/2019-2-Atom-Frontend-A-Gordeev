import React from 'react';
import PropTypes from 'prop-types';

import { ChatElement } from '../../components/ChatElement/ChatElement';
import { convertDateToTime } from '../../utils/date/convertDateToTime';

import styles from './chatContainer.module.scss';

export function ChatContainer({ chatInfo }) {
  return (
    <div className={styles.chatContainer}>
      {chatInfo.map(({ name, chatId, lastMessage, date }) => {
        return (
          <ChatElement
            chatId={chatId}
            name={name}
            lastMessage={lastMessage}
            date={convertDateToTime(date)}
            key={chatId}
          />
        );
      })}
    </div>
  );
}

ChatContainer.defaultProps = {
  chatInfo: [{}],
};

ChatContainer.propTypes = {
  chatInfo: PropTypes.arrayOf(PropTypes.object),
};
