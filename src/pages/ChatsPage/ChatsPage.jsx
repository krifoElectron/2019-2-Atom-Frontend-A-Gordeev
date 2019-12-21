import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Hat } from '../../components/Hat/Hat';
import { ChatContainer } from '../../containers/ChatContainer/ChatContainer';
import { NewMessageButton } from '../../buttons/NewMessageButton/NewMessageButton';

export const ChatsPage = ({ onClick, userId }) => {
  const [chats, setChats] = useState([
    { chatId: 0, date: '', isGroupChat: false, lastMessage: '', name: '', title: '' },
  ]);
  useEffect(() => {
    fetch(`/chats/chat_list/?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!_.isEqual(chats, data.chats)) {
          setChats(data.chats);
        }
      });
  }, [userId]);

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
