import { Store } from "redux";
import { History } from "history";
import { IAppRouteProps } from "../../Routing/AppRoute/Interfaces";
import { IAppPrivateRouteProps } from "../../Routing/AppPrivateRoute/Interfaces";

export interface IAppProps{
    appStore: Store<unknown>;
    appHistory: History;
    routes: Array<IAppRouteProps>;
    privateRoutes: Array<IAppPrivateRouteProps>;
    rootUrl: string;
    isAuthStatePath: string;
}