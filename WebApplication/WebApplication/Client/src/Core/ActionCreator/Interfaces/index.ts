export interface IAction<T> {
	readonly type: string;
	readonly payload: T;
}

export interface IActionCreator<T> {
	readonly type: string;
	(payload: T): IAction<T>;
}