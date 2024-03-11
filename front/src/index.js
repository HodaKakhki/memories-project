import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applymiddleware, compose } from ' redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
const store =createStore(reducers,compose(applymiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
          <App />
  </Provider>          
);

