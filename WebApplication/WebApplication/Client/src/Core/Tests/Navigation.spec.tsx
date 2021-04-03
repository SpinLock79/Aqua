import * as React from "react";
import {Provider} from "react-redux";
import {shallow, ShallowWrapper} from "enzyme";
import Navigation from "../UI-Components/Navigation";
import {INavigationProps} from "../UI-Components/Navigation/Interfaces";
import {IMenuItem} from "../UI-Components/Navigation/Interfaces/menu";
import CreateMenuItems from "../UI-Components/Navigation/menuUtil";
import {createBrowserHistory} from "history";
import {combineReducers} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {getStore} from "../Store";


let wrapper: ShallowWrapper;
let menu: Array<IMenuItem> = [
    { text: "test", url: "href", key: 0 }
];

const initProps = () => {
    let menuList: Array<React.ReactNode> = CreateMenuItems(menu);
    let props:INavigationProps= {
        title : {
            text : "test",
            paddingLeft: 33
        },
        barStyle: "barStyle",
        logo: {
            src : "src"
        },
        menus: [{ className: "", menuList: menuList }]
    };
    let browserHistory = createBrowserHistory({});
    let reducers = combineReducers({router: connectRouter(browserHistory)});
    let router = routerMiddleware(browserHistory);
    let storeAndMiddlewares = getStore({} , { productionMiddlewares: [router], devMiddlewares:[router] }, reducers, {});

    wrapper = shallow(<Provider store={storeAndMiddlewares.store}><Navigation {...props}/></Provider>);
};

describe("Navigation", ()=>{
    beforeEach(()=>{
        initProps();
    });
    
    it ("Render", () => {
        expect(wrapper).not.toBeNull;
        expect(wrapper.html()).toEqual("<nav class=\"navbar barStyle\">" +
            "<a class=\"navbar-brand\" href=\"#\">" +
            "<img src=\"src\" class=\"d-inline-block align-middle logo\" alt=\"\" loading=\"lazy\"/>" +
            "<span style=\"padding-left:33px\">test</span>" +
            "</a>" +
            "<div class=\"ml-auto\">" +
            "<div class=\"container \">" +
            "<div class=\"collapse navbar-collapse\">" +
            "<ul class=\"nav navbar-nav ml-auto\">" +
            "<li class=\"nav-item\">" +
            "<button class=\"btn\">" +
            "<span>test</span>" +
            "</button>" +
            "</li>" +
            "</ul>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</nav>");
    });
});