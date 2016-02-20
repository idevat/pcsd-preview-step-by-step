/*global document*/
import ReactDOM from 'react-dom'
import React from 'react'
import domready from 'domready'
import {createStore} from 'redux'
import {Provider} from 'react-redux';

import reducer from './reducers/index'
import PcsdContainer from './containers/PcsdContainer'

let store = createStore(reducer)

domready(() => ReactDOM.render(
  <Provider store={store}>
    <PcsdContainer store={store}/>
  </Provider>,
  document.getElementById('app')
))
