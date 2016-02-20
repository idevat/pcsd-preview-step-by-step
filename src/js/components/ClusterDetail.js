import React from 'react'

let ClusterDetail = ({cluster, nodeList}) =>
<div>
  <h2> Cluster: {cluster.name}</h2>
  <ul>{nodeList.map(node =>
    <li key={node.id}>{node.name}</li>
  )}</ul>
</div>

export default ClusterDetail
