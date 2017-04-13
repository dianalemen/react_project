require('../../styles/chat-room.css');
import React from 'react';
import {Component} from 'react';



class ChatRoomComponent extends Component {
  render() {
    return (
   <section className="chat-right-side">
      <h1>Welcome in chat app! Select the room!</h1>
   </section>
    );
  }
}

ChatRoomComponent.defaultProps = {
};

export default ChatRoomComponent;