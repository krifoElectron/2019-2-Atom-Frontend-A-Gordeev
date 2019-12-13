import React from 'react';

import styles from '../styles/app.module.scss';

export function SearchButton() {
  return (
    <svg
      className={[styles.searchButton, styles.hatButton].join(' ')}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      width="30"
      height="30"
    >
      <path
        fill="#263238"
        fillOpacity=".3"
        d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
      />
    </svg>
  );
}
