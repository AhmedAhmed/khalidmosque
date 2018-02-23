import * as types from '../constants';

interface ActionResponse {
  type: string;
  payload: object;
}

export const registerRequest = () : ActionResponse => ({type: types.SIGNUP_REQUEST, payload:{}});
export const registerReceived = (json: object): ActionResponse => ({ type: types.SIGNUP_RECEIVED, payload: json });

export const loginRequest = () : ActionResponse => ({type: types.LOGIN_REQUEST, payload:{}});
export const loginReceived = ( json: object ) : ActionResponse => ({type: types.LOGIN_RECEIVED, payload:json});

export const presenceRequest = () : ActionResponse => ({type: types.PRESENCE_REQUEST, payload:{}});
export const presenceReceived = (json: any) : ActionResponse => ({type: types.PRESENCE_RECEIVED, payload:json });

export const logoutRequest = () : ActionResponse => ({type: types.LOGOUT_REQUEST, payload:{}});
export const logoutReceived = (json: any) : ActionResponse => ({type: types.LOGOUT_RECEIVED, payload:json});

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

export const loginUser = (username: string, password: string) => (dispatch: any) => {
  dispatch(loginRequest());

  return fetch("http://"+getDomain()+"/api/auth", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({username, password})
  }).then((response:any) => response.json())
    .then( (json:any) => dispatch(loginReceived(json)) );
}

export const getPresence = (token: string) => (dispatch: any) => {
  dispatch(presenceRequest());

  return fetch("http://" + getDomain() + "/api/presence", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ token })
  }).then((response: any) => response.json())
    .then((json: any) => dispatch(presenceReceived(json)));
}

export const logoutHandler = () => (dispatch: any) => {
  dispatch(logoutRequest());

  localStorage.removeItem("token");

  dispatch(logoutReceived({
    message: "successfully logged out"
  }));
}