require('../../../styles/message.css');
import React from 'react';
import { Component } from 'react';


class MessagesList extends Component {
    
    render() {
        const messages = this.props.items;
        //const chatId = this.props.chatId;
        

        return (
            <ul className="chat-content list">
                {messages.filter(message => message.chatId === 1).map(message =>
                    <li key={message.id} className="chat-content__massege ">
                        <div className="user-content__image "></div>
                         <div className="chat-content__container ">
                            <div className="chat-content__text ">
                                <p>{message.text}
                                </p>
                             </div>
                            <div className="chat-content__time ">
                                <p>14:00</p>
                            </div>
                        <button>Get</button>
                        <button>Join</button>
                    </div>
                </li>)}
            </ul>
                )
    
         }
    
    }



export default MessagesList;