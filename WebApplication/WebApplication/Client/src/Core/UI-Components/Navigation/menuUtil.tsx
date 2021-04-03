import * as React from "react";
import {IMenuItem} from "./Interfaces/menu";
import {INavigationMenuItem} from "./Interfaces/navigationMenuItem";
import NavigationMenuItem from "./menuItem";

const CreateMenuItems = (menu: Array<IMenuItem>): Array<React.ReactNode> => {    
    const nodeArray: Array<React.ReactNode> = menu.map((item:IMenuItem, index:number)=>{
        let props: INavigationMenuItem = {            
            item
        };
        return (<NavigationMenuItem {...props} key={index}/>);
    });
    return (nodeArray);
};

export default CreateMenuItems;