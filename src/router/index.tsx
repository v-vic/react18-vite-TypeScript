// 路由懒加载
import React, { lazy } from 'react'
import { Navigate } from "react-router-dom"

import MenuPage1 from "../views/MenuPage1"
import MenuPage2 from "../views/MenuPage2"
import Home from "../views/Home"
import Error from "../views/Error"
import Login from "../views/Login"
import MenuPage2_1 from '../views/MenuPage2_1'
import MenuPage2_2 from '../views/MenuPage2_2'
import MenuPage2_3 from '../views/MenuPage2_3'
import Table_t from '../views/Table'
import Warn from '../views/Warn/warn'
import Upload_t from '../views/Upload'
import EditTable from '../views/Table/EditTable'
import { Spin } from 'antd'

// const Warn = lazy(() => import("../views/Warn/warn"))//页面的懒加载引入

// 对懒加载页面的方法进行封装 使用传参传递组件名称 ts必须定义传参类型
// const loadingComponent = (comp: JSX.Element) => (
//     <React.Suspense fallback={<div>loading...</div>}>
//         {comp}
//     </React.Suspense>
// )
const router = [
    {
        path: "/",
        element: <Navigate to="MenuPage1" />
    },
    {
        path: "/",
        // element: <Navigate to="/home" />//重定向到home
        element: <Home />,//重定向到home
        children: [
            {
                path: "/menupage1",
                element: <MenuPage1 />
            },
            {
                path: "/menupage2",
                element: <MenuPage2 />
            },
            {
                path: "/menuPage2_1",
                element: <MenuPage2_1 />
            },
            {
                path: "/menuPage2_2",
                element: <MenuPage2_2 />
            },
            {
                path: "/menuPage2_3",
                element: <MenuPage2_3 />
            },
            {
                path: "/table",
                element: <Table_t />
            },
            {
                path: "/warn",
                element: <Warn />
            },
            {
                path: "/upload",
                element: <Upload_t />
            },
            {
                path: "/edit_table",
                element: <EditTable />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    // 重定向未定义路径的地址
    {
        path: "/error",
        element: <Error />//重定向到home
    },
    {
        path: "*",
        // element: <Navigate to="/error" />//重定向到home
        element: <Error />
    },
]
export default router