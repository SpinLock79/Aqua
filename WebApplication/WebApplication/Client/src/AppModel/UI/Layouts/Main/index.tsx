import * as React from "react";
import { useSelector } from "react-redux";
import { I18n } from "react-redux-i18n";
import { IApplicationState } from "../../../States/Interfaces";
import { IMainLayoutProps } from "./Interfaces";
import Navigation from "../../../../Core/UI-Components/Navigation";
import { INavigationProps } from "../../../../Core/UI-Components/Navigation/Interfaces";
import CreateMenuItems from "../../../../Core/UI-Components/Navigation/menuUtil";
import { } from "../../../menus";

const MainLayout = (props: React.PropsWithChildren<IMainLayoutProps>): 
    React.ReactElement<React.PropsWithChildren<IMainLayoutProps>> => {
    let main = useSelector((state: IApplicationState) => state.main);

    const navigationProps: INavigationProps = {
        title:{
            text: I18n.t("header.title"),
            paddingLeft: 50
        },
        barStyle: "navbar-expand-lg navbar-dark bg-dark",
        logo:{
            src: "logo.svg"
        },
        menus: []
    };

    let isLoading = main.isBlocked;
    return (<div>
                <Navigation {...navigationProps}/>
                <div className="container-fluid main-container">
                    {props.children}
                </div>
            </div>);
};

export default MainLayout;