import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { compose, createStore } from 'redux';
import {reducers} from './app/reducer';
import { Provider } from 'react-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducers, /* preloadedState, */
  composeEnhancers()
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
