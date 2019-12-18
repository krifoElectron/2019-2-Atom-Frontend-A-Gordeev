import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 

import { Hat } from '../../components/Hat/Hat';
import { MessageContainer } from '../../containers/MessageContainer/MessageContainer';
import { BackButton } from '../../buttons/BackButton/BackButton';
import { SearchButton } from '../../buttons/SearchButton/SearchButton';
import { FormInput } from '../../components/FormInput/FormInput';
import { OptionsButton } from '../../buttons/OptionsButton/OptionsButton';

import styles from '../../components/App/app.module.scss';
import AvatarIcon from '../../img/avatar.jpeg';
// import { getIndexByChathId } from '../../utils/chats/indexById';

export const OneChatPage = ({ addMessage, match }) => {
	const [messagesInfo, setMessagesInfo] = useState([
		{ userId: 1, date: '', isGroupChat: false, lastMessage: 'z', name: 'x', title: 'y' },
	]);
	useEffect(() => {
		const { chatId } = match.params;
		fetch(`http://localhost:3000/chats/chat_page/?chat_id=${chatId}&user_id=${messagesInfo.userId}`)
			.then((res) => res.json())
			.then((data) => {
				setMessagesInfo(data);
			});
	}, []);

	// const chatIndex = getIndexByChathId(+match.params.chatId);
	const { messages, interlocutor } = messagesInfo;
	// chats[chatIndex];

	return (
		<div className={styles.mainContainer}>
			<Hat
				leftComponent={() => <BackButton />}
				centerComponent={() => (
					<div className={styles.centerBlock}>
						<img className={styles.avatar} src={AvatarIcon} alt="avatar" />
						<div className={styles.nameAndMess}>
							<div>{interlocutor}</div>
							<div className={styles.last}>был 5 часов назад</div>
						</div>
					</div>
				)}
				rightComponent={() => {
					return (
						<div className={styles.rightBlock}>
							<SearchButton />
							<OptionsButton />
						</div>
					);
				}}
			/>
			<MessageContainer messages={messages} />
			<FormInput addMessage={addMessage} />
		</div>
	);
};

OneChatPage.defaultProps = {
	addMessage: () => {},
	match: { params: { chatId: 123 } },
};

OneChatPage.propTypes = {
	addMessage: PropTypes.func,
	match: PropTypes.checkPropTypes(),
};
