import 'core-js/fn/object/assign';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppComponent from './nav/Nav.jsx';
import Home from './home/home.component';
import Register from './auth/register.component';
import Login from './auth/login.component';
import Chat from './chat/chat.component';


const Root = ({ store }) => (
  <Provider store={store}>
     <BrowserRouter>
          <div>
            <Route path="/" component={AppComponent}/>
            <Route path="/home" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/chat" component={Chat}/>
          </div>
     </BrowserRouter>
     </Provider>
);


export default Root;
