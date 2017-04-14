require('../../styles/chat-style.css');
import React from 'react';
import {Component} from 'react';

import ChatList from './chat-list.component';
//import ChatRoom from './chat-room.component';
import MessageList from './message/messages-list.component';


class ChatComponent extends Component {
  render() {
    return (
   <section className="chat-component">
      <ChatList />
      <MessageList />
   </section>
    );
  }
}

ChatComponent.defaultProps = {
};

export default ChatComponent;