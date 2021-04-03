import * as React from "react";
import {INavigationProps} from "./Interfaces";

const Navigation = (props: INavigationProps) =>{
    const { title, barStyle, logo, menus } = props;
    
    const logoImg = logo 
        ? <img src={logo.src} className="d-inline-block align-middle logo" alt="" loading="lazy"/>
        : <></>;
    
    const menuItems = menus.map((menu, index) =>{       
        return  <div className={`container ${menu.className}`} key={index}>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav ml-auto">
                            { menu.menuList }
                        </ul>
                    </div>
                </div>;
    });
    
    return(<nav className={`navbar ${barStyle}`}>
        <a className="navbar-brand" href="#">
            {logoImg}
            <span style={{paddingLeft: title.paddingLeft}}>{title.text}</span>              
        </a>
        <div className="ml-auto">
            { menuItems }
        </div>                
    </nav>);
};

export default Navigation;