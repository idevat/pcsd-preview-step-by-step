import React from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

let ClusterAdd = ({onClose}) =>
<ModalContainer onClose={() => onClose()}>
  <ModalDialog onClose={() => onClose()}>
    <h1>Add cluster</h1>
    <p>
      Fill cluster info...
    </p>
    <button onClick={() => onClose()}>Ok</button>
  </ModalDialog>
</ModalContainer>

export default ClusterAdd;
