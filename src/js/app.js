/*global document, window*/
import ReactDOM from 'react-dom'
import React from 'react'
import domready from 'domready'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux';

import reducer from './reducers/index'
import PcsdContainer from './containers/PcsdContainer'


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(
  window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore
)

let store = createStoreWithMiddleware(reducer)

domready(() => ReactDOM.render(
  <Provider store={store}>
    <PcsdContainer store={store}/>
  </Provider>,
  document.getElementById('app')
))
