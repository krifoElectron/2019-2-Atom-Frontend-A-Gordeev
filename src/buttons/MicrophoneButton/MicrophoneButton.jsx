import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Microphone } from './microphone.svg';

import styles from './microphoneButton.module.scss';

export function MicrophoneButton({ onClick }) {
  return (
    <div className={styles.micro} onClick={onClick}>
      <Microphone />
    </div>
  );
}

MicrophoneButton.defaultProps = {
  onClick: () => {},
};

MicrophoneButton.propTypes = {
  onClick: PropTypes.func,
};
