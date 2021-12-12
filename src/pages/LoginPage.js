import React from 'react';
import { Layout, Menu,} from 'antd';
import Avatar from "antd/es/avatar/avatar";

const {Header} = Layout;

const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const LoginPage = () => {
    return (
        <Header className="header" style={header}>
            <Avatar src="https://joeschmoe.io/api/v1/random"/>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">Каталог</Menu.Item>
            </Menu>
        </Header>
    );
};


export default LoginPage;