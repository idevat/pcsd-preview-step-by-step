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
  node_list: [
    {
      id: 1,
      cluster_id: 1,
      name: 'node a'
    },
    {
      id: 2,
      cluster_id: 1,
      name: 'node b'
    },
    {
      id: 3,
      cluster_id: 2,
      name: 'node x'
    },
    {
      id: 4,
      cluster_id: 2,
      name: 'node y'
    },
  ]
}

domready(() => ReactDOM.render(<Pcsd data={data} />, document.getElementById('app')))
