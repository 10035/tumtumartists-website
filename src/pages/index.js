// import React, { Component } from 'react'
import * as React from 'react'
import Layout from "../components/layout"
// import Banner from "../components/banner"
import BannerPic from "../images/banner.png"

function index() {
  return (
    // <Layout>  TODO: Fix Layout Component so other components render with it
     <main>
      {/* <Banner /> */}
      <div>index</div>
      <p>Test</p>
      <img src={BannerPic} alt="Sky" style={{ maxWidth: '100%'}}/>
     </main>
    // </Layout>
  )
}

export default index