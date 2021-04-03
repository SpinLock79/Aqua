import * as React from "react";
import { render } from "react-dom";
import { createBrowserHistory, BrowserHistoryBuildOptions, History } from "history";
import { SagaMiddleware } from "@redux-saga/core";
import App from "./Core/App";
import { IAppProps } from "./Core/App/Interfaces";
import { getStore } from "./Core/Store";
import { routes, privateRoutes} from "./AppModel/routes";
import getReducers from "./AppModel/Reducers";
import { IStoreOptions } from "./Core/Store/Interfaces";
import getMiddlewares from "./AppModel/middlewares";
import { initApplicationState } from "./AppModel/States";
import { translationObjects } from "./AppModel/Translation";
import { urls } from "./AppModel/urls";

import "./AppModel/UI/Styles/index.scss";
import combineSagas from "./AppModel/combineSagas";

const renderApp = () => {
    let baseUrl = document.getElementsByTagName("base")[0]?.getAttribute("href") || "";
    let historyOptions: BrowserHistoryBuildOptions = { basename: baseUrl };
    let appHistory: History = createBrowserHistory(historyOptions);

    let initState = initApplicationState();
    let middlewares = getMiddlewares(appHistory);
    let reducers = getReducers(appHistory);
    let storeOptions: IStoreOptions = { locale: "ru", translationObjects };
    let storeAndMiddlewares = getStore(initState, middlewares, reducers, storeOptions);

    let sagaMiddleware: SagaMiddleware<object> = storeAndMiddlewares.envMiddlewares[1] as any;
    if (sagaMiddleware){
        sagaMiddleware.run(combineSagas);
    }

    const appProps: IAppProps ={
        appHistory: appHistory,
        appStore: storeAndMiddlewares.store,
        routes,
        privateRoutes,
        rootUrl: urls.rootUrl,
        isAuthStatePath: "main.isAuth"
    };
    const rootNode: HTMLElement = document.getElementById("app");
    render(<App{...appProps}/>, rootNode);
};

renderApp();