import * as types from '../constants'

interface State {
  isFetching: boolean;
  data: Array<any>;
}

const initialState: State = {
  isFetching: true,
  data: []
}

export default (state: State = initialState, actions: any): State => {
  switch (actions.type) {
    case types.WP_POST_REQUEST:
      state = { ...state, isFetching: actions.payload.isFetching };
      break;
    case types.WP_POST_RECEIVED:
      state = {...state, isFetching: actions.payload.isFetching, data: actions.payload.json };
      break;
  }
  return state;
} 
