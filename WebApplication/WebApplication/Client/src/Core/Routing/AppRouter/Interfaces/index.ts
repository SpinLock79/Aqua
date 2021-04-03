import { History } from "history"
import { IAppRouteProps } from "../../AppRoute/Interfaces";
import { IAppPrivateRouteProps } from "../../AppPrivateRoute/Interfaces";

export interface IAppRouterProps {
    history: History;
    routes: Array<IAppRouteProps>;
    privateRoutes: Array<IAppPrivateRouteProps>;
    rootUrl: string;
}