import React from 'react'
import './index.css'

export default function R_item(props) {
    const {name,writer,time,img}=props
    console.log(name,writer)
  return (
    <>
        <div className='recommend'>
            <div className='r_cover'>
              <img  src={img}></img>
            </div>
            <div className='r_intro'>
              <div className='r_title'>{name}</div>
              <div>
                <div className='r_writer'>{writer}</div>
                <div className='r_time'>{time}</div>
              </div>
            </div>        
        </div>
    </>
  )
}