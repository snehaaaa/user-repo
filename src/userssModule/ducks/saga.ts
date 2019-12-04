import { AnyAction } from "redux";
import { put, takeEvery, call } from "redux-saga/effects";
import Apis from "../../app/apis";
import actionTypes, {
    setUsers,
} from "./actions";

function* getUsers(action: AnyAction) {
    const themes = yield call(Apis.allUsers, action.payload);
    console.log(themes,"themes")
    if (themes.status === 200) {
        yield put(setUsers(themes.data));
    }
}
export function* watchForGetUsers() {
    yield takeEvery(actionTypes.GET_USERS, getUsers);
}
