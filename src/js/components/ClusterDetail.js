import React, {PropTypes} from 'react'

let ClusterDetail = ({cluster, nodeList}) => cluster
? <div>
    <h2> Cluster: {cluster.name}</h2>
    <ul>{
      nodeList
        .filter(node => node.clusterId == cluster.id)
        .map(node => <li key={node.id}>{node.name}</li>)
    }</ul>
  </div>
: <p>Select cluster</p>

let clusterShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
})

ClusterDetail.propTypes = {
  cluster: clusterShape,
  nodeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    clusterId: PropTypes.number,
    name: PropTypes.string,
  })),
}
export default ClusterDetail
