// import React, { Component } from 'react'
import * as React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
// import BannerPic from "../images/banner.png"

function index() {
  return (
     <main>
      <Layout>
        <Banner />
        <div>Body</div>
      </Layout>
     </main>
  )
}

export default index