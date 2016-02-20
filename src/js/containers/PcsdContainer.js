import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import * as PcsdActions from '../actions/pcsd.js'
import Pcsd from '../components/Pcsd'

var mapStateToProps = state => ({
  data: state
});

var mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PcsdActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pcsd);
