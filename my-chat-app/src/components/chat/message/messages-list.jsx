import React from 'react';
import { Component } from 'react';


class MessagesList extends Component {
    
    render() {
        const messages = this.props.items;
        return (
            <ul>
                {messages.map(message =>
                    <li key={message.id}><span>{message.text}</span>
                </li>)}
            </ul>
                )
    
         }

    
    }


export default MessagesList;