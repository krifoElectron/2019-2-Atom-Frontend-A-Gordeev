import React from 'react';
import PropTypes from 'prop-types';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { ReadMessageIcon } from '../ReadMessageIcon/ReadMessageIcon';

import styles from './messageElement.module.scss';

export function MessageElement({ date, text, toMe, latitude, longitude, attachType, url }) {
  return (
    <div
      className={[
        toMe ? styles.messageElementLeft : styles.messageElementRight,
        toMe ? styles.animationLeft : styles.animationRight,
      ].join(' ')}
    >
      {latitude ? (
        <YMaps>
          <div>
            <Map defaultState={{ center: [latitude, longitude], zoom: 13 }}>
              <Placemark geometry={[latitude, longitude]} />
            </Map>
          </div>
        </YMaps>
      ) : (
        <></>
      )}
      {attachType === 'audio' && (
        <div key={url}>
          <audio controls>
            <source src={url} type="audio/mpeg" />
            <p>не поддерживается</p>
          </audio>
        </div>
      )}

      <div className={styles.messText}>{text}</div>
      <div className={styles.bottomBlock}>
        <div className={styles.messDate}>{date}</div>
        <ReadMessageIcon />
      </div>

      {attachType === 'image' && <img src={url} alt="img" />}
    </div>
  );
}

MessageElement.defaultProps = {
  date: 'XX:XX',
  text: 'null',
  toMe: true,
  latitude: 0,
  longitude: 0,
  attachType: '',
  url: '',
};

MessageElement.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string,
  toMe: PropTypes.bool,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  attachType: PropTypes.string,
  url: PropTypes.string,
};
