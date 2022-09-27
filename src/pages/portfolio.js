import React from 'react'
import Layout from "../components/layout"
import ArtistPic from "../images/bruno.png"
import * as Image from "../styles/portfolio.module.css"

function portfolio() {
  return (
    <Layout>
        <div className={Image.img}>
            <a href="https://www.brunomars.com/" target="_blank" >
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vI-u79e8kiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <img src={ArtistPic} alt="Bruno Mars" style={{ maxWidth: '100%' }}></img>
            </a>
            <h3>Bruno Mars</h3>
        </div>
    </Layout> 
 )
}

export default portfolio