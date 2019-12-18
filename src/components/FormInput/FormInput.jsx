import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AttachButton } from '../../buttons/AttachButton/AttachButton';

import styles from './formInput.module.scss';

export function FormInput({ chatId, userId, onSend }) {
  const [inputText, setInputText] = useState('');

  const sendMessage = async (text) => {
    console.log(userId);
    await fetch(`http://localhost:3000/chats/send_message/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: userId, chat_id: chatId, text})
    })
    .then((res) => res.json())
		.then((data) => {
        console.log(data);
      });
  };

  return (
    <form
      className={styles.formInput}
      onSubmit={(e) => {
        e.preventDefault();
        if (inputText !== '') {
          sendMessage(inputText);
          onSend()
          // sendMessageToLocalStorage(inputText, chatIndex);
          // addMessage(inputText);
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

// const sendMessageToLocalStorage = (message, chatIndex) => {
//   const messengerState = JSON.parse(localStorage.getItem('messengerState'));
//   const date = new Date();

//   messengerState.chats[chatIndex].messages.push({
//     direction: 'fromMe',
//     text: message,
//     date,
//     isRead: true,
//   });

//   localStorage.setItem('messengerState', JSON.stringify(messengerState));
// };

FormInput.defaultProps = {
  chatId: '',
  // addMessage: () => {},
  onSend: () => {},
};

FormInput.propTypes = {
  chatId: PropTypes.string,
  // addMessage: PropTypes.func,
  onSend: PropTypes.func
};
