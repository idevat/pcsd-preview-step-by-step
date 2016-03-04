/*global document, window*/
import ReactDOM from 'react-dom'
import React from 'react'
import domready from 'domready'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import reducer from './reducers/index'
import PcsdContainer from './containers/PcsdContainer'
import {loadState} from './actions/pcsd.js'
import {routes} from './routes'


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(
  window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore
)

let store = createStoreWithMiddleware(combineReducers({
  pcsd: reducer,
  routing: routerReducer,
}))
const history = syncHistoryWithStore(browserHistory, store)

loadState()(store.dispatch);
domready(() => ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
))
