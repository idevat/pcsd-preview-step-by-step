let defaultState = {
  next_id: 3,
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
      next_id: state.next_id + 1,
      cluster_list: [
        ...state.cluster_list,
        {id: state.next_id, name: action.payload.name}
      ]
    }
    default: return state
  }

}
export default reducer
