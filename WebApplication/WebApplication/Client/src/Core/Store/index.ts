import { Reducer } from "react";
import { createStore, applyMiddleware, Action} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { syncTranslationWithStore, loadTranslations, setLocale } from "react-redux-i18n";
import { IMiddlewares, IStoreOptions } from "./Interfaces";

export const getStore = (initialStates: any, 
    middlewares: IMiddlewares,
    reducers: Reducer<unknown, Action<any>>,
    storeOptions: IStoreOptions)=>{

    const envMiddlewares = (process.env["NODE_ENV"] !== "production")
            ? middlewares.devMiddlewares
            : middlewares.productionMiddlewares;

    let enhancerOptions = storeOptions.enhancerOptions || {};
    const composeEnhancers = composeWithDevTools(enhancerOptions);

    const store = createStore(reducers, initialStates, 
        composeEnhancers(applyMiddleware(...envMiddlewares)));

    if (storeOptions.locale) {
            syncTranslationWithStore(store);
            const translation: any = loadTranslations(storeOptions.translationObjects);
            const local: any = setLocale(storeOptions.locale);
            store.dispatch(translation);
            store.dispatch(local);
    }
    return  { store, envMiddlewares };
};