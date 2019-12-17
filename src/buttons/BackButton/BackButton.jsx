import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as Back } from './back.svg';

import styles from '../../components/App/app.module.scss';


export function BackButton({ comeBackToChats }) {
  return (
  	<Link to="/">
			<div onClick={comeBackToChats}
					 className={[styles.backButton, styles.hatButton].join(' ')}>
				<Back />
			</div>
		</Link>
  );
}

BackButton.defaultProps = {
  comeBackToChats: () => {},
};

BackButton.propTypes = {
  comeBackToChats: PropTypes.func,
};
