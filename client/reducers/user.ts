import * as types from '../constants'

interface State {
  isFetching: boolean;
  isLoggedIn: boolean;
  data: object;
}

const initialState : State = {
  isFetching: true,
  isLoggedIn: false,
  data: {}
}

export default (state : State = initialState, actions:any) : State => {
  switch(actions.type){
    case types.SIGNUP_REQUEST:
      state = {...state, isFetching:true};
      break;
    case types.SIGNUP_RECEIVED:
      state = {...state, isFetching: false};
      break;
    case types.LOGIN_REQUEST:
      state = {...state, isFetching: true};
      break;
    case types.LOGIN_RECEIVED:
      let isLoggedIn = false;
      if (actions.payload.status == 200) {
        isLoggedIn = true;
      } else {
        isLoggedIn = false;
      }
      state = {...state, isFetching: false, isLoggedIn, data: actions.payload.user};
      break;
    case types.PRESENCE_RECEIVED:
      state = {...state, isFetching: false, isLoggedIn: actions.payload.isLoggedIn, data: actions.payload.user};
      break;
    case types.LOGOUT_RECEIVED:
      state = {...state, isLoggedIn: false, data: {} };
      break;
  }
  return state;
} 
