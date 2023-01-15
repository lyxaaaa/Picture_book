import React from 'react'
import './index.css'

export default function About() {
  return (
    <div className='about-container'>
      <div className="about-one">
        <img src="https://s2.loli.net/2023/01/09/zIirXVplnBqKAeJ.jpg" alt="" className='about-img'/>
      </div>
      <div className="about-two">
        <div className="two-title">项目简介</div>
        <div className="two-body">
          <div className="twobody-left">
            <p>  “读”具“绘”眼以“互联网+”模式为基础，通过筛选选题(Screen)、研发绘本(Develop)、构建课程(Curriculum)、信息交互(Interaction)四个流程，依托软件、小程序和网站，建立绘本和相关机构、家长和平台的二维交互平台。</p>
            <p>  本项目致力于帮助绘本从业者以科学的眼光产出 适合中国孩子的高质量原创绘本产品；帮助幼儿教育从业者、家庭选择更好的绘本、更好地利用绘本。项目组成员具备扎实的专业知识技能；由学前教育专业刘丽伟老师担任专业指导教师，河北百优众创空间有限公司总经理孙瑞斌担任创业指导教师，为项目发展提供二维指导。</p>
            <p>  本项目回应时代需要，实现绘本和相关机构、家长和平台的二维交互；研发绘本质量评估、开发流程和体系，既注重活动实际又注重结构建构。</p>
          </div>
          <div className="twobody-right">
            <img src="https://s2.loli.net/2023/01/09/7WpJbMt8LNfPORB.jpg" alt="" className='about-img'/>
          </div>
        </div>
      </div>
      <div className="about-three">
        <div className="threeabout-title">联系方式</div>
        <div className="three-body">
          <div className="about-pe">
            <div className="three-word">电话：</div>
            <div className="three-content">15614070367</div>
          </div>
          <div className="about-pe">
            <div className="three-word">邮箱：</div>
            <div className="three-content">2360241429@qq.com</div>
          </div>
        </div>
      </div>
      <div className="about-four">
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
