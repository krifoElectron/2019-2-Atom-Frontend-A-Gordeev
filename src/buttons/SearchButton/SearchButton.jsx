import React from 'react';

import {ReactComponent as Search} from './search.svg';

import styles from '../../components/App/app.module.scss';



export function SearchButton() {
  return (
		<div className={[styles.searchButton, styles.hatButton].join(' ')}>
			<Search />
		</div>
  );
}
