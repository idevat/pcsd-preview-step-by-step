import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import {addCluster, selectCluster} from '../actions/pcsd.js'
import ClusterPage from '../components/ClusterPage'

var mapStateToProps = state => ({
  data: state.clusters
});

var mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {addCluster, selectCluster},
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClusterPage);
