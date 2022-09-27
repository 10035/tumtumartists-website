import React from 'react'
import Banner from '../images/banner.png'
import * as BannerStyle from '../styles/banner.module.css'

function banner() {
  return (
    <div>
        <img src={Banner} alt="test" className={BannerStyle.banner}></img>
    </div>
  )
}

export default banner