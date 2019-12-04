import { AnyAction, Action } from "redux";
import { handleActions } from "redux-actions";
import actionTypes from "./actions";
import {UserPostDetailReducerInterface} from "./types"

const INIT_STATE: UserPostDetailReducerInterface = {
    userPostsDetail: undefined,
    userPostComment:[],
    deleteId:undefined
};
const Reducer = handleActions(
    {
        [actionTypes.GET_USER_POST_DETAIL]: (state, action: AnyAction) => ({
            ...state,
            isLoading: true,
            
        }),

        [actionTypes.SET_USER_POST_DETAIL]: (state, action: AnyAction) => 
        ({
            ...state,
            isLoading: false,
            userPostsDetail:
                action.payload
            
        }),
        [actionTypes.GET_USER_POST_COMMENT]: (state, action: AnyAction) => ({
            ...state,
            isLoading: true,
            
        }),

        [actionTypes.SET_USER_POST_COMMENT]: (state, action: AnyAction) => 
        ({
            ...state,
            isLoading: false,
            userPostComment:
                action.payload
            
        }),
        [actionTypes.GET_DELETE_POST]: (state, action: AnyAction) => ({
            ...state,
            isLoading: true,
            deleteId:
                action.payload
            
        }),

        [actionTypes.SET_DELETE_POST]: (state, action: AnyAction) => 
        ({
            ...state,
            isLoading: false,  
        }),
    },
    INIT_STATE
);

export default Reducer;
