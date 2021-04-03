import * as React from "react";
import { Route, Redirect } from "react-router";
import { IAppNoMatchRouteProps } from "./Interfaces/";

const AppNoMatchRoute = (props: IAppNoMatchRouteProps) => {
    const routeRender = (): React.ReactNode => {
        const render = <Redirect to={{ pathname: props.redirect }} />;
        return (render);
    };

    return (<Route render={() => routeRender()} />);
}

export default AppNoMatchRoute;