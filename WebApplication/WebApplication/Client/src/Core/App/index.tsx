import * as React from "react";
import { Provider } from "react-redux";
import { IAppProps } from "./Interfaces";
import { AppRouter } from "../Routing/AppRouter";

export const AppContext = React.createContext({isAuthStatePath:""});
const App = (props: IAppProps) => {
    const { appStore, appHistory, routes, privateRoutes, rootUrl, isAuthStatePath } = props;
    
    return (
        <Provider store={appStore}>
            <AppContext.Provider value={{isAuthStatePath}}>
                <AppRouter history={appHistory} 
                    routes={routes} 
                    privateRoutes={privateRoutes}
                    rootUrl={rootUrl} />
                </AppContext.Provider>
        </Provider>);
};

export default App;