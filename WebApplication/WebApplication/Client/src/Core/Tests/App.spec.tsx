import * as React from "react";
import { combineReducers } from "redux";
import { ShallowWrapper, shallow } from "enzyme";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory, History } from "history";

import App from "../App";
import { IAppProps } from "../App/Interfaces";
import { getStore } from "../Store";

let mainLayout = (props: React.PropsWithChildren<any>)=>{ 
    return(<>{props.children}</>); 
};

let mainComponent = () =>{
    return (<>main</>);
};

let pageComponent = () => {
    return (<>page</>);
};

let authComponent = () => {
    return(<>auth</>);
};

let routes = [
    { exact: true, path: "/", 
        layout: mainLayout, component: mainComponent},
    { exact: false, path: "/page", 
        layout: mainLayout, component: pageComponent }
];

let privateRoutes = [
    { exact: false, path: "/auth", 
        layout: mainLayout, component: authComponent, redirect : "/"}
];

let wrapper: ShallowWrapper;
let browserHistory: History;

const initAppProps = (state: any) =>{
    browserHistory = createBrowserHistory({});
    let reducers = combineReducers({router: connectRouter(browserHistory)});
    let router = routerMiddleware(browserHistory);
    let storeAndMiddlewares = getStore({} , { productionMiddlewares: [router], devMiddlewares:[router] }, reducers, {});
    const appProps: IAppProps ={
            appHistory: browserHistory,
            appStore: storeAndMiddlewares.store,
            routes,
            privateRoutes,
            rootUrl: "/",
            isAuthStatePath: "app.isAuth"
        };
        wrapper = shallow(<App {...appProps}/>);
};

describe("App. Not Authenticated", () => {

    beforeEach(()=>{
        let state = {app:{isAuth: false}};        
        initAppProps(state);        
    });

    it("Render", ()=>{
        expect(wrapper).not.toBeNull;
        expect(wrapper.html()).toEqual("main");
    });

    it("Change location",()=>{
        browserHistory.push("page");
        setTimeout(()=>{
            expect(browserHistory.location.pathname).toBe("/page");
            expect(wrapper.html()).toEqual("page");
        }, 0);
    });

    it("Invalid path",()=>{
        browserHistory.push("help");
        expect(browserHistory.location.pathname).toBe("/help");
        
        setTimeout(()=>{
            expect(browserHistory.location.pathname).toBe("/");
            expect(wrapper.html()).toEqual("main");
        }, 0);  
    });

    it("Not authenticated",()=>{
        browserHistory.push("auth");
        expect(browserHistory.location.pathname).toBe("/auth");
        
        setTimeout(()=>{
            expect(browserHistory.location.pathname).toBe("/");
            expect(wrapper.html()).toEqual("main");
        }, 0);  
    });
});

describe("App. Authenticated", () => {
    beforeEach(()=>{
        let state = {app:{isAuth: true}};        
        initAppProps(state);        
    });

    it("Authenticated",()=>{
        browserHistory.push("auth");
        expect(browserHistory.location.pathname).toBe("/auth");
        
        setTimeout(()=>{
            expect(browserHistory.location.pathname).toBe("/auth");
            expect(wrapper.html()).toEqual("auth");
        }, 0);  
    });
});