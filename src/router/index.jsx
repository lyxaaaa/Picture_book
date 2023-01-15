import { Navigate } from "react-router-dom";
import M_layout from "../Components/M_layout"
import P_layout from "../Components/P_layout"
import About from "../pages/about"
import Community from "../pages/community"
import Mall from "../pages/mall"
import Contact from "../pages/contact"
import P_Main from "../pages/P_Main"
import M_Main from "../pages/M_Main"
import Library from "../pages/Library"
import Login from "../pages/Login"

// 注册路由表
const router = [
    {
        path: '/',
        element: <Navigate to="login" />//默认跳转
    },
    {path:"/login",element:<Login />},
    {//绘本馆 M
        path:"/manager",
        element:<M_layout />,
        children:[
            {path:"",element:<Navigate to="homepage" />},
            {path:"homepage",element:<M_Main />},//首页
            {path:"about",element:<About />},//关于我们
            {path:"contact",element:<Contact />},//联系我们
        ]
    },
    {//家长 P
        path:"/parent",
        element:<P_layout />,
        children:[
            {path:"",element:<Navigate to="homepage" />},
            {path:"homepage",element:<P_Main />},//首页
            {path:"library",element:<Library />},//绘本馆
            {path:"community",element:<Community />},//社区
            {path:"mall",element:<Mall />},//商城
            {path:"about",element:<About />},//关于我们
            {path:"contact",element:<Contact />},//联系我们
        ]
    },
    
]
export default router