import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { YMaps, Map, Placemark } from 'react-yandex-maps';
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
  mediaRecorder = new MediaRecorder(stream);
}

export function FormInput({ chatId, forwardRef, addVoice, updateMessages }) {
  const [inputText, setInputText] = useState('');
  const [attachment, setAttachment] = useState({ attachType: '', url: '', latitude: null, longitude: null });
  const [visibleImg, setVisibleImg] = useState(false);
  const [recording, setRecording] = useState(false);

  const sendMessage = async (text, attach) => {
    const { messages, interlocutor } = JSON.parse(localStorage.getItem(`messageOfChat${chatId}`));
    const newMessage = {
      text,
      addedAt: new Date(),
      toMe: false,
      ...attach,
    };
    localStorage.setItem(
      `messageOfChat${chatId}`,
      JSON.stringify({ messages: [...messages, newMessage], interlocutor }),
    );
    updateMessages();
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
        console.log(result, 'picture uploaded successfully');
      })
      .catch((e) => console.log(e));
  };

  const sendAudio = (file) => {
    const data = new FormData();

    data.append('audio', file);

    fetch('https://tt-front.now.sh/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result, 'audio file uploaded successfully');
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
        setVisibleImg(true);
        sendImage(file);
      };
      const src = window.URL.createObjectURL(file);

      setAttachment({ attachType: 'image', url: src, longitude: '', latitude: '' });
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  async function startRecording() {
    const chunks = [];
    mediaRecorder.addEventListener('stop', (event) => {
      const blob = new Blob(chunks, { type: mediaRecorder.mimeType });

      sendAudio(blob);
      const audioURL = URL.createObjectURL(blob);
      addVoice({ url: audioURL });
      setAttachment({ attachType: 'audio', url: audioURL, latitude: '', longitude: '' });
    });

    mediaRecorder.addEventListener('dataavailable', (event) => {
      chunks.push(event.data);
    });

    setRecording(true);
    mediaRecorder.start();
  }

  async function onClickMicro() {
    if (recording) {
      try {
        mediaRecorder.stop();
      } catch (err) {
        console.log(err);
      }
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
      {attachment.attachType === 'geolocation' && (
        <div className={styles.attachContainer}>
          <div className={styles.closeButton}>
            <CloseButton onClick={() => setAttachment({ type: '', url: '', latitude: null, longitude: null })} />
          </div>
          <YMaps>
            <div>
              <Map defaultState={{ center: [attachment.latitude, attachment.longitude], zoom: 13 }}>
                <Placemark geometry={[attachment.latitude, attachment.longitude]} />
              </Map>
            </div>
          </YMaps>
        </div>
      )}
      {attachment.attachType === 'image' && (
        <div>
          <CloseButton onClick={() => setAttachment({ type: '', url: '', latitude: '', longitude: '' })} />
          <div className={styles.dropArea} {...getRootProps()}>
            <input {...getInputProps()} />
            {visibleImg ? (
              <img className={styles.attachImg} src={attachment.url} alt="img" />
            ) : (
              <p className={styles.photoText}>Drag n drop some files here, or click to select files</p>
            )}
          </div>
        </div>
      )}
      {attachment.attachType === 'audio' && (
        <div key={attachment.url}>
          <audio controls>
            <source src={attachment.url} type="audio/mpeg" />
            <p>не поддерживается</p>
          </audio>
        </div>
      )}
      <form
        className={styles.formInput}
        onSubmit={(e) => {
          e.preventDefault();
          if (inputText !== '') {
            sendMessage(inputText, attachment);
            setInputText('');
            setAttachment({ type: '', url: '', latitude: null, longitude: null });
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
          }}
          placeholder="Введите сообщеине"
          className={styles.input}
        />
        <AttachButton
          setGeolocation={(latitude, longitude) =>
            setAttachment({ attachType: 'geolocation', url: '', latitude, longitude })
          }
          setImage={() => setAttachment({ attachType: 'image', url: '' })}
        />
        <MicrophoneButton onClick={onClickMicro} />
      </form>
    </>
  );
}

FormInput.defaultProps = {
  chatId: '',
  onSend: () => {},
  addVoice: () => {},
  updateMessages: () => {},
};

FormInput.propTypes = {
  chatId: PropTypes.string,
  onSend: PropTypes.func,
  addVoice: PropTypes.func,
  updateMessages: PropTypes.func,
};
