import React, {PropTypes} from 'react'

let ClusterDetail = ({cluster, nodeList, className}) => cluster
? <div className={className}>
    <h2> Cluster: {cluster.name}</h2>
    <ul>{
      nodeList
        .filter(node => node.clusterId == cluster.id)
        .map(node => <li key={node.id}>{node.name}</li>)
    }</ul>
  </div>
: <div className={className}>Select cluster</div>

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
