/*global document*/
import ReactDOM from 'react-dom'
import React from 'react'
import domready from 'domready'
import Pcsd from './components/Pcsd'

domready(() => ReactDOM.render(<Pcsd />, document.getElementById('app')))
