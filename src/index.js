import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css"
import App from './App';
import AuthStore from "./store/AuthStore";
import ProductStore from "./store/ProductStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        auth: new AuthStore(),
        product: new ProductStore(),
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
