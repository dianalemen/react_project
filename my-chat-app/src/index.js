import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import Root from './components/root';

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
          <Root store={store}/>,
     document.getElementById('app')
);