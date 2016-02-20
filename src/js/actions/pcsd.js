export function addCluster(name, nodeList){
  return {
    type: 'ADD_CLUSTER',
    payload: {name, nodeList}
  }
}
