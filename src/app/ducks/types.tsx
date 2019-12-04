import {UsersFlowReducerInterface} from "../../userssModule/ducks/types";
import {UsersPostReducerInterface} from "../../userssPosts/ducks/types";
import {UserPostDetailReducerInterface} from "../../userPostDetail/ducks/types";
export interface ApplicationStateInterface {
    UserList: UsersFlowReducerInterface;
    UserPost:UsersPostReducerInterface;
    UserPostDetail:UserPostDetailReducerInterface;
}