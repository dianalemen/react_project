import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import AppComponent from './components/nav/Nav.jsx';
import Home from './components/home/home.component';
import Register from './components/auth/register.component';
import Login from './components/auth/login.component';
import Chat from './components/chat/chat.component';


ReactDOM.render((
     <BrowserRouter>
          <div>
            <Route path="/" component={AppComponent}/>
            <Route path="/home" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/chat" component={Chat}/>
          </div>
     </BrowserRouter>
     ),
     document.getElementById('app')
);