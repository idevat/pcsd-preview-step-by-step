/*global document*/
import ReactDOM from 'react-dom'
import React from 'react'
import domready from 'domready'
import {createStore} from 'redux'
import reducer from './reducers/index'
import {bindActionCreators} from 'redux'

import PcsdContainer from './containers/PcsdContainer'
import * as PcsdActions from './actions/pcsd.js'

let store = createStore(reducer)

let actions = bindActionCreators(PcsdActions, store.dispatch)

domready(() => ReactDOM.render(
  <PcsdContainer store={store} actions={actions} />,
  document.getElementById('app')
))
