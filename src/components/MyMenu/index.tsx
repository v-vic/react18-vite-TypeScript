import React, { useState } from 'react';
import {
    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        label,
        key,
        icon,
        children,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('首页', '1', <AppstoreOutlined />, [
        getItem('首页', '/menupage1'),
        getItem('菜单 1-2', '/menupage2'),
    ]),
    getItem('表单', '2', <AppstoreOutlined />, [
        getItem('基础表单', '/MenuPage2_1'),
        getItem('分步表单', '/MenuPage2_2'),
        getItem('复杂表单', '/MenuPage2_3'),
    ]),
    getItem('表格', '3', <CalendarOutlined />,[
        getItem('基础表格', '/table'),
        getItem('编辑表格', '/edit_table'),
        getItem('表格上传', '/upload'),
    ]),
    getItem('异常', '/warn', <CalendarOutlined />,[
        getItem('403', '/warn?code=403'),
        getItem('404', '/warn?code=404'),
        getItem('500', '/warn?code=500'),
    ]),
];

const MyMenu: React.FC = () => {
    //   点击跳转对应路由
    const navigateTo = useNavigate()
    const menuclick = (e: { key: string }) => {
        navigateTo(e.key)
    }

    // 当前路由地址
    const currentRoute = useLocation()

    // 打开时根据路由定位到菜单，多级菜单显示打开状态
    let firstOpenKey: string = ""
    let subName: string = ""
    function itemMap(val: any) {
        val.forEach((item: any, index: number) => {
            if (item['key'] == currentRoute.pathname) {
                firstOpenKey = currentRoute.pathname
            }
            else if (item['children']) {
                subName = item['key']
                itemMap(item.children)
            }
        });
    }
    itemMap(items)

    // 控制多级菜单始终保持只打开一个
    const [openKeys, setOpenKeys] = useState([subName]);
    const handOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <>
            <Menu
                theme="dark"
                defaultSelectedKeys={[firstOpenKey]}
                defaultOpenKeys={openKeys}
                mode="inline"
                items={items}
                onClick={menuclick}
                openKeys={openKeys}
                onOpenChange={handOpenChange} />
        </>
    );
};

export default MyMenu;
