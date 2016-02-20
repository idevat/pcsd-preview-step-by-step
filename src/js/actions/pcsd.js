export function addCluster(name, nodeList){
  return {
    type: 'ADD_CLUSTER',
    payload: {name, nodeList}
  }
}
export function selectCluster(id){
  return {
    type: 'SELECT_CLUSTER',
    payload: {id}
  }
}
