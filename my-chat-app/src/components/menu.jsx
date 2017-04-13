import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';



//import HomeComponent from '../chat/chat-list/chat-main/message/messages-new.component.jsx'; --for audit
import '../styles/nav.css';

class MenuComponent extends Component {
  render() {
    return (
         <nav className="navigation">
           <Link to="/home">Logo</Link>
           <Link to="/home">Home</Link>
           <Link to="/register">Regeister</Link>
           <Link to="/login">Login</Link>
           <Link to="/chat">Chat</Link>
         </nav>
         
    );
  }
}

MenuComponent.defaultProps = {
};


export default MenuComponent;