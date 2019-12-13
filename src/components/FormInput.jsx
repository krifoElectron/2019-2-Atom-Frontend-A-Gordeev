import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AttachButton } from '../buttons/AttachButton';

import styles from '../styles/formInput.module.scss';

export function FormInput({ chatIndex, addMessage }) {
  const [inputText, setInputText] = useState('');

  return (
    <form
      className={styles.formInput}
      onSubmit={(e) => {
        e.preventDefault();
        if (inputText !== '') {
          sendMessageToLocalStorage(inputText, chatIndex);
          addMessage(inputText);
          setInputText('');
        }
      }}
    >
      <input
        type="text"
        value={inputText}
        onChange={(event) => {
          const { target } = event;
          setInputText(target.value);
        }}
        placeholder="Введите сообщеине"
        className={styles.input}
      />
      <AttachButton />
    </form>
  );
}

const sendMessageToLocalStorage = (message, chatIndex) => {
  const messengerState = JSON.parse(localStorage.getItem('messengerState'));
  const date = new Date();

  messengerState.chats[chatIndex].messages.push({
    direction: 'fromMe',
    text: message,
    date,
    isRead: true,
  });

  localStorage.setItem('messengerState', JSON.stringify(messengerState));
};

FormInput.defaultProps = {
  chatIndex: 0,
  addMessage: () => {},
};

FormInput.propTypes = {
  chatIndex: PropTypes.number,
  addMessage: PropTypes.func,
};
