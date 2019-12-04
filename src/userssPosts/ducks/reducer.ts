import { AnyAction, Action } from "redux";
import { handleActions } from "redux-actions";
import actionTypes from "./actions";
import {UsersPostReducerInterface,UserPostResponseInterface} from "./types"

const INIT_STATE: UsersPostReducerInterface = {
    userPosts: [],
};
const removeProductData = (actual:UserPostResponseInterface[],formatted:any) => {
        return ( actual.filter(data => data.id !== formatted))
}
const Reducer = handleActions(
    {
        [actionTypes.GET_USER_POST]: (state, action: AnyAction) => ({
            ...state,
            isLoading: true,
            
        }),

        [actionTypes.SET_USER_POST]: (state, action: AnyAction) => 
        ({
            ...state,
            isLoading: false,
            userPosts:
                action.payload
            
        }),
        [actionTypes.REMOVE_POST]: (state, action) => {
            return {
              ...state,
              isLoading: false,
              userPosts: removeProductData(state.userPosts, action.payload)
            };
          }
    },
    INIT_STATE
);

export default Reducer;
