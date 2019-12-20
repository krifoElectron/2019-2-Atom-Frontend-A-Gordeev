import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ChatsPage } from '../../pages/ChatsPage/ChatsPage';
import { OneChatPage } from '../../pages/OneChatPage/OneChatPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFound';

import styles from './app.module.scss';

export function App() {
	const [user, setUser] = useState([
		{ userId: '', email: '', firstName: '', lastName: '', username: '', avatar: '' },
	  ]);
	  useEffect(() => {
		fetch(`http://localhost:3000/profile/profile?user_id=${1}`)
		  .then((res) => res.json())
		  .then((data) => {
			console.log(data, 'asd');
			setUser(data);
		  })
		  .catch((e) => {
			  console.log(e);
			})
	  }, []);
	  console.log(user.userId);

		if (!user.userId) {
			return <div>Загрузка</div>;
		}

	return (
		<Router basename="/2019-2-Atom-Frontend-A-Gordeev">
			<div className={styles.mainContainer}>
				<Switch>
					<Route path="/" exact>
						<ChatsPage userId={user.userId} />
					</Route>
					<Route path="/profile">
						<ProfilePage />
					</Route>
					<Route
						path="/chats/:chatId"
						render={(props) => (
							<OneChatPage
								userId={user.userId}
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
