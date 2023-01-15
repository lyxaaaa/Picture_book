import React ,{ useEffect,useState,useRef }from 'react'
import './index.css'

export default function Community() {
  const clsRef = useRef(['one','two','three'])
  const dotsRef = useRef(['change','',''])

  const [dots,setDots]  = useState([''])
  const [cls,setCls]= useState([''])

  useEffect(()=> {
    setCls([...clsRef.current])
    setDots([...dotsRef.current])
    const time = setInterval(()=>{
      const clsTmp = [...clsRef.current]
      const dotsTmp = [...dotsRef.current]
      let tmp = String(clsTmp.pop())
      clsTmp.unshift(tmp)
      let dotTmp = String(dotsTmp.pop())
      dotsTmp.unshift(dotTmp)
      setCls(clsTmp)
      setDots(dotsTmp)
      clsRef.current = clsTmp
      dotsRef.current = dotsTmp
    },3000)
    return () => clearInterval(time)
  },[])

  return (
    <div className='com-container'>
      <div className="comcontain-top">
        <div className="com-left">
          <div className="comleft-item">
            <div className="com-itemone">
              <img src="https://s2.loli.net/2023/01/11/Sakyp13GPw2OqEZ.png" alt="" className='com-img'/>
            </div>
            <div className="com-itemtwo">这是一个帖子标题</div>
            <div className="com-itemthree">
              <div className="itemthree-user">
                <div className="comuser-size">
                  <img src="https://s2.loli.net/2023/01/11/8mHhL7kzbs6q5aJ.png" alt="" className='com-img'/>
                </div>
                <div className="comuser-name">Color</div>
              </div>
              <div className="itemthree-num">2.9万浏览</div>
            </div>
          </div>
          <div className="comleft-item">
            <div className="com-itemone">
              <img src="https://s2.loli.net/2023/01/11/cI9N6pkgdxLWTO2.png" alt="" className='com-img'/>
            </div>
            <div className="com-itemtwo">这是一个帖子标题</div>
            <div className="com-itemthree">
              <div className="itemthree-user">
                <div className="comuser-size">
                  <img src="https://s2.loli.net/2023/01/11/8mHhL7kzbs6q5aJ.png" alt="" className='com-img'/>
                </div>
                <div className="comuser-name">Color</div>
              </div>
              <div className="itemthree-num">2.9万浏览</div>
            </div>
          </div>
          <div className="comleft-item">
            <div className="com-itemone">
              <img src="https://s2.loli.net/2023/01/11/ZA3IqRzgOloB7Tk.png" alt="" className='com-img'/>
            </div>
            <div className="com-itemtwo">这是一个帖子标题</div>
            <div className="com-itemthree">
              <div className="itemthree-user">
                <div className="comuser-size">
                  <img src="https://s2.loli.net/2023/01/11/8mHhL7kzbs6q5aJ.png" alt="" className='com-img'/>
                </div>
                <div className="comuser-name">Color</div>
              </div>
              <div className="itemthree-num">2.9万浏览</div>
            </div>
          </div>
          <div className="comleft-item">
            <div className="com-itemone">
              <img src="https://s2.loli.net/2023/01/11/b7TL8FdBOc6KWUp.png" alt="" className='com-img'/>
            </div>
            <div className="com-itemtwo">这是一个帖子标题</div>
            <div className="com-itemthree">
              <div className="itemthree-user">
                <div className="comuser-size">
                  <img src="https://s2.loli.net/2023/01/11/8mHhL7kzbs6q5aJ.png" alt="" className='com-img'/>
                </div>
                <div className="comuser-name">Color</div>
              </div>
              <div className="itemthree-num">2.9万浏览</div>
            </div>
          </div>
          <div className="comleft-item">
            <div className="com-itemone">
              <img src="https://s2.loli.net/2023/01/11/m7uRvAb1HYyxkOL.png" alt="" className='com-img'/>
            </div>
            <div className="com-itemtwo">这是一个帖子标题</div>
            <div className="com-itemthree">
              <div className="itemthree-user">
                <div className="comuser-size">
                  <img src="https://s2.loli.net/2023/01/11/8mHhL7kzbs6q5aJ.png" alt="" className='com-img'/>
                </div>
                <div className="comuser-name">Color</div>
              </div>
              <div className="itemthree-num">2.9万浏览</div>
            </div>
          </div>
          <div className="comleft-item">
            <div className="com-itemone">
              <img src="https://s2.loli.net/2023/01/11/b7TL8FdBOc6KWUp.png" alt="" className='com-img'/>
            </div>
            <div className="com-itemtwo">这是一个帖子标题</div>
            <div className="com-itemthree">
              <div className="itemthree-user">
                <div className="comuser-size">
                  <img src="https://s2.loli.net/2023/01/11/8mHhL7kzbs6q5aJ.png" alt="" className='com-img'/>
                </div>
                <div className="comuser-name">Color</div>
              </div>
              <div className="itemthree-num">2.9万浏览</div>
            </div>
          </div>
          <div className="comleft-item">
            <div className="com-itemone">
              <img src="https://s2.loli.net/2023/01/11/v31PHGiWmTI64pQ.png" alt="" className='com-img'/>
            </div>
            <div className="com-itemtwo">这是一个帖子标题</div>
            <div className="com-itemthree">
              <div className="itemthree-user">
                <div className="comuser-size">
                  <img src="https://s2.loli.net/2023/01/11/8mHhL7kzbs6q5aJ.png" alt="" className='com-img'/>
                </div>
                <div className="comuser-name">Color</div>
              </div>
              <div className="itemthree-num">2.9万浏览</div>
            </div>
          </div>
          <div className="comleft-item">
            <div className="com-itemone">
              <img src="https://s2.loli.net/2023/01/11/lZCYiIHGDsFcMAJ.png" alt="" className='com-img'/>
            </div>
            <div className="com-itemtwo">这是一个帖子标题</div>
            <div className="com-itemthree">
              <div className="itemthree-user">
                <div className="comuser-size">
                  <img src="https://s2.loli.net/2023/01/11/8mHhL7kzbs6q5aJ.png" alt="" className='com-img'/>
                </div>
                <div className="comuser-name">Color</div>
              </div>
              <div className="itemthree-num">2.9万浏览</div>
            </div>
          </div>
          <div className="comleft-item">
            <div className="com-itemone">
              <img src="https://s2.loli.net/2023/01/11/Sakyp13GPw2OqEZ.png" alt="" className='com-img'/>
            </div>
            <div className="com-itemtwo">这是一个帖子标题</div>
            <div className="com-itemthree">
              <div className="itemthree-user">
                <div className="comuser-size">
                  <img src="https://s2.loli.net/2023/01/11/8mHhL7kzbs6q5aJ.png" alt="" className='com-img'/>
                </div>
                <div className="comuser-name">Color</div>
              </div>
              <div className="itemthree-num">2.9万浏览</div>
            </div>
          </div>
        </div>
        <div className="com-right">
          <div className="comrig-one">
            <div className="comrigone-box">
              <ul className='comrigbox-imgs'>
                <li className={cls[0]}><img src="https://s2.loli.net/2023/01/11/JhF9rZKygIBScje.png" alt="" className='com-img'/></li>
                <li className={cls[1]}><img src="https://s2.loli.net/2023/01/11/DrSsRoebOcPn7hf.png" alt="" className='com-img'/></li>
                <li className={cls[2]}><img src="https://s2.loli.net/2023/01/11/9Mng8OdNtQfE4SG.jpg" alt="" className='com-img'/></li>
              </ul>
              <ul className='comrigbox-list'>
                <li className={dots[0]}></li>
                <li className={dots[1]}></li>
                <li className={dots[2]}></li>
              </ul>
            </div>
          </div>
          <div className="comrig-two">
            <div className="comrig-twotitle">近期热门帖</div>
            <div className="comrig-twoelse">
              <div className="comrigtwo-item">
                <div className="comrigtwo-itemsize">
                  <img src="https://s2.loli.net/2023/01/11/EzkB6lVWL5So4Ob.png" alt="" className='com-img'/>
                </div>
                <div className="comrigtwo-itemtitle">文章标题</div>
              </div>
              <div className="comrigtwo-item">
                <div className="comrigtwo-itemsize">
                  <img src="https://s2.loli.net/2023/01/11/EzkB6lVWL5So4Ob.png" alt="" className='com-img'/>
                </div>
                <div className="comrigtwo-itemtitle">文章标题</div>
              </div>
              <div className="comrigtwo-item">
                <div className="comrigtwo-itemsize">
                  <img src="https://s2.loli.net/2023/01/11/EzkB6lVWL5So4Ob.png" alt="" className='com-img'/>
                </div>
                <div className="comrigtwo-itemtitle">文章标题</div>
              </div>
              <div className="comrigtwo-item">
                <div className="comrigtwo-itemsize">
                  <img src="https://s2.loli.net/2023/01/11/EzkB6lVWL5So4Ob.png" alt="" className='com-img'/>
                </div>
                <div className="comrigtwo-itemtitle">文章标题</div>
              </div>
              <div className="comrigtwo-item">
                <div className="comrigtwo-itemsize">
                  <img src="https://s2.loli.net/2023/01/11/EzkB6lVWL5So4Ob.png" alt="" className='com-img'/>
                </div>
                <div className="comrigtwo-itemtitle">文章标题</div>
              </div>
              <div className="comrigtwo-item">
                <div className="comrigtwo-itemsize">
                  <img src="https://s2.loli.net/2023/01/11/EzkB6lVWL5So4Ob.png" alt="" className='com-img'/>
                </div>
                <div className="comrigtwo-itemtitle">文章标题</div>
              </div>
            </div>
          </div>
          <div className="comrig-three">
            <div className="comrigthree-title">你感兴趣</div>
          </div>
        </div>
      </div>
      <div className="comcontain-bot">
        <div className="four-left">读具绘眼</div>
          <div className="four-right">
            <div className="four-box">
              <div className='four-size'><img src="https://s2.loli.net/2023/01/13/hWO4RAeLX7m6U3w.jpg" alt="" className='about-img'/></div>
              <div className="four-name">微信公众号</div>
            </div>
            <div className="four-box">
              <div className='four-size'><img src="https://s2.loli.net/2023/01/13/J86egX2vFSk4Atz.png" alt="" className='about-img'/></div>
              <div className="four-name">抖音号</div>
            </div>
          </div>
      </div>
    </div>
  )
}
