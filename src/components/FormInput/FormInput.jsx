import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { AttachButton } from '../../buttons/AttachButton/AttachButton';
import { CloseButton } from './../../buttons/CloseButton/CloseButton';

import styles from './formInput.module.scss';

export function FormInput({ chatId, userId, onSend, forwardRef }) {
  const [inputText, setInputText] = useState('');
  const [geolocation, setGeolocation] = useState({ latitude: null, longitude: null });

  const sendMessage = async (text, attachment) => {
    console.log(userId);
    console.log(geolocation);
    await fetch('/chats/send_message/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: userId, chat_id: chatId, text, attachment }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <form
        className={styles.formInput}
        onSubmit={(e) => {
          e.preventDefault();
          if (inputText !== '') {
            const attachment = { type: 'geolocation', ...geolocation };
            sendMessage(inputText, attachment);
            onSend();
            // sendMessageToLocalStorage(inputText, chatIndex);
            // addMessage(inputText);
            setInputText('');
            setGeolocation({ latitude: null, longitude: null });
          }
        }}
      >
        <input
          ref={forwardRef}
          type="text"
          value={inputText}
          onChange={(event) => {
            const { target } = event;
            target.scrollIntoView(false);
            setInputText(target.value);
          }}
          placeholder="Введите сообщеине"
          className={styles.input}
        />
        <AttachButton setGeolocation={(latitude, longitude) => setGeolocation({ latitude, longitude })} />
      </form>
      {geolocation.longitude && (
        <div className={styles.attachContainer}>
          <div className={styles.closeButton}>
            <CloseButton onClick={() => setGeolocation({ latitude: null, longitude: null })} />
          </div>
          <YMaps>
            <div>
              <Map defaultState={{ center: [geolocation.latitude, geolocation.longitude], zoom: 13 }}>
                <Placemark geometry={[geolocation.latitude, geolocation.longitude]} />
              </Map>
              {/* <Placemark geometry={[latitude, longitude]} /> */}
            </div>
          </YMaps>
        </div>
      )}
    </>
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
  onSend: PropTypes.func,
};
