import * as React from "react";

export interface IAppPrivateRouteProps {
    exact?: boolean;
    path?: string;
    component: React.ComponentType<any>;
    layout: React.ComponentType<any>;
    redirect: string;
}