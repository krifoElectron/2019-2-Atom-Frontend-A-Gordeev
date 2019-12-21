import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ChatsPage } from '../../pages/ChatsPage/ChatsPage';
import { OneChatPage } from '../../pages/OneChatPage/OneChatPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFound';

import styles from './app.module.scss';

export function App() {
  const [user, setUser] = useState([{ email: '', firstName: '', lastName: '', username: '', avatar: '' }]);
  const [userIdd, setUserIdd] = useState(1);

  useEffect(() => {
    fetch(`/profile/profile?user_id=${userIdd}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'asd');
        setUser(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userIdd]);

  if (!user.userId) {
    return <div>Загрузка</div>;
  }

  return (
    <Router basename="/2019-2-Atom-Frontend-A-Gordeev">
      <input
        placeholder="vvedi, suka"
        value={userIdd}
        onChange={(e) => {
          setUserIdd(e.target.value);
        }}
      ></input>
      <div className={styles.mainContainer}>
        <Switch>
          <Route path="/" exact>
            <ChatsPage userId={userIdd} />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route
            path="/chats/:chatId"
            render={(props) => (
              <OneChatPage
                userId={userIdd}
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
