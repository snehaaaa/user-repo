import { AnyAction, Action } from "redux";
import { handleActions } from "redux-actions";
import actionTypes from "./actions";
import { UsersFlowReducerInterface } from "./types";

const INIT_STATE: UsersFlowReducerInterface = {
    usersList: [],
    userId:undefined
};
const Reducer = handleActions(
    {
        [actionTypes.GET_USERS]: (state, action: AnyAction) => ({
            ...state,
            isLoading: true,
            
        }),

        [actionTypes.SET_USERS]: (state, action: AnyAction) => 
        ({
            ...state,
            isLoading: false,
            usersList:
                action.payload
            
        }),
        [actionTypes.SET_USERID]: (state, action: AnyAction) => 
        ({
            ...state,
            isLoading: false,
            userId:
                action.payload
            
        }),
    },
    INIT_STATE
);

export default Reducer;
