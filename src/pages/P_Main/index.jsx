import React from 'react'
import { useState } from 'react'
import P_layout from '../../components/P_layout'
import './index.css'

export default function P_Main() {

    
  return (
    <div className='P_main'>
        <div className='banner1'>
            <div className='P_left'></div>
            <div className='text'>
                <div className='t1'>生活在宇宙</div>
                <div className='t2'>绘本阅读打卡营</div>
            </div>
        </div>
        <div className='banner2'>
            <div className='title'>阅读点亮童年...</div>
            <div className='intro'>
                <div className='about'>
                    <h1>关于我们</h1>
                    <h2>ABOUT US</h2>
                    <p>“读”具“绘”眼以“互联网+”模式为基础，通过筛选选题(Screen)、研发绘本
    (Develop)、构建课程(Curriculum)、信息交互(Interaction)四个流程，依托软件、小程序和
    网站，建立绘本和相关机构、家长和平台的二维交互平台。</p>
                    <div className='btn'>
                        <button className='button1'>了解更多</button>
                        <button className='button2'>课程咨询</button>
                    </div>
                </div>
                <div className='logo_text'>
                    <img src='https://s2.loli.net/2023/01/09/VHb5cxOWPiqNGZ3.png'></img>
                </div>
            </div>
        </div>
        <div className='banner3'>
            <div className='h1'>绘本馆</div>
            <div className='E_title'>PUBLIC BOOK GALLERY</div>
            <div className='book '>
                <img src='https://s2.loli.net/2023/01/09/qUy2hLKjFEvBmTH.png'></img>
                <div className='learn_more'>
                    <div className='bname'>安的种子</div>
                    <div className='desc'>种子怎么样才会长大呢？</div>
                    <button>了解更多</button>
                </div>
            </div>
            <div className='book'>
                <div className='learn_more' >
                    <div className='bname' style={{textAlign:'right'}}>春节的故事</div>
                    <div className='desc' style={{textAlign:'right'}}>一起来了解春天的故事吧！</div>
                    <button style={{marginLeft:400}}>了解更多</button>
                </div>
                <img src='https://s2.loli.net/2023/01/09/rxBTvOWEs4jXu6b.png'></img>
            </div>
            <div className='book'> 
                <img src='https://s2.loli.net/2023/01/09/BRuPcY3Qn9eAF8v.png'></img>
                <div className='learn_more'>
                    <div className='bname'>洋槐树</div>
                    <div className='desc'>将现代个性元素融入到柔美的北欧风格中，让其不仅具备很好的美学质感，使用的时候更具有贴心的实用性。</div>
                    <button>了解更多</button>
                </div>
            </div>

        </div>
    </div>
  )
}