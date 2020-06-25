import { createAction } from "redux-actions";

/**
 * prefix GET, POST to communicate with server via saga
 * prefix WATCH to ask saga listen to me.
 * prefix SET to save in store
 */
const actionTypes = {
    GET_USERS: "GET_USERS",
    SET_USERS: "SET_USERS",
    GET_REPO:"GET_REPO",
    SET_REPO:"SET_REPO"
};
export default actionTypes;

export const getUsers = createAction(actionTypes.GET_USERS);
export const setUsers = createAction(actionTypes.SET_USERS);
export const getUserRepo = createAction(actionTypes.GET_REPO);
export const setUserRepo = createAction(actionTypes.SET_REPO);
