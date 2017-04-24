require('../../../styles/message.css');
import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {socket} from './message-new.component';
import {getMessages} from '../../../actions/messages';


class MessagesList extends Component {

     constructor(props){
            super(props);
           socket.on('message', msg => {
                    this.props.onRecieved(msg);
                });
        }

        componentDidMount(){
            this.props.onGetMessages();
        }
    
    render() {
        return (
            <ul className="chat-content list">
                {this.props.messages.slice(this.props.messages.length-1, this.props.messages.length).map((message, index) =>
            <li key={index} className="chat-content__massege">
                <div className="chat-content__text ">
                    {message.msg}
                </div>
                <div className="chat-content__time ">
                    <p>{new Date(message.time).getHours()}</p>
                    </div>
                    <div><p>{message.user.username}</p></div>
                </li>
                    )}
            </ul>
                )
    
         }
    
    }

export default connect(
    state => ({
     messages: state.messages
    }),
    dispatch => ({
     onGetMessages: () => {
        dispatch(getMessages());
      },
       onRecieved: (name) =>{
        dispatch({type: 'NEW_MESSAGE', message: name})
      }
    })
)(MessagesList);