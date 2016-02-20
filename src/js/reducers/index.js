let defaultState = {
  next_cluster_id: 3,
  next_node_id: 6,
  cluster_list: [
    {
      id: 1,
      name: 'first',
    },
    {
      id: 2,
      name: 'second',
    }
  ],
  node_list: [
    {
      id: 1,
      cluster_id: 1,
      name: 'node a'
    },
    {
      id: 2,
      cluster_id: 1,
      name: 'node b'
    },
    {
      id: 3,
      cluster_id: 2,
      name: 'node x'
    },
    {
      id: 4,
      cluster_id: 2,
      name: 'node y'
    },
    {
      id: 5,
      cluster_id: 2,
      name: 'node z'
    },
  ]
}
let reducer = (state=defaultState, action) => {
  switch(action.type){
    case 'ADD_CLUSTER': return {
      ...state,
      next_cluster_id: state.next_cluster_id + 1,
      next_node_id: state.next_node_id + action.payload.nodeList.length,
      cluster_list: [
        ...state.cluster_list,
        {id: state.next_cluster_id, name: action.payload.name}
      ],
      node_list: [
        ...state.node_list,
        ...action.payload.nodeList.map((nodeName, i) => {return {
          id: state.next_node_id + i,
          cluster_id: state.next_cluster_id,
          name: nodeName,
        }})
      ]
    }
    default: return state
  }

}
export default reducer
