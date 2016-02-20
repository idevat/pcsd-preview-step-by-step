/*global document*/
import ReactDOM from 'react-dom'
import React from 'react'
import domready from 'domready'
import {createStore} from 'redux'

import reducer from './reducers/index'
import PcsdContainer from './containers/PcsdContainer'
import * as PcsdActions from './actions/pcsd.js'

let store = createStore(reducer)

domready(() => ReactDOM.render(
  <PcsdContainer store={store}/>,
  document.getElementById('app')
))
