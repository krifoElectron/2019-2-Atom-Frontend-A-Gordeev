import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Menu } from './menu.svg';

import styles from '../../components/App/app.module.scss';

export function MenuButton() {
  return (
  	<Link to="/profile">
			<div className={[styles.menuButton, styles.hatButton].join(' ')}>
				<Menu />
			</div>
		</Link>
  );
}
