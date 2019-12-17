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
import { getIndexByChathId } from '../../utils/chats/indexById';

export const OneChatPage = ({ addMessage, match }) => {
	const [chats, setChats] = useState([
		{ chatId: 5, date: '', isGroupChat: false, lastMessage: '', name: 'cneutron', title: 'aa' },
	]);
	useEffect(() => {
		fetch(`http://localhost:3000/chats/chat_list/?user_id=${17}`)
			.then((res) => res.json())
			.then((data) => {
				setChats(data.chats);
			});
	}, []);

	const chatIndex = getIndexByChathId(+match.params.chatId);
	const { messages, interlocutor } = chats[chatIndex];
	console.log({ chatIndex });

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
			<FormInput chatIndex={chatIndex} addMessage={addMessage} />
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
