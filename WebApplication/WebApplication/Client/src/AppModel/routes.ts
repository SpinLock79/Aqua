import { IAppPrivateRouteProps } from "Core/Routing/AppPrivateRoute/Interfaces";
import { IAppRouteProps } from "Core/Routing/AppRoute/Interfaces";
import { urls } from "./urls";
import MainLayout from "./UI/Layouts/Main";
import MainPage from "./UI/Pages/Main";

export const routes: Array<IAppRouteProps> = [
    { exact: true, path: urls.rootUrl, layout: MainLayout, component: MainPage }
];
export const privateRoutes: Array<IAppPrivateRouteProps> = [];