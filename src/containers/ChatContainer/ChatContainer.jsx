import React from 'react';
import PropTypes from 'prop-types';

import { ChatElement } from '../../components/ChatElement/ChatElement';
import { convertDateToTime } from '../../utils/date/convertDateToTime';

import styles from './chatContainer.module.scss';

export function ChatContainer({ chatInfo, onClick }) {
  console.log({ chatInfo });
  return (
    <div className={styles.chatContainer}>
      {chatInfo.map(({ interlocutor, messages, id }) => {
        console.log(interlocutor, messages);
        const { text, date } = messages[0];
        return (
          <ChatElement
						chatId={id}
            name={interlocutor}
            lastMessage={text}
            date={convertDateToTime(date)}
            key={id}
            onClick={() => onClick(id)}
          />
        );
      })}
    </div>
  );
}

ChatContainer.defaultProps = {
  chatInfo: [{}],
  onClick: () => {},
};

ChatContainer.propTypes = {
  chatInfo: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
