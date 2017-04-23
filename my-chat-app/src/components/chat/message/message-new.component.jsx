require('../../../styles/message-new.css');
import React from 'react';
import {Component} from 'react';
import io from 'socket.io-client';
import { socketConnect } from 'socket.io-react';

const socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');

class MessageNewComponent extends Component {

     constructor(props){
            super(props);
            this.state = {};
                socket.on('connect', () => {
                socket.emit('authenticate', { token: localStorage['token'] });
            })
        }

        send(){
            socket.emit('message', 'testtest2');
        }

  render() {
    return (
<div className="chat-input">
    <div className="chat-input__msg ">
        <textarea placeholder="Введіть повідомлення... "></textarea>
        <button type="submit" onClick={this.send.bind(this)}><span>Send</span></button>
    </div>
</div>
    );
  }
}

MessageNewComponent.defaultProps = {
};

export default socketConnect(MessageNewComponent);