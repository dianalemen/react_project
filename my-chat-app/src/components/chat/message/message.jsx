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
                    //this.props.onRecieved(msg);
                    this.props.onGetMessages();
                });
        }

        componentDidMount(){
            this.props.onGetMessages();
        }
        componentDidUpdate(){
           // console.log(this.props.messages);
        }

    render() {
      //  console.log('render array');
       // console.log(this.props.messages);
        return (
            <ul className="chat-content list">
                {this.props.messages.slice(this.props.messages.length-6, this.props.messages.length).map((message, index) =>
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

export default connect(
    state => ({
     messages: state.messages
    }),
    dispatch => ({
     onGetMessages: () => {
        dispatch(getMessages());
      },
       //onRecieved: (name) =>{
        //dispatch({type: 'NEW_MESSAGE', message: name})
      //}
    })
)(MessagesList);