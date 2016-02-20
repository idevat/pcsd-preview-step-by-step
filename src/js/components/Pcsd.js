import React, {PropTypes} from 'react'
import ClusterDetail from './ClusterDetail'
import ClusterList from './ClusterList'
import ClusterAdd from './ClusterAdd'

class Pcsd extends React.Component{
  static propTypes = {
    data: PropTypes.shape({
      cluster_list: PropTypes.array,
      node_list: PropTypes.array
    }).isRequired,
    actions: PropTypes.shape({
      addCluster: PropTypes.func
    }),
  }

  state = {
    selected: null,
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
    return (
      <div>
        <h1>Pcsd test preview: step by step</h1>
        <button onClick={this.handleClick}>+</button>
        {
          this.state.isShowingModal &&
          <ClusterAdd onClose={this.handleClose} onOk={this.handleAdd}/>
        }
        <ClusterList
          clusterList={this.props.data.cluster_list}
          selected={this.state.selected}
          onSelect={cluster => this.setState({selected: cluster})}
        />
        {
          this.state.selected
            ? <ClusterDetail
                cluster={this.state.selected}
                nodeList={this.props.data.node_list}
              />
            : <p>Select cluster</p>
        }
      </div>
    );
  }

}

export default Pcsd
