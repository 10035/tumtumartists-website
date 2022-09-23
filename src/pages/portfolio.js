import React from 'react'
import Layout from "../components/layout"
import ArtistPic from "../images/ziza.png"

function portfolio() {
  return (
    <Layout>
        <div>
            <a href="https://zizamusic.com/">
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vI-u79e8kiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <img src={ArtistPic} alt="ZiZa" style={{ maxWidth: '100%' }}></img>
            </a>
            <h3>ZiZa</h3>
        </div>
    </Layout> 
 )
}

export default portfolio