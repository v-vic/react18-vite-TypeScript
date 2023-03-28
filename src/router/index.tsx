// 路由懒加载
import React, { lazy } from 'react'
import { Navigate } from "react-router-dom"

import MenuPage1 from "../views/MenuPage1"
import MenuPage2 from "../views/MenuPage2"
import Error from "../views/Error"
// const About = lazy(() => import("../views/About"))//About页面的懒加载引入
const router = [
    {
        path: "/",
        // element: <Navigate to="/home" />//重定向到home
        element: <MenuPage1 />//重定向到home
    },{
        path: "/menupage2",
        // element: <Navigate to="/home" />//重定向到home
        element: <MenuPage2 />//重定向到home
    },
    // 重定向未定义路径的地址
    {
        path: "/error",
        element: <Error />//重定向到home
    },
    {
        path: "*",
        element: <Navigate to="/error" />//重定向到home
    },
]
export default router