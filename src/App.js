import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {checkAuthToken} from "./http/authApi";
import {Skeleton} from "antd";

const App = observer(() => {
    const {auth} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkAuthToken().then(user => {
            auth.setIsAuth(true)
            auth.setUser(user.name, user.surname, user.role, user.email)
        }).finally(() => setLoading(false))
    })

    if (loading) {
        return <Skeleton active />
    }

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
