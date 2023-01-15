import React from 'react'
import './index.css'

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className="contact-one">
        <img src="https://s2.loli.net/2023/01/09/LQn9hoIWONVEFw1.png" alt="" className='contact-img'/>
      </div>
      <div className="contact-two">
        <div className="contacttwo-box">
          <div className="ctwo-title">
            <div className="ctwo-zw">联系我们</div>
            <div className="ctwo-yw">Contact us</div>
          </div>
          <div className="ctwo-divide"></div>
          <div className="ctwo-content">
            <div className="ctwo-item">
              <div className="ctwo-itemsize">
              <img src="https://s2.loli.net/2023/01/09/mzgWCBUPsYSLjn9.png" alt="" className='contact-img'/>
              </div>
              <div className='ctwo-itemtitle'>电话</div>
              <div className="ctwo-itemnum">15614070367</div>
            </div>
            <div className="ctwo-item">
              <div className="ctwo-itemsize">
              <img src="https://s2.loli.net/2023/01/09/mvFYEClh6TDUQcd.png" alt="" className='contact-img'/>
              </div>
              <div className='ctwo-itemtitle'>邮件</div>
              <div className="ctwo-itemnum">2360241429@qq.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-three">
        <div className="three-left">
          <div className="three-title">读具绘眼</div>
          <div className="tl-body">
            <ul className="tlbody-left">
              <li className='contact-li'>首页</li>
              <li className='contact-li'>商城</li>
              <li className='contact-li'>新闻资讯</li>
              <li className='contact-li'>关于我们</li>
            </ul>
            <ul className="tlbody-right">
              <li className='contact-li'>入驻平台</li>
              <li className='contact-li'>立即登录</li>
            </ul>
          </div>
        </div>
        <div className="three-center">
          <div className="three-title">服务与支持</div>
          <div className="tt-body">
            <div className="tt-word">售后服务</div>
            <div className="tt-word">工作时间: 9:00-18:00 (工作日)</div>
          </div>
        </div>
        <div className="three-right">
          <div className="ct-picture"><img src="https://s2.loli.net/2023/01/13/hWO4RAeLX7m6U3w.jpg" alt="" className='contact-img'/></div>
          <div className="ct-word">扫描二维码关注我们</div>
        </div>
      </div>
    </div>
  )
}
