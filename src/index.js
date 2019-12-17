import React from 'react';
import { render } from 'react-dom';

import './styles/globalStyles.scss';

import { App } from './components/App/App';

localStorage.clear();
localStorage.setItem(
	'messengerState',
	JSON.stringify({
		chats: [
			{
				id: 123,
				interlocutor: 'Bender',
				messages: [
					{
						direction: 'fromMe',
						text: 'ololo',
						date: '2019-10-22T21:50:03.113Z',
						isRead: true,
					},
					{
						direction: 'fromMe',
						text: 'asdf',
						date: '2019-10-22T22:12:43.113Z',
						isRead: true,
					},
				],
			},
			{
				id: 345,
				interlocutor: 'Homer',
				messages: [
					{
						direction: 'fromMe',
						text: 'urt',
						date: '2019-10-23T21:50:03.113Z',
						isRead: true,
					},
					{
						direction: 'fromMe',
						text: 'Ita',
						date: '2019-10-25T22:12:43.113Z',
						isRead: true,
					},
				],
			},
		],
		profile: {
			name: 'Arsenii',
			constats: [],
		},
	}),
);

const initialState = JSON.parse(localStorage.getItem('messengerState'));

render(<App initialState={initialState} />, document.getElementById('root'));
