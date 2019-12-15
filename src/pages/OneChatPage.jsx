import React from 'react';
import PropTypes from 'prop-types';

import { Hat } from '../components/Hat';
import { MessageContainer } from '../containers/MessageContainer';
import { BackButton } from '../buttons/BackButton';
import { SearchButton } from '../buttons/SearchButton';
import { FormInput } from '../components/FormInput';
import { OptionsButton } from '../buttons/OptionsButton';

import styles from '../styles/app.module.scss';
import AvatarIcon from '../img/avatar.jpeg';

export const OneChatPage = ({ messages, addMessage, comeBackToChats, chatIndex, interlocutor }) => {
  return (
    <div className={styles.mainContainer}>
      <Hat
        leftComponent={() => <BackButton comeBackToChats={comeBackToChats} />}
        centerComponent={() => (
          <div className={styles.centerBlock}>
            <img className={styles.avatar} src={AvatarIcon} alt='avatar'/>
            <div className={styles.nameAndMess}>
              <div>{interlocutor}</div>
              <div className={styles.last}>был 5 часов назад</div>
            </div>
          </div>
        )}
        rightComponent={() => {
          return (
            <div>
              <SearchButton />
              <OptionsButton />
            </div>
          );
        }}
      />
      <MessageContainer messages={messages} />
      <FormInput chatIndex={chatIndex} addMessage={addMessage} />
    </div>
  );
};

OneChatPage.defaultProps = {
  messages: [],
  addMessage: () => {},
  comeBackToChats: () => {},
  chatIndex: 0,
  interlocutor: '',
};

OneChatPage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  addMessage: PropTypes.func,
  comeBackToChats: PropTypes.func,
  chatIndex: PropTypes.number,
  interlocutor: PropTypes.string,
};
