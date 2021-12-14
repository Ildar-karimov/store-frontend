/* eslint-disable */
import React, {useContext, useState} from 'react';
import {Alert, AutoComplete, Button, Form, Input, Layout} from 'antd';
import Avatar from "antd/es/avatar/avatar";
import {Content} from "antd/es/layout/layout";
import {NavLink, useNavigate } from "react-router-dom";
import {PRODUCTS_ROUTE, REGISTRATION_ROUTE} from "../utils/const-routes";
import {login} from "../http/authApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import TopBar from "../components/TopBar";
import ReactDOM from "react-dom";
import App from "../App";

const LoginPage = observer(() => {
    const {auth} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState('1234')
    const [password, setPassword] = useState('')

    const logIn = async () => {
        let user
        try {
            user = await login(email, password)
            auth.setIsAuth(true)
            auth.setUser(user)
            alert("Добро пожаловать!")
            navigate(PRODUCTS_ROUTE)
        }catch (e) {
            alert(e.response?.data?.message)
        }
    }

    return (
        <div>
            <TopBar/>
            <Content className="flex justify-center pt-20">
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Логин"
                        name="username"
                        rules={[{required: true, message: 'Введите ваш email'}]}
                    >
                        <Input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{required: true, message: 'Введите пароль'}]}
                    >
                        <Input.Password
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    <NavLink className="block text-center mb-4" to={REGISTRATION_ROUTE}>Регистрация</NavLink>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={logIn}
                        >
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </div>

    );
});


export default LoginPage;