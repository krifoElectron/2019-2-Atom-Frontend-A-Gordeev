import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { UnreadMessageIcon } from '../UnreadMessageIcon/UnreadMessageIcon';

import styles from './chatElement.module.scss';
import AvatarIcon from '../../img/avatar.jpeg';

export function ChatElement({ name, lastMessage, date, chatId }) {
	return (
		<Link to={`/chats/${chatId}`} className={styles.chatElementContainer}>
			<div className={styles.leftBlock}>
				<img className={styles.avatar} src={AvatarIcon} alt="avatar" />
			</div>
			<div className={styles.centerBlock}>
				<div className={styles.name}>{name}</div>
				<div className={styles.message}>{lastMessage}</div>
			</div>
			<div className={styles.rightBlock}>
				{date}
				<UnreadMessageIcon />
			</div>
		</Link>
	);
}

ChatElement.defaultProps = {
	name: '',
	lastMessage: '',
	date: '',
	chatId: 0,
};

ChatElement.propTypes = {
	name: PropTypes.string,
	lastMessage: PropTypes.string,
	date: PropTypes.string,
	chatId: PropTypes.number,
};
