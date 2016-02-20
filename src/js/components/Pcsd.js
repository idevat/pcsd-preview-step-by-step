import React from 'react'
import ClusterDetail from './ClusterDetail'
import ClusterList from './ClusterList'

class Pcsd extends React.Component{
  state = {
    selected: null,
  }

  render(){
    return (
      <div>
        <h1>Pcsd test preview: step by step</h1>
        <ClusterList
          clusterList={this.props.data.cluster_list}
          selected={this.state.selected}
          onSelect={cluster => this.setState({selected: cluster})}
        />
        {
          this.state.selected
            ? <ClusterDetail
                cluster={this.state.selected}
                nodeList={this.props.data.node_list.filter(node =>
                  node.cluster_id == this.state.selected.id
                )}
              />
            : <p>Select cluster</p>
        }
      </div>
    );
  }

}

export default Pcsd
