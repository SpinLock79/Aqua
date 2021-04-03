import React from "react";

export interface INavigationProps
{
    title: INavigationTitle;
    barStyle: string;    
    logo?: INavigationLogo;
    menus: Array<INavigationMenu>;
}

export interface INavigationMenu
{
    className: string,
    menuList: Array<React.ReactNode>;
}

export interface INavigationTitle
{
    text: string;
    paddingLeft?: number;
    paddingRight?: number;
}

export interface INavigationLogo
{
    src?: string;
}