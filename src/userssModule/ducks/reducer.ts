import { AnyAction, Action } from "redux";
import { handleActions } from "redux-actions";
import actionTypes from "./actions";
import { UsersFlowReducerInterface } from "./types";

const INIT_STATE: UsersFlowReducerInterface = {
    usersList: [],
   
    repoList:[]
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
        [actionTypes.GET_REPO]: (state, action: AnyAction) => 
        ({
            ...state,
            repoList:
                action.payload
            
        }),
       
    },
    INIT_STATE
);

export default Reducer;
