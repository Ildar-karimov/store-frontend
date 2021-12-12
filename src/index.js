import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css"
import App from './App';
import AuthStore from "./store/AuthStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        auth: new AuthStore()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
