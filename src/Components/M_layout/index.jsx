import React, { useState } from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import './index.css'

export default function M_layout() {

    function computedName({isActive}){
        return isActive?'item active':'item';
    }

    return(
        <div className="p-container">
            <div className="p-header">
                <div className="header-left">
                    <div className="header-logo">
                        <img src="https://s2.loli.net/2023/01/09/AvMyasq3f1OGVj8.png" alt="" />
                    </div>
                    <div className='header-title'>读具绘眼</div>
                    <div className="header-word">阅读点亮童年</div>
                </div>
                <div className="header-right">
                    <ul className='right-nav'>
                        <li><NavLink className={computedName} to="/manager/homepage">首页</NavLink></li>
                        <li><NavLink className={computedName} to="/manager/about">关于我们</NavLink></li>
                        <li><NavLink className={computedName} to="/manager/contact">联系我们</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="p-body">
                <Outlet></Outlet>
            </div>
        </div>
  )
}