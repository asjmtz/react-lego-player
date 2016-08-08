// index.js
import React from 'react'
import { render } from 'react-dom'
import App from './App.js';

import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import playerReducers from '../src/reducers'


let store = createStore(playerReducers, applyMiddleware(
	thunkMiddleware
))

window.store = store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)