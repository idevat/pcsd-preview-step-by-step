import React from 'react'

let ClusterList = ({clusterList, selected, onSelect}) =>
<ul>{clusterList.map(cluster =>
  <li
    key={cluster.id}
    style={{
      fontWeight: selected == cluster ? 'bold' : 'normal',
      cursor: 'pointer',
    }}
    onClick={() => onSelect(cluster)}
  >{cluster.name}</li>
)}</ul>

export default ClusterList
