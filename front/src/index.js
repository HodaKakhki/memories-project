import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
//const store = createStore(reducers, compose(applyMiddleware(thunk)));


 const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
