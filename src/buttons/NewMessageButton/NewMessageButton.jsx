import React from 'react';

import {ReactComponent as NewMessage} from './newMessage.svg';

import styles from './newMessageButton.module.scss';

export function NewMessageButton() {
  return (
		<div className={styles.newMessButton}>
			<NewMessage />
		</div>
  );
}
