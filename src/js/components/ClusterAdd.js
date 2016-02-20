import React, {PropTypes} from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class ClusterAdd extends React.Component{
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  }

  render(){
    let {onClose} = this.props
    return <ModalContainer onClose={() => onClose()}>
      <ModalDialog onClose={() => onClose()}>
        <h1>Add cluster</h1>
        <p>
          Fill cluster info...
        </p>
        <button onClick={() => onClose()}>Ok</button>
      </ModalDialog>
    </ModalContainer>
  }
}


export default ClusterAdd;
