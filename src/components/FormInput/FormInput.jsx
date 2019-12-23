import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { YMaps, Map, Placemark } from 'react-yandex-maps';
// import DropZone from 'react-dropzone';
import { useDropzone } from 'react-dropzone';

import { AttachButton } from '../../buttons/AttachButton/AttachButton';
import { MicrophoneButton } from '../../buttons/MicrophoneButton/MicrophoneButton';
import { CloseButton } from '../../buttons/CloseButton/CloseButton';

import styles from './formInput.module.scss';

let mediaRecorder;
let stream = null;
async function z() {
  try {
    const contrains = { audio: true, video: false };
    stream = await navigator.mediaDevices.getUserMedia(contrains);
  } catch (err) {
    console.log(err);
  }
  console.log('okkkkkk');
  mediaRecorder = new MediaRecorder(stream);
}

export function FormInput({ chatId, userId, onSend, forwardRef, addVoice }) {
  const [inputText, setInputText] = useState('');
  const [geolocation, setGeolocation] = useState({ latitude: null, longitude: null });
  const [image, setImage] = useState({ visible: false, url: '' });
  const [visibleImg, setVisibleImg] = useState(false);
  // const [audio, setAudio] = useState({ visible: false, url: '' });
  const [recording, setRecording] = useState(false);
  // const [mediaRecorder, setMediaRecorder] = useState(z());

  const sendMessage = async (text, attachment) => {
    // console.log(userId);
    // console.log(geolocation);
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
        // console.log(data);
      });
  };

  const sendImage = (file) => {
    const data = new FormData();

    data.append('image', file);

    fetch('https://tt-front.now.sh/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result, 'load fillelelel');
      })
      .catch((e) => console.log(e));
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => {
        console.log('file reading was aborted');
        setVisibleImg(false);
      };
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setVisibleImg(true);
        console.log(reader);
        console.log(binaryStr);
        sendImage(file);
      };
      console.log(file);
      const src = window.URL.createObjectURL(file);
      setImage({ visible: true, url: src });
      console.log(src);
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  async function startRecording() {
    const chunks = [];
    console.log(mediaRecorder);
    mediaRecorder.addEventListener('stop', (event) => {
      const blob = new Blob(chunks, { type: mediaRecorder.mimeType });

      const audioURL = URL.createObjectURL(blob);
      addVoice({ url: audioURL });
      // setAudio({ visible: true, url: audioURL });
      console.log('stopppppped', audioURL);
    });

    mediaRecorder.addEventListener('dataavailable', (event) => {
      chunks.push(event.data);
    });

    console.log('staaarttt');
    setRecording(true);
    mediaRecorder.start();
    // setTimeout(() => mediaRecorder.stop(), 3500);
  }

  async function onClickMicro() {
    if (recording) {
      mediaRecorder.stop();
      setRecording(false);
    } else {
      await z();
      startRecording();
      setRecording(true);
    }

    setRecording(!recording);
  }

  return (
    <>
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
      {image.visible && (
        <div>
          <CloseButton onClick={() => setImage({ visible: false, url: '' })} />
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {visibleImg ? (
              <img className={styles.attachImg} src={image.url} alt="img" />
            ) : (
              <p className={styles.photoText}>Drag n drop some files here, or click to select files</p>
            )}
          </div>
          {/* <input type="file" id="input1" /> */}
        </div>
      )}

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
            setImage({ visible: false, url: '' });
            setGeolocation({ latitude: null, longitude: null });
            // setAudio({ visible: false, url: '' });
            setRecording({ working: false, mediaRecorder: null });
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
            // setAudio({ visible: false, url: '' });
          }}
          placeholder="Введите сообщеине"
          className={styles.input}
        />
        <AttachButton
          setGeolocation={(latitude, longitude) => setGeolocation({ latitude, longitude })}
          setImage={() => setImage({ visible: true, url: '' })}
        />
        <MicrophoneButton onClick={onClickMicro} />
      </form>
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
