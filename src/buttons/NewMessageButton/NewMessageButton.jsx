import React from 'react';

import styles from './newMessageButton.module.scss';

export function NewMessageButton() {
  return (
    <svg
      className={styles.newMessButton}
      width="55"
      height="55"
      version="1.1"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className={styles.st0} cx="64" cy="64" r="64" />
      <g>
        <path
          className={styles.st1}
          d="M87.4,50.5l9.9-9.9c0.4-0.4,0.4-1,0-1.4l-8.5-8.5c-0.4-0.4-1-0.4-1.4,0l-9.9,9.9L87.4,50.5z"
        />
        <path
          className={styles.st1}
          d="M74.6,43.5L38,80.1l-4.4,13c-0.3,0.8,0.5,1.5,1.3,1.3l13-4.4l36.6-36.6L74.6,43.5z"
        />
      </g>
    </svg>
  );
}

//<style type="text/css">.st0{fill:#4D4D4D;}.st1{fill:#FFFFFF;}</style>
//xml:space="preserve"
//xmlns="http://www.w3.org/2000/svg"
//xmlns:xlink="http://www.w3.org/1999/xlink"
//style="enable-background:new 0 0 128 128;"
