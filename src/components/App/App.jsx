import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ChatsPage } from '../../pages/ChatsPage/ChatsPage';
import { OneChatPage } from '../../pages/OneChatPage/OneChatPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFound';

import styles from './app.module.scss';

export function App() {
	return (
		<Router basename="/2019-2-Atom-Frontend-A-Gordeev">
			<div className={styles.mainContainer}>
				<Switch>
					<Route path="/" exact>
						<ChatsPage />
					</Route>
					<Route path="/profile">
						<ProfilePage />
					</Route>
					<Route
						path="/chats/:chatId"
						render={(props) => (
							<OneChatPage
								addMessage={() => {
									console.log('aaaaa');
								}}
								{...props}
							/>
						)}
					/>
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	);
}
