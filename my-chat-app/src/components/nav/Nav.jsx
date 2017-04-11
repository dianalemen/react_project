require('./nav.css');
import React from 'react';
import {Component} from 'react';


import MenuComponent from '../menu.jsx';


//import HomeComponent from '../chat/chat-list/chat-main/message/messages-new.component.jsx'; --for audit



class AppComponent extends Component {
  render() {
    return (
      <div >
        <MenuComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
