import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
const Login = () => {

    const [flag,setFlag]=useState(1);
    const navigate = useNavigate();
    const [name ,setName]=useState('');

    function toManager()
    {
        setFlag(0);
        setName('绘本馆');
    }
    function toParent()
    {
        setFlag(0);
        setName('家长');
    }
    function toMain()
    {
        if(name=='绘本馆')
            navigate('/manager/homepage');
        else
            navigate('/parent/homepage');
    }
    return(
        <>
        {flag? <div className="bkg">
        <div className="box">
            <div className="left circle"></div>
            <div className="right circle"></div>
            <div className="button">
                <div className="option left" onClick={toManager}>绘本馆</div>
                <div className="option right" onClick={toParent}>家长</div>
            </div>
        </div>
    </div>:
    <div className="Login">
        <div className="fixed">
            <div className="grey"></div>
            <div className="box2">
                <span className="title">{name}登录/注册</span>
                <input className="id input"  placeholder="请输入手机号/邮箱/账号名"></input>
                <input className="password input" placeholder="请输入密码"></input>
                <button className="login" onClick={toMain}>登录</button>
                <div className="L_text">
                    <span>立即注册</span>
                    <span>忘记密码</span>
                </div>
                <div className="principle">登录即代表您已同意<span className="blue">《服务协议和隐私政策》</span></div>
            </div>
        </div>
    </div>
    }
        </>
       

        
        

    )

}

export default Login;