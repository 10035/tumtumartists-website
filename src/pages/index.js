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
        {/* <div className={Styles.body}>Body</div> */} 
        {/* TODO Fix Width to match page width */}
          <div className={Styles.slogan}>
            <h2> - When you Tum Tum, there is fun fun - </h2>
          </div>
          <section>
            <iframe width="33.3%" height="315" src="https://www.youtube.com/embed/BNro3uBlqVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="33.3%" height="315" src="https://www.youtube.com/embed/4I25nV9hXGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="33.3%" height="315" src="https://www.youtube.com/embed/nN_0YlcN-i8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </section>
          <section>
            <iframe width="33.3%" height="315" src="https://www.youtube.com/embed/5g2hT4GmAGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="33.3%" height="315" src="https://www.youtube.com/embed/-PJF2k0kURI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="33.3%" height="315" src="https://www.youtube.com/embed/YaEG2aWJnZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </section>
      </Layout>
     </main>
  )
}

export default index