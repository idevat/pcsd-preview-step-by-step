import React, {PropTypes} from 'react'
import {Link} from 'react-router'

import ClusterDetail from './ClusterDetail'
import ClusterList from './ClusterList'
import ClusterAdd from './ClusterAdd'

class Pcsd extends React.Component{
  static propTypes = {
    data: PropTypes.shape({
      clusterList: PropTypes.array,
      nodeList: PropTypes.array,
      selectedCluster: PropTypes.number,
      isFetching: PropTypes.bool,
    }).isRequired,
    actions: PropTypes.shape({
      addCluster: PropTypes.func,
      selectCluster: PropTypes.func,
    }),
  }

  state = {
    isShowingModal: false,
  }

  handleClick = () => this.setState({isShowingModal: true})

  handleClose = () =>  this.setState({isShowingModal: false})

  handleAdd = (clusterName, nodeList) => {
    this.setState({isShowingModal: false})
    this.props.actions.addCluster(
      clusterName,
      nodeList.filter(node => node.length > 0)
    )
  }

  render(){
    let {clusterList, nodeList, selectedCluster, isFetching} = this.props.data
    let selected  = clusterList.find(cluster => cluster.id == selectedCluster)
    return (
      <div>
        <Link to='/permissions'>Permissions</Link>
        <h1>Pcsd test preview: step by step {isFetching && '(fetching...)'}</h1>
        <button onClick={this.handleClick}>+</button>
        {
          this.state.isShowingModal &&
          <ClusterAdd onClose={this.handleClose} onOk={this.handleAdd}/>
        }
        <ClusterList
          clusterList={this.props.data.clusterList}
          selected={selected}
          onSelect={cluster => this.props.actions.selectCluster(cluster.id)}
        />
        <ClusterDetail cluster={selected} nodeList={nodeList}/>
      </div>
    );
  }

}

export default Pcsd
