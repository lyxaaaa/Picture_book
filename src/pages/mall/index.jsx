import React from 'react'
import './index.css'

export default function Mall() {
  return (
    <div className='mall-container'>
      <div className="mall-one">
        <div className="mallone-left">
          <div className="mallone-top">
            <div className="mall-onepic"><img src="https://s2.loli.net/2023/01/09/L6qa5e3l4rwXNWi.png" alt="" className='mall-img'/></div>
            <div className='mall-theword'>课程中心</div>
          </div>
          <div className="mallone-body">
            <div className="mallone-item">
              <div className="mall-onepic"><img src="https://s2.loli.net/2023/01/09/WJSErCbo8Z6eHdg.png" alt="" className='mall-img'/></div>
              <div className="mall-oneword">线上课程</div>
              <div className="mall-twopic"><img src="https://s2.loli.net/2023/01/09/42UkHfW75glFhJe.png" alt="" className='mall-img'/></div>
            </div>
            <div className="mallone-item">
              <div className="mall-onepic"><img src="https://s2.loli.net/2023/01/09/UzfZXowCvq6cQWI.png" alt="" className='mall-img'/></div>
              <div className="mall-oneword">线下课程</div>
              <div className="mall-twopic"><img src="https://s2.loli.net/2023/01/09/42UkHfW75glFhJe.png" alt="" className='mall-img'/></div>
            </div>
            <div className="mallone-item">
              <div className="mall-onepic"><img src="https://s2.loli.net/2023/01/09/exUZXn14s2CuybH.png" alt="" className='mall-img'/></div>
              <div className="mall-oneword">公开课</div>
              <div className="mall-twopic"><img src="https://s2.loli.net/2023/01/09/42UkHfW75glFhJe.png" alt="" className='mall-img'/></div>
            </div>
          </div>
        </div>
        <div className="mallone-right">
          <div className="mallone-headone">
            <input type="text" placeholder='请输入搜索内容' className='headone-search'/>
            <div className="mall-threepic"><img src="https://s2.loli.net/2023/01/09/U9bohycHvLmYBV6.png" alt="" className='mall-img'/></div>
          </div>
          <div className="mallone-detail">
            <div className="malldetail">
              <div className="malldetail-one">热门课程</div>
              <div className="malldetail-two">冲刺班</div>
            </div>
            <div className="malldetail">
              <div className="malldetail-one">课程内容</div>
              <div className="malldetail-two">13次</div>
            </div>
            <div className="malldetail">
              <div className="malldetail-one">购课</div>
              <div className="malldetail-two">88/节</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mall-two">
        <div className="malltwo-top">
          <div className="mall-huiben">
            <div className="mallhuiben-left">
              <img src="https://s2.loli.net/2023/01/09/4jaK9hzgqYZernN.png" alt="" className='mall-img'/>
            </div>
            <div className="mallhuiben-center">
              <div className="huibencenter-one">孩子绘本到底怎么选？</div>
              <div className="huibencenter-two"><img src="https://s2.loli.net/2023/01/09/C7h4bIu1ajRmDLF.png" alt="" className='mall-img'/></div>
              <div className="huibencenter-three">
                <p>学前教育专业副教授</p>
                <p>1729次</p>
                <p>绘本选择</p>
              </div>
            </div>
            <div className="mallhuiben-right">
              <div className="mallright-top">new</div>
              <div className="mallright-bottom"><img src="https://s2.loli.net/2023/01/09/NVc8h5713UGsWeu.png" alt="" className='mall-img'/></div>
            </div>
          </div>
          <div className="mall-huiben">
          <div className="mallhuiben-left">
              <img src="https://s2.loli.net/2023/01/09/g5ihrYnCwbtLkKV.png" alt="" className='mall-img'/>
            </div>
            <div className="mallhuiben-center">
              <div className="huibencenter-one">只会亲子共读？太浪费绘本了！</div>
              <div className="huibencenter-two"><img src="https://s2.loli.net/2023/01/09/s4lK9Ii7tcan3GT.png" alt="" className='mall-img'/></div>
              <div className="huibencenter-three">
                <p>10年示范园园长</p>
                <p>3568次</p>
                <p>绘本利用</p>
              </div>
            </div>
            <div className="mallhuiben-right">
              <div className="mallright-top">new</div>
              <div className="mallright-bottom"><img src="https://s2.loli.net/2023/01/09/NVc8h5713UGsWeu.png" alt="" className='mall-img'/></div>
            </div>
          </div>
        </div>
        <div className="malltwo-bottom">
          <div className="mall-huiben">
            <div className="mallhuiben-left">
              <img src="https://s2.loli.net/2023/01/09/1TfYAJcaEwF9z45.png" alt="" className='mall-img'/>
            </div>
            <div className="mallhuiben-center">
              <div className="huibencenter-one">巧用绘本解决孩子情绪问题</div>
              <div className="huibencenter-two"><img src="https://s2.loli.net/2023/01/09/C7h4bIu1ajRmDLF.png" alt="" className='mall-img'/></div>
              <div className="huibencenter-three">
                <p>10年一线幼师</p>
                <p>1372次</p>
                <p>绘本使用技巧</p>
              </div>
            </div>
            <div className="mallhuiben-right">
            <div className="mallright-top"> </div>
              <div className="mallright-bottom"><img src="https://s2.loli.net/2023/01/09/NVc8h5713UGsWeu.png" alt="" className='mall-img'/></div>
            </div>
          </div>
          <div className="malltwo-logo">
            <img src="https://s2.loli.net/2023/01/09/c3EgFJV82d7zWSq.png" alt="" className='mall-img'/>
          </div>
        </div>
      </div>
      <div className="mall-three">
        <div className="four-left">读具绘眼</div>
        <div className="four-right">
          <div className="four-box">
            <div className='four-size'><img src="https://s2.loli.net/2023/01/13/hWO4RAeLX7m6U3w.jpg" alt="" className='mall-img'/></div>
            <div className="four-name">微信公众号</div>
          </div>
          <div className="four-box">
            <div className='four-size'><img src="https://s2.loli.net/2023/01/13/J86egX2vFSk4Atz.png" alt="" className='mall-img'/></div>
            <div className="four-name">抖音号</div>
          </div>
        </div>
      </div>
    </div>
  )
}
