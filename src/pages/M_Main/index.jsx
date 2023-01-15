import React from 'react'
import './index.css'

export default function M_Main() {

    
  return (
    <>
   <div className='M_Main'>
      <div className='infor'>
        <div className='avatar'>
          <img src='https://s2.loli.net/2023/01/09/a4w9qIP56rfuSxg.jpg'></img>
        </div>
        <div className='msg'>
          <div className='txt inline'><p>绘本馆名：</p>读具绘眼</div>
          <div className='txt inline'><p>手机：</p>12345678</div>
          <div className='txt inline'><p>邮箱：</p>12345678@qq.com</div>
          <div className='txt inline'><p>微信：</p>12345678</div>
          <button className='edit'>编辑</button>
        </div>
      </div>
      <div className='books'>
        <div className='divide'>
            <div className='fenlei active'>全部绘本</div>
            <div className='fenlei'>审核中（3）</div>
            <div className='fenlei'>已上架（9）</div>
           {/*  <div className='filter'>
              <div className='name'>
                <img src='https://s2.loli.net/2023/01/10/jENnU1bv63kSIoY.png'></img>
                <span>按时间</span>
              </div>
              <div className='time'>
                <img src='https://s2.loli.net/2023/01/10/7bzsqKLx6caQNgB.png'></img>
                
              </div>
            </div> */}
        </div>
        <div className='M_list'>
          <div className='M_item'>
            <img className='cover' src='https://s2.loli.net/2023/01/09/szcpuTjYeXfk7ib.jpg'></img>
            <div className='brief-intro'>
              <span className='title'>阅读点亮童年</span>
              <br/>
              <div className='between inline'>
                <div className='chapter'>共7节</div>
                <button>审核中</button>
              </div>
              </div>
          </div>
          <div className='M_item'>
            <img className='cover'  src='https://s2.loli.net/2023/01/09/szcpuTjYeXfk7ib.jpg'></img>
            <div className='brief-intro'>
              <span className='title'>阅读点亮童年</span>
              <br/>
              <div className='between inline'>
                <div className='chapter'>共7节</div>
                <button>审核中</button>
              </div>
              </div>
          </div>
          <div className='M_item'>
            <img className='cover'  src='https://s2.loli.net/2023/01/09/szcpuTjYeXfk7ib.jpg'></img>
            <div className='brief-intro'>
              <span className='title'>阅读点亮童年</span>
              <br/>
              <div className='between inline'>
                <div className='chapter'>共7节</div>
                <button>审核中</button>
              </div>
              </div>
          </div>
          <div className='M_item'>
            <img className='cover' src='https://s2.loli.net/2023/01/09/szcpuTjYeXfk7ib.jpg'></img>
            <div className='brief-intro'>
              <span className='title'>阅读点亮童年</span>
              <br/>
              <div className='between inline'>
                <div className='chapter'>共7节</div>
                <button>审核中</button>
              </div>
              </div>
          </div>
          <div className='M_item'>
            <img className='cover' src='https://s2.loli.net/2023/01/09/szcpuTjYeXfk7ib.jpg'></img>
            <div className='brief-intro'>
              <span className='title'>阅读点亮童年</span>
              <br/>
              <div className='between inline'>
                <div className='chapter'>共7节</div>
                <button className='pass'>已上架</button>
              </div>
              </div>
          </div>
          <div className='M_item'>
            <img className='cover' src='https://s2.loli.net/2023/01/09/szcpuTjYeXfk7ib.jpg'></img>
            <div className='brief-intro'>
              <span className='title'>阅读点亮童年</span>
              <br/>
              <div className='between inline'>
                <div className='chapter'>共7节</div>
                <button className='pass'>已上架</button>
              </div>
              </div>
          </div>
          <div className='M_item'>
            <img className='cover' src='https://s2.loli.net/2023/01/09/szcpuTjYeXfk7ib.jpg'></img>
            <div className='brief-intro'>
              <span className='title'>阅读点亮童年</span>
              <br/>
              <div className='between inline'>
                <div className='chapter'>共7节</div>
                <button className='pass'>已上架</button>
              </div>
              </div>
          </div>
          <div className='M_item'>
            <img className='cover' src='https://s2.loli.net/2023/01/09/szcpuTjYeXfk7ib.jpg'></img>
            <div className='brief-intro'>
              <span className='title'>阅读点亮童年</span>
              <br/>
              <div className='between inline'>
                <div className='chapter'>共7节</div>
                <button className='pass'>已上架</button>
              </div>
              </div>
          </div>

          <div className='M_item add'>
            <div>+</div>
            <div className='explain'>添加</div>
          </div>
        </div>

      </div>
   </div>
   </>
  )
}