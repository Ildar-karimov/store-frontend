/* eslint-disable */
import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import TopBar from "../components/TopBar";
import Layout, {Content} from "antd/es/layout/layout";
import {LOGIN_ROUTE, PRODUCTS_ROUTE} from "../utils/const-routes";
import {Button} from "antd";

const MyProfilePage = observer(() => {
    const {auth} = useContext(Context)
    const navigate = useNavigate()

    return (
        <div>
            <TopBar/>
            <Content style={{padding: 40, minHeight: "80vh"}}>
                <Button type="link" onClick={() => navigate(PRODUCTS_ROUTE)}>Назад</Button>
                <h1 className="text-xl">Данные о пользователе</h1>
                <div className="text-lg">
                    ФИО: {auth.user.name + ' ' + auth.user.surname}
                    <br/>
                    Почта: {auth.user.email}
                    <br/>
                    Роль: {auth.user.role === 'USER' ? "Клиент" : "Админ"}
                </div>
            </Content>
        </div>
    );
});


export default MyProfilePage;