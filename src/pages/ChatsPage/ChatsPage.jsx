import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Hat } from '../../components/Hat/Hat';
import { ChatContainer } from '../../containers/ChatContainer/ChatContainer';
import { NewMessageButton } from '../../buttons/NewMessageButton/NewMessageButton';

export const ChatsPage = ({ onClick }) => {
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
};

ChatsPage.propTypes = {
  onClick: PropTypes.func,
};
