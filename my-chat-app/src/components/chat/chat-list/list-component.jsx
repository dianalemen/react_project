import React from 'react';
import {Component} from 'react';


class ChatListComponent extends Component {
  render() {
    return (
    <div className="chat-left-side">
     <ul>
        <li className="user-content">
            <div className="user-content__image ">
            </div>
            <div className="user-content__status ">
                <p>my chat</p>
                <p>my new chat</p>
            </div>
            <div className="user-content__time ">
                <p className="time "> 15:00</p>
            </div>
        </li>
    </ul>
</div>
    );
  }
}

ChatListComponent.defaultProps = {
};

export default ChatListComponent;