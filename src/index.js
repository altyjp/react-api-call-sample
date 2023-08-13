import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './container';
import postReducer from './reducer'
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(postReducer);
root.render(
  <Provider store = {store}>
    <Container />
  </Provider>
);
