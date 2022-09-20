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
      </Layout>
     </main>
  )
}

export default index