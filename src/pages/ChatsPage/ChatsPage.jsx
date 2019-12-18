import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Hat } from '../../components/Hat/Hat';
import { ChatContainer } from '../../containers/ChatContainer/ChatContainer';
import { NewMessageButton } from '../../buttons/NewMessageButton/NewMessageButton';

export const ChatsPage = ({ onClick, userId }) => {
  console.log('userId', userId);
  const [chats, setChats] = useState([
    { chatId: 0, date: '', isGroupChat: false, lastMessage: '', name: '', title: '' },
  ]);
  useEffect(() => {
    fetch(`http://localhost:3000/chats/chat_list/?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.chats)
        setChats(data.chats);
      });
  }, []);

  return (
    <div>
      <Hat />
      <ChatContainer chatInfo={chats} onClick={onClick} />
      <NewMessageButton />
    </div>
  );
};

ChatsPage.defaultProps = {
  onClick: () => {},
  userId: ''
};

ChatsPage.propTypes = {
  onClick: PropTypes.func,
  userId: PropTypes.string
};
