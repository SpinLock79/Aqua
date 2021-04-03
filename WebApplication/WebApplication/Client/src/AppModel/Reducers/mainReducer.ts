import { handleActions } from "redux-actions";
import { actions } from "../Actions";
import { IAction } from "../../Core/ActionCreator/Interfaces";
import { IMainState } from "../States/Interfaces/mainState";
import { initMainState } from "../States/mainState";

const mainReducer = handleActions({
    [actions.appActions.setPath.type]: {
        next: (state: IMainState, action: IAction<string>) => {
            let value = action.payload;
            return ({ ...state, path: value });
        }
    }
}, initMainState());

export default mainReducer;