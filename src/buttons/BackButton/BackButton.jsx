import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from '../../components/App/app.module.scss';

export function BackButton({ comeBackToChats }) {
  return (
  	<Link to="/">
			<svg
				onClick={comeBackToChats}
				className={[styles.backButton, styles.hatButton].join(' ')}
				fill="#fff"
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="25px"
				height="25px"
				viewBox="0 0 400.004 400.004"
				xmlSpace="preserve"
			>
				<path
					d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757
			c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072
			c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315
			C400.004,190.438,392.251,182.686,382.688,182.686z"
				/>
			</svg>
		</Link>
  );
}

BackButton.defaultProps = {
  comeBackToChats: () => {},
};

BackButton.propTypes = {
  comeBackToChats: PropTypes.func,
};
