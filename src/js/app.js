/*global document*/
import ReactDOM from 'react-dom'
import React from 'react'
import domready from 'domready'
import {createStore} from 'redux'
import reducer from './reducers/index'

import Pcsd from './components/Pcsd'

let store = createStore(reducer)

domready(() => ReactDOM.render(<Pcsd data={store.getState()} />, document.getElementById('app')))
