import React, {PropTypes} from 'react'

import ClusterDetail from './ClusterDetail'
import ClusterList from './ClusterList'
import ClusterAdd from './ClusterAdd'
import Page from './Page'
import css from '../../stylesheets/clusterPage'
import styleable from 'react-styleable'

class ClusterPage extends React.Component{
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
      <Page>
        <section>
          <h1 className={css.mainTitle}>Manage clusters {isFetching && '(fetching...)'}</h1>
          <button className={css.action} onClick={this.handleClick}>
            create new
          </button>
          {
            this.state.isShowingModal &&
            <ClusterAdd onClose={this.handleClose} onOk={this.handleAdd}/>
          }
        </section>
        <ClusterList
          className={css.list}
          clusterList={this.props.data.clusterList}
          selected={selected}
          onSelect={cluster => this.props.actions.selectCluster(cluster.id)}
        />
        <ClusterDetail
          className={css.detail}
          cluster={selected} nodeList={nodeList}
        />
      </Page>
    );
  }

}

export default styleable(css)(ClusterPage)
