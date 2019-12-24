import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Hat } from '../../components/Hat/Hat';
import { ChatContainer } from '../../containers/ChatContainer/ChatContainer';
import { NewMessageButton } from '../../buttons/NewMessageButton/NewMessageButton';

export const ChatsPage = ({ onClick, userId }) => {
  const [chats, setChats] = useState([
    { chatId: 0, date: '', isGroupChat: false, lastMessage: '', name: '', title: '' },
  ]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(`chatUser${userId}`));
    console.log(userId, 'vasdvca;oasdoi');
    setChats(data.chats);
  }, [userId]);

  console.log(chats, '0000');
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
  userId: '',
};

ChatsPage.propTypes = {
  onClick: PropTypes.func,
  userId: PropTypes.string,
};
