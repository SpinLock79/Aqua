import * as React from "react";

export interface IAppRouteProps {
    exact?: boolean;
    path?: string;
    component: React.FunctionComponent<any>;
    layout: React.ComponentType<any>;
}