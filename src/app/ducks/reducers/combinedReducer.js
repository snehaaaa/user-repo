import { combineReducers } from "redux";
import UserList from "../../../userssModule/ducks/reducer";
import UserPost from "../../../userssPosts/ducks/reducer";
import UserPostDetail from "../../../userPostDetail/ducks/reducer"

const CombineReducers = combineReducers({
    UserList,
    UserPost,
    UserPostDetail
});
export default CombineReducers;
