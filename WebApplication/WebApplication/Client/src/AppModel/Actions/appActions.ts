import { actionCreator } from "../../Core/ActionCreator";
import { IShouldGoTo } from "./Interfaces/appActions";

export const appActions = {
    shouldGoTo: actionCreator<IShouldGoTo>("SHOULD_GO_TO"),
    setPath: actionCreator<string>("SET_PATH")
};