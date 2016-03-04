import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import {addCluster, selectCluster} from '../actions/pcsd.js'
import Pcsd from '../components/Pcsd'

var mapStateToProps = state => ({
  data: state.pcsd
});

var mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {addCluster, selectCluster},
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pcsd);
