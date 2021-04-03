import { History } from "history";
import { Middleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { LOCATION_CHANGE, routerMiddleware } from "connected-react-router";
import { IMiddlewares } from "Core/Store/Interfaces";
import { actions } from "./Actions";

const appMiddleware = () => {
    return (store) => (next) => (action): Middleware => {
        switch (action.type){
            case LOCATION_CHANGE:
                {
                    if (store && action.payload.location) {
                        const pathName = action.payload.location.pathname.toLowerCase();
                        store.dispatch(actions.appActions.setPath(pathName));
                    }
                    break;
                }
        }
        return next(action);
    };
};

const getMiddlewares = (history: History) => {
    let router = routerMiddleware(history);
    let sagaMiddleware = createSagaMiddleware();
    let applicationMiddleware = appMiddleware();

    let devMiddlewares = [router, sagaMiddleware, thunkMiddleware, applicationMiddleware];
    let productionMiddlewares = [router, sagaMiddleware, thunkMiddleware, applicationMiddleware];
    
    let middlewares: IMiddlewares = { productionMiddlewares, devMiddlewares };
    return(middlewares);
};

export default getMiddlewares;