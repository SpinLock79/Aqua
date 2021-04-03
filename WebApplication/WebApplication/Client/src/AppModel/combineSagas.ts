import { all, fork } from "redux-saga/effects";
import { navigation } from "./Sagas/app";

export default function* () {
    yield all([
        fork(navigation)
    ]);
}