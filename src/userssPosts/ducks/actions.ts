import { createAction } from "redux-actions";

const actionTypes = {
    GET_USER_POST: "GET_USER_POST",
    SET_USER_POST:"SET_USER_POST",
    REMOVE_POST:"REMOVE_POST"
};
export default actionTypes;

export const getUserPost = createAction(actionTypes.GET_USER_POST);
export const setUserPost = createAction(actionTypes.SET_USER_POST);
export const removePost = createAction(actionTypes.REMOVE_POST);


