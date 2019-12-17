import React from 'react';

import {ReactComponent as Ok} from './ok.svg';

import styles from './okButton.module.scss';

export function OkButton() {
	return (
		<div className={styles.okButton}>
			<Ok />
		</div>
	);
}
