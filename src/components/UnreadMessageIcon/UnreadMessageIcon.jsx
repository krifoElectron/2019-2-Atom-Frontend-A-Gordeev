import React from 'react';

import {ReactComponent as UnreadMessage} from './unreadMessage.svg';

import styles from '../ChatElement/chatElement.module.scss';

export function UnreadMessageIcon() {
  return (
		<div className={styles.isRead}>
			<UnreadMessage />
		</div>
  );
}
