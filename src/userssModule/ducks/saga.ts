import { AnyAction } from "redux";
import { put, takeEvery, call } from "redux-saga/effects";
import Apis from "../../app/apis";
import actionTypes, {
    setUsers, setUserRepo,
} from "./actions";

function* getUsers(action: AnyAction) {
    const userDetail = yield call(Apis.userDetail);
    console.log(userDetail,"userDetail")
    if (userDetail.status === 200) {
        yield put(setUsers(userDetail.data));
    }
}
function* getUsersRepo(action: AnyAction) {
    const userRepo = yield call(Apis.userRepo);
    console.log(userRepo,"userDetail")
    if (userRepo.status === 200) {
         yield put(setUserRepo(userRepo.data));
    }
}
export function* watchForGetUsers() {
    yield takeEvery(actionTypes.GET_USERS, getUsers);
}
export function* watchForUsersRepo() {
    yield takeEvery(actionTypes.GET_REPO, getUsersRepo);
}
