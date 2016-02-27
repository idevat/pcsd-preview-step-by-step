let defaultState = {
  nextClusterId: 3,
  nextNodeId: 6,
  selectedCluster: null,
  isFetching: false,
  clusterList: [],
  nodeList: []
}
let reducer = (state=defaultState, action) => {
  switch(action.type){
    case 'ADD_CLUSTER': return {
      ...state,
      nextClusterId: state.nextClusterId + 1,
      nextNodeId: state.nextNodeId + action.payload.nodeList.length,
      clusterList: [
        ...state.clusterList,
        {id: state.nextClusterId, name: action.payload.name}
      ],
      nodeList: [
        ...state.nodeList,
        ...action.payload.nodeList.map((nodeName, i) => {return {
          id: state.nextNodeId + i,
          clusterId: state.nextClusterId,
          name: nodeName,
        }})
      ]
    }
    case 'SELECT_CLUSTER': return {
      ...state,
      selectedCluster: action.payload.id,
    }
    case 'FETCH_STATE_REQUEST': return {
      ...state,
      isFetching: true,
    }
    case 'FETCH_STATE_SUCCESS': return {
      ...state,
      isFetching: false,
      clusterList: action.payload.state.clusterList,
      nodeList: action.payload.state.nodeList,
    }
    default: return state
  }

}
export default reducer
