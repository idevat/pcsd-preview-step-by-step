/*global document*/
import ReactDOM from 'react-dom'
import React from 'react'
import domready from 'domready'
import Pcsd from './components/Pcsd'

let data = {
  cluster_list: [
    {
      id: 1,
      name: 'first',
    },
    {
      id: 2,
      name: 'second',
    }
  ],
}

domready(() => ReactDOM.render(<Pcsd data={data} />, document.getElementById('app')))
