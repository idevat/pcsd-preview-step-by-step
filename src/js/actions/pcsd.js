import fetch from 'isomorphic-fetch'

function fetchStateRequest(){
  return {
    type: 'FETCH_STATE_REQUEST',
  }
}

function fetchStateSuccess(state){
  return {
    type: 'FETCH_STATE_SUCCESS',
    payload: {state}
  }
}

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

export function loadState(){
  return (dispatch) => {
    dispatch(fetchStateRequest());
    fetch('/get-all')
      .then(response => response.json())
      .then(payload => {
        dispatch(fetchStateSuccess(payload.state))
      })
  };
}
