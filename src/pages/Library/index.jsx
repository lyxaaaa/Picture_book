import React, { useState } from 'react'
import { Pagination } from 'antd';
import R_item from '../../Components/R_item';
import './index.css'


export default function Library() {

    const [age,setAge]=useState(1)
    const [ifpay,setIfpay]=useState('p1')
    const tags=[
        {   
            content:'全部',
            key:1
        },
        {   
            content:'0-3岁', 
            key:2
        },
        {   
            content:'3-5岁',
            key:3
        },
        {   
            content:'5-7岁',
            key:4
        },
        {   
            content:'8岁以上',
            key:5
        } ]
    const pay_tags=[
        {
            content:'全部',
            key:'p1',
        },
        {
            content:'免费',
            key:'p2',
        },
        {
            content:'付费',
            key:'p3'
        },
    ]
    const r_books=[
        {
            name:'安的种子',
            writer:'路人甲',
            time:'2021.03.08',
            img:'https://s2.loli.net/2023/01/09/qUy2hLKjFEvBmTH.png'
        },
        {
            name:'一条狗的使命',
            writer:'路人甲',
            time:'2021.03.08',
            img:'https://s2.loli.net/2023/01/11/XpWcUfPV4YMbJxy.png'
        }, {
            name:'洋槐树',
            writer:'路人甲',
            time:'2021.03.08',
            img:'https://s2.loli.net/2023/01/09/BRuPcY3Qn9eAF8v.png'
        }, {
            name:'笑笑的微笑',
            writer:'路人甲',
            time:'2021.03.08',
            img:'https://s2.loli.net/2023/01/11/2u3ePxQ8jBDcI7X.png'
        }, {
            name:'短发女孩',
            writer:'路人甲',
            time:'2021.03.08',
            img:'https://s2.loli.net/2023/01/11/MRTLztErbycnNiD.png'
        }
    ]
    const Chooseage=(key)=>
    {
        setAge(key);
    }

    const Choosepay=(key)=>
    {
        setIfpay(key);
    }

  return (
    <>
    <div className='Bookshop'>
        <div className='B_left'>
            <div className='B_search'>
                <input className='search' placeholder='搜索课程、绘本、学习资料'/>
            </div>    
            <div className='tag_filter'>
                <ul className='top'>
                    {tags.map((tag)=>{
                        return(
                            <li className={tag.key==age?'active':''} onClick={()=>Chooseage(tag.key)} key={tag.key} >{tag.content}</li>
                        )
                    })}       
                    </ul>
                <div className='tags'>
                    <div className='t'>绘本类型</div>
                    <div className='tag'>
                        <div>国风</div>
                        <div>童话</div>
                        <div>传统经典</div>
                        <div>科普</div>
                        <div>互动游戏</div>
                        <div>兴趣</div>
                        <div>教育</div>
                        <div>外文</div>
                        <div>动态</div>
                    </div>
                </div>
            </div>
            <div className='pay_filter'>
                <ul className='p_top'>
                        {pay_tags.map((tag)=>{
                            return(
                                <li className={tag.key==ifpay?'active':''} onClick={()=>Choosepay(tag.key)} key={tag.key} >{tag.content}</li>
                            )
                        })}       
                </ul>
            </div>
            <div className='L_list'>
                <div className=' lesson'>
                    <img className='cover' src='https://s2.loli.net/2023/01/11/XpWcUfPV4YMbJxy.png'></img>
                    <div className='brief-intro'>
                        <span className='title'>一条狗的使命</span>
                        <br/>
                        <div className='between inline'>
                            <div className='chapter'>共7节|已完结</div>
                            <span className='free'>免费</span>
                        </div>
                        <div className='between inline'>
                            <div className='chapter'>腾讯课堂</div>
                            <div className='seen'>
                                <div  className='eye'> <img src='https://s2.loli.net/2023/01/11/sLcZljF7bT526pe.png'></img>
                            </div> 651人
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lesson'>
                    <img className='cover' src='https://s2.loli.net/2023/01/11/XpWcUfPV4YMbJxy.png'></img>
                    <div className='brief-intro'>
                        <span className='title'>一条狗的使命</span>
                        <br/>
                        <div className='between inline'>
                            <div className='chapter'>共7节|已完结</div>
                            <span className='free'>免费</span>
                        </div>
                        <div className='between inline'>
                            <div className='chapter'>腾讯课堂</div>
                            <div className='seen'>
                                <div  className='eye'> <img src='https://s2.loli.net/2023/01/11/sLcZljF7bT526pe.png'></img>
                            </div> 651人
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lesson'>
                    <img className='cover' src='https://s2.loli.net/2023/01/11/XpWcUfPV4YMbJxy.png'></img>
                    <div className='brief-intro'>
                        <span className='title'>一条狗的使命</span>
                        <br/>
                        <div className='between inline'>
                            <div className='chapter'>共7节|已完结</div>
                            <span className='free'>免费</span>
                        </div>
                        <div className='between inline'>
                            <div className='chapter'>腾讯课堂</div>
                            <div className='seen'>
                                <div  className='eye'> <img src='https://s2.loli.net/2023/01/11/sLcZljF7bT526pe.png'></img>
                            </div> 651人
                            </div>
                        </div>
                   </div>
                </div>
               <div className='lesson'>
                    <img className='cover' src='https://s2.loli.net/2023/01/11/XpWcUfPV4YMbJxy.png'></img>
                    <div className='brief-intro'>
                        <span className='title'>一条狗的使命</span>
                        <br/>
                        <div className='between inline'>
                            <div className='chapter'>共7节|已完结</div>
                            <span className='free'>免费</span>
                        </div>
                        <div className='between inline'>
                            <div className='chapter'>腾讯课堂</div>
                            <div className='seen'>
                                <div  className='eye'> <img src='https://s2.loli.net/2023/01/11/sLcZljF7bT526pe.png'></img>
                            </div> 651人
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lesson'>
                    <img className='cover' src='https://s2.loli.net/2023/01/11/XpWcUfPV4YMbJxy.png'></img>
                    <div className='brief-intro'>
                        <span className='title'>一条狗的使命</span>
                        <br/>
                        <div className='between inline'>
                            <div className='chapter'>共7节|已完结</div>
                            <span className='free'>免费</span>
                        </div>
                        <div className='between inline'>
                            <div className='chapter'>腾讯课堂</div>
                            <div className='seen'>
                                <div  className='eye'> <img src='https://s2.loli.net/2023/01/11/sLcZljF7bT526pe.png'></img>
                            </div> 651人
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lesson'>
                    <img className='cover' src='https://s2.loli.net/2023/01/11/XpWcUfPV4YMbJxy.png'></img>
                    <div className='brief-intro'>
                        <span className='title'>一条狗的使命</span>
                        <br/>
                        <div className='between inline'>
                            <div className='chapter'>共7节|已完结</div>
                            <span className='free'>免费</span>
                        </div>
                        <div className='between inline'>
                            <div className='chapter'>腾讯课堂</div>
                            <div className='seen'>
                                <div  className='eye'> <img src='https://s2.loli.net/2023/01/11/sLcZljF7bT526pe.png'></img>
                            </div> 651人
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page'><Pagination defaultCurrent={4} total={10} /></div>
            
        </div>
        <div className='B_right'>
            <div className='r_tt'>&nbsp; &nbsp;热门推荐</div>
            {r_books.map((r_book)=>{
                return(
                <R_item name={r_book.name} writer={r_book.writer} time={r_book.time} img={r_book.img} />
            )})
}
        </div>
            
       

    </div>
    <div className="contact-three">
        <div className="three-left">
          <div className="three-title">合作链接</div>
          <div className="tl-body">
            <ul className="tlbody-left">
              <li className='contact-li'>百度百科</li>
              <li className='contact-li'>百度大学堂</li>
              <li className='contact-li'>腾讯课堂</li>
              <li className='contact-li'>阿里云大学</li>
            </ul>
            <ul className="tlbody-right">
              <li className='contact-li'>起点学院</li>
              <li className='contact-li'>GEETEST</li>
            </ul>
          </div>
        </div>
        <div className="three-center">
          <div className="three-title">关于我们</div>
          <div className="tt-body">
            <div className="tt-word">加入我们</div>
          </div>
        </div>
        <div className='three-right'>
            <div className="code">
            <div className="join-picture"><img src="https://s2.loli.net/2023/01/13/hWO4RAeLX7m6U3w.jpg" alt="" className='contact-img'/></div>
            <div className="ct-word">公众号</div>
            </div>
            <div className="code">
            <div className="join-picture"><img src="https://s2.loli.net/2023/01/13/J86egX2vFSk4Atz.png" alt="" className='contact-img'/></div>
            <div className="ct-word">抖音号</div>
            </div>
        </div>
      </div>
   </>
  )
}