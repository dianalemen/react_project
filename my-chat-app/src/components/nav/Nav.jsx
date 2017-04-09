require('./nav.css');
import React from 'react';
import {Component} from 'react';
import NavListComponent from '../chat/chat-list/nav-component.jsx';



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
<NavListComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
