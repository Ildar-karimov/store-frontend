import React, {useContext} from 'react';
import Avatar from "antd/es/avatar/avatar";
import {AutoComplete, Button} from "antd";
import {Header} from "antd/es/layout/layout";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/const-routes";

const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
}

const TopBar = observer(() => {
    const {auth} = useContext(Context)
    const navigate = useNavigate()
    const logOut = () => {
        auth.setUser({})
        auth.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTE)
    }

    return (
        <Header className="header" style={header}>
            <Avatar src="https://joeschmoe.io/api/v1/random"/>
            <AutoComplete
                className="w-2/5"
                placeholder="Введите для поиска товаров"
            />
            {auth.isAuth ?
                <div>
                    <Avatar src="https://joeschmoe.io/api/v1/random"/>
                    <span style={{marginLeft: '5px', color: 'white'}}>Ильдар Каримов</span>
                    <Button type="link" onClick={() => logOut()}>Выйти</Button>
                </div>
                :
                <div>
                    <Button type="link" onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                </div>
            }

        </Header>
    );
});

export default TopBar;