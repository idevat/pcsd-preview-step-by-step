/*global document*/
import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'

let HelloWorld = () => <h1>Pcsd preview: step by step</h1>

domready(() => ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
))
