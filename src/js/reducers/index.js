let defaultState = {
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
  return state
}
export default reducer
