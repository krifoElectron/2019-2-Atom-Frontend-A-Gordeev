import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getIndexByChathId } from '../utils/chats/indexById';

import { ChatsPage } from '../pages/ChatsPage';
import { OneChatPage } from '../pages/OneChatPage';

import styles from '../styles/app.module.scss';

export function App({ initialState }) {
  const [messengerState, setMessengerState] = useState(initialState);
  const [pageState, setPageState] = useState({ isChatsPage: true, chatId: null });

  return (
    <div className={styles.mainContainer}>
      {pageState.isChatsPage ? (
        <ChatsPage
          chatInfo={messengerState.chats}
          onClick={(chatId) => {
            console.log(chatId);
            setPageState({ isChatsPage: false, chatId });
          }}
        />
      ) : (
        <OneChatPage
          interlocutor={messengerState.chats[getIndexByChathId(pageState.chatId, messengerState.chats)].interlocutor}
          chatIndex={getIndexByChathId(pageState.chatId, messengerState.chats)}
          messages={messengerState.chats[getIndexByChathId(pageState.chatId, messengerState.chats)].messages}
          addMessage={() => {
            const newState = JSON.parse(localStorage.getItem('messengerState'));
            setMessengerState(newState);
          }}
          comeBackToChats={() => {
            setPageState({ isChatsPage: true, chatId: 0 });
          }}
        />
      )}
    </div>
  );
}

App.defaultProps = {
  initialState: {},
};

App.propTypes = {
  initialState: PropTypes.objectOf(PropTypes.object),
};
