import { IActionCreator, IAction } from "./Interfaces";

export const actionCreator = <T>(type: string): IActionCreator<T> =>
Object.assign((payload: T): any => ({ type: type, payload }), { type: type });

export const isType = <T>(action: IAction<any>, actionCreator: IActionCreator<T>):
	action is IAction<T> => action.type === actionCreator.type;