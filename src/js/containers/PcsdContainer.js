import React from 'react'
import {bindActionCreators} from 'redux'
import * as PcsdActions from '../actions/pcsd.js'

import Pcsd from '../components/Pcsd'

class PcsdContainer extends React.Component{
  unsubscribe = undefined
  state = {
    data: null
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.subscribe(
      () => this.setState({data: this.props.store.getState()})
    )
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render(){
    let {store} = this.props
    let actions = bindActionCreators(PcsdActions, store.dispatch)
    return (
      <Pcsd data={store.getState()} actions={actions}/>
    );
  }
}

export default PcsdContainer
