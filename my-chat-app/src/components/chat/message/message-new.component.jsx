require('../../../styles/message-new.css');
import React from 'react';
import {Component} from 'react';
import io from 'socket.io-client';
import {connect} from 'react-redux';

const socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');

class MessageNewComponent extends Component {

     constructor(props){
            super(props);
            this.state = {};
                socket.on('connect', () => {
                socket.emit('authenticate', { token: localStorage['token'] });
            })
        }

        componentDidMount(){
                 socket.on('message', msg => {
                    this.props.onGetMessages(msg);
                });
        }

        send(){
            socket.emit('message', this.messageInput.value);
            this.messageInput.value = '';
        }

  render() {
    return (
<div className="chat-input">
    <div className="chat-input__msg ">
        <textarea placeholder="Введіть повідомлення... " ref={(textarea) => {this.messageInput = textarea}}></textarea>
        <button type="submit" onClick={this.send.bind(this)}><span>Send</span></button>
    </div>
</div>
    );
  }
}

MessageNewComponent.defaultProps = {
};

export default connect(
    a => ({
        messages: a.messages
    }),
    dispatch =>({
        onGetMessages: (msg) =>{
        dispatch({type: 'NEW_MESSAGES', messages: msg})
      }
    })
)(MessageNewComponent);