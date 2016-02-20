import React, {PropTypes} from 'react'

let ClusterDetail = ({cluster, nodeList}) =>
<div>
  <h2> Cluster: {cluster.name}</h2>
  <ul>{
    nodeList
      .filter(node => node.cluster_id == cluster.id)
      .map(node => <li key={node.id}>{node.name}</li>)
  }</ul>
</div>

let clusterShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
})

ClusterDetail.propTypes = {
  cluster: clusterShape.isRequired,
  nodeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    cluster_id: PropTypes.number,
    name: PropTypes.string,
  })),
}
export default ClusterDetail
