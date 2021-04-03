import * as React from "react";
import { Route } from "react-router";
import { IAppRouteProps } from "./Interfaces/";


const AppRoute = (props: IAppRouteProps) => {

    const routeRender = (): React.ReactNode => {
        const Layout = props.layout, Component = props.component;

        return (<Layout>
            <Component path={props.path} />
        </Layout>);
    };

    return (<Route exact={props.exact} path={props.path} render={() => routeRender()} />);
};

export default AppRoute;