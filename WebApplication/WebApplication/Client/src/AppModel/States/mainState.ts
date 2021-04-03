import { IMainState } from "./Interfaces/mainState";

export const initMainState = (): IMainState => {
    const mainState: IMainState = {
        isAuth: false,
        isBlocked: false,
        path: ""
    };
    return (mainState);
};