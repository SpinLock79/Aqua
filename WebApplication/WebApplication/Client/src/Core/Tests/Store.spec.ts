import * as React from "react";
import { Action, Store } from "redux";
import { handleActions } from "redux-actions";
import { getStore } from "../Store";
import { IMiddlewares, IStoreOptions } from "../Store/Interfaces";
import { actionCreator } from "../ActionCreator";
import { IAction } from "../ActionCreator/Interfaces";

describe("Store", ()=>{
    const initState = {app: { text: "test"}};
    const textAction = actionCreator<string>("CHANGE_TEXT");
    const reducer = handleActions({
        [textAction.type]:{
            next: (state: any, action: IAction<string>)=>{
                var value = action.payload;
                return ({ ...state, app: { ...state.app, text: value }});
            }
        }
    }, initState);
    

    let store: Store<unknown, Action<any>>; 

    beforeEach(()=>{
        let middlewares:  IMiddlewares = {devMiddlewares: [], productionMiddlewares:[]};
        let reducers: React.Reducer<unknown, Action<any>> = reducer;
        let storeOptions: IStoreOptions = {};
        store = getStore(initState , middlewares, reducers, storeOptions).store;      
    });

    it("create",()=>{
        expect(store).not.toBeNull;
        expect(store.getState()).toEqual(initState);
    });

    it("change state",()=>{        
        store.dispatch(textAction("changed")); 
        expect(store.getState()["app"]["text"]).toEqual("changed");
    });
});