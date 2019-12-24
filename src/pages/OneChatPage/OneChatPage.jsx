import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Hat } from '../../components/Hat/Hat';
import { MessageContainer } from '../../containers/MessageContainer/MessageContainer';
import { BackButton } from '../../buttons/BackButton/BackButton';
import { SearchButton } from '../../buttons/SearchButton/SearchButton';
import { FormInput } from '../../components/FormInput/FormInput';
import { OptionsButton } from '../../buttons/OptionsButton/OptionsButton';

import styles from '../../components/App/app.module.scss';
import AvatarIcon from '../../img/avatar.jpeg';

export const OneChatPage = ({ addMessage, match }) => {
  const [voices, setVoices] = useState([]);
  const inputEl = useRef(null);
  const [messagesInfo, setMessagesInfo] = useState({});

  const update = () => {
    const messages = JSON.parse(localStorage.getItem(`messageOfChat${match.params.chatId}`));
    setMessagesInfo(messages);
  };

  useEffect(() => {
    const messages = JSON.parse(localStorage.getItem(`messageOfChat${match.params.chatId}`));
    setMessagesInfo(messages);
  }, [match.params.chatId]);

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
        updateMessages={update}
        forwardRef={inputEl}
        chatId={match.params.chatId}
        userId={1}
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
