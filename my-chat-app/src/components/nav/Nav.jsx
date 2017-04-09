require('./nav.css');
import React from 'react';
import {Component} from 'react';
import HomeComponent from '../chat/chat-list/chat-main/message/messages-new.component.jsx';



class AppComponent extends Component {
  render() {
    return (
      <div >
         <nav className="navigation">
           <a href="#">LOGO</a>
           <a href="#">Home</a>
           <a href="#">Chat</a>
           <a href="#">Login</a>
           <a href="#">Regeister</a>
         </nav>
         <HomeComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
