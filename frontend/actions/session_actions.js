import * as APIUtil from "../util/session_api_util";

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const login = (formUser) => (dispatch) => {
    APIUtil.login(formUser)
      .then(user => dispatch(receiveCurrentUser(user)),
       (err) => dispatch(receiveErrors(err.responseJSON)));
}

export const logout = () => (dispatch) => {
    APIUtil.logout()
      .then(() => dispatch(logoutCurrentUser()));
} 

export const signup = (formUser) => (dispatch) => {
    APIUtil.signup(formUser)
      .then(user => { return dispatch(receiveCurrentUser(user)) },
       (err) => dispatch(receiveErrors(err.responseJSON)));   
}

export const fetchAllUsers = () => (dispatch) => {
    APIUtil.fetchAllUsers()
      .then(users => dispatch(receiveAllUsers(users)), 
       (err) => dispatch(receiveErrors(err.responseJSON)));
}

export const fetchUser = (userId) => (dispatch) => {
    APIUtil.fetchUser(userId)
      .then(user => dispatch(receiveCurrentUser(user)),
       (err) => dispatch(receiveErrors(err.responseJSON)));
}

