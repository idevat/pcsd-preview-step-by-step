import React from 'react'
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
    let {store, actions} = this.props
    return (
      <Pcsd data={store.getState()} actions={actions}/>
    );
  }
}

export default PcsdContainer
