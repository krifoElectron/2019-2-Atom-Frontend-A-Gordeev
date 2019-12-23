import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Hat } from '../../components/Hat/Hat';
import { MessageContainer } from '../../containers/MessageContainer/MessageContainer';
import { BackButton } from '../../buttons/BackButton/BackButton';
import { SearchButton } from '../../buttons/SearchButton/SearchButton';
import { FormInput } from '../../components/FormInput/FormInput';
import { OptionsButton } from '../../buttons/OptionsButton/OptionsButton';
import { usePolling } from '../../utils/usePolling';

import styles from '../../components/App/app.module.scss';
import AvatarIcon from '../../img/avatar.jpeg';

export const OneChatPage = ({ addMessage, match, userId }) => {
  const [voices, setVoices] = useState([]);
  // const inputEl = useRef(null);
  // const [messagesInfo, setMessagesInfo] = useState({});
  const inputEl = useRef(null);
  const oldMessages = useRef([]);
  const [messagesInfo, setMessagesInfo] = useState({});
  const [startPolling, stopPolling] = usePolling({
    url: `/chats/chat_page/?chat_id=${match.params.chatId}&user_id=${userId}`,
    callback: (data) => {
      if (!_.isEqual(oldMessages.current, data)) {
        setMessagesInfo(data);

        oldMessages.current = data;
        inputEl.current.scrollIntoView(false);
      }
    },
  });
  // const [startPolling, stopPolling] = usePolling({
  //   url: `/chats/chat_page/?chat_id=${match.params.chatId}&user_id=${userId}`,
  //   callback: (data) => {
  //     // if (!_.isEqual(messagesInfo, data)) {
  //     let oldData;
  //     setMessagesInfo((old) => {
  //       oldData = old;
  //       return data;
  //     });
  //     if (!_.isEqual(oldData, data)) {
  //       inputEl.current.scrollIntoView(false);
  //     }
  //     // }
  //   },
  // });

  useEffect(() => {
    startPolling();

    return stopPolling;
  }, []);

  const { messages, interlocutor } = messagesInfo;

  return (
    <div className={styles.mainContainer}>
      <Hat
        leftComponent={() => <BackButton />}
        centerComponent={() => (
          <div className={styles.centerBlock}>
            <img className={styles.avatar} src={AvatarIcon} alt="avatar" />
            <div className={styles.nameAndMess}>
              <div>{interlocutor}</div>
              <div className={styles.last}>был 5 часов назад</div>
            </div>
          </div>
        )}
        rightComponent={() => {
          return (
            <div className={styles.rightBlock}>
              <SearchButton />
              <OptionsButton />
            </div>
          );
        }}
      />
      <MessageContainer messages={messages} voices={voices} />
      <FormInput
        forwardRef={inputEl}
        addMessage={addMessage}
        chatId={match.params.chatId}
        userId={userId}
        onSend={startPolling}
        addVoice={(newVoice) => {
          setVoices([...voices, newVoice]);
        }}
      />
    </div>
  );
};

OneChatPage.defaultProps = {
  addMessage: () => {},
  match: { params: { chatId: 123 } },
};

OneChatPage.propTypes = {
  addMessage: PropTypes.func,
  match: PropTypes.checkPropTypes(),
};
