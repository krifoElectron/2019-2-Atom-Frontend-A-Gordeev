import React from 'react';

import { Hat } from '../../components/Hat/Hat';
import { BackButton } from '../../buttons/BackButton/BackButton';
import { OkButton } from '../../buttons/OkButton/OkButton';
import { CameraIcon } from '../../buttons/CameraIcon/CameraIcon';
import { EditProfileForm } from '../../components/EditProfileForm/EditProfileForm';

import styles from './profilePage.module.scss';
import Avatar from '../../img/fifty.jpg';

export function ProfilePage({comeBackToChats}) {
	return (
		<div>
			<Hat
				leftComponent={() => <BackButton comeBackToChats={comeBackToChats} />}
				centerComponent={() => <div>Edit Profile</div>}
				rightComponent={() => <OkButton />}
			/>
			<div className={styles.container}>
				<img src={Avatar} alt="avatar" className={styles.avatar}/>
				<CameraIcon />
			</div>
			<EditProfileForm
					fullName="Tony Jacobson"
					userName="@tony"
					bio="Subtitle 1"
			/>
		</div>
	);
}
