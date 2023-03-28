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
import { useLocation,useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('菜单 1', '', <AppstoreOutlined />, [
        getItem('菜单 1-1', '/'),
        getItem('菜单 1-2', '/menupage2'),
    ]),
    getItem('菜单 2', '1', <MailOutlined />),
    getItem('菜单 3', '2', <CalendarOutlined />),
    // getItem(
    //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //         Ant Design
    //     </a>,
    //     'link',
    //     <LinkOutlined />,
    // ),
];

const MyMenu: React.FC = () => {
     //   点击跳转对应路由
     const navigateTo = useNavigate()
     const menuclick = (e: { key: string }) => {
         navigateTo(e.key)
     }
 
     // 当前路由地址
     const currentRoute = useLocation()
     console.log(123, currentRoute)
 
     // 打开时根据路由定位到菜单，多级菜单显示打开状态
     let firstOpenKey: string = ""
     let subName:string = ""
     function itemMap(val: any) {
         val.forEach((item: any, index: number) => {
             if (item['key'] == currentRoute.pathname) {
                 firstOpenKey = currentRoute.pathname
             }
             else if(item['children']){
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
