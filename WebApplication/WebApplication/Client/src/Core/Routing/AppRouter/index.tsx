import * as React from "react";
import { Switch } from "react-router";
import { ConnectedRouter as Router } from "connected-react-router";

import { IAppRouterProps } from "./Interfaces/";
import { IAppRouteProps } from "../AppRoute/Interfaces/";
import { IAppPrivateRouteProps } from "../AppPrivateRoute/Interfaces/";
import AppRoute from "../AppRoute";
import AppPrivateRoute from "../AppPrivateRoute";
import AppNoMatchRoute from "../AppNoMatchRoute";

export const AppRouter = (props: IAppRouterProps) => {

    const addRoutes = (routes: Array<IAppRouteProps>, 
            privateRoutes: Array<IAppPrivateRouteProps>, 
            rootUrl: string): Array<React.ReactElement<IAppRouteProps>> => {
        const result: Array<React.ReactElement<IAppRouteProps>> = [];

        let n = 0;
        let len = routes.length;
        for (let i = 0; i < len; i++ , n += i) {
            const route: IAppRouteProps = routes[i];
            const routeComponent =
                <AppRoute key={n} exact={route.exact} path={route.path} layout={route.layout}
                    component={route.component} />;
            result.push(routeComponent);
        }

        len = privateRoutes.length;
        for (let i = 0; i < len; i++ , n += i) {
            const route: IAppPrivateRouteProps = privateRoutes[i];
            const routeComponent =
                <AppPrivateRoute 
                key={n} 
                exact={route.exact} 
                path={route.path} 
                layout={route.layout}
                component={route.component} 
                redirect={route.redirect}
                />;
            result.push(routeComponent);
        }
        const noMatch = <AppNoMatchRoute key={19998} redirect={rootUrl} />;
        result.push(noMatch);

        return result;
    };

    const routeElements = addRoutes(props.routes, props.privateRoutes, props.rootUrl);    
    return (
        <Router history={props.history}>
            <Switch>{...routeElements}</Switch>
        </Router>);
};