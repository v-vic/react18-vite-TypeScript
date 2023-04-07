import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Watermark } from 'antd';
import "./index.module.css"
import MyMenu from "../../components/MyMenu"
import { Outlet, useRoutes } from 'react-router-dom';
import router from "../../router"
import HeaderAvatar from "../../components/HeaderAvatar"

const { Header, Sider, Content } = Layout;

const MyLayout: React.FC = () => {
    const outlet = useRoutes(router)

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{
            // width: '100vw',
            height: '100vh'
        }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <MyMenu />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: "0 30px", background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '42px' }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <HeaderAvatar></HeaderAvatar>
                </Header>
                <Watermark content="v_vic" style={{width:'100%'}}>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: '90vh',
                            background: colorBgContainer,
                            width: 'calc(100% - 32px)'
                        }}
                    >
                        <Outlet></Outlet>
                    </Content>
                </Watermark>
            </Layout>
        </Layout>
    );
};

export default MyLayout;