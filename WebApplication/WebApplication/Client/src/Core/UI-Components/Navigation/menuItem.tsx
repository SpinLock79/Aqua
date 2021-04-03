import * as React from "react";
import {Translate} from "react-redux-i18n";
import {useDispatch} from "react-redux";
import {actions} from "../../../AppModel/Actions";
import {IShouldGoTo} from "../../../AppModel/Actions/Interfaces/appActions";
import {INavigationMenuItem} from "./Interfaces/navigationMenuItem";

const NavigationMenuItem = (props: INavigationMenuItem) => {
    const dispatch = useDispatch();
    const { item } = props;
    return(<li className="nav-item">
        <button className="btn" onClick={() => {
            dispatch(actions.appActions.shouldGoTo({ url: item.url, key: item.key } as IShouldGoTo));}}>
            <Translate value={item.text} />
        </button>
    </li>);
}

export default NavigationMenuItem;