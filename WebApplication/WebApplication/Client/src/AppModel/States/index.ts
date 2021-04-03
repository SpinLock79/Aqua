import { IApplicationState } from "./Interfaces"
import { initMainState } from "./mainState";

export const initApplicationState = (): IApplicationState => {
    const appState: IApplicationState = {
        main: initMainState()
    }
    return appState;
};