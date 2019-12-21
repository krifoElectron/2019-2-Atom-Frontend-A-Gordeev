import React from 'react';
import PropTypes from 'prop-types';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { ReadMessageIcon } from '../ReadMessageIcon/ReadMessageIcon';

import styles from './messageElement.module.scss';

export function MessageElement({ date, text, toMe, latitude, longitude }) {
  console.log(latitude, longitude);

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
            {text}
            <Map defaultState={{ center: [latitude, longitude], zoom: 13 }}>
              <Placemark geometry={[latitude, longitude]} />
            </Map>
            {/* <Placemark geometry={[latitude, longitude]} /> */}
          </div>
        </YMaps>
      ) : (
        <>
          <div className={styles.messText}>{text}</div>
          <div className={styles.bottomBlock}>
            <div className={styles.messDate}>{date}</div>
            <ReadMessageIcon />
          </div>
        </>
      )}
    </div>
  );
}

MessageElement.defaultProps = {
  date: 'XX:XX',
  text: 'null',
  toMe: true,
  latitude: 0,
  longitude: 0,
};

MessageElement.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string,
  toMe: PropTypes.bool,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};
