import { AnyAction } from "redux";
import { put, takeEvery, call } from "redux-saga/effects";
import Apis from "../../app/apis";
import actionTypes, {
    setUserPostDetail,
    setUserPostComment,
    setUserPostDeleted
} from "./actions";

function* getUserPostDetail(action: AnyAction) {
    const postsDetail = yield call(Apis.postDetail, action.payload);
    if (postsDetail.status === 200) {
        yield put(setUserPostDetail(postsDetail.data));
    }
}
function* getUserPostComment(action: AnyAction) {
    const postComment = yield call(Apis.allComments, action.payload);
    if (postComment.status === 200) {
        yield put(setUserPostComment(postComment.data));
    }
}

function* getUserPostDeleted(action: AnyAction) {
    const postDelete = yield call(Apis.deletePost, action.payload);
    if (postDelete.status === 200) {
        getUserPostDeleted(action.payload)
        yield put(setUserPostDeleted(postDelete.data));
    }
}


export function* watchForGetUserPostDetail() {
    yield takeEvery(actionTypes.GET_USER_POST_DETAIL, getUserPostDetail);
}

export function* watchForGetUserPostComment() {
    yield takeEvery(actionTypes.GET_USER_POST_COMMENT, getUserPostComment);
}
export function* watchForGetUserPostDelete() {
    yield takeEvery(actionTypes.GET_DELETE_POST, getUserPostDeleted);
}
