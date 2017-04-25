import '../../../styles/message.css';
import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {socket} from './message-new.component';
import {getMessages} from '../../../actions/messages';


class MessagesList extends Component {

     constructor(props){
            super(props);
            this.state ={};
           socket.on('message', msg => {
                    this.props.onRecieved(msg);
                });
        }

        componentDidMount(){
            this.props.onGetMessages();
        }
    
    render() {
        const filterText = this.props.filterText;
        return (
            <ul className="chat-content list">
                {this.props.messages.slice(0, 4)
                .filter(message => message.msg.includes(filterText))
                .map((message, index) =>
            <li key={index} className="chat-content__massege">
                <div className="user-content__image">
                    </div>
                     <div className="chat-content__container ">
                         <div className="chat-content__username">
                                <p>{message.user.username}</p>
                         </div>
                            <div className="chat-content__text ">
                                 {message.msg}
                             </div>
                         <div className="chat-content__time ">
                            <p>{new Date(message.time).getHours()}</p>
                         </div>
                    </div>
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