import { createAction } from "redux-actions";

/**
 * prefix GET, POST to communicate with server via saga
 * prefix WATCH to ask saga listen to me.
 * prefix SET to save in store
 */
const actionTypes = {
    GET_USERS: "GET_USERS",
    SET_USERS: "SET_USERS",
    SET_USERID:"SET_USERID"
};
export default actionTypes;

export const getUsers = createAction(actionTypes.GET_USERS);
export const setUsers = createAction(actionTypes.SET_USERS);
export const setUserId = createAction(actionTypes.SET_USERID);