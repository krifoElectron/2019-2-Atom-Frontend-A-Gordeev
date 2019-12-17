import React from 'react';

import { ReactComponent as Clip } from './clip.svg';

import styles from './attachButton.module.scss';

export function AttachButton() {
  return (
  	<div className={styles.clip}>
			<Clip />
		</div>
  );
}
