import React from 'react';
import PropTypes from 'prop-types';

import { Hat } from '../../components/Hat/Hat';
import { MessageContainer } from '../../containers/MessageContainer/MessageContainer';
import { BackButton } from '../../buttons/BackButton/BackButton';
import { SearchButton } from '../../buttons/SearchButton/SearchButton';
import { FormInput } from '../../components/FormInput/FormInput';
import { OptionsButton } from '../../buttons/OptionsButton/OptionsButton';

import styles from '../../components/App/app.module.scss';
import AvatarIcon from '../../img/avatar.jpeg';
import {getIndexByChathId} from '../../utils/chats/indexById';

export const OneChatPage = ({ addMessage, chats, match }) => {
	const chatIndex = getIndexByChathId(+match.params.chatId, chats);
	const { messages, interlocutor } = chats[chatIndex];
	console.log({chatIndex});

  return (
    <div className={styles.mainContainer}>
      <Hat
        leftComponent={() => <BackButton />}
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
  interlocutor: '',
	match: {params: {chatId: 123}}
};

OneChatPage.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  addMessage: PropTypes.func,
  comeBackToChats: PropTypes.func,
  interlocutor: PropTypes.string,
	match: PropTypes.checkPropTypes()
};
