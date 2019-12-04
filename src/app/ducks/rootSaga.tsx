import { all } from "redux-saga/effects";
import { watchForGetUsers } from "../../userssModule/ducks/saga";
import {watchForGetUserPost} from "../../userssPosts/ducks/saga";
import {watchForGetUserPostDetail, watchForGetUserPostComment, watchForGetUserPostDelete} from "../../userPostDetail/ducks/saga";


export default function* rootSaga() {
    yield all([
        watchForGetUsers(),
        watchForGetUserPost(),
        watchForGetUserPostDetail(),
        watchForGetUserPostComment(),
        watchForGetUserPostDelete()
    ]);
}
