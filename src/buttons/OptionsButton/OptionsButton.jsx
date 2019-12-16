import React from 'react';

import styles from '../../components/App/app.module.scss';

export function OptionsButton() {
  return (
    <svg
      className={styles.hatButton}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      width="30"
      height="30"
    >
      <path
        fill="#263238"
        fillOpacity=".6"
        d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
      />
    </svg>
  );
}
