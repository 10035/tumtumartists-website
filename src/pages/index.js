// import React, { Component } from 'react'
import * as React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
// import BannerPic from "../images/banner.png"
import * as Styles from '../styles/main.module.css'

function index() {
  return (
     <main>
      <Layout>
        <Banner />
        <div className={Styles.body}>Body</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vI-u79e8kiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kiKk3W8OQXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Layout>
     </main>
  )
}

export default index