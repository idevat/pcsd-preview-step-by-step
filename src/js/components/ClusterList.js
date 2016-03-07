import React, {PropTypes} from 'react'
import css from '../../stylesheets/clusterList'
import styleable from 'react-styleable'

let ClusterList = ({clusterList, selected, onSelect, css, className}) =>
<section className={className}>
  <ul >{clusterList.map(cluster => selected == cluster
    ? <li key={cluster.id} className={css.selected}>{cluster.name}</li>
    : <li key={cluster.id} className={css.item} onClick={() => onSelect(cluster)}>
        {cluster.name}
      </li>
  )}</ul>
</section>

let clusterShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
})

ClusterList.propTypes = {
  clusterList: PropTypes.arrayOf(clusterShape).isRequired,
  selected: clusterShape,
  onSelect: PropTypes.func.isRequired,
}

export default styleable(css)(ClusterList)
