import { AnyAction } from "redux";
import { put, takeEvery, call } from "redux-saga/effects";
import Apis from "../../app/apis";
import actionTypes, {
    setUserPost,
} from "./actions";

function* getUserPost(action: AnyAction) {
    const posts = yield call(Apis.allUserPost, action.payload);
    if (posts.status === 200) {
        yield put(setUserPost(posts.data));
    }
}
export function* watchForGetUserPost() {
    yield takeEvery(actionTypes.GET_USER_POST, getUserPost);
}
