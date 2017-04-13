import React from 'react';
import {Component} from 'react';

import ChatList from './chat-list.component';
import ChatRoom from './chat-room.component';
//import MessageList from './chat-main/message/messages-list.component';

require('../../styles/chat-style.css');
class ChatComponent extends Component {
  render() {
    return (
   <section className="chat-component">
      <ChatList />
      <ChatRoom />
   </section>
    );
  }
}

ChatComponent.defaultProps = {
};

export default ChatComponent;