import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';



//import HomeComponent from '../chat/chat-list/chat-main/message/messages-new.component.jsx'; --for audit
require('../styles/nav.css');

class MenuComponent extends Component {
  render() {
    return (
         <nav className="navigation">
           <Link to="/home" id="logo"><h1>MyChatApp</h1></Link>
           <Link to="/home">Home</Link>
           <Link to="/register">Register</Link>
           <Link to="/login">Login</Link>
           <Link to="/chat">Chat</Link>
         </nav>
         
    );
  }
}

MenuComponent.defaultProps = {
};


export default MenuComponent;