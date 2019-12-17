import React from 'react';
import PropTypes from 'prop-types';

import styles from './formInputLabel.module.scss';

export function EditProfileForm({fullName, userName, bio}) {
	return (
		<div className={styles.container}>
			<div className={styles.formElement}>
				<label htmlFor="full-name">Full name</label>
				<input id="full-name" type="text" value={fullName}/>
			</div>

			<div className={styles.formElement}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" value={userName}/>
				<div className={styles.bottomText}>Minimum length is 5 characters</div>
			</div>

			<div className={styles.formElement}>
				<label htmlFor="bio">Bio</label>
				<input id="bio" type="text" value={bio}/>
				<div className={styles.bottomText}>Any details about you</div>
			</div>
		</div>
	);
}

EditProfileForm.defaultProps = {
	fullName: '',
	userName: '',
	bio: ''
};

EditProfileForm.propTypes = {
	fullName: PropTypes.string,
	userName: PropTypes.string,
	bio: PropTypes.string
};
