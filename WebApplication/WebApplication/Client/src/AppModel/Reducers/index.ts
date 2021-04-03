import { History } from "history";
import { combineReducers, Reducer } from "redux";
import { connectRouter } from "connected-react-router";
import { i18nReducer } from "react-redux-i18n";
import mainReducer from "./mainReducer";

const getReducers = (history: History): Reducer<unknown> => {
    return combineReducers({
        router: connectRouter(history),
        i18n: i18nReducer,
        main: mainReducer
    });
};

export default getReducers;