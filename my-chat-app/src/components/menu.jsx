import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';



//import HomeComponent from '../chat/chat-list/chat-main/message/messages-new.component.jsx'; --for audit



class MenuComponent extends Component {
  render() {
    return (
      <div >
         <nav className="navigation">
           <Link to="/home">Home</Link>
           <Link to="/register">Regeister</Link>
           <Link to="/login">Login</Link>
         </nav>
         
      </div>
    );
  }
}

MenuComponent.defaultProps = {
};


export default MenuComponent;