import React from 'react';

import { ReactComponent as Camera } from './camera.svg';

import styles from '../../pages/ProfilePage/profilePage.module.scss';

export function CameraIcon() {
	return (
		<div className={styles.changeAvatar}>
			<Camera />
		</div>
	);
}
