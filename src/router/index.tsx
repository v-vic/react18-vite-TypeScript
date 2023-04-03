// 路由懒加载
import React, { lazy } from 'react'
import { Navigate } from "react-router-dom"

import MenuPage1 from "../views/MenuPage1"
import MenuPage2 from "../views/MenuPage2"
import Home from "../views/Home"
import Error from "../views/Error"
import Login from "../views/Login"
// const About = lazy(() => import("../views/About"))//About页面的懒加载引入

// 对懒加载页面的方法进行封装 使用传参传递组件名称 ts必须定义传参类型
// const loadingComponent = (comp: JSX.Element) => (
//     <React.Suspense fallback={<div>Loading...</div>}>
//         {comp}
//     </React.Suspense>
// )
const router = [
    {
        path: "/",
        // element: <Navigate to="/home" />//重定向到home
        element: <Navigate to="MenuPage1" />//重定向到home
    }, 
    {
        path: "/",
        // element: <Navigate to="/home" />//重定向到home
        element: <Home />,//重定向到home
        children:[
            {
                path: "/menupage1",
                // element: <Navigate to="/home" />//重定向到home
                element: <MenuPage1 />//重定向到home
            },
            {
                path: "/menupage2",
                // element: <Navigate to="/home" />//重定向到home
                element: <MenuPage2 />//重定向到home
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
        element:<Error />
    },
]
export default router