import React from 'react';

import {ReactComponent as Options} from './options.svg';

import styles from '../../components/App/app.module.scss';

export function OptionsButton() {
  return (
		<div className={styles.hatButton}>
			<Options />
		</div>
  );
}
