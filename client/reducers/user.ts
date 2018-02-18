import * as types from '../constants'

interface State {
  isFetching: boolean;
  user: Array<any>
}

const initialState : State = {
  isFetching:false,
  user: []
}

export default (state : State = initialState, actions:any) : State => {
  switch(actions.type){
    case types.SIGNUP_REQUEST:
      state = {...state, isFetching:true};
      break;
    case types.SIGNUP_RECEIVED:
      state = {...state, isFetching: false, user: actions.payload.user};
      break;
  }
  return state;
} 