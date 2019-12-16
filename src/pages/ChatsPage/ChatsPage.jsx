import React from 'react';
import PropTypes from 'prop-types';

import { Hat } from '../../components/Hat/Hat';
import { ChatContainer } from '../../containers/ChatContainer/ChatContainer';
import { NewMessageButton } from '../../buttons/NewMessageButton/NewMessageButton';

export const ChatsPage = ({ chatInfo, onClick }) => {
  return (
    <div>
      <Hat />
      <ChatContainer chatInfo={chatInfo} onClick={onClick} />
      <NewMessageButton />
    </div>
  );
};

ChatsPage.defaultProps = {
  chatInfo: [{}],
  onClick: () => {},
};

ChatsPage.propTypes = {
  chatInfo: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
