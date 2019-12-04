import { createAction } from "redux-actions";

/**
 * prefix GET, POST to communicate with server via saga
 * prefix WATCH to ask saga listen to me.
 * prefix SET to save in store
 */
const actionTypes = {
    GET_USER_POST_DETAIL: "GET_USER_POST_DETAIL",
    SET_USER_POST_DETAIL:"SET_USER_POST_DETAIL",
    GET_USER_POST_COMMENT: "GET_USER_POST_COMMENT",
    SET_USER_POST_COMMENT:"SET_USER_POST_COMMENT",
    GET_DELETE_POST: "GET_DELETE_POST",
    SET_DELETE_POST:"SET_DELETE_POST",
};
export default actionTypes;

export const getUserPostDetail = createAction(actionTypes.GET_USER_POST_DETAIL);
export const setUserPostDetail = createAction(actionTypes.SET_USER_POST_DETAIL);


export const getUserPostComment = createAction(actionTypes.GET_USER_POST_COMMENT);
export const setUserPostComment = createAction(actionTypes.SET_USER_POST_COMMENT);

export const getUserPostDeleted = createAction(actionTypes.GET_DELETE_POST);
export const setUserPostDeleted = createAction(actionTypes.SET_USER_POST_COMMENT);