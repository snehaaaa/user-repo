import { all } from "redux-saga/effects";
import { watchForGetUsers,watchForUsersRepo } from "../../userssModule/ducks/saga";



export default function* rootSaga() {
    yield all([
        watchForGetUsers(),
        watchForUsersRepo()
    ]);
}
