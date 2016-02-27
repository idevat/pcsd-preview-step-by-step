let defaultState = {
  selectedCluster: null,
  isFetching: false,
  clusterList: [],
  nodeList: []
}
let reducer = (state=defaultState, action) => {
  switch(action.type){
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
