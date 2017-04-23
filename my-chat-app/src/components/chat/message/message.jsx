require('../../../styles/message.css');
import React from 'react';
import { Component } from 'react';
import io from 'socket.io-client';
import { socketConnect } from 'socket.io-react';
import {connect} from 'react-redux';

import {getMessages} from '../../../actions/messages';

const socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');

class MessagesList extends Component {

     constructor(props){
            super(props);
            this.state = {};

                socket.on('connect', () => {
         socket.emit('authenticate', { token: localStorage['token'] });
     })
        }

        componentDidMount(){
    this.props.onGetMessages();
  
  }

send(){
   socket.emit('message', 'testtest2');


}

    render() {
        return (
            <ul className="chat-content list">
                {this.props.messages.slice(this.props.messages.length-6, this.props.messages.length-1).map((message, index) =>
            <li key={index} className="chat-content__massege">
                <div className="chat-content__text ">
                    {message.msg}
                </div>
                <div className="chat-content__time ">
                    <p>{new Date(message.time).getHours()}</p>
                    </div>
                </li>
      )}
            </ul>
                )
    
         }
    
    }


//export default socketConnect(MessagesList);
export default connect(
    state => ({
     messages: state.messages
    }),
    dispatch => ({
     onGetMessages: () => {
        dispatch(getMessages());
      }
    })
)(MessagesList);