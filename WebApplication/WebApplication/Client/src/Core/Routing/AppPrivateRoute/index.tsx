import * as React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { IAppPrivateRouteProps } from "./Interfaces/";
import { ArrayFromDotNotation } from "../../Utils";
import { AppContext } from "../../App";

const AppPrivateRoute = (props: IAppPrivateRouteProps) => {

    const RouteRender = (): React.ReactNode => {
        const Layout = props.layout, Component = props.component;
        const body = <Component path={props.path} {...props} />;

        let appContext = React.useContext(AppContext)

        const authPathArray: Array<string> = ArrayFromDotNotation(appContext.isAuthStatePath);
        const app = useSelector((state: unknown) => state[authPathArray[0]]);

        const render = app[authPathArray[1]]
            ? <Layout>{body}</Layout>
            : <Redirect to={{ pathname: props.redirect }} />;
        return (render);
    };

    return (<Route exact={props.exact} path={props.path} render={() => RouteRender()} />);
};

export default AppPrivateRoute;