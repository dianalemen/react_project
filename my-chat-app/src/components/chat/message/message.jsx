require('../../../styles/message.css');
import React from 'react';
import { Component } from 'react';
import io from 'socket.io-client';
import { socketConnect } from 'socket.io-react';
const socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');
class MessagesList extends Component {

     constructor(props){
            super(props);
            this.state = {};

                socket.on('connect', () => {
         socket.emit('authenticate', { token: localStorage['token'] });
     })
        }

send(){
   socket.emit('message', 'test');


}

    render() {

        const messages = this.props.items;
        //const chatId = this.props.chatId;
        
        

        return (
            <ul className="chat-content list">
                {messages.map(message =>
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
                        <button onClick={this.send.bind(this)}>Get</button>
                        <button>Join</button>
                    </div>
                </li>)}
            </ul>
                )
    
         }
    
    }



export default socketConnect(MessagesList);