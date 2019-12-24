import React from 'react';
import { render } from 'react-dom';

import './styles/globalStyles.scss';

import { App } from './components/App/App';

localStorage.clear();

localStorage.setItem(
  'userInfo',
  JSON.stringify({
    id: 1,
  }),
);

localStorage.setItem(
  'chatUser1',
  JSON.stringify({
    chats: [
      {
        name: 'Bender',
        chatId: 1,
        lastMessage: 'asdf',
        date: 'Tue Dec 24 2019 01:41:46 GMT+0300 (Москва, стандартное время)',
      },
      {
        name: 'Homer',
        chatId: 2,
        lastMessage: 'oq',
        date: 'Tue Dec 24 2019 02:41:46 GMT+0300 (Москва, стандартное время)',
      },
    ],
  }),
);

localStorage.setItem(
  'messageOfChat1',
  JSON.stringify({
    messages: [
      {
        text: 'af093',
        addedAt: 'Tue Dec 23 2019 22:11:46 GMT+0300 (Москва, стандартное время)',
        toMe: false,
        latitude: '',
        longitude: '',
        attachType: '',
        url: '',
      },
      {
        text: 'asdf',
        addedAt: 'Tue Dec 24 2019 02:41:46 GMT+0300 (Москва, стандартное время)',
        toMe: false,
        latitude: '',
        longitude: '',
        attachType: '',
        url: '',
      },
    ],
    interlocutor: 'Bender',
  }),
);

localStorage.setItem(
  'messageOfChat2',
  JSON.stringify({
    messages: [
      {
        text: 'KO91',
        addedAt: 'Tue Dec 23 2019 23:37:46 GMT+0300 (Москва, стандартное время)',
        toMe: false,
        latitude: '',
        longitude: '',
        attachType: '',
        url: '',
      },
      {
        text: 'oq',
        addedAt: 'Tue Dec 24 2019 02:41:46 GMT+0300 (Москва, стандартное время)',
        toMe: false,
        latitude: '',
        longitude: '',
        attachType: '',
        url: '',
      },
    ],
    interlocutor: 'Homer',
  }),
);

render(<App />, document.getElementById('root'));
