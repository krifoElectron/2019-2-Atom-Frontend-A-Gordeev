import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { getIndexByChathId } from '../../utils/chats/indexById';

import { ChatsPage } from '../../pages/ChatsPage/ChatsPage';
import { OneChatPage } from '../../pages/OneChatPage/OneChatPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import {NotFoundPage} from '../../pages/NotFoundPage/NotFound';

import styles from './app.module.scss';

export function App({ initialState }) {
  const [messengerState, setMessengerState] = useState(initialState);
  const [pageState, setPageState] = useState({ isChatsPage: true, chatId: 123 });

  console.log(messengerState);
  console.log(getIndexByChathId(pageState.chatId, messengerState.chats));
  return (
		<Router basename="/2019-2-Atom-Frontend-A-Gordeev">
			<div className={styles.mainContainer}>
				<Switch>
					<Route path="/" exact>
						<ChatsPage
							chatInfo={messengerState.chats}
							onClick={(chatId) => {
								console.log(chatId);
								setPageState({ isChatsPage: false, chatId });
							}}
						/>
					</Route>
					<Route path="/profile">
						<ProfilePage />
					</Route>
					<Route path="/chats/:chatId" render={props => <OneChatPage
						interlocutor={messengerState.chats[getIndexByChathId(pageState.chatId, messengerState.chats)].interlocutor}
						chatIndex={getIndexByChathId(pageState.chatId, messengerState.chats)}
						chats={messengerState.chats}
						messages={messengerState.chats[getIndexByChathId(pageState.chatId, messengerState.chats)].messages}
						addMessage={() => {
							const newState = JSON.parse(localStorage.getItem('messengerState'));
							setMessengerState(newState);
						}}
						{...props}
					/>}/>
					<Route component={NotFoundPage}/>
				</Switch>
			</div>
		</Router>

	);
}

App.defaultProps = {
  initialState: {},
};

App.propTypes = {
  initialState: PropTypes.objectOf(PropTypes.object),
};
