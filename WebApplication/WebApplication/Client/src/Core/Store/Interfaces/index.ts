import { EnhancerOptions } from "redux-devtools-extension";
import { TranslationObjects } from "react-redux-i18n";
import { Middleware } from "redux";

export interface IMiddlewares{
    devMiddlewares: Middleware[];
    productionMiddlewares: Middleware[];
}

export interface IStoreOptions{
    enhancerOptions?: EnhancerOptions,
    locale?: string,
    translationObjects?: TranslationObjects
}