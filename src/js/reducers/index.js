let defaultState = {
  nextClusterId: 3,
  nextNodeId: 6,
  selectedCluster: null,
  clusterList: [
    {
      id: 1,
      name: 'first',
    },
    {
      id: 2,
      name: 'second',
    }
  ],
  nodeList: [
    {
      id: 1,
      clusterId: 1,
      name: 'node a'
    },
    {
      id: 2,
      clusterId: 1,
      name: 'node b'
    },
    {
      id: 3,
      clusterId: 2,
      name: 'node x'
    },
    {
      id: 4,
      clusterId: 2,
      name: 'node y'
    },
    {
      id: 5,
      clusterId: 2,
      name: 'node z'
    },
  ]
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
    default: return state
  }

}
export default reducer
