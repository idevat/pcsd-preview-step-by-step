import React, {PropTypes} from 'react'

let ClusterList = ({clusterList, selected, onSelect}) =>
<ul>{clusterList.map(cluster =>
  <li
    key={cluster.id}
    style={{
      fontWeight: selected == cluster ? 'bold' : 'normal',
      cursor: 'pointer',
    }}
    onClick={selected == cluster ? undefined : () => onSelect(cluster)}
  >{cluster.name}</li>
)}</ul>

let clusterShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
})

ClusterList.propTypes = {
  clusterList: PropTypes.arrayOf(clusterShape).isRequired,
  selected: clusterShape,
  onSelect: PropTypes.func.isRequired,
}

export default ClusterList
