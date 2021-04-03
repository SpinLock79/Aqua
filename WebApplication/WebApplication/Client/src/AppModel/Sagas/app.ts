import { takeEvery, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { IAction } from "../../Core/ActionCreator/Interfaces";
import { IShouldGoTo } from "../Actions/Interfaces/appActions";
import {actions} from "../Actions";

function* goTo(action: IAction<IShouldGoTo>) {
    const url = action.payload.url;
    const key = action.payload.key;

    yield put(push(url));
}

export function* navigation() {
    yield takeEvery(actions.appActions.shouldGoTo.type, goTo);
}