import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {auth} = useContext(Context)
    console.log(auth)
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
        </Routes>
    );
};

export default AppRouter;