import React, {PropTypes} from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class ClusterAdd extends React.Component{
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onOk: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    nodeList: [
      {value: ''},
    ]
  }

  render(){
    let {onClose, onOk} = this.props
    return <ModalContainer onClose={() => onClose()}>
      <ModalDialog onClose={() => onClose()}>
        <h1>Add cluster</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="cluster-add-name">Cluster name:</label>
              </td>
              <td>
                <input type="text"
                  id="cluster-add-name"
                  value={this.state.name}
                  onChange={(e) => this.setState({name: e.target.value})}
                />
              </td>
            </tr>
            {this.state.nodeList.map((node, i) =>
              <tr key={i}>
                <td>
                  <label htmlFor={"cluster-add-node-"+i}>{
                    "Node "+(i+1)+":"
                  }</label>
                </td>
                <td>
                  <input type="text"
                    id={"cluster-add-node-"+i}
                    value={node.value}
                    onChange={(e) => {
                      let nodeList = [
                        ...this.state.nodeList.slice(0, i),
                        {value: e.target.value},
                        ...this.state.nodeList.slice(i+1),
                      ]
                      if(nodeList.length == i+1){
                        nodeList = [...nodeList, {value: ''}]
                      }
                      this.setState({nodeList: nodeList})
                    }}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button onClick={() => onOk(
          this.state.name, this.state.nodeList.map(node => node.value)
        )}>Ok</button>
      </ModalDialog>
    </ModalContainer>
  }
}

export default ClusterAdd;
