import 'core-js/fn/object/assign';
import React, {PropTypes} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {connect} from 'react-redux';
import AppComponent from './nav/Nav.jsx';
import Home from './home/home.component';
import Register from './auth/register.component';
import Login from './auth/login.component';
import Chat from './chat/chat.component';
import {getMessages} from '../actions/messages';

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

/*(Root.propTypes = {
  state: React.PropTypes.object
};
*/
export default Root;
/*export default connect(
    state => {({
     messages: state
    }); console.log(state)},
    dispatch => ({
     onGetMessages: () => {
        dispatch(getMessages());
      }
    })
)(Root);*/