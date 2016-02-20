/*global document*/
import ReactDOM from 'react-dom'
import React from 'react'
import domready from 'domready'
import {createStore} from 'redux'
import reducer from './reducers/index'

import PcsdContainer from './containers/PcsdContainer'

let store = createStore(reducer)

let addCluster = (name, nodeList) => {
  store.dispatch({
    type: 'ADD_CLUSTER',
    payload: {name, nodeList}
  })
}

domready(() => ReactDOM.render(
  <PcsdContainer store={store} actions={{addCluster}} />,
  document.getElementById('app')
))
