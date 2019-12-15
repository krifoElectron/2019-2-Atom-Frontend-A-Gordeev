import React from 'react';
// style="enable-background:new 0 0 612 612;" styles.hat-button

import styles from '../styles/app.module.scss';

export function MenuButton() {
  return (
    <svg
      className={[styles.menuButton, styles.hatButton].join(' ')}
      fill="#fff"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="25px"
      height="25px"
      viewBox="0 0 612 612"
      xmlSpace="preserve"
    >
      <path
        d="M604.267,194.727c4.257,0,7.733-3.644,7.733-7.733v-40.169c0-4.256-3.283-7.733-7.733-7.733H7.733
              c-4.256,0-7.733,3.644-7.733,7.733v40.169c0,4.256,3.283,7.733,7.733,7.733H604.267z"
      />
      <path
        d="M0,326.084c0,4.256,3.283,7.733,7.733,7.733h596.533c4.256,0,7.733-3.645,7.733-7.733v-40.169
              c0-4.284-3.283-7.733-7.733-7.733H7.733c-4.256,0-7.733,3.645-7.733,7.733V326.084z"
      />
      <path
        d="M0,465.175c0,4.256,3.283,7.733,7.733,7.733h596.533c4.256,0,7.733-3.645,7.733-7.733v-40.169
          c0-4.256-3.283-7.732-7.733-7.732H7.733c-4.256,0-7.733,3.644-7.733,7.732V465.175z"
      />
    </svg>
  );
}
