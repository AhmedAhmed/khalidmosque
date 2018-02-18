import * as types from '../constants';

interface ActionResponse {
  type: string;
  payload: object;
}

export const registerRequest = () : ActionResponse => ({type: types.SIGNUP_REQUEST, payload:{}});
export const registerReceived = (json: object): ActionResponse => ({ type: types.SIGNUP_RECEIVED, payload: json });

const getDomain = () => {
  var domain = window.location.hostname;
  var port = window.location.port;

  return domain + (port != "") ? domain + ":" + port : domain;
}

export const registerUser = (name: string, email:string, username:string, password:string, roles: string) => (dispatch:any) => {
  dispatch(registerRequest());

  return fetch("http://"+getDomain()+"/api/users/create", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method:"POST",
    body: JSON.stringify({ name, email, username, password, roles })
  }).then(response => response.json())
    .then(json => dispatch(registerReceived(json)));
}